(ns mg-webpage.routes.home
  (:require [compojure.core :refer :all]
            [mg-webpage.views.layout :as layout]
            [mg-webpage.models.project :as project]
            [mg-webpage.models.blog :as blog]
            [mg-webpage.models.travel :as travel]))

(defn home []
  (layout/common))

(defroutes home-routes
  (GET "/" [] (home))
  (GET "/projects" [] project/projects-page)
  (GET "/travels" [] travel/travels-page)
  (GET "/blog" [] blog/blog-page)
  (GET "/travels/:name" [name] (travel/travel-page (get travel/place-data name)))
  (GET "/blog/:name" [name] (blog/post-page (get blog/blog-data name))))
