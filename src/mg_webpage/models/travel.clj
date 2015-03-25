(ns mg-webpage.models.travel
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(defn travels-image [src text destination]
  [:div.places
   [:img.place-image
    {:alt "",
     :src src}]
   [:div.place
    [:a.place-title {:href destination} text]]])

(def travels-page
  (html [:html
         [:head
          [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
         [:body common/navbar
          (travels-image "https://s3-us-west-1.amazonaws.com/mgsite-media/africa_travels.jpg" "Africa" "/travels/africa-regions")
          (travels-image "https://s3-us-west-1.amazonaws.com/mgsite-media/canada_travels.jpg" "Canada" "/travels/region/canada")
          (travels-image "https://s3-us-west-1.amazonaws.com/mgsite-media/europe_travels.jpg" "Europe" "/travels/europe-regions")
          (travels-image "https://s3-us-west-1.amazonaws.com/mgsite-media/uk_travels.jpg" "Great Britain" "/travels/uk-regions")
          (travels-image "https://s3-us-west-1.amazonaws.com/mgsite-media/japan_travels.jpg" "Japan" "/travels/japan-regions")
          (travels-image "https://s3-us-west-1.amazonaws.com/mgsite-media/jordan_travels.jpg" "Jordan" "/travels/region/jordan")]]))

(defn travel-page [place-data]
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:h2.highlighter  [:span.titles [:span.bar] ;; (map (fn [src] (travels-image src nil nil)) (get place-data :region))
                             ]]
          [:p ;; (get place-data :description)
           ]
          ;; (map (fn [src] (travel-pano src nil nil)) (get place-data :panoramic))
          ;; (map (fn [src] (travel-image src nil nil)) (get place-data :images))
          ;; (map (fn [src] (travel-video src nil nil)) (get place-data :videos))
          ]]))

(def africa-regions
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "africa-regions/south-africa"} [:div.place [:span.titles "South Africa"]]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]          
          [:a {:href "africa-regions/tanzania"} [:div.place [:span.titles "Tanzania"]]]          
          [:p ""]]]))

(def europe-regions
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "europe-regions/austria"} [:span.titles "Austria"]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "europe-regions/croatia"} [:span.titles "Croatia"]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/paris1.jpg"}]
          [:a {:href "europe-regions/france"} [:span.titles "France"]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "europe-regions/germany"} [:span.titles "Germany"]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "europe-regions/italy"} [:span.titles "Italy"]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/spain1.jpg"}]
          [:a {:href "europe-regions/spain"} [:span.titles "Spain"]]
          [:p ""]]]))

(def uk-regions
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "uk-regions/england"} [:span.titles "England"]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "uk-regions/scotland"} [:span.titles "Scotland"]]
          [:p ""]]]))

(def japan-regions
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "japan-regions/osaka"} [:span.titles "Osaka"]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "japan-regions/kyoto"} [:span.titles "Kyoto"]]
          [:img.place-image {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/croatia1.jpg"}]
          [:a {:href "japan-regions/tokyo"} [:span.titles "Tokyo"]]
          [:p ""]]]))
