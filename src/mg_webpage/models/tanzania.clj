(ns mg-webpage.models.tanzania
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def tanzania-page
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Tanzania"]]
          [:p ""]
          [:h2.highlighter [:span.titles [:span.bar] "Arusha"]]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania7.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania8.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania10.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania12.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania18.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania19.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania20.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania21.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania22.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania24.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania25.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania26.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania27.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania28.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania29.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania30.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania31.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania32.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania33.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania34.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania35.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania37.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania38.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania39.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania40.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania41.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania42.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania44.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania47.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania48.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania49.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania50.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania51.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania55.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania56.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania57.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania58.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania59.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania60.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania61.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania62.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania63.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania64.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania70.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania72.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania73.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania74.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania75.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania77.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania80.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania81.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania82.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania85.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania86.jpg"}]
          [:h2.highlighter [:span.titles [:span.bar] "Moshi"]]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania2.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania65.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania66.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania67.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania68.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania69.jpg"}]
          [:h2.highlighter [:span.titles [:span.bar] "Zanzibar"]]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania87.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania90.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania91.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania92.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania93.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania96.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania97.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania98.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania99.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania100.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania101.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania102.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania106.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania108.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania109.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania110.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania111.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania114.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania118.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania123.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania124.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania129.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/tanzania130.jpg"}]]]))
