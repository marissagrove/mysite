(ns mg-webpage.models.canada
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def canada-data
  "canada" {:title "Canada"
           :description ""
           :panoramic ["https://s3-us-west-1.amazonaws.com/mgsite-media/canada1.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/canada2.jpg"]
           :images []})

(defn canada-page [canada-data]
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Canada"]]
          [:p ""]
          [:img {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada1.jpg"}]]]))
