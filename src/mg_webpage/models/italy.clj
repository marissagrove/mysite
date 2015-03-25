(ns mg-webpage.models.italy
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def italy-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Italy"]]
          [:p ""]
          [:img {:src ""}]]]))
