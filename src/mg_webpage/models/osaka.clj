(ns mg-webpage.models.osaka
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def osaka-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Osaka"]]
          [:p ""]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka2.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka4.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka5.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka6.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka7.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka8.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka10.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka12.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka13.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka14.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka16.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka17.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka18.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka19.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka20.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka21.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka23.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka24.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka25.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka26.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka28.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka29.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/osaka30.jpg"}]]]))
