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
          [:h1.entry-title " " [:img {:src "/img/blog.png"}]]
          [:p.entry-details]
          [:div.main-content]]]))
