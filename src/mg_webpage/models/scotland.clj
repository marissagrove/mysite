(ns mg-webpage.models.scotland
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def scotland-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Scotland"]]
          [:p ""]
          [:img {:src ""}]]]))
