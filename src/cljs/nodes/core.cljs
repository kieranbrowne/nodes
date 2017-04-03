(ns nodes.core
  (:require
   [reagent.core :as r :refer [atom cursor]]))

(when js/goog.DEBUG
  (enable-console-print!))

(def state 
  (atom 
    {:nodes 
     [{:type "blah" 
       :name "Dennis"
       :position {:x 50 :y 50}
       :connections ["Harry" "Timothy"]}
      {:type "blah" 
       :name "Harry"
       :position {:x 30 :y 90}
       :connections []}
      {:type "blah" 
       :name "Timothy"
       :position {:x 120 :y 90}
       :connections []}
      ]}
    {:ui {:drag nil}}
    ))

(def nodes (cursor state [:nodes]))

(defn get-node-by [k v]
  (first (filter #(= (k %) v) @nodes)))

(defn between [a b]
  {:x (- (:x b) (:x a)) :y (- (:y b) (:y a))})

(defn out-pos [pos]
  (-> pos
      (update :x + 10)
      (update :y + 20)))

(def abs #(if (> 0 %) (- %) %))

(defn draw-link [ctx out-node in-node]
  (let [{ax :x ay :y} (out-pos (:position out-node))
        {mx :x my :y} (between (out-pos (:position out-node))
                               (:position in-node))
        {bx :x by :y} (:position in-node)]
    (.beginPath ctx)
    (.moveTo ctx ax ay)
    (.bezierCurveTo 
      ctx 
      ax by
      (+ 10 bx) ay
      (+ 10 bx) by)
    (.stroke ctx)))

(defn draw-node [ctx node-def]
  (let [{x :x y :y} (:position node-def)]
    (.fillRect ctx x y 50 20)
    (doseq [conn (map (partial get-node-by :name) 
                      (:connections node-def))]
      (draw-link ctx node-def conn))))

(defn draw-app []
  (let [canvas (.getElementById js/document "main")
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (set! (.-fillStyle ctx) "rgb(200,200,200)")
    (set! (.-strokeStyle ctx) "rgb(100,100,100)")
    (set! (.-lineWidth ctx) "2")
    (doseq [node @nodes] (draw-node ctx node))
    ))

(defn mouseover? [mx my node]
  (let [x (:x (:position node))
        y (:y (:position node))]
    (and (> mx x) (> my y)
         (< mx (+ 50 x))
         (< my (+ 20 y))
         )))

(defn mouse-pos [e]
  {:x (+ (.-clientX e) 
         (.-scrollLeft (.-body js/document))
         (.-scrollLeft (.-documentElement js/document))
         (- (.-offsetLeft (.getElementById js/document "main")))) 
   :y (+ (.-clientY e) 
         (.-scrollTop (.-body js/document))
         (.-scrollTop (.-documentElement js/document))
         (- (.-offsetTop (.getElementById js/document "main"))))})

(defn handle-start-drag [e]
  (let [{mx :x my :y} (mouse-pos e)
        clicked-node
        (first (remove nil?
                 (map-indexed 
                   (fn [i node]
                     (if (mouseover? mx my node)
                       i nil)) @nodes)))]
    (when clicked-node
      (reset! (cursor state [:ui :drag])
              {:start {:x mx :y my}
               :dragging clicked-node
               }))
    (println clicked-node)
    ))

(defn handle-drag [e]
  (when @(cursor state [:ui :drag])
    (let [startx @(cursor state [:ui :drag :start :x])
          starty @(cursor state [:ui :drag :start :y])
          x (.-clientX e)
          y (.-clientY e)
          drag-index @(cursor state [:ui :drag :dragging])]
      (swap! nodes update-in [drag-index :position :x] + (- x startx))
      (swap! nodes update-in [drag-index :position :y] + (- y starty))
      (reset! (cursor state [:ui :drag :start]) {:x x :y y})      
      (println "hello")
      )))


(defn resize [e]
  (let [canvas (.getElementById js/document "main")]
    (set! (.-width canvas) (.-offsetWidth canvas))
    (set! (.-height canvas) (.-innerHeight js/window))
    (draw-app)
  ))

(defn canvas
  [x y z]  
     (r/create-class
       {:component-will-mount
        #(set! 
           (.-onresize js/window)
           resize)
        :component-did-mount
        #(do (draw-app) (resize %))
        :component-did-update
        draw-app
        ; :component-will-mount
        :display-name  "my-component"
        :reagent-render
        (fn [] [:canvas#main 
                {:data-nodes @nodes
                 :on-mouse-down handle-start-drag
                 :on-mouse-move handle-drag
                 :on-mouse-up #(reset! (cursor state [:ui :drag]) nil)
                 :style {:width "100%"}
                 }])}))

(defn app []
  [:div
   [canvas]
   [:p (str @(cursor state [:ui :drag]))]
   ])


(defn reload [] 
  (r/render-component
	[app] 
	(.getElementById js/document "app")))

(defn ^:export main []
  (reload))
