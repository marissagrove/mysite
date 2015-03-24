(ns mg-webpage.models.travel
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(defn travel-pano [src text destination]
  [:div.places
   [:img.place-image
    {:alt "",
     :src src}]
   [:div.place
    [:a.place-title {:href destination} text]]])

(defn travel-image [src text destination]
  [:div.places
   [:img.place-image
    {:alt "",
     :src src}]
   [:div.place
    [:a.place-title {:href destination} text]]])

(defn travel-video [src text destination]
  [:div.places
   [:video
    {:alt "",
     :preload "auto",
     :src src}]])

(def travels-page
  (html [:html
         [:head
          [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
         [:body common/navbar
          (travel-image "https://s3-us-west-1.amazonaws.com/mgsite-media/africa_travels.jpg" "Africa" "/travels/africa")
          (travel-image "https://s3-us-west-1.amazonaws.com/mgsite-media/canada_travels.jpg" "Canada" "/travels/canada")
          (travel-image "https://s3-us-west-1.amazonaws.com/mgsite-media/europe_travels.jpg" "Europe" "/travels/europe")
          (travel-image "https://s3-us-west-1.amazonaws.com/mgsite-media/uk_travels.jpg" "Great Britain" "/travels/uk")
          (travel-image "https://s3-us-west-1.amazonaws.com/mgsite-media/japan_travels.jpg" "Japan" "/travels/japan")
          (travel-image "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan_travels.jpg" "Jordan" "/travels/jordan")]]))

(def place-data
  {"africa" {:title "Africa"
             :description ""
             :images []}
   "canada" {:title "Canada"
             :description ""
             :panoramic ["https://s3-us-west-1.amazonaws.com/mgsite-media/canada1.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/canada2.jpg"]
             :images []}
   "europe" {:title "Europe"
             :description ""
             :panoramic ["https://s3-us-west-1.amazonaws.com/mgsite-media/spain1.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/paris1.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"]
             :images []
             :videos ["https://s3-us-west-1.amazonaws.com/mgsite-media/croatia-bells.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/running.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/parisrain.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/notredame.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/versailles.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/eiffel.mov"]}
   "uk" {:title "Great Britain"
                    :description ""
                    :images []}
   "japan" {:title "Japan"
            :description ""
            :panoramic ["https://s3-us-west-1.amazonaws.com/mgsite-media/japan1.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/japan2.jpg"]
            :images ["https://s3-us-west-1.amazonaws.com/mgsite-media/japan3.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/japan4.jpg"]
            :videos ["https://s3-us-west-1.amazonaws.com/mgsite-media/japantrain.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/japanmarket.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/harajuku.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/japanlanterns.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/japanmochi.mov" "https://s3-us-west-1.amazonaws.com/mgsite-media/japandogs.mp4" "https://s3-us-west-1.amazonaws.com/mgsite-media/japancoffee.mov"]}
   "jordan" {:title "Jordan"
             :description ""
             :panoramic ["https://s3-us-west-1.amazonaws.com/mgsite-media/jordan13.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan6.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan7.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan8.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan9.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan10.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan11.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan12.jpg"]
            ; :images ["https://s3-us-west-1.amazonaws.com/mgsite-media/jordan1.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan14.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan58.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan60.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan65.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan67.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan29.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan28.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan16.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan80.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan81.jpg""https://s3-us-west-1.amazonaws.com/mgsite-media/jordan82.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan26.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan19.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan77.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan32.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan33.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan34.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan35.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan36.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan37.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan38.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan39.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan40.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan42.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan43.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan44.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan73.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan74.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan75.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/wadirum.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan5.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan21.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan22.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan46.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan47.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan49.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan50.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan51.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan53.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan54.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan56.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan57.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan68.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan69.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan70.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan71.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan20.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan72.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan24.jpg" "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan27.jpg"]
             }})
         
(defn travel-page [place-data]
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] (get place-data :title)]]
          [:p (get place-data :description)]
          (map (fn [src] (travel-pano src nil nil)) (get place-data :panoramic))
          (map (fn [src] (travel-image src nil nil)) (get place-data :images))
          ;(map (fn [src] (travel-video src nil nil)) (get place-data :videos))
          ]]))

