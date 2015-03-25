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
          [:h2.highlighter  [:span.titles [:span.bar] "Spain"]]
          [:p ""]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain2.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain5.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain6.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain7.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain8.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain10.jpg"}]]]))
