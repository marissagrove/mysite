(ns mg-webpage.models.travel
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))

(defn travels-image [src text destination]
  [:div.center
   [:a.place-title {:href destination}
    [:div.overlay
     [:img.direct-image
      {:alt "",
       :src src}]] text]])

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
          [:div.center
           [:div.sidea
            [:a {:href "africa-regions/south-africa"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "South Africa"]]]
           [:div.sideb
            [:a {:href "africa-regions/tanzania"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Tanzania"]]]]          
          [:p ""]]]))

(def europe-regions
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:div.center
           [:div.sidea
            [:a {:href "europe-regions/austria"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Austria"]]]
           [:div.sideb
            [:a {:href "europe-regions/croatia"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Croatia"]]]
           [:div.sidea
            [:a {:href "europe-regions/france"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "France"]]]
           [:div.sideb
            [:a {:href "europe-regions/germany"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Germany"]]]
           [:div.sidea
            [:a {:href "europe-regions/italy"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Italy"]]]
           [:div.sideb
            [:a {:href "europe-regions/spain"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Spain"]]]]
          [:p ""]]]))

(def uk-regions
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:div.center
           [:div.sidea
            [:a {:href "uk-regions/england"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "England"]]]
           [:div.sideb
            [:a {:href "uk-regions/scotland"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Scotland"]]]]
          [:p ""]]]))

(def japan-regions
  (html [:html
         [:head [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:body
          common/navbar
          [:div.center
           [:div.sidea
            [:a {:href "japan-regions/osaka"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Osaka"]]]
           [:div.sideb
            [:a {:href "japan-regions/kyoto"}
             [:div.overlay
              [:img.direct-image {:src ""}]] [:span.titles "Kyoto"]]]
           [:a {:href "japan-regions/tokyo"}
            [:div.overlay
             [:img.direct-image {:src ""}]] [:span.titles "Tokyo"]]]
          [:p ""]]]))
