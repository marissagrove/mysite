(ns mg-webpage.models.canada
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(def canada-data
  "canada" {:title "Canada"
           :description ""
           :panoramic ["https://s3-us-west-1.amazonaws.com/mgsite-media/canada1.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/canada2.jpg"]
           :images []})

(defn canada-page [canada-data]
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] "Canada"]]
          [:p.titles "With nothing planned we packed the car and left Seattle for Vancouver to ring in the New Year."]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada3.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada18.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada19.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada20.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada21.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada22.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada23.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada24.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada25.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada26.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada28.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada29.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada31.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada32.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada33.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada34.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada35.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada36.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada37.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada5.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada8.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada9.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada11.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada14.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada16.jpg"}]
          [:img.images {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/canada17.jpg"}]]]))
