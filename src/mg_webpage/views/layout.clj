(ns mg-webpage.views.layout
  (:require [hiccup.page :refer [html5 include-css]]
            [mg-webpage.models.common :as common]))

(defn common [& body]
  (html5
    [:head
     [:title "Welcome to mg-webpage"]
     [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
    [:body common/navbar
     [:div#slideshow
      [:div#left "<"]
      [:div#right ">"]
      [:ul.cf
       [:li [:img.hmimg {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan.jpg"}]]
       [:li [:img.hmimg {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan2.jpg"}]]
       [:li [:img.hmimg {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan3.jpg"}]]]]
     body]))

;;(def something {:images ["/img/jordan.jpg" "/img/jordan2.jpg" "/img/jordan3.jpg"]})
;;(dom/div #js {:onClick #(js/setInterval 2000)} (left -= 500)(if left < -= 1000)(left = 0)
;;(dom/div #js {:onClick #(js/clearInterval)}
;;(if left > -1000) left -= 5000
;;(if left < 0) left += 500

