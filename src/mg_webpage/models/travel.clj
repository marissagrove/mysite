(ns mg-webpage.models.travel
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(defn travel-pano [src text destination]
  [:div.places
   [:img.place-image
    {:alt "",
     :src (str "/img/" src)}]
   [:div.place
    [:a.place-title {:href destination} text]]])

(defn travel-image [src text destination]
  [:div.places
   [:img.place-image
    {:alt "",
     :src (str "/img/" src)}]
   [:div.place
    [:a.place-title {:href destination} text]]])

(defn travel-video [src text destination]
  [:div.places
   [:video
    {:alt "",
     :preload "auto",
     :src (str "/video/" src)}]])

(def travels-page
  (html [:html
         [:head
          [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
         [:body common/navbar
          (travel-image "africa_travels.jpg" "Africa" "/travels/africa")
          (travel-image "canada_travels.jpg" "Canada" "/travels/canada")
          (travel-image "europe_travels.jpg" "Europe" "/travels/europe")        
          (travel-image "uk_travels.jpg" "Great Britain" "/travels/uk")
          (travel-image "japan_travels.jpg" "Japan" "/travels/japan")
          (travel-image "jordan_travels.jpg" "Jordan" "/travels/jordan")]]))

(def place-data
  {"africa" {:title "Africa"
             :description ""
             :images []}
   "canada" {:title "Canada"
             :description ""
             :panoramic ["canada1.jpg" "canada2.jpg"]
             :images []}
   "europe" {:title "Europe"
             :description ""
             :panoramic ["spain1.jpg" "paris1.jpg" "croatia1.jpg"]
             :images []
             :videos ["croatia-bells.mov" "running.mov" "parisrain.mov" "notredame.mov" "versailles.mov" "eiffel.mov"]}
   "uk" {:title "Great Britain"
                    :description ""
                    :images ["uk_travels.jpg"]}
   "japan" {:title "Japan"
            :description ""
            :panoramic ["japan1.jpg" "japan2.jpg"]
            :images ["japan3.jpg" "japan4.jpg"]
            :videos ["japantrain.mov" "japanmarket.mov" "harajuku.mov" "japanlanterns.mov" "japanmochi.mov" "japandogs.mp4" "japancoffee.mov"]}
   "jordan" {:title "Jordan"
             :description ""
             :panoramic ["jordan13.jpg" "jordan6.jpg" "jordan7.jpg" "jordan8.jpg" "jordan9.jpg" "jordan10.jpg" "jordan11.jpg" "jordan12.jpg"]
            ; :images ["jordan1.jpg" "jordan14.jpg" "jordan58.jpg" "jordan60.jpg" "jordan65.jpg" "jordan67.jpg" "jordan29.jpg" "jordan28.jpg" "jordan16.jpg" "jordan80.jpg" "jordan81.jpg""jordan82.jpg" "jordan26.jpg" "jordan19.jpg" "jordan77.jpg" "jordan32.jpg" "jordan33.jpg" "jordan34.jpg" "jordan35.jpg" "jordan36.jpg" "jordan37.jpg" "jordan38.jpg" "jordan39.jpg" "jordan40.jpg" "jordan42.jpg" "jordan43.jpg" "jordan44.jpg" "jordan73.jpg" "jordan74.jpg" "jordan75.jpg" "wadirum.jpg" "jordan5.jpg" "jordan21.jpg" "jordan22.jpg" "jordan46.jpg" "jordan47.jpg" "jordan49.jpg" "jordan50.jpg" "jordan51.jpg" "jordan53.jpg" "jordan54.jpg" "jordan56.jpg" "jordan57.jpg" "jordan68.jpg" "jordan69.jpg" "jordan70.jpg" "jordan71.jpg" "jordan20.jpg" "jordan72.jpg" "jordan24.jpg" "jordan27.jpg"]
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

