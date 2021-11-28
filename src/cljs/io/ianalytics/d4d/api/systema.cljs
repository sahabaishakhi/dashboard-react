(ns io.ianalytics.d4d.api.systema
  "Provides functions to fetch and parse the Systema
  configuration."
  (:require [io.ianalytics.d4d.api.core :refer [API_URL]]
            [io.ianalytics.d4d.api.units :refer [display-unit-map dimension]]
            [clojure.string :as string]
            [clojure.set :as set])
  (:require-macros
   [io.ianalytics.d4d.api.macros :as macros]))

;;; Memo for systema state. When :URL is non-empty, :json holds the corresponding backend result, :graph its cljs representation.
(defonce state
  (atom {:url ""
         :json nil
         :graph nil}))

(def C (atom nil))

(defn uid->node [uid]
  (-> @state :graph :nodes (get uid)))

;;; ----------------------------------------------------------------------------
;;; from @mar / systema-api.clj

(defn unmarshal-systema-nodes
  "Unmarshal systema nodes into a hashmap {uid (atom node), ...} where all nodes hold
  the atomic references to their neighbors (instead of uids)."
  [nodes]
  (let [a-nodes (into {} (for [node nodes] [(:uid node) (atom node)]))]
    (doseq [[_ a-node] a-nodes]
      (swap! a-node
             #(reduce (fn [node field]
                        (assoc node field
                               (vec (for [uid (field node)]
                                      (get a-nodes uid)))))
                      %
                      [:in :has :from :to])))
    a-nodes))

(defn systema-graph
  "Make convenient systema graph-map from atomic-node-map."
  [nodes]
  (let [root     (get nodes "0")
        concepts (into {} (for [node (:has @root)] [(-> @node :names first keyword) node]))]
    {:nodes nodes :concepts concepts :root root}))

(defmulti  show "Print uid_long of nodes." type)
(defmethod show nil              [node]  (println node))
(defmethod show Atom             [node]  (println (@node :uid_long)))
(defmethod show (type [])        [nodes] (doseq [node nodes] (show node)))

;;; operators for testing node relations -- TODO does anyone use these? @cleanup
(defn in?   [x y] (some #(= % y) (:in   @x)))
(defn has?  [x y] (in? y x))
(defn from? [x y] (some #(= % y) (:from @x)))
(defn to?   [x y] (some #(= % y) (:to   @x)))


(defn elem?                             ; -> "in"
  "Is the 'element of set' relation (transitive in-has relation). (elem? a a) is false."
  ([y]   #(elem? % y))
  ([x y] (or (in? x y) (some #(elem? % y) (@x :in)))))

(defn not-elem? [x y] (not (elem? x y)))

(defn concept?
  "Checks if a node is a direct element of root."
  [node]
  (some #(= (@% :uid) "0") (@node :in)))

(defn instance??
  "Checks if a node is an instance."
  [node]
  (and node (not= (@node :uid) "0") (not (concept? node))))

(defn is-a?
  "Checks if a node is an instance of a certain concept."
  ([concept] #(is-a? % concept))
  ([node concept]
   (and (instance?? node)
        (some #(and (concept? %) (or (= % concept) (elem? % concept)))
              (@node :in)))))

(defn is-not-a? [node concept] (not (is-a? node concept)))

(defmulti  pfn type)
(defmethod pfn (type #())  [predicate] predicate)
(defmethod pfn Atom        [concept]   (is-a? concept))
(defmethod pfn (type "")   [name]      (fn [node] (some #(= name %) (:names @node))))
(defmethod pfn (type #"")  [regex]     (fn [node] (some #(re-matches regex %) (:names @node))))

(defn && [& ps] (fn [node] (every? #((pfn %) node) ps)))
(defn || [& ps] (fn [node] (some   #((pfn %) node) ps)))
(defn $ [arg] (and arg (deref arg)))

(defn get-
  [nodes relation]
  (if (instance? Atom nodes)
    (@nodes relation)
    (distinct (flatten (for [node nodes] (@node relation))))))

(defn- r-filter-
  "Performs recursive filtering (breadth-first search) for `relation =
  <:in|:has|:from|:to>`.
  If `break-early = true`, the search stops at the first findings. If
  `nested = true`,
  the search steps also into branches of nodes that satisfy the
  predicate (it goes everywhere)."
  ([predicate nodes relation break-early nested]
   (let [nodes (if (instance? Atom nodes) (get- nodes relation) nodes)]
     (r-filter- predicate nodes relation break-early nested #{})))

  ([predicate nodes relation break-early nested visited]
   (let [grouped-nodes  (group-by (comp boolean predicate) nodes)
         results        (get grouped-nodes true)
         new-nodes      (filter (complement visited)
                                (get- (if nested nodes (get
                                                        grouped-nodes false))
                                      relation))]
     (if (or (empty? new-nodes) (and break-early (not-empty results)))
       results
       (into results
             (r-filter- predicate new-nodes relation break-early nested
                        (into visited nodes)))))))



(macros/generate-selection-functions in)
(macros/generate-selection-functions has)
(macros/generate-selection-functions from)
(macros/generate-selection-functions to)

;;; ----------------------------------------------------------------------------

(defn tree-action
  "Return action based on systema description.
   NODE is an atom wrapping a systema-node, C the concepts of the systema graph."
  ([node]
   (tree-action node (-> @state :graph :concepts)))
  ([node C]
   (cond
     (is-a? node (C :Quantity ))
     (if (is-a? node (C :Vector))
       #(print "     [ Plot heatmap ] ")
       #(print "     [ Plot single-trend with expectation band ] "))
     (is-a? node (C :TimeSeries))
     (if (elem? node (C :Vector))
       #(print "     [ Plot heatmap ] ")
       #(print "     [ Plot single-trend ] "))
     (gf-has node (C :Plot))
     (fn []
       (println "     [ Plot ############ ] ")
       (doseq [plot (g-has node (C :Plot))]
         (println "* Plot" (-> @plot :names first) ": ")
         (doseq [trend (-> plot g-from (r-has (|| (C :Quantity) (C :TimeSeries))))]
           (println "  - Trend" (@trend :uid)))))
     :else #())))

(defn make-tree
  "Generate tree for demonstration."
  ([node] (make-tree node (-> @state :graph :concepts)))
  ([node C]
   {:name         (-> @node :fields :displayName)
    :displayName  (-> @node :fields :displayName)
    :uid          (-> @node :uid)
    :node         node
    :children     (for [subnode (@node :has) :when (and (is-not-a? subnode (C :Monitor))
                                                        (is-not-a? subnode (C :Mean))
                                                        (is-not-a? subnode (C :Measured))
                                                        (is-not-a? subnode (C :Expected))
                                                        (is-not-a? subnode (C :Variance))
                                                        (is-not-a? subnode (C :KRI)))]
                    (make-tree subnode C))
    :action       (tree-action node C)}))

(defn print-tree
  "Print tree for demonstration and trigger actions."
  ([tree]
   (print-tree tree ""))
  ([tree indent]
   (print indent (:name tree))
   ((:action tree))
   (println)
   (doseq [child (:children tree)] (print-tree child (str indent "  ")))))

(comment "Example usage"
         (print-tree (make-tree (-> @state :graph :concepts :Tree g-from first)
                                (-> @state :graph :concepts))))

;;; ----------------------------------------------------------------------------

(defn- globals [sys]
  (let [nodes (if (map? sys) (vals sys) sys)]
    (->> nodes
         (filter #(some (partial = "0") (get % "in")))
         (map (fn [m] [(first (get m "names")) m]))
         (into {}))))

(defn- get-instances
  ([concept sys] (get-instances concept sys (globals sys)))
  ([concept sys globals]
   (keep sys (into #{} (get-in globals [concept "has"])))))

;;; ----------------------------------------------------------------------------

(defn- is-in?
  "Takes a sequence of nodes `parents` and returns a function of
  `node` that checks if `node` is in `parents`."
  [parents]
  (fn [node]
    (let [node-parents (into #{} (get node "in"))
          parent-uids (into #{} (map #(get % "uid") parents))]
      (some node-parents parent-uids))))


(defn make-typer
  "Takes sequence of Systema `nodes` and returns a closure to
  type nodes.

  Typed nodes have a property with a list of types."
  [nodes]
  (let [globals             (globals nodes)
        plot-concept        (get globals "Plot")
        is-plot?            (is-in? [plot-concept])
        timeseries-concepts (filter (fn [n] ((into #{} (get-in globals ["TimeSeries" "has"]))
                                             (get n "uid")))
                                    nodes)
        is-timeseries?      (is-in? timeseries-concepts)]
    (fn [node]
      (cond (is-plot? node)
            (assoc node :type ["plot"])

            (is-timeseries? node)
            (assoc node :type ["timeseries"])

            (map? node)
            (assoc node :type ["unknown"])

            :else
            node))))


(defn- build-raw-subtree
  "Build a node of a tree.

  Node is excluded from the tree if

    (pred node)

  evaluates to true.

  A node of a tree has a `children` property containing sequence
  of subnodes."
  [nodes node pred]
  (let [child-uuids (get node "has")]
    (when-not (pred node)
      (assoc node :children (->> child-uuids
                                 (map (fn [uuid] (build-raw-subtree nodes (get nodes uuid) pred)))
                                 (filter identity))))))


(defn has-plots?
  "Returns true if at least one child of `node` is of type plot."
  [node]
  (let [plots (filter #(some #{"plot"} (:type %)) (:children node))]
    (if (seq plots) true false)))


(defn has-timeseries?
  "Returns true if at least one child of `node` is of any 'TimeSeries' type."
  [node]
  (let [plots (filter #(some #{"timeseries"} (:type %)) (:children node))]
    (if (seq plots) true false)))


(defn ^Object buildTree
  "Build the tree to display from node sequence.

  This relies on a :Tree node being attached to the root.
  Nodes of concept 'Model' are excluded."
  [^Object nodes]
  (clj->js (make-tree (-> @state :graph :concepts :Tree g-from first)
                      (-> @state :graph :concepts))))


(defn getDescription
  "Retrieve current systems Systema description.

  Systema description is an Object, where the properties are
  the `uid`s and values are corresponding nodes.

  This is memoized in @state, results will be fetched with respect to the API_URL."
  ([] (getDescription js/console.log js/console.log))
  ([callback] (getDescription callback js/console.log))
  ([callback error]
   (let [url      (str API_URL "/system")]

     (cond
       (= url (:url @state))
       (callback (:json @state))

       :else (let [response (js/window.fetch url)]
               (-> response
                   (.then (fn [response]
                            (cond (= (.-status response) 200)
                                  (-> response
                                      (.json)
                                      (.then (fn [json]
                                               (swap! state
                                                      assoc
                                                      :url url
                                                      :json json
                                                      :graph (->> (js->clj json :keywordize-keys true)
                                                                  vals
                                                                  unmarshal-systema-nodes
                                                                  systema-graph))
                                               (reset! C (-> @state :graph :concepts))

                                               (callback json))))

                                  :else
                                  (error response))))
                   (.catch (fn [response]
                             (js/console.log "Error retrieving systema configuration:" response)))))))))


(defn enrichNodesWithPlots
  "Takes node sequence `nodes`. Attach node types and potential plots
  to nodes of node sequence."
  [nodes]
  (let [nodes       (filter (fn [[_ node]] (map? node)) (js->clj nodes))
        typer       (make-typer (map second nodes))
        typed-nodes (into {} (->> nodes
                                  (map (fn [[k v]] [k (typer v)]))))]
    (->> typed-nodes
         (map (fn [[uid node]]
                [uid (let [node (assoc node :children (mapv #(get typed-nodes %) (get node "has")))]
                       (if (has-timeseries? node)
                         (let [plots (filter #(some #{"timeseries"} (:type %)) (:children node))]
                           (-> node
                               (assoc :type ["plotStack"]
                                      :plots plots)))
                         node))]))
         (into {})
         clj->js)))

;;; ----------------------------------------------------------------------------
;;; for use in jsx components

(defn nodePathAsString
  "Return a string of node names on the tree path from UID to a root node, separated by '>'."
  ([uid] (nodePathAsString uid (:uid @(first (:from @(:Tree (:concepts (:graph @state))))))))
  ([uid root-uid]
   (let [graph (js->clj (:json @state))
         parent-uids (loop [current-uid uid
                            parents (list)]
                       (let [current-parent-list (get-in graph [current-uid "in"])]
                         (if (or (empty? current-parent-list) (some #{root-uid} current-parent-list))
                           parents
                           (recur (first current-parent-list)
                                  (conj parents (first current-parent-list))))))]
     (->> parent-uids
          (map (comp first #(get % "names") #(get graph %)))
          (remove empty?)
          (string/join " > ")
          clj->js))))


(defn nodePathAsNodeSeq
  "Return a sequence of node uids on the tree path from UID to the graph root."
  [uid]
  (let [graph (js->clj (:json @state))
        parent-uids (loop [current-uid uid
                           parents (list)]
                      (let [current-parent-list (get-in graph [current-uid "in"])]
                        (if (empty? current-parent-list)
                          parents
                          (recur (first current-parent-list)
                                 (conj parents (first current-parent-list))))))]
    (->> parent-uids
         (map (comp #(get % "uid") #(get graph %)))
         (remove empty?)
         clj->js)))

(defn isSpectrum [node-uid]
  (let [node (uid->node node-uid)
        C    (-> @state :graph :concepts)]
    (not (empty? (-> (uid->node node-uid)
                     (r-in (C :Spectrum))
                     first $ :fields)))))

(defn getRangeAndLength [node-uid]
  (let [C (-> @state :graph :concepts)]
    (when-let [fields (-> (uid->node node-uid)
                          (r-in (C :Spectrum))
                          first $ :fields)]
      (clj->js {:range (:range fields)
                :length (:length fields)}))))

(defn which [concept node-uid]
  "Return the name of the first CONCEPT of NODE-UID."
  (let [C (-> @state :graph :concepts)]
    (-> (uid->node node-uid)
        (r-in (&& (elem? (C concept)) concept?))
        first $ :names first)))

(defn isCompressorMap [node-uid-x node-uid-y]
  (and (= "Volume Flow" (which :Quantity node-uid-x))
       (= "Head" (which :Quantity node-uid-y))))

(defn displayUnit
  "Return the symbol for the unit that NODE-UID's data should be displayed as. This is either the default SI Unit for this nodes :Quantity, or the displayUnit defined in the systema description, or a user-defined localStorage entry for the lower-case name for this quantity."
  [node-uid]
  (let [default-display-unit
        (or (-> (uid->node node-uid) $ :fields :influx :unit)
            (:short (display-unit-map (which :Quantity node-uid))))
        stored-unit
        (and default-display-unit
             (dimension default-display-unit)
             (. js/localStorage getItem
                (clojure.string/lower-case (dimension default-display-unit))))]
    (clj->js (or
              stored-unit
              (and (is-a? (uid->node node-uid) (-> @state :graph :concepts :KRI)) "KRI")
              (and (isSpectrum node-uid) node-uid)
              default-display-unit
              ""))))

(defn timeseries-nodes [node-uid]
  (let [C (-> @state :graph :concepts)]
    (map #(:uid ($ %))
         (-> (uid->node node-uid)
             (r-has (C :TimeSeries))))))

(defn displayUnitGroups [node-uids]
  (let [C (-> @state :graph :concepts)
        expanded-nodes
        (dedupe (flatten (map timeseries-nodes node-uids)))]
    (clj->js
     (vals (group-by displayUnit (into #{} expanded-nodes))))))

(defn plotTitle [node-uid]
  (clj->js (nodePathAsString node-uid)))
