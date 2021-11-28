(ns io.ianalytics.d4d.api.macros)

(defmacro generate-selection-functions
  [relation]
  (let [fn-sym          #(symbol (str % '- relation))
        get-first       (fn-sym 'gf)
        get             (fn-sym 'g )
        r-filter        (fn-sym 'r )
        r-filter-nested (fn-sym 'rn)
        r-filter-first  (fn-sym 'rf)
        rel-kw          (keyword relation)
        doc-supplement  "-relation of `basenode<s>` where `predicate` is satisfied."]
    `(do
       (defn ~get
         ~(str "Get all nodes of the **direct** " relation doc-supplement)
         ([nodes#]    (io.ianalytics.d4d.api.systema/get- nodes# ~rel-kw))
         ([nodes# p#] (filter (io.ianalytics.d4d.api.systema/pfn p#) (~get nodes#))))
       (defn ~get-first
         ~(str "Get first node of the **direct** " relation doc-supplement)
         [& x#]      (first (apply ~get x#)))
       (defn ~r-filter
         ~(str "Recursively select all non-nested nodes along the " relation doc-supplement)
         [nodes# p#] (distinct (io.ianalytics.d4d.api.systema/r-filter- (io.ianalytics.d4d.api.systema/pfn p#) nodes# ~rel-kw false false)))
       (defn ~r-filter-nested
         ~(str "Recursively select all (including nested) nodes along the " relation doc-supplement)
         [nodes# p#] (distinct (io.ianalytics.d4d.api.systema/r-filter- (io.ianalytics.d4d.api.systema/pfn p#) nodes# ~rel-kw false true )))
       (defn ~r-filter-first
         ~(str "Recursively select first (nearest) node along the " relation doc-supplement)
         [nodes# p#] (first    (io.ianalytics.d4d.api.systema/r-filter- (io.ianalytics.d4d.api.systema/pfn p#) nodes# ~rel-kw true  false))))))
