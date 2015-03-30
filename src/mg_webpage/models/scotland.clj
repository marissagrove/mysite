(ns mg-webpage.models.scotland
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def scotland-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Scotland"]]
          [:p ""]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland2.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland4.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland5.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland6.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland7.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland8.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland10.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland12.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland13.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland14.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland15.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland16.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland17.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland18.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland19.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland20.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland21.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland22.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland23.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/scotland24.jpg"}]]]))
