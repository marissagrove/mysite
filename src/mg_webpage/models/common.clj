(ns mg-webpage.models.common)

(def navbar
  (list
   [:div.navbar
    [:div.left
     [:ul.directory
      [:li.directory-item [:a {:href "/projects"} "Projects"]]
      [:li.directory-item [:a {:href "/travels"} "Travels"]]
      [:li.directory-item [:a {:href "/blog"} "Blog"]]]]
    [:div.social-container
     [:ul.social-media
      [:li.social-media-list "Connect"
       [:ul.social-items
        [:li#twitter.social-item
         [:a.media {:target "_blank"
                    :href "https://github.com/marissagrove"} "GitHub"]]
        [:li#twitter.social-item
         [:a.media {:target "_blank"
                    :href "https://twitter.com/MarissaGrove"} "Twitter"]]
        [:li#instagram.social-item
         [:a.media {:target "_blank"
                    :href "http://instagram.com/marissagrove"} "Instagram"]]
        [:li#pinterest.social-item
         [:a.media {:target "_blank"
                    :href "http://pinterest.com/marissagrove"} "Pinterest"]]]]]]
    [:h1.title [:a {:href "/"} "MARISSA"]]]))
