(ns mg-webpage.models.south-africa
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def south-africa-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "South Africa"]]
          [:p ""]
          [:h2.highlighter [:span.titles [:span.bar] "Cape Town"]]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa16.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa13.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa15.jpg"}]
          [:h2.highlighter [:span.titles [:span.bar] "Penguins"]]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa23.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa25.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa26.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa27.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa29.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa30.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa31.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa34.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa36.jpg"}]
          [:h2.highlighter [:span.titles [:span.bar] "Safari"]]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa4.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa10.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa12.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa14.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa17.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa18.jpg"}]
          [:h2.highlighter [:span.titles [:span.bar] "Rhino"]]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa37.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa38.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa41.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa44.jpg"}]
          [:h2.highlighter [:span.titles [:span.bar] "Zebras"]]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa45.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/sa46.jpg"}]]]))
