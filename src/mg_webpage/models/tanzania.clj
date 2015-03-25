(ns mg-webpage.models.tanzania
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def tanzania-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Tanzania"]]
          [:p ""]
          [:img {:src ""}]]]))
