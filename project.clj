(defproject mg-webpage "0.1.0-SNAPSHOT"
  :description "Marissa's website"
  :url "http://www.marissagrove.com"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.6"]
                 [environ "0.5.0"]
                 [hiccup "1.0.5"]
                 [ring/ring-jetty-adapter "1.2.2"]
                 [ring-server "0.3.1"]]
  :min-lein-version "2.0.0"
  :plugins [[lein-ring "0.8.12"]
            [environ/environ.lein "0.2.1"]]
  :ring {:handler mg-webpage.handler/app
         :init    mg-webpage.handler/init
         :destroy mg-webpage.handler/destroy}
  :hooks [environ.leiningen.hooks]
  :uberjar-name "mg-webpage.jar"
  :main mg-webpage.handler
  :profiles
  {:uberjar    {:aot :all}
   :production {:env  {:production true}
                :ring {:open-browser? false,
                       :stacktraces?  false,
                       :auto-reload?  false}}
   :dev        {:dependencies [[ring-mock "0.1.5"]
                               [ring/ring-devel "1.3.1"]]}})
