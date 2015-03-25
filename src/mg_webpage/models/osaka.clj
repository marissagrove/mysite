(ns mg-webpage.models.osaka
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def osaka-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Osaka"]]
          [:p ""]
          [:img {:src ""}]]]))
