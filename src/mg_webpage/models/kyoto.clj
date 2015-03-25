(ns mg-webpage.models.kyoto
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def kyoto-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Kyoto"]]
          [:p ""]
          [:img {:src ""}]]]))
