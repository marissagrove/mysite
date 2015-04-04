(ns mg-webpage.models.scotland
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def scotland-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2 [:span.titles "Scotland"]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland2.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland4.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland3.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland5.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland6.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland7.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland8.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland9.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland10.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland11.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland12.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland14.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland15.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland17.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland20.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland21.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland22.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland23.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland24.jpg"}]]]]))

