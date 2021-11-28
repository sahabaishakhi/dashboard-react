goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35527,p__35528){
var map__35530 = p__35527;
var map__35530__$1 = cljs.core.__destructure_map(map__35530);
var svc = map__35530__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35530__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35530__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35530__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35531 = p__35528;
var map__35531__$1 = cljs.core.__destructure_map(map__35531);
var msg = map__35531__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35531__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35531__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35531__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35531__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35537,p__35538){
var map__35540 = p__35537;
var map__35540__$1 = cljs.core.__destructure_map(map__35540);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35541 = p__35538;
var map__35541__$1 = cljs.core.__destructure_map(map__35541);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35544,p__35545){
var map__35547 = p__35544;
var map__35547__$1 = cljs.core.__destructure_map(map__35547);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35548 = p__35545;
var map__35548__$1 = cljs.core.__destructure_map(map__35548);
var msg = map__35548__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35548__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35551,tid){
var map__35552 = p__35551;
var map__35552__$1 = cljs.core.__destructure_map(map__35552);
var svc = map__35552__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35552__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35563 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35564 = null;
var count__35565 = (0);
var i__35566 = (0);
while(true){
if((i__35566 < count__35565)){
var vec__35577 = chunk__35564.cljs$core$IIndexed$_nth$arity$2(null,i__35566);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35577,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35577,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35593 = seq__35563;
var G__35594 = chunk__35564;
var G__35595 = count__35565;
var G__35596 = (i__35566 + (1));
seq__35563 = G__35593;
chunk__35564 = G__35594;
count__35565 = G__35595;
i__35566 = G__35596;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35563);
if(temp__5753__auto__){
var seq__35563__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35563__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35563__$1);
var G__35597 = cljs.core.chunk_rest(seq__35563__$1);
var G__35598 = c__4679__auto__;
var G__35599 = cljs.core.count(c__4679__auto__);
var G__35600 = (0);
seq__35563 = G__35597;
chunk__35564 = G__35598;
count__35565 = G__35599;
i__35566 = G__35600;
continue;
} else {
var vec__35584 = cljs.core.first(seq__35563__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35584,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35584,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35601 = cljs.core.next(seq__35563__$1);
var G__35602 = null;
var G__35603 = (0);
var G__35604 = (0);
seq__35563 = G__35601;
chunk__35564 = G__35602;
count__35565 = G__35603;
i__35566 = G__35604;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35553_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35553_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35554_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35554_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35555_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35555_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35556_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35556_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35588){
var map__35589 = p__35588;
var map__35589__$1 = cljs.core.__destructure_map(map__35589);
var svc = map__35589__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
