(ns mg-webpage.views.layout
  (:require [hiccup.page :refer [html5 include-css]]
            [mg-webpage.models.common :as common]))

(defn common [& body]
  (html5
    [:head
     [:title "Welcome to mg-webpage"]
     [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
    [:body common/navbar
     [:div#slideshow
      [:div#left "<"]
      [:div#right ">"]
      [:ul.cf
       [:li [:img.hmimg {:src "/img/jordan.jpg"}]]
       [:li [:img.hmimg {:src "/img/jordan2.jpg"}]]
       [:li [:img.hmimg {:src "/img/jordan3.jpg"}]]]]
     body]))


;;(js/setInterval)
;;(js/clearInterval)
;;({:onClick})
