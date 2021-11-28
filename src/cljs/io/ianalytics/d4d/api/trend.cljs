(ns io.ianalytics.d4d.api.trend
  (:require [io.ianalytics.d4d.api.core :refer [API_URL]]))

(defn getTrend
  ""
  ([uid from to] (getTrend uid from to nil js/console.log js/console.log))
  ([uid from to intv] (getTrend uid from to intv js/console.log js/console.log))
  ([uid from to intv callback] (getTrend uid from to intv callback js/console.log))
  ([uid from to intv callback error]
   (let [iso-from  (.toISOString from)
         iso-to    (.toISOString to)
         url       (str API_URL "/trend/" uid "?from=" iso-from "&to=" iso-to
                        (when intv (str "&intv=" intv "s&aggr=mean&fill=linear")))
         response  (js/window.fetch url)]
     (-> response
         (.then (fn [response]
                  (cond (= (.-status response) 200)
                        (-> response
                            (.json)
                            (.then callback))

                        :else
                        (error response))))
         (.catch (fn [response]
                   (js/console.log "Error getting trend with id " uid
                                   " between " iso-from " and " iso-to ": " response)))))))
