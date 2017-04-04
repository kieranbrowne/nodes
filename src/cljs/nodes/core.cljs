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
      ]
     :ui {:frame-count 0
          :drag nil
          :cursor "normal"}}
    ))

(def nodes (cursor state [:nodes]))

(def ui-cursor (cursor state [:ui :cursor]))
(def frame-count (cursor state [:ui :frame-count]))

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
    (set! (.-fillStyle ctx) "rgb(200,200,200)")
    (.fillRect ctx x y 70 20)
    (set! (.-fillStyle ctx) "rgb(80,80,80)")
    (set! (.-font ctx) "15px Arial")
    (.fillText ctx (:name node-def) (+ 5 x) (+ 16 y))
    (doseq [conn (map (partial get-node-by :name) 
                      (:connections node-def))]
      (.setLineDash ctx (int-array []))
      (set! (.-strokeStyle ctx) "rgb(180,180,180)")
      (draw-link ctx node-def conn)
      (.setLineDash ctx (int-array [4 4]))
      (set! (.-strokeStyle ctx) "rgb(130,130,130)")
      (draw-link ctx node-def conn)
      )))

(defn draw-app []
  (let [canvas (.getElementById js/document "main")
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (set! (.-fillStyle ctx) "rgb(200,200,200)")
    (set! (.-lineWidth ctx) "2")
    (set! (.-lineDashOffset ctx) (- (mod @frame-count 16)))
    (doseq [node @nodes] (draw-node ctx node))
    (swap! frame-count inc)
    (js/setTimeout
      #(.requestAnimationFrame js/window draw-app) 30)))

(defn mouseover? [mx my node]
  (let [x (:x (:position node))
        y (:y (:position node))]
    (and (> mx x) (> my y)
         (< mx (+ 70 x))
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
      )))

(defn handle-mouse-move [e]
  (let [{mx :x my :y} (mouse-pos e)]
    (reset! 
      ui-cursor
      (cond
        (not (nil? @(cursor state [:ui :drag]))) (do (handle-drag e) "grabbing")
        (some #(mouseover? mx my %) @nodes) "grab"
        true "normal"
        ))))




(defn resize [e]
  (let [canvas (.getElementById js/document "main")]
    ;;(set! (.-width canvas) (.-offsetWidth canvas))
    (set! (.-width canvas) (.-innerWidth js/window))
    (set! (.-height canvas) (.-innerHeight js/window))
    ; (draw-app)
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
        ; :component-did-update
        ; draw-app
        ; :component-will-mount
        :display-name  "my-component"
        :reagent-render
        (fn [] [:canvas#main 
                {
                 :data-cursor @ui-cursor
                 :data-nodes @nodes
                 :on-mouse-down handle-start-drag
                 :on-mouse-move handle-mouse-move
                 :on-mouse-up #(reset! (cursor state [:ui :drag]) nil)
                 ; :style {:width "100%"}
                 }])}))

(defn app []
  [:div
   [canvas]
   ])


(defn reload [] 
  (r/render-component
	[app] 
	(.getElementById js/document "app")))

(defn ^:export main []
  (reload))
