(ns mg-webpage.models.project
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def projects-page
  (html [:html
         ;common/head
         [:head
          [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
         [:body
          common/navbar
          [:div.thumbnail-container
           [:div.alarmtube
            [:a
             {:href "http://alarmtube.marissagrove.com"}
             [:img
              {:height "200",
               :width "300",
               :alt "",
               :src "img/alarm.png"}]]
            [:br]
            [:a.link {:href "http://alarmtube.marissagrove.com"} "Alarmtube"]
            " \n\t\t"]
           [:div.findaplace
            [:a
             {:href "http://findaplace.marissagrove.com"}
             [:img
              {:height "200", :width "300", :alt "", :src "img/find.png"}]]
            [:br]
            [:a.link
             {:href "http://findaplace.marissagrove.com"}
             "Find a Place"]]]]]))
