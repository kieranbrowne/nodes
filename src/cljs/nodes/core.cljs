(ns nodes.core
  (:require
   [reagent.core :as r :refer [atom cursor]]
   ;;[nodes.events :as ev]
   ))

(when js/goog.DEBUG
  (enable-console-print!))

(defonce state
  (atom
    {:nodes
     [{:type "blah"
       :name "Dennis"
       :position {:x 50 :y 50}
       :connections ["Harry" "Timothy"]}
      {:type "blah"
       :name "Harry"
       :position {:x 30 :y 130}
       :connections []}
      {:type "blah"
       :name "Timothy"
       :position {:x 120 :y 130}
       :connections []}
      {:type "blah"
       :name "Sarah"
       :position {:x 100 :y 200}
       :connections []}
      ]
     :ui {:frame-count 0
          :drag nil
          :connect nil
          :cursor "normal"}}))


(def node-spec {:w 70 :h 30})

(def nodes (cursor state [:nodes]))

(def ui-cursor (cursor state [:ui :cursor]))
(def frame-count (cursor state [:ui :frame-count]))

(defn get-node-by [k v]
  (first (filter #(= (k %) v) @nodes)))

(defn between [a b]
  {:x (- (:x b) (:x a)) :y (- (:y b) (:y a))})

(defn outlet [pos]
  (let [{w :w h :h} node-spec]
    (-> pos
        (update :x + 8)
        (update :y + h))))

(defn inlet [pos]
  (update pos :x + 1))

(def abs #(if (> 0 %) (- %) %))

(defn draw-link [ctx a b]
  (let [{ax :x ay :y} a
        {bx :x by :y} b
        draw-link-path
        #(do
          (.beginPath ctx)
          (.moveTo ctx ax ay)
          (.bezierCurveTo
           ctx
           ax by
           bx ay
           bx by)
          (.stroke ctx))]

    (set! (.-lineWidth ctx) "2")
    (.setLineDash ctx (int-array []))
    (set! (.-strokeStyle ctx) "rgb(180,180,180)")
    (draw-link-path)
    (.setLineDash ctx (int-array [4 4]))
    (set! (.-strokeStyle ctx) "rgb(130,130,130)")
    (draw-link-path)

))

(defn draw-outlet [ctx node-def connected?]
  (let [{x :x y :y} (:position node-def)
        {w :w h :h} node-spec]
    (.setLineDash ctx (int-array []))
    (.beginPath ctx)
    (.arc ctx (+ 8 x) (+ y h) 7 Math/PI false)
    (set! (.-strokeStyle ctx) "rgb(200,200,200)")
    (.stroke ctx)
    (when connected?
      (set! (.-fillStyle ctx) "rgb(150,150,150)")
      (.fill ctx)
      )))

(defn draw-node [ctx node-def]
  (let [{x :x y :y} (:position node-def)
        {w :w h :h} node-spec]
    (set! (.-fillStyle ctx) "rgb(140,140,170)")
    (.fillRect ctx x (+ 2 y) w h)
    (set! (.-fillStyle ctx) "rgb(255,255,255)")
    (set! (.-shadowColor ctx) "#aaa")
    (set! (.-shadowBlur ctx) 3)
    (set! (.-shadowOffsetY ctx) 1)
    (.fillRect ctx x y w h)
    (set! (.-shadowOffsetY ctx) 0)
    (set! (.-shadowBlur ctx) 0)
    (set! (.-fillStyle ctx) "rgb(130,130,130)")
    (set! (.-font ctx) "14px Arial")
    (.fillText ctx (:name node-def) (+ 5 x) (+ 19 y))
    (draw-outlet ctx node-def (not (empty? (:connections node-def))))
    (doseq [conn (map (partial get-node-by :name)
                      (:connections node-def))]
      (.setLineDash ctx (int-array []))
      (set! (.-strokeStyle ctx) "rgb(180,180,180)")
      (draw-link ctx
                 (outlet (:position node-def))
                 (inlet (:position conn)))
      (.setLineDash ctx (int-array [4 4]))
      (set! (.-strokeStyle ctx) "rgb(130,130,130)")
      (draw-link ctx
                 (outlet (:position node-def))
                 (inlet (:position conn)))
      )))

(defn draw-node-inverse [ctx node-def]
  (let [{x :x y :y} (:position node-def)
        {w :w h :h} node-spec]
    (set! (.-fillStyle ctx) "rgb(140,140,170)")
    (.fillRect ctx x y w h)
    (set! (.-fillStyle ctx) "rgb(255,255,255)")
    (set! (.-font ctx) "14px Arial")
    (.fillText ctx (:name node-def) (+ 5 x) (+ 19 y))))

(defn draw-app []
  (let [canvas (.getElementById js/document "main")
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (set! (.-fillStyle ctx) "rgb(200,200,200)")
    (set! (.-lineDashOffset ctx) (- (mod @frame-count 16)))
    (doseq [node @nodes] (draw-node ctx node))
    (when @(cursor state [:ui :connect])
      (draw-link ctx
                 (outlet @(cursor state [:ui :connect :from :position]))
                 @(cursor state [:ui :connect :to :position]))
      (draw-outlet ctx @(cursor state [:ui :connect :from]) true))
    (swap! frame-count inc)
    (js/setTimeout
      #(.requestAnimationFrame js/window draw-app) 30)))

(defn mouseover? [mx my node]
  (let [{x :x y :y} (:position node)
        {w :w h :h} node-spec]
    (and (> mx x) (> my y)
         (< mx (+ w x))
         (< my (+ h y))
         )))

(defn mouseover-outlet? [mx my node]
  (let [{x :x y :y} (:position node)
        {w :w h :h} node-spec]
    (and (> mx x) (> my (+ 20 y))
         (< mx (+ 17 x))
         (< my (+ h y))
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
        clicked-outlet
        (first (filter #(mouseover-outlet? mx my %) @nodes))
        {drag-index :i clicked-node :node}
        (first (remove #(nil? (:i %))
                 (map-indexed
                   (fn [i node]
                     (if (mouseover? mx my node)
                       {:i i :node node} {:i nil :node nil})) @nodes)))]
    (when clicked-outlet
      (reset! (cursor state [:ui :connect])
              {:from clicked-outlet
               :to {:position {:x mx :y my}}}))
    (when (and clicked-node (not clicked-outlet))
      (reset! (cursor state [:ui :drag])
              {:start {:x mx :y my}
               :dragging drag-index
               }))))

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

(defn handle-connect [e]
  (when @(cursor state [:ui :connect])
    (let [mx (.-clientX e)
          my (.-clientY e)
          connectee (first (filter #(mouseover? mx my %) @nodes))
          ]
      (reset! (cursor state [:ui :connect :to])
              (if (or (nil? connectee)
                      (= connectee @(cursor state [:ui :connect :from]))
                      (contains? (set (map (partial get-node-by :name) @(cursor state [:ui :connect :from :connections]))) connectee)
                      )
                {:position {:x mx :y my}}
                connectee
                  )))))

(defn handle-mouse-move [e]
  (let [{mx :x my :y} (mouse-pos e)]
    (reset!
      ui-cursor
      (cond

        (not (nil? @(cursor state [:ui :connect])))
            (do (handle-connect e) "cell")
        (not (nil? @(cursor state [:ui :drag]))) (do (handle-drag e) "grabbing")
        (some #(mouseover-outlet? mx my %) @nodes) "cell"
        (some #(mouseover? mx my %) @nodes) "grab"
        true "normal"
        ))))


(defn handle-mouse-up [e]
  (let [{mx :x my :y} (mouse-pos e)]
    (reset! ui-cursor "normal")

    (when-not (nil? @(cursor state [:ui :connect :to :name]))
      (let [connect-state @(cursor state [:ui :connect])
            from-index (.indexOf @nodes (:from connect-state))
            to-name (:name (:to connect-state))]
        (swap! nodes update-in [from-index :connections] conj to-name)

        ))
    (reset! (cursor state [:ui :connect]) nil)
    (when-not (nil? @(cursor state [:ui :drag]))
      (reset! (cursor state [:ui :drag]) nil))
    ))




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
                 :on-mouse-up handle-mouse-up
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
