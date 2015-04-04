(ns mg-webpage.models.italy
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def italy-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2 [:span.titles "Italy"]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy2.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy5.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy3.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy4.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy6.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy7.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy10.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy13.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy15.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy16.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy17.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy18.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy21.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy22.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy23.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy24.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy26.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy28.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy29.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy30.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy34.jpg"}]
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy35.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy36.jpg"}]
           [:div.center
            [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy37.jpg"}]
            [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy38.jpg"}]]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy39.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy40.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy41.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy44.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy46.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy47.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/italy50.jpg"}]]]]))

