(ns mg-webpage.models.kyoto
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def kyoto-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Kyoto"]]
          [:p ""]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto1.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto2.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto4.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto6.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto8.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto10.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto13.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto14.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto16.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto18.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto19.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto20.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto21.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto22.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto23.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto24.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto25.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto26.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto27.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto28.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto29.jpg"}]]]))
