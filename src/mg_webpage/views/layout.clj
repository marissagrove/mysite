(ns mg-webpage.views.layout
  (:require [hiccup.page :refer [html5 include-css]]
            [mg-webpage.models.common :as common]))

(defn common [& body]
  (html5
    [:head
     [:title "Welcome to mg-webpage"]
     [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
    [:body common/navbar
     [:img.hmimg {:src "/img/jordan.jpg"}]
     body]))
