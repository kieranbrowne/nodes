// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('nodes.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(cljs.core.truth_(goog.DEBUG)){
cljs.core.enable_console_print_BANG_();
} else {
}
if(typeof nodes.core.state !== 'undefined'){
} else {
nodes.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"blah",cljs.core.cst$kw$name,"Dennis",cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(50),cljs.core.cst$kw$y,(50)], null),cljs.core.cst$kw$connections,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Harry","Timothy"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"blah",cljs.core.cst$kw$name,"Harry",cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(30),cljs.core.cst$kw$y,(130)], null),cljs.core.cst$kw$connections,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"blah",cljs.core.cst$kw$name,"Timothy",cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(120),cljs.core.cst$kw$y,(130)], null),cljs.core.cst$kw$connections,cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"blah",cljs.core.cst$kw$name,"Sarah",cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(200)], null),cljs.core.cst$kw$connections,cljs.core.PersistentVector.EMPTY], null)], null),cljs.core.cst$kw$ui,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$frame_DASH_count,(0),cljs.core.cst$kw$drag,null,cljs.core.cst$kw$connect,null,cljs.core.cst$kw$cursor,"normal"], null)], null));
}
nodes.core.node_spec = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$w,(70),cljs.core.cst$kw$h,(30)], null);
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
nodes.core.outlet = (function nodes$core$outlet(pos){
var map__12969 = nodes.core.node_spec;
var map__12969__$1 = ((((!((map__12969 == null)))?((((map__12969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12969):map__12969);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12969__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12969__$1,cljs.core.cst$kw$h);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$x,cljs.core._PLUS_,(8)),cljs.core.cst$kw$y,cljs.core._PLUS_,h);
});
nodes.core.inlet = (function nodes$core$inlet(pos){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,cljs.core.cst$kw$x,cljs.core._PLUS_,(1));
});
nodes.core.abs = (function nodes$core$abs(p1__12971_SHARP_){
if(((0) > p1__12971_SHARP_)){
return (- p1__12971_SHARP_);
} else {
return p1__12971_SHARP_;
}
});
nodes.core.draw_link = (function nodes$core$draw_link(ctx,a,b){
var map__12976 = a;
var map__12976__$1 = ((((!((map__12976 == null)))?((((map__12976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12976):map__12976);
var ax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12976__$1,cljs.core.cst$kw$x);
var ay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12976__$1,cljs.core.cst$kw$y);
var map__12977 = b;
var map__12977__$1 = ((((!((map__12977 == null)))?((((map__12977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12977):map__12977);
var bx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12977__$1,cljs.core.cst$kw$x);
var by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12977__$1,cljs.core.cst$kw$y);
var draw_link_path = ((function (map__12976,map__12976__$1,ax,ay,map__12977,map__12977__$1,bx,by){
return (function (){
ctx.beginPath();

ctx.moveTo(ax,ay);

ctx.bezierCurveTo(ax,by,bx,ay,bx,by);

return ctx.stroke();
});})(map__12976,map__12976__$1,ax,ay,map__12977,map__12977__$1,bx,by))
;
ctx.lineWidth = "2";

ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));

ctx.strokeStyle = "rgb(180,180,180)";

draw_link_path();

ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null)));

ctx.strokeStyle = "rgb(130,130,130)";

return draw_link_path();
});
nodes.core.draw_outlet = (function nodes$core$draw_outlet(ctx,node_def,connected_QMARK_){
var map__12984 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node_def);
var map__12984__$1 = ((((!((map__12984 == null)))?((((map__12984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12984):map__12984);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12984__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12984__$1,cljs.core.cst$kw$y);
var map__12985 = nodes.core.node_spec;
var map__12985__$1 = ((((!((map__12985 == null)))?((((map__12985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12985):map__12985);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12985__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12985__$1,cljs.core.cst$kw$h);
ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));

ctx.beginPath();

ctx.arc(((8) + x),(y + h),(7),Math.PI,false);

ctx.strokeStyle = "rgb(200,200,200)";

ctx.stroke();

if(cljs.core.truth_(connected_QMARK_)){
ctx.fillStyle = "rgb(150,150,150)";

return ctx.fill();
} else {
return null;
}
});
nodes.core.draw_node = (function nodes$core$draw_node(ctx,node_def){
var map__12996 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node_def);
var map__12996__$1 = ((((!((map__12996 == null)))?((((map__12996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12996):map__12996);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12996__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12996__$1,cljs.core.cst$kw$y);
var map__12997 = nodes.core.node_spec;
var map__12997__$1 = ((((!((map__12997 == null)))?((((map__12997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12997):map__12997);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12997__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12997__$1,cljs.core.cst$kw$h);
ctx.fillStyle = "rgb(140,140,170)";

ctx.fillRect(x,((2) + y),w,h);

ctx.fillStyle = "rgb(255,255,255)";

ctx.shadowColor = "#aaa";

ctx.shadowBlur = (3);

ctx.shadowOffsetY = (1);

ctx.fillRect(x,y,w,h);

ctx.shadowOffsetY = (0);

ctx.shadowBlur = (0);

ctx.fillStyle = "rgb(130,130,130)";

ctx.font = "14px Arial";

ctx.fillText(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(node_def),((5) + x),((19) + y));

nodes.core.draw_outlet(ctx,node_def,!(cljs.core.empty_QMARK_(cljs.core.cst$kw$connections.cljs$core$IFn$_invoke$arity$1(node_def))));

var seq__13000 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nodes.core.get_node_by,cljs.core.cst$kw$name),cljs.core.cst$kw$connections.cljs$core$IFn$_invoke$arity$1(node_def)));
var chunk__13001 = null;
var count__13002 = (0);
var i__13003 = (0);
while(true){
if((i__13003 < count__13002)){
var conn = chunk__13001.cljs$core$IIndexed$_nth$arity$2(null,i__13003);
ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));

ctx.strokeStyle = "rgb(180,180,180)";

nodes.core.draw_link(ctx,nodes.core.outlet(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node_def)),nodes.core.inlet(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(conn)));

ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null)));

ctx.strokeStyle = "rgb(130,130,130)";

nodes.core.draw_link(ctx,nodes.core.outlet(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node_def)),nodes.core.inlet(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(conn)));

var G__13004 = seq__13000;
var G__13005 = chunk__13001;
var G__13006 = count__13002;
var G__13007 = (i__13003 + (1));
seq__13000 = G__13004;
chunk__13001 = G__13005;
count__13002 = G__13006;
i__13003 = G__13007;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13000);
if(temp__4657__auto__){
var seq__13000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13000__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__13000__$1);
var G__13008 = cljs.core.chunk_rest(seq__13000__$1);
var G__13009 = c__7220__auto__;
var G__13010 = cljs.core.count(c__7220__auto__);
var G__13011 = (0);
seq__13000 = G__13008;
chunk__13001 = G__13009;
count__13002 = G__13010;
i__13003 = G__13011;
continue;
} else {
var conn = cljs.core.first(seq__13000__$1);
ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));

ctx.strokeStyle = "rgb(180,180,180)";

nodes.core.draw_link(ctx,nodes.core.outlet(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node_def)),nodes.core.inlet(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(conn)));

ctx.setLineDash(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null)));

ctx.strokeStyle = "rgb(130,130,130)";

nodes.core.draw_link(ctx,nodes.core.outlet(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node_def)),nodes.core.inlet(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(conn)));

var G__13012 = cljs.core.next(seq__13000__$1);
var G__13013 = null;
var G__13014 = (0);
var G__13015 = (0);
seq__13000 = G__13012;
chunk__13001 = G__13013;
count__13002 = G__13014;
i__13003 = G__13015;
continue;
}
} else {
return null;
}
}
break;
}
});
nodes.core.draw_node_inverse = (function nodes$core$draw_node_inverse(ctx,node_def){
var map__13020 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node_def);
var map__13020__$1 = ((((!((map__13020 == null)))?((((map__13020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13020):map__13020);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13020__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13020__$1,cljs.core.cst$kw$y);
var map__13021 = nodes.core.node_spec;
var map__13021__$1 = ((((!((map__13021 == null)))?((((map__13021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13021):map__13021);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13021__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13021__$1,cljs.core.cst$kw$h);
ctx.fillStyle = "rgb(140,140,170)";

ctx.fillRect(x,y,w,h);

ctx.fillStyle = "rgb(255,255,255)";

ctx.font = "14px Arial";

return ctx.fillText(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(node_def),((5) + x),((19) + y));
});
nodes.core.draw_app = (function nodes$core$draw_app(){
var canvas = document.getElementById("main");
var ctx = canvas.getContext("2d");
ctx.clearRect((0),(0),canvas.width,canvas.height);

ctx.fillStyle = "rgb(200,200,200)";

ctx.lineDashOffset = (- cljs.core.mod((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.frame_count) : cljs.core.deref.call(null,nodes.core.frame_count)),(16)));

var seq__13034_13044 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes)));
var chunk__13035_13045 = null;
var count__13036_13046 = (0);
var i__13037_13047 = (0);
while(true){
if((i__13037_13047 < count__13036_13046)){
var node_13048 = chunk__13035_13045.cljs$core$IIndexed$_nth$arity$2(null,i__13037_13047);
nodes.core.draw_node(ctx,node_13048);

var G__13049 = seq__13034_13044;
var G__13050 = chunk__13035_13045;
var G__13051 = count__13036_13046;
var G__13052 = (i__13037_13047 + (1));
seq__13034_13044 = G__13049;
chunk__13035_13045 = G__13050;
count__13036_13046 = G__13051;
i__13037_13047 = G__13052;
continue;
} else {
var temp__4657__auto___13053 = cljs.core.seq(seq__13034_13044);
if(temp__4657__auto___13053){
var seq__13034_13054__$1 = temp__4657__auto___13053;
if(cljs.core.chunked_seq_QMARK_(seq__13034_13054__$1)){
var c__7220__auto___13055 = cljs.core.chunk_first(seq__13034_13054__$1);
var G__13056 = cljs.core.chunk_rest(seq__13034_13054__$1);
var G__13057 = c__7220__auto___13055;
var G__13058 = cljs.core.count(c__7220__auto___13055);
var G__13059 = (0);
seq__13034_13044 = G__13056;
chunk__13035_13045 = G__13057;
count__13036_13046 = G__13058;
i__13037_13047 = G__13059;
continue;
} else {
var node_13060 = cljs.core.first(seq__13034_13054__$1);
nodes.core.draw_node(ctx,node_13060);

var G__13061 = cljs.core.next(seq__13034_13054__$1);
var G__13062 = null;
var G__13063 = (0);
var G__13064 = (0);
seq__13034_13044 = G__13061;
chunk__13035_13045 = G__13062;
count__13036_13046 = G__13063;
i__13037_13047 = G__13064;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var G__13038 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13038) : cljs.core.deref.call(null,G__13038));
})())){
nodes.core.draw_link(ctx,nodes.core.outlet((function (){var G__13039 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect,cljs.core.cst$kw$from,cljs.core.cst$kw$position], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13039) : cljs.core.deref.call(null,G__13039));
})()),(function (){var G__13040 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect,cljs.core.cst$kw$to,cljs.core.cst$kw$position], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13040) : cljs.core.deref.call(null,G__13040));
})());

nodes.core.draw_outlet(ctx,(function (){var G__13041 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect,cljs.core.cst$kw$from], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13041) : cljs.core.deref.call(null,G__13041));
})(),true);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nodes.core.frame_count,cljs.core.inc);

var G__13042 = ((function (canvas,ctx){
return (function (){
return window.requestAnimationFrame(nodes$core$draw_app);
});})(canvas,ctx))
;
var G__13043 = (30);
return setTimeout(G__13042,G__13043);
});
nodes.core.mouseover_QMARK_ = (function nodes$core$mouseover_QMARK_(mx,my,node){
var map__13069 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node);
var map__13069__$1 = ((((!((map__13069 == null)))?((((map__13069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13069):map__13069);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13069__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13069__$1,cljs.core.cst$kw$y);
var map__13070 = nodes.core.node_spec;
var map__13070__$1 = ((((!((map__13070 == null)))?((((map__13070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13070):map__13070);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13070__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13070__$1,cljs.core.cst$kw$h);
return ((mx > x)) && ((my > y)) && ((mx < (w + x))) && ((my < (h + y)));
});
nodes.core.mouseover_outlet_QMARK_ = (function nodes$core$mouseover_outlet_QMARK_(mx,my,node){
var map__13077 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node);
var map__13077__$1 = ((((!((map__13077 == null)))?((((map__13077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13077):map__13077);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13077__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13077__$1,cljs.core.cst$kw$y);
var map__13078 = nodes.core.node_spec;
var map__13078__$1 = ((((!((map__13078 == null)))?((((map__13078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13078):map__13078);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13078__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13078__$1,cljs.core.cst$kw$h);
return ((mx > x)) && ((my > ((20) + y))) && ((mx < ((17) + x))) && ((my < (h + y)));
});
nodes.core.mouse_pos = (function nodes$core$mouse_pos(e){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(((e.clientX + document.body.scrollLeft) + document.documentElement.scrollLeft) + (- document.getElementById("main").offsetLeft)),cljs.core.cst$kw$y,(((e.clientY + document.body.scrollTop) + document.documentElement.scrollTop) + (- document.getElementById("main").offsetTop))], null);
});
nodes.core.handle_start_drag = (function nodes$core$handle_start_drag(e){
var map__13091 = nodes.core.mouse_pos(e);
var map__13091__$1 = ((((!((map__13091 == null)))?((((map__13091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13091):map__13091);
var mx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13091__$1,cljs.core.cst$kw$x);
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13091__$1,cljs.core.cst$kw$y);
var clicked_outlet = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13091,map__13091__$1,mx,my){
return (function (p1__13081_SHARP_){
return nodes.core.mouseover_outlet_QMARK_(mx,my,p1__13081_SHARP_);
});})(map__13091,map__13091__$1,mx,my))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes))));
var map__13092 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__13091,map__13091__$1,mx,my,clicked_outlet){
return (function (p1__13082_SHARP_){
return (cljs.core.cst$kw$i.cljs$core$IFn$_invoke$arity$1(p1__13082_SHARP_) == null);
});})(map__13091,map__13091__$1,mx,my,clicked_outlet))
,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__13091,map__13091__$1,mx,my,clicked_outlet){
return (function (i,node){
if(cljs.core.truth_(nodes.core.mouseover_QMARK_(mx,my,node))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$i,i,cljs.core.cst$kw$node,node], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$i,null,cljs.core.cst$kw$node,null], null);
}
});})(map__13091,map__13091__$1,mx,my,clicked_outlet))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes)))));
var map__13092__$1 = ((((!((map__13092 == null)))?((((map__13092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13092):map__13092);
var drag_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.cst$kw$i);
var clicked_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.cst$kw$node);
if(cljs.core.truth_(clicked_outlet)){
var G__13095_13099 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect], null));
var G__13096_13100 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,clicked_outlet,cljs.core.cst$kw$to,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,mx,cljs.core.cst$kw$y,my], null)], null)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13095_13099,G__13096_13100) : cljs.core.reset_BANG_.call(null,G__13095_13099,G__13096_13100));
} else {
}

if(cljs.core.truth_((function (){var and__6397__auto__ = clicked_node;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not(clicked_outlet);
} else {
return and__6397__auto__;
}
})())){
var G__13097 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
var G__13098 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,mx,cljs.core.cst$kw$y,my], null),cljs.core.cst$kw$dragging,drag_index], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13097,G__13098) : cljs.core.reset_BANG_.call(null,G__13097,G__13098));
} else {
return null;
}
});
nodes.core.handle_drag = (function nodes$core$handle_drag(e){
if(cljs.core.truth_((function (){var G__13107 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13107) : cljs.core.deref.call(null,G__13107));
})())){
var startx = (function (){var G__13108 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag,cljs.core.cst$kw$start,cljs.core.cst$kw$x], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13108) : cljs.core.deref.call(null,G__13108));
})();
var starty = (function (){var G__13109 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag,cljs.core.cst$kw$start,cljs.core.cst$kw$y], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13109) : cljs.core.deref.call(null,G__13109));
})();
var x = e.clientX;
var y = e.clientY;
var drag_index = (function (){var G__13110 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag,cljs.core.cst$kw$dragging], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13110) : cljs.core.deref.call(null,G__13110));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nodes.core.nodes,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_index,cljs.core.cst$kw$position,cljs.core.cst$kw$x], null),cljs.core._PLUS_,cljs.core.array_seq([(x - startx)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nodes.core.nodes,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_index,cljs.core.cst$kw$position,cljs.core.cst$kw$y], null),cljs.core._PLUS_,cljs.core.array_seq([(y - starty)], 0));

var G__13111 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag,cljs.core.cst$kw$start], null));
var G__13112 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13111,G__13112) : cljs.core.reset_BANG_.call(null,G__13111,G__13112));
} else {
return null;
}
});
nodes.core.handle_connect = (function nodes$core$handle_connect(e){
if(cljs.core.truth_((function (){var G__13121 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13121) : cljs.core.deref.call(null,G__13121));
})())){
var mx = e.clientX;
var my = e.clientY;
var connectee = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (mx,my){
return (function (p1__13113_SHARP_){
return nodes.core.mouseover_QMARK_(mx,my,p1__13113_SHARP_);
});})(mx,my))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes))));
var G__13122 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect,cljs.core.cst$kw$to], null));
var G__13123 = ((((connectee == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(connectee,(function (){var G__13126 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect,cljs.core.cst$kw$from], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13126) : cljs.core.deref.call(null,G__13126));
})())) || (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nodes.core.get_node_by,cljs.core.cst$kw$name),(function (){var G__13127 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect,cljs.core.cst$kw$from,cljs.core.cst$kw$connections], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13127) : cljs.core.deref.call(null,G__13127));
})())),connectee)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,mx,cljs.core.cst$kw$y,my], null)], null):connectee);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13122,G__13123) : cljs.core.reset_BANG_.call(null,G__13122,G__13123));
} else {
return null;
}
});
nodes.core.handle_mouse_move = (function nodes$core$handle_mouse_move(e){
var map__13136 = nodes.core.mouse_pos(e);
var map__13136__$1 = ((((!((map__13136 == null)))?((((map__13136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13136):map__13136);
var mx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13136__$1,cljs.core.cst$kw$x);
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13136__$1,cljs.core.cst$kw$y);
var G__13138 = nodes.core.ui_cursor;
var G__13139 = ((!(((function (){var G__13140 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13140) : cljs.core.deref.call(null,G__13140));
})() == null)))?(function (){
nodes.core.handle_connect(e);

return "cell";
})()
:((!(((function (){var G__13141 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13141) : cljs.core.deref.call(null,G__13141));
})() == null)))?(function (){
nodes.core.handle_drag(e);

return "grabbing";
})()
:(cljs.core.truth_(cljs.core.some(((function (G__13138,map__13136,map__13136__$1,mx,my){
return (function (p1__13128_SHARP_){
return nodes.core.mouseover_outlet_QMARK_(mx,my,p1__13128_SHARP_);
});})(G__13138,map__13136,map__13136__$1,mx,my))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes))))?"cell":(cljs.core.truth_(cljs.core.some(((function (G__13138,map__13136,map__13136__$1,mx,my){
return (function (p1__13129_SHARP_){
return nodes.core.mouseover_QMARK_(mx,my,p1__13129_SHARP_);
});})(G__13138,map__13136,map__13136__$1,mx,my))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes))))?"grab":"normal"
))));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13138,G__13139) : cljs.core.reset_BANG_.call(null,G__13138,G__13139));
});
nodes.core.handle_mouse_up = (function nodes$core$handle_mouse_up(e){
var map__13151 = nodes.core.mouse_pos(e);
var map__13151__$1 = ((((!((map__13151 == null)))?((((map__13151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13151):map__13151);
var mx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13151__$1,cljs.core.cst$kw$x);
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13151__$1,cljs.core.cst$kw$y);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(nodes.core.ui_cursor,"normal") : cljs.core.reset_BANG_.call(null,nodes.core.ui_cursor,"normal"));

if(((function (){var G__13153 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect,cljs.core.cst$kw$to,cljs.core.cst$kw$name], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13153) : cljs.core.deref.call(null,G__13153));
})() == null)){
} else {
var connect_state_13160 = (function (){var G__13154 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13154) : cljs.core.deref.call(null,G__13154));
})();
var from_index_13161 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes)).indexOf(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(connect_state_13160));
var to_name_13162 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(connect_state_13160));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nodes.core.nodes,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_index_13161,cljs.core.cst$kw$connections], null),cljs.core.conj,cljs.core.array_seq([to_name_13162], 0));
}

var G__13155_13163 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$connect], null));
var G__13156_13164 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13155_13163,G__13156_13164) : cljs.core.reset_BANG_.call(null,G__13155_13163,G__13156_13164));

if(((function (){var G__13157 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13157) : cljs.core.deref.call(null,G__13157));
})() == null)){
return null;
} else {
var G__13158 = reagent.core.cursor(nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag], null));
var G__13159 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13158,G__13159) : cljs.core.reset_BANG_.call(null,G__13158,G__13159));
}
});
nodes.core.resize = (function nodes$core$resize(e){
var canvas = document.getElementById("main");
canvas.width = window.innerWidth;

return canvas.height = window.innerHeight;
});
nodes.core.canvas = (function nodes$core$canvas(x,y,z){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_will_DASH_mount,(function (){
return window.onresize = nodes.core.resize;
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__13165_SHARP_){
nodes.core.draw_app();

return nodes.core.resize(p1__13165_SHARP_);
}),cljs.core.cst$kw$display_DASH_name,"my-component",cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas_SHARP_main,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data_DASH_cursor,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.ui_cursor) : cljs.core.deref.call(null,nodes.core.ui_cursor)),cljs.core.cst$kw$data_DASH_nodes,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes.core.nodes) : cljs.core.deref.call(null,nodes.core.nodes)),cljs.core.cst$kw$on_DASH_mouse_DASH_down,nodes.core.handle_start_drag,cljs.core.cst$kw$on_DASH_mouse_DASH_move,nodes.core.handle_mouse_move,cljs.core.cst$kw$on_DASH_mouse_DASH_up,nodes.core.handle_mouse_up], null)], null);
})], null));
});
nodes.core.app = (function nodes$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes.core.canvas], null)], null);
});
nodes.core.reload = (function nodes$core$reload(){
var G__13168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes.core.app], null);
var G__13169 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13168,G__13169) : reagent.core.render_component.call(null,G__13168,G__13169));
});
nodes.core.main = (function nodes$core$main(){
return nodes.core.reload();
});
goog.exportSymbol('nodes.core.main', nodes.core.main);
