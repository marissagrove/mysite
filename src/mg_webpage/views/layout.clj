(ns mg-webpage.views.layout
  (:require [hiccup.page :refer [html5 include-css]]))

(defn common [& body]
  (html5
    [:head
     [:title "Marissa"]
     [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]
     [:script {:src "/js/dist/app.js", :type "application/javascript" }]]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
    [:body
     [:div.app]]))

