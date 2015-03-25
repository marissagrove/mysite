(ns mg-webpage.models.germany
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def germany-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Germany"]]
          [:p ""]
          [:img {:src ""}]]]))
