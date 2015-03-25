(ns mg-webpage.routes.home
  (:require [compojure.core :refer :all]
            [mg-webpage.views.layout :as layout]
            [mg-webpage.models.project :as project]
            [mg-webpage.models.blog :as blog]
            [mg-webpage.models.travel :as travel]
            [mg-webpage.models.south-africa :as sa]
            [mg-webpage.models.tanzania :as tanzania]
            [mg-webpage.models.spain :as spain]
            [mg-webpage.models.canada :as canada]
            [mg-webpage.models.italy :as italy]
            [mg-webpage.models.croatia :as croatia]
            [mg-webpage.models.germany :as germany]
            [mg-webpage.models.france :as france]
            [mg-webpage.models.austria :as austria]
            [mg-webpage.models.england :as england]
            [mg-webpage.models.scotland :as scotland]
            [mg-webpage.models.osaka :as osaka]
            [mg-webpage.models.kyoto :as kyoto]
            [mg-webpage.models.tokyo :as tokyo]
            [mg-webpage.models.jordan :as jordan]))

(defn home []
  (layout/common))

(defroutes home-routes
  (GET "/" [] (home))
  (GET "/projects" [] project/projects-page)
  (GET "/travels" [] travel/travels-page)
  (GET "/blog" [] blog/blog-page)
  (GET "/travels/africa-regions" [] travel/africa-regions)
  (GET "/travels/europe-regions" [] travel/europe-regions)
  (GET "/travels/japan-regions" [] travel/japan-regions)
  (GET "/travels/uk-regions" [] travel/uk-regions)
  (GET "/travels/region/jordan" [] jordan/jordan-page)
  (GET "/travels/region/canada" [] canada/canada-page)
  (GET "/travels/africa-regions/south-africa" [] sa/south-africa-page)
  (GET "/travels/africa-regions/tanzania" [] tanzania/tanzania-page)
  (GET "/travels/europe-regions/spain" [] spain/spain-page)
  (GET "/travels/europe-regions/italy" [] italy/italy-page)
  (GET "/travels/europe-regions/croatia" [] croatia/croatia-page)
  (GET "/travels/europe-regions/germany" [] germany/germany-page)
  (GET "/travels/europe-regions/france" [] france/france-page)
  (GET "/travels/europe-regions/austria" [] austria/austria-page)
  (GET "/travels/uk-regions/england" [] england/england-page)
  (GET "/travels/uk-regions/scotland" [] scotland/scotland-page)
  (GET "/travels/japan-regions/osaka" [] osaka/osaka-page)
  (GET "/travels/japan-regions/kyoto" [] kyoto/kyoto-page)
  (GET "/travels/japan-regions/tokyo" [] tokyo/tokyo-page)
  (GET "/blog/:name" [name] (blog/post-page (get blog/blog-data name))))
