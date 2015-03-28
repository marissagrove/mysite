(ns mg-webpage.models.tokyo
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def tokyo-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Tokyo"]]
          [:p ""]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/japan3.jpg"}]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/japan1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo2.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo4.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo6.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo7.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo8.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo10.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo12.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo13.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo15.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo17.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo18.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo19.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo20.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo21.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo22.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo23.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tokyo25.jpg"}]]]))
