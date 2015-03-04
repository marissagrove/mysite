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
          [:ul.projects
           [:li.project
            [:a.link {:href "http://alarmtube.marissagrove.com"} "Alarmtube-JS"]
            [:p#project "An alarm that plays YouTube videos when the alarm is triggered. Written in JavaScript."]]
           [:br]
           [:li.project
            [:a.link {:href "http://alarmtube.marissagrove.com"} "Alarmtube-CLJS"]
            [:p#project "An alarm that plays YouTube videos when the alarm is triggered. Written in ClojureScript."]]
           [:br]
           [:li.project
            [:a.link
             {:href "http://findaplace.marissagrove.com"}
             "Find a Place"]
            [:p#project "Platform for rating and reviewing businesses. Written in Python."]]]]]))
