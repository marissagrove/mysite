(ns mg-webpage.models.tokyo
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def tokyo-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Tokyo"]]
          [:p ""]
          [:img {:src ""}]]]))
