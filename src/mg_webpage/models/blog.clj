(ns mg-webpage.models.blog
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))
  

(def blog-data
  {"blog1" {:title "blog1"
            :description "this is a blog"}})

(defn make-slug [string]
  (clojure.string/lower-case (clojure.string/replace string #"[^a-z0-9A-Z]" "_")))

(defn post-page [place-data]
  (html [:html
         ;base/head
         [:body
          common/navbar
          [:h1 (get place-data :title)]
          [:p (get place-data :description)]]]))

(def blog-page
  (html [:html
         [:head
          [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
         [:body
          common/navbar
          [:img.bgimg {:src "/img/blogimage.jpg"}]
          [:h1.entry-title "JS to CLJS"]
          [:p.entry-details "An early personal project I wrote while first learning to code was an alarm clock that played YouTube videos when triggered. I wrote Alarmtube in Javascript, and borrowed the initial alarm code from JavaScriptKit. The YouTube API was friendly enough to maneuver for a beginner. Since then I’ve mainly been using only Clojure/Clojurescript, so I thought I’d go back and rewrite this previous project in ClojureScript with  Om and Hiccup. "]
          [:div.main-content]]]))
