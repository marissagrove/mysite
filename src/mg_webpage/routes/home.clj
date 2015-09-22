(ns mg-webpage.routes.home
  (:require [compojure.core :refer :all]
            [mg-webpage.views.layout :as layout]))

(defn home []
  (layout/common))

(defroutes home-routes
  (GET "/" [] (home)))
