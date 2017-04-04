// Compiled by ClojureScript 1.9.229 {}
goog.provide('nodes.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(cljs.core.truth_(goog.DEBUG)){
cljs.core.enable_console_print_BANG_.call(null);
} else {
}
nodes.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"blah",new cljs.core.Keyword(null,"name","name",1843675177),"Dennis",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Harry","Timothy"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"blah",new cljs.core.Keyword(null,"name","name",1843675177),"Harry",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"blah",new cljs.core.Keyword(null,"name","name",1843675177),"Timothy",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(120),new cljs.core.Keyword(null,"y","y",-1757859776),(90)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drag","drag",449951290),null], null)], null));
nodes.core.nodes = reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null));
nodes.core.get_node_by = (function nodes$core$get_node_by(k,v){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8227_SHARP_){
return cljs.core._EQ_.call(null,k.call(null,p1__8227_SHARP_),v);
}),cljs.core.deref.call(null,nodes.core.nodes)));
});
nodes.core.between = (function nodes$core$between(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a))], null);
});
nodes.core.out_pos = (function nodes$core$out_pos(pos){
return cljs.core.update.call(null,cljs.core.update.call(null,pos,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,(10)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,(20));
});
nodes.core.abs = (function nodes$core$abs(p1__8228_SHARP_){
if(((0) > p1__8228_SHARP_)){
return (- p1__8228_SHARP_);
} else {
return p1__8228_SHARP_;
}
});
nodes.core.draw_link = (function nodes$core$draw_link(ctx,out_node,in_node){
var map__8235 = nodes.core.out_pos.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(out_node));
var map__8235__$1 = ((((!((map__8235 == null)))?((((map__8235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8235):map__8235);
var ax = cljs.core.get.call(null,map__8235__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__8235__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8236 = nodes.core.between.call(null,nodes.core.out_pos.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(out_node)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(in_node));
var map__8236__$1 = ((((!((map__8236 == null)))?((((map__8236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8236):map__8236);
var mx = cljs.core.get.call(null,map__8236__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__8236__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__8237 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(in_node);
var map__8237__$1 = ((((!((map__8237 == null)))?((((map__8237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8237):map__8237);
var bx = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__8237__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.beginPath();

ctx.moveTo(ax,ay);

ctx.bezierCurveTo(ax,by,((10) + bx),ay,((10) + bx),by);

return ctx.stroke();
});
nodes.core.draw_node = (function nodes$core$draw_node(ctx,node_def){
var map__8247 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(node_def);
var map__8247__$1 = ((((!((map__8247 == null)))?((((map__8247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8247):map__8247);
var x = cljs.core.get.call(null,map__8247__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8247__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.fillRect(x,y,(50),(20));

var seq__8249 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,nodes.core.get_node_by,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"connections","connections",-2064090887).cljs$core$IFn$_invoke$arity$1(node_def)));
var chunk__8250 = null;
var count__8251 = (0);
var i__8252 = (0);
while(true){
if((i__8252 < count__8251)){
var conn = cljs.core._nth.call(null,chunk__8250,i__8252);
nodes.core.draw_link.call(null,ctx,node_def,conn);

var G__8253 = seq__8249;
var G__8254 = chunk__8250;
var G__8255 = count__8251;
var G__8256 = (i__8252 + (1));
seq__8249 = G__8253;
chunk__8250 = G__8254;
count__8251 = G__8255;
i__8252 = G__8256;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8249);
if(temp__4657__auto__){
var seq__8249__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8249__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8249__$1);
var G__8257 = cljs.core.chunk_rest.call(null,seq__8249__$1);
var G__8258 = c__7220__auto__;
var G__8259 = cljs.core.count.call(null,c__7220__auto__);
var G__8260 = (0);
seq__8249 = G__8257;
chunk__8250 = G__8258;
count__8251 = G__8259;
i__8252 = G__8260;
continue;
} else {
var conn = cljs.core.first.call(null,seq__8249__$1);
nodes.core.draw_link.call(null,ctx,node_def,conn);

var G__8261 = cljs.core.next.call(null,seq__8249__$1);
var G__8262 = null;
var G__8263 = (0);
var G__8264 = (0);
seq__8249 = G__8261;
chunk__8250 = G__8262;
count__8251 = G__8263;
i__8252 = G__8264;
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

ctx.strokeStyle = "rgb(100,100,100)";

ctx.lineWidth = "2";

var seq__8269 = cljs.core.seq.call(null,cljs.core.deref.call(null,nodes.core.nodes));
var chunk__8270 = null;
var count__8271 = (0);
var i__8272 = (0);
while(true){
if((i__8272 < count__8271)){
var node = cljs.core._nth.call(null,chunk__8270,i__8272);
nodes.core.draw_node.call(null,ctx,node);

var G__8273 = seq__8269;
var G__8274 = chunk__8270;
var G__8275 = count__8271;
var G__8276 = (i__8272 + (1));
seq__8269 = G__8273;
chunk__8270 = G__8274;
count__8271 = G__8275;
i__8272 = G__8276;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8269);
if(temp__4657__auto__){
var seq__8269__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8269__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8269__$1);
var G__8277 = cljs.core.chunk_rest.call(null,seq__8269__$1);
var G__8278 = c__7220__auto__;
var G__8279 = cljs.core.count.call(null,c__7220__auto__);
var G__8280 = (0);
seq__8269 = G__8277;
chunk__8270 = G__8278;
count__8271 = G__8279;
i__8272 = G__8280;
continue;
} else {
var node = cljs.core.first.call(null,seq__8269__$1);
nodes.core.draw_node.call(null,ctx,node);

var G__8281 = cljs.core.next.call(null,seq__8269__$1);
var G__8282 = null;
var G__8283 = (0);
var G__8284 = (0);
seq__8269 = G__8281;
chunk__8270 = G__8282;
count__8271 = G__8283;
i__8272 = G__8284;
continue;
}
} else {
return null;
}
}
break;
}
});
nodes.core.mouseover_QMARK_ = (function nodes$core$mouseover_QMARK_(mx,my,node){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(node));
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(node));
return ((mx > x)) && ((my > y)) && ((mx < ((50) + x))) && ((my < ((20) + y)));
});
nodes.core.mouse_pos = (function nodes$core$mouse_pos(e){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((e.clientX + document.body.scrollLeft) + document.documentElement.scrollLeft) + (- document.getElementById("main").offsetLeft)),new cljs.core.Keyword(null,"y","y",-1757859776),(((e.clientY + document.body.scrollTop) + document.documentElement.scrollTop) + (- document.getElementById("main").offsetTop))], null);
});
nodes.core.handle_start_drag = (function nodes$core$handle_start_drag(e){
var map__8287 = nodes.core.mouse_pos.call(null,e);
var map__8287__$1 = ((((!((map__8287 == null)))?((((map__8287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8287):map__8287);
var mx = cljs.core.get.call(null,map__8287__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__8287__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var clicked_node = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,((function (map__8287,map__8287__$1,mx,my){
return (function (i,node){
if(cljs.core.truth_(nodes.core.mouseover_QMARK_.call(null,mx,my,node))){
return i;
} else {
return null;
}
});})(map__8287,map__8287__$1,mx,my))
,cljs.core.deref.call(null,nodes.core.nodes))));
if(cljs.core.truth_(clicked_node)){
cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drag","drag",449951290)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),mx,new cljs.core.Keyword(null,"y","y",-1757859776),my], null),new cljs.core.Keyword(null,"dragging","dragging",1185097613),clicked_node], null));
} else {
}

return cljs.core.println.call(null,clicked_node);
});
nodes.core.handle_drag = (function nodes$core$handle_drag(e){
if(cljs.core.truth_(cljs.core.deref.call(null,reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drag","drag",449951290)], null))))){
var startx = cljs.core.deref.call(null,reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"x","x",2099068185)], null)));
var starty = cljs.core.deref.call(null,reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"y","y",-1757859776)], null)));
var x = e.clientX;
var y = e.clientY;
var drag_index = cljs.core.deref.call(null,reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"dragging","dragging",1185097613)], null)));
cljs.core.swap_BANG_.call(null,nodes.core.nodes,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_index,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,(x - startx));

cljs.core.swap_BANG_.call(null,nodes.core.nodes,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_index,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,(y - starty));

cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"start","start",-355208981)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));

return cljs.core.println.call(null,"hello");
} else {
return null;
}
});
nodes.core.resize = (function nodes$core$resize(e){
var canvas = document.getElementById("main");
canvas.width = canvas.offsetWidth;

canvas.height = window.innerHeight;

return nodes.core.draw_app.call(null);
});
nodes.core.canvas = (function nodes$core$canvas(x,y,z){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),(function (){
return window.onresize = nodes.core.resize;
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__8289_SHARP_){
nodes.core.draw_app.call(null);

return nodes.core.resize.call(null,p1__8289_SHARP_);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),nodes.core.draw_app,new cljs.core.Keyword(null,"display-name","display-name",694513143),"my-component",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#main","canvas#main",-896787384),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-nodes","data-nodes",-1551294262),cljs.core.deref.call(null,nodes.core.nodes),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),nodes.core.handle_start_drag,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),nodes.core.handle_drag,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drag","drag",449951290)], null)),null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null);
})], null));
});
nodes.core.app = (function nodes$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes.core.canvas], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(cljs.core.deref.call(null,reagent.core.cursor.call(null,nodes.core.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"drag","drag",449951290)], null))))].join('')], null)], null);
});
nodes.core.reload = (function nodes$core$reload(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes.core.app], null),document.getElementById("app"));
});
nodes.core.main = (function nodes$core$main(){
return nodes.core.reload.call(null);
});
goog.exportSymbol('nodes.core.main', nodes.core.main);

//# sourceMappingURL=core.js.map?rel=1491273188229