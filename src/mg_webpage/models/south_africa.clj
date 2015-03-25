(ns mg-webpage.models.south-africa
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def south-africa-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "South Africa"]]
          [:p ""]
          [:img {:src ""}]]]))
