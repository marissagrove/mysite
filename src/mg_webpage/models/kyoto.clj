(ns mg-webpage.models.kyoto
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def kyoto-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2 [:span.titles "Kyoto"]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto2.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto1.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto3.jpg"}]]
          [:div.img-left
           [:img.half-right {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto4.jpg"}]]
          [:div.right
           [:img.half {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto6.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto8.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto9.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto10.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto11.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto13.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto14.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto16.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto18.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto19.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto20.jpg"}]]
          [:div.center
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto21.jpg"}]]
          [:div.center
           [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto22.jpg"}]]
          [:div.center
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto23.jpg"}]
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto24.jpg"}]
           [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto25.jpg"}]
           [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto26.jpg"}]]]
         [:div.center
          [:img.vert-mids {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto27.jpg"}]
          [:img.vert-mid {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto28.jpg"}]]
         [:div.center
          [:img.single {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/kyoto29.jpg"}]]]))

