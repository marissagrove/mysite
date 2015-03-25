(ns mg-webpage.models.austria
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def austria-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Austria"]]
          [:p ""]
          [:img {:src ""}]]]))
