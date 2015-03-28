(ns mg-webpage.models.croatia
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def croatia-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Croatia"]]
          [:p ""]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia4.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia5.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia6.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia7.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia8.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia10.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia12.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia14.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia16.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia18.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia20.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia24.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia25.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia27.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia28.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia29.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia30.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia31.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia33.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia34.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia35.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia36.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia38.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia39.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia40.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia41.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia42.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia43.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia44.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia45.jpg"}]]]))
