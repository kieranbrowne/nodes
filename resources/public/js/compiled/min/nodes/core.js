// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('nodes.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(cljs.core.truth_(goog.DEBUG)){
cljs.core.enable_console_print_BANG_();
} else {
}
nodes.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"blah",cljs.core.cst$kw$name,"Dennis",cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(50),cljs.core.cst$kw$y,(50)], null),cljs.core.cst$kw$connections,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Harry","Timothy"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"blah",cljs.core.cst$kw$name,"Harry",cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(30),cljs.core.cst$kw$y,(90)], null),cljs.core.cst$kw$connections,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"blah",cljs.core.cst$kw$name,"Timothy",cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(120),cljs.core.cst$kw$y,(90)], null),cljs.core.cst$kw$connections,cljs.core.PersistentVector.EMPTY], null)], null),cljs.core.cst$kw$ui,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$frame_DASH_count,(0),cljs.core.cst$kw$drag,null,cljs.core.cst$kw$cursor,"normal"], null)], null));
nodes.core.nodes = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes], null));
nodes.core.ui_cursor = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$cursor], null));
nodes.core.frame_count = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$frame_DASH_count], null));
nodes.core.get_node_by = (function nodes$core$get_node_by(k,v){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12966_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(p1__12966_SHARP_) : k.call(null,p1__12966_SHARP_)),v);
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes))));
});
nodes.core.between = (function nodes$core$between(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(b) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(a)),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(b) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(a))], null);
});
nodes.core.out_pos = (function nodes$core$out_pos(pos){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$x,cljs.core._PLUS_,(10)),cljs.core.cst$kw$y,cljs.core._PLUS_,(20));
});
nodes.core.abs = (function nodes$core$abs(p1__12967_SHARP_){
if(((0) > p1__12967_SHARP_)){
return (- p1__12967_SHARP_);
} else {
return p1__12967_SHARP_;
}
});
nodes.core.draw_link = (function nodes$core$draw_link(ctx,out_node,in_node){
var map__12974 = nodes.core.out_pos(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(out_node));
var map__12974__$1 = ((((!((map__12974 == null)))?((((map__12974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12974):map__12974);
var ax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12974__$1,cljs.core.cst$kw$x);
var ay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12974__$1,cljs.core.cst$kw$y);
var map__12975 = nodes.core.between(nodes.core.out_pos(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(out_node)),cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(in_node));
var map__12975__$1 = ((((!((map__12975 == null)))?((((map__12975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12975):map__12975);
var mx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$x);
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12975__$1,cljs.core.cst$kw$y);
var map__12976 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(in_node);
var map__12976__$1 = ((((!((map__12976 == null)))?((((map__12976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12976):map__12976);
var bx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12976__$1,cljs.core.cst$kw$x);
var by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12976__$1,cljs.core.cst$kw$y);
ctx.beginPath();

ctx.moveTo(ax,ay);

ctx.bezierCurveTo(ax,by,((10) + bx),ay,((10) + bx),by);

return ctx.stroke();
});
nodes.core.draw_node = (function nodes$core$draw_node(ctx,node_def){
var map__12986 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node_def);
var map__12986__$1 = ((((!((map__12986 == null)))?((((map__12986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12986):map__12986);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12986__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12986__$1,cljs.core.cst$kw$y);
ctx.fillStyle = "rgb(200,200,200)";

ctx.fillRect(x,y,(70),(20));

ctx.fillStyle = "rgb(80,80,80)";

ctx.font = "15px Arial";

ctx.fillText(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(node_def),((5) + x),((16) + y));

var seq__12988 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nodes.core.get_node_by,cljs.core.cst$kw$name),cljs.core.cst$kw$connections.cljs$core$IFn$_invoke$arity$1(node_def)));
var chunk__12989 = null;
var count__12990 = (0);
var i__12991 = (0);
while(true){
if((i__12991 < count__12990)){
var conn = chunk__12989.cljs$core$IIndexed$_nth$arity$2(null,i__12991);
ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));

ctx.strokeStyle = "rgb(180,180,180)";

nodes.core.draw_link(ctx,node_def,conn);

ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null)));

ctx.strokeStyle = "rgb(130,130,130)";

nodes.core.draw_link(ctx,node_def,conn);

var G__12992 = seq__12988;
var G__12993 = chunk__12989;
var G__12994 = count__12990;
var G__12995 = (i__12991 + (1));
seq__12988 = G__12992;
chunk__12989 = G__12993;
count__12990 = G__12994;
i__12991 = G__12995;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12988);
if(temp__4657__auto__){
var seq__12988__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12988__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__12988__$1);
var G__12996 = cljs.core.chunk_rest(seq__12988__$1);
var G__12997 = c__7220__auto__;
var G__12998 = cljs.core.count(c__7220__auto__);
var G__12999 = (0);
seq__12988 = G__12996;
chunk__12989 = G__12997;
count__12990 = G__12998;
i__12991 = G__12999;
continue;
} else {
var conn = cljs.core.first(seq__12988__$1);
ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));

ctx.strokeStyle = "rgb(180,180,180)";

nodes.core.draw_link(ctx,node_def,conn);

ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null)));

ctx.strokeStyle = "rgb(130,130,130)";

nodes.core.draw_link(ctx,node_def,conn);

var G__13000 = cljs.core.next(seq__12988__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12988 = G__13000;
chunk__12989 = G__13001;
count__12990 = G__13002;
i__12991 = G__13003;
continue;
}
} else {
return null;
}
}
break;
}
});
nodes.core.draw_app = (function nodes$core$draw_app(){
var canvas = document.getElementById("main");
var ctx = canvas.getContext("2d");
ctx.clearRect((0),(0),canvas.width,canvas.height);

ctx.fillStyle = "rgb(200,200,200)";

ctx.lineWidth = "2";

ctx.lineDashOffset = (- cljs.core.mod((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.frame_count) : cljs.core.deref.call(null,nodes.core.frame_count)),(16)));

var seq__13010_13016 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes)));
var chunk__13011_13017 = null;
var count__13012_13018 = (0);
var i__13013_13019 = (0);
while(true){
if((i__13013_13019 < count__13012_13018)){
var node_13020 = chunk__13011_13017.cljs$core$IIndexed$_nth$arity$2(null,i__13013_13019);
nodes.core.draw_node(ctx,node_13020);

var G__13021 = seq__13010_13016;
var G__13022 = chunk__13011_13017;
var G__13023 = count__13012_13018;
var G__13024 = (i__13013_13019 + (1));
seq__13010_13016 = G__13021;
chunk__13011_13017 = G__13022;
count__13012_13018 = G__13023;
i__13013_13019 = G__13024;
continue;
} else {
var temp__4657__auto___13025 = cljs.core.seq(seq__13010_13016);
if(temp__4657__auto___13025){
var seq__13010_13026__$1 = temp__4657__auto___13025;
if(cljs.core.chunked_seq_QMARK_(seq__13010_13026__$1)){
var c__7220__auto___13027 = cljs.core.chunk_first(seq__13010_13026__$1);
var G__13028 = cljs.core.chunk_rest(seq__13010_13026__$1);
var G__13029 = c__7220__auto___13027;
var G__13030 = cljs.core.count(c__7220__auto___13027);
var G__13031 = (0);
seq__13010_13016 = G__13028;
chunk__13011_13017 = G__13029;
count__13012_13018 = G__13030;
i__13013_13019 = G__13031;
continue;
} else {
var node_13032 = cljs.core.first(seq__13010_13026__$1);
nodes.core.draw_node(ctx,node_13032);

var G__13033 = cljs.core.next(seq__13010_13026__$1);
var G__13034 = null;
var G__13035 = (0);
var G__13036 = (0);
seq__13010_13016 = G__13033;
chunk__13011_13017 = G__13034;
count__13012_13018 = G__13035;
i__13013_13019 = G__13036;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nodes.core.frame_count,cljs.core.inc);

var G__13014 = ((function (canvas,ctx){
return (function (){
return window.requestAnimationFrame(nodes$core$draw_app);
});})(canvas,ctx))
;
var G__13015 = (30);
return setTimeout(G__13014,G__13015);
});
nodes.core.mouseover_QMARK_ = (function nodes$core$mouseover_QMARK_(mx,my,node){
var x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node));
var y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node));
return ((mx > x)) && ((my > y)) && ((mx < ((70) + x))) && ((my < ((20) + y)));
});
nodes.core.mouse_pos = (function nodes$core$mouse_pos(e){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(((e.clientX + document.body.scrollLeft) + document.documentElement.scrollLeft) + (- document.getElementById("main").offsetLeft)),cljs.core.cst$kw$y,(((e.clientY + document.body.scrollTop) + document.documentElement.scrollTop) + (- document.getElementById("main").offsetTop))], null);
});
nodes.core.handle_start_drag = (function nodes$core$handle_start_drag(e){
var map__13041 = nodes.core.mouse_pos(e);
var map__13041__$1 = ((((!((map__13041 == null)))?((((map__13041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13041):map__13041);
var mx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13041__$1,cljs.core.cst$kw$x);
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13041__$1,cljs.core.cst$kw$y);
var clicked_node = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__13041,map__13041__$1,mx,my){
return (function (i,node){
if(cljs.core.truth_(nodes.core.mouseover_QMARK_(mx,my,node))){
return i;
} else {
return null;
}
});})(map__13041,map__13041__$1,mx,my))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes)))));
if(cljs.core.truth_(clicked_node)){
var G__13043 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
var G__13044 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,mx,cljs.core.cst$kw$y,my], null),cljs.core.cst$kw$dragging,clicked_node], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13043,G__13044) : cljs.core.reset_BANG_.call(null,G__13043,G__13044));
} else {
return null;
}
});
nodes.core.handle_drag = (function nodes$core$handle_drag(e){
if(cljs.core.truth_((function (){var G__13051 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13051) : cljs.core.deref.call(null,G__13051));
})())){
var startx = (function (){var G__13052 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag,cljs.core.cst$kw$start,cljs.core.cst$kw$x], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13052) : cljs.core.deref.call(null,G__13052));
})();
var starty = (function (){var G__13053 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag,cljs.core.cst$kw$start,cljs.core.cst$kw$y], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13053) : cljs.core.deref.call(null,G__13053));
})();
var x = e.clientX;
var y = e.clientY;
var drag_index = (function (){var G__13054 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag,cljs.core.cst$kw$dragging], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13054) : cljs.core.deref.call(null,G__13054));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nodes.core.nodes,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_index,cljs.core.cst$kw$position,cljs.core.cst$kw$x], null),cljs.core._PLUS_,cljs.core.array_seq([(x - startx)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nodes.core.nodes,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_index,cljs.core.cst$kw$position,cljs.core.cst$kw$y], null),cljs.core._PLUS_,cljs.core.array_seq([(y - starty)], 0));

var G__13055 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag,cljs.core.cst$kw$start], null));
var G__13056 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13055,G__13056) : cljs.core.reset_BANG_.call(null,G__13055,G__13056));
} else {
return null;
}
});
nodes.core.handle_mouse_move = (function nodes$core$handle_mouse_move(e){
var map__13063 = nodes.core.mouse_pos(e);
var map__13063__$1 = ((((!((map__13063 == null)))?((((map__13063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13063):map__13063);
var mx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,cljs.core.cst$kw$x);
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,cljs.core.cst$kw$y);
var G__13065 = nodes.core.ui_cursor;
var G__13066 = ((!(((function (){var G__13067 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13067) : cljs.core.deref.call(null,G__13067));
})() == null)))?(function (){
nodes.core.handle_drag(e);

return "grabbing";
})()
:(cljs.core.truth_(cljs.core.some(((function (G__13065,map__13063,map__13063__$1,mx,my){
return (function (p1__13057_SHARP_){
return nodes.core.mouseover_QMARK_(mx,my,p1__13057_SHARP_);
});})(G__13065,map__13063,map__13063__$1,mx,my))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes))))?"grab":"normal"
));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13065,G__13066) : cljs.core.reset_BANG_.call(null,G__13065,G__13066));
});
nodes.core.resize = (function nodes$core$resize(e){
var canvas = document.getElementById("main");
canvas.width = window.innerWidth;

return canvas.height = window.innerHeight;
});
nodes.core.canvas = (function nodes$core$canvas(x,y,z){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_will_DASH_mount,(function (){
return window.onresize = nodes.core.resize;
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__13068_SHARP_){
nodes.core.draw_app();

return nodes.core.resize(p1__13068_SHARP_);
}),cljs.core.cst$kw$display_DASH_name,"my-component",cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas_SHARP_main,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data_DASH_cursor,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.ui_cursor) : cljs.core.deref.call(null,nodes.core.ui_cursor)),cljs.core.cst$kw$data_DASH_nodes,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes)),cljs.core.cst$kw$on_DASH_mouse_DASH_down,nodes.core.handle_start_drag,cljs.core.cst$kw$on_DASH_mouse_DASH_move,nodes.core.handle_mouse_move,cljs.core.cst$kw$on_DASH_mouse_DASH_up,(function (){
var G__13071 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
var G__13072 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13071,G__13072) : cljs.core.reset_BANG_.call(null,G__13071,G__13072));
})], null)], null);
})], null));
});
nodes.core.app = (function nodes$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes.core.canvas], null)], null);
});
nodes.core.reload = (function nodes$core$reload(){
var G__13075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes.core.app], null);
var G__13076 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13075,G__13076) : reagent.core.render_component.call(null,G__13075,G__13076));
});
nodes.core.main = (function nodes$core$main(){
return nodes.core.reload();
});
goog.exportSymbol('nodes.core.main', nodes.core.main);
