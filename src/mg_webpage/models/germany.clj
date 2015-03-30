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
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/berlin5.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany2.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany4.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany7.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany10.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany12.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany13.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany15.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany16.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany17.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany18.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany19.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany20.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany21.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany22.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany28.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany29.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany30.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/germany31.jpg"}]]]))
