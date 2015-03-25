(ns mg-webpage.models.croatia
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def croatia-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Croatia"]]
          [:p ""]
          [:img {:src ""}]]]))
