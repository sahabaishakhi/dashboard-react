(ns io.ianalytics.d4d.core
  (:require ["react" :as react]
            ["react-dom" :as react-dom]

            ["/@ianalytics/d4d/index" :default D4D]))


(defn init! []
  (react-dom/render

   ;; React element
   (react/createElement D4D nil nil)

   ;; DOM mounting point
   (js/document.querySelector "#root"))
  )


(defn reload! []
  (init!))
