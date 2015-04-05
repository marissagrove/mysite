(ns mg-webpage.models.england
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def england-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.titles "England"]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england143.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england26.jpg"}]
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england28.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england31.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england35.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england37.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england38.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england39.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england41.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england42.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england43.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england150.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england152.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england73.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england95.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england96.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england97.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england98.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england99.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england101.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england102.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england103.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england107.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england109.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england110.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england111.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england115.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england135.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england136.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england137.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england140.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england142.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england144.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england148.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england153.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england1.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england2.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england5.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england8.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england13.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england17.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england18.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england19.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england21.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england22.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england24.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england80.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england121.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england124.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england126.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england128.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england127.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england130.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england132.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england134.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england116.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england160.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england157.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england133.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/england159.jpg"}]]]]))

