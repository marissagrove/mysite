(ns mg-webpage.models.travel
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(defn travel-image [src text destination]
  [:div.thumbnail
   [:img
    {:height "200",
     :width "200",
     :alt "",
     :src (str "/img/" src)}]
   [:br]
   [:a {:href destination} text]])

(def travels-page
  (html [:html
         [:head
          [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
         [:body common/navbar
                                        ;(travel-image "london.png" "United Kingdom" "/travels/london")
                                        ;          [:h2.place-title "Africa"]
          [:div.places
           [:img#africa.place-image {:src "/img/africa_travels.jpg"}]
           [:h2.place-title "Africa"]
           [:img.place-image {:src "/img/canada_travels.jpg"}
            [:h2.place-title "Canada"]]
           [:img.place-image {:src "/img/europe_travels.jpg"}
            [:h2.place-title "Europe"]]
           [:img.place-image {:src "/img/uk_travels.jpg"}
            [:h2.place-title "Great Britain"]]
           [:img.place-image {:src "/img/japan_travels.jpg"}
            [:h2.place-title "Japan"]]
           [:img.place-image {:src "/img/jordan_travels.jpg"}
            [:h2.place-title "Jordan"]]]]]))

(def travel-data
  {"london" {:title "London"
             :description "London great"
             :images ["london.png" "london.png"]}
   "south_africa" {:title "South Africa"
                   :description "south africa great"
                   :images ["southafrica.png" "southafrica.png"]}
   "tanzania" {:title "Tanzania"
               :description "tanzania great"
               :images ["tanzania.png" "tanzania.png"]}
   "england" {:title "England"
              :description "england great"
              :images ["england.png" "england.png"]}})
         



(defn travel-page [place-data]
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h1 (get place-data :title)]
          [:p (get place-data :description)]
          (map (fn [src] (travel-image src nil nil)) (get place-data :images))]]))

