(ns mg-webpage.models.germany
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def germany-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Germany"]]
          [:p ""]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin2.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin4.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin5.jpg"}]]]))
