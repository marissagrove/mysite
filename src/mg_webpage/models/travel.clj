(ns mg-webpage.models.travel
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(defn travel-image [src text destination]
  [:div.places
   [:img.place-image
    {:alt "",
     :src (str "/img/" src)}]
   [:div.place
    [:a.place-title {:href destination} text]]])

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
  {"Africa" {:title "Africa"
             :description "description"
             :images ["africa_travels.jpg" "africa_travels.jpg"]}
   "Canada" {:title "Canada"
             :description "description"
             :images ["canada_travels.jpg"]}
   "Europe" {:title "Europe"
               :description "description"
               :images ["europe_travels.jpg"]}
   "Great_Britain" {:title "Great Britain"
              :description "description"
              :images ["uk_travels.jpg"]}
   "Japan" {:title "Japan"
              :description "description"
              :images ["japan_travels.jpg"]}
   "Jordan" {:title "Jordan"
              :description "description"
              :images ["jordan_travels.jpg"]}})
         



(defn travel-page [place-data]
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2 (get place-data :title)]
          [:p (get place-data :description)]
          (map (fn [src] (travel-image src nil nil)) (get place-data :images))]]))

