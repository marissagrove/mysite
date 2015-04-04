(ns mg-webpage.models.spain
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def spain-data
  "spain" {:title "Spain"
           :description ""
           :panoramic ["https://s3-us-west-1.amazonaws.com/mgsite-media/spain1.jpg"]
           :images []})

(defn spain-page [spain-data]
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2 [:span.titles "Spain"]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain1.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain11.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain3.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain2.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain5.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain8.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain10.jpg"}]]]]))

