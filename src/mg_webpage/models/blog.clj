(ns mg-webpage.models.blog
  (:use hiccup.core)
  (:require [mg-webpage.models.common :as common]))
  

(def blog-data
  {"blog1" {:title "blog1"
            :description "this is a blog"}})

(defn make-slug [string]
  (clojure.string/lower-case (clojure.string/replace string #"[^a-z0-9A-Z]" "_")))

(defn post-page [blog-data]
  (html [:html
         ;base/head
         [:body
          common/navbar
          [:h1 (get blog-data :title)]
          [:p (get blog-data :description)]
          (get blog-data :description)]]))

(def blog-page
  (html [:html
         [:head
          [:link {:href "/css/screen.css", :rel "stylesheet", :type "text/css"}]]
         [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
         [:body
          common/navbar
          [:img.bgimg {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/blog_image.jpg"}]
          [:h1.entry-title "Site Redesign"]
          [:p.entry-details "About a year ago I put up my personal site. A place to post my projects, photos from travels, and maybe a blog. My personal taste tends to lean toward clean and simple, so when I decided to redesign my site I didn't change anything too drastically, just made it more efficient."
           [:br]
           [:br]
           "Originally I had my contact links in line and represented by icons, for the redesign I've put them in a dropdown menu, which to me looks much cleaner. The font weight is now much thinner, however the jury is still out on whether or not it's too thin to comfortably read!"
           [:br]
           [:br]
           "The original travel page consisted of thumbnails for each country I've traveled to. Now they are grouped by region, reducing the images on the travel page from 14 to 6, and the images are now at 100% width. Each title is a link to a comprehensive image page of photos from that region. The projects page was also thumbnails with the project name underneath, which is pretty vague. Now you can find a short description of each project and which languages/libraries/framework I used to write them. My blog page didn't have much going on, just a large image that took up most of the page. It's now been replaced by a much smaller image so you can see the most recent post without having to scroll down."
           [:br]
           [:br]
           "Nothing drastic and still a work in progress, but it now looks more organized and up-to-date!"]
          [:div#slideshowbg
          ; [:div#left "<"]
          ; [:div#right ">"]
           [:ul.cf
            [:li [:img.blgimg {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/originalsite1.png"}]]
            [:li [:img.blgimg {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/originalsite2.png"}]]
            [:li [:img.blgimg {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/originalsite3.png"}]]
            [:li [:img.blgimg {:src "https://s3-us-west-1.amazonaws.com/mgsite-media/originalsite4.png"}]]]]
          [:h1.entry-title "JS to CLJS"]
          [:p.entry-details "An early personal project I wrote while first learning to code was an alarm clock that played YouTube videos when triggered. I wrote Alarmtube in Javascript, and borrowed the initial alarm code from JavaScriptKit. The YouTube API was friendly enough to maneuver for a beginner. Since then I’ve mainly been using only Clojure/Clojurescript, so I thought I’d go back and rewrite this previous project in ClojureScript with  Om and Hiccup. "]
          [:div.main-content]]]))
