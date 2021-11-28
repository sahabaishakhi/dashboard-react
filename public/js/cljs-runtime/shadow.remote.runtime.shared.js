goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31879,res){
var map__31880 = p__31879;
var map__31880__$1 = cljs.core.__destructure_map(map__31880);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31880__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31880__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31882 = res;
var G__31882__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31882,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31882);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31882__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31882__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31886 = arguments.length;
switch (G__31886) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31890,msg,handlers,timeout_after_ms){
var map__31892 = p__31890;
var map__31892__$1 = cljs.core.__destructure_map(map__31892);
var runtime = map__31892__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31892__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32109 = arguments.length;
var i__4865__auto___32110 = (0);
while(true){
if((i__4865__auto___32110 < len__4864__auto___32109)){
args__4870__auto__.push((arguments[i__4865__auto___32110]));

var G__32113 = (i__4865__auto___32110 + (1));
i__4865__auto___32110 = G__32113;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31906,ev,args){
var map__31907 = p__31906;
var map__31907__$1 = cljs.core.__destructure_map(map__31907);
var runtime = map__31907__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31907__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31912 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31915 = null;
var count__31916 = (0);
var i__31917 = (0);
while(true){
if((i__31917 < count__31916)){
var ext = chunk__31915.cljs$core$IIndexed$_nth$arity$2(null,i__31917);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32117 = seq__31912;
var G__32118 = chunk__31915;
var G__32119 = count__31916;
var G__32120 = (i__31917 + (1));
seq__31912 = G__32117;
chunk__31915 = G__32118;
count__31916 = G__32119;
i__31917 = G__32120;
continue;
} else {
var G__32121 = seq__31912;
var G__32122 = chunk__31915;
var G__32123 = count__31916;
var G__32124 = (i__31917 + (1));
seq__31912 = G__32121;
chunk__31915 = G__32122;
count__31916 = G__32123;
i__31917 = G__32124;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31912);
if(temp__5753__auto__){
var seq__31912__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31912__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31912__$1);
var G__32125 = cljs.core.chunk_rest(seq__31912__$1);
var G__32126 = c__4679__auto__;
var G__32127 = cljs.core.count(c__4679__auto__);
var G__32128 = (0);
seq__31912 = G__32125;
chunk__31915 = G__32126;
count__31916 = G__32127;
i__31917 = G__32128;
continue;
} else {
var ext = cljs.core.first(seq__31912__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32130 = cljs.core.next(seq__31912__$1);
var G__32131 = null;
var G__32132 = (0);
var G__32133 = (0);
seq__31912 = G__32130;
chunk__31915 = G__32131;
count__31916 = G__32132;
i__31917 = G__32133;
continue;
} else {
var G__32134 = cljs.core.next(seq__31912__$1);
var G__32135 = null;
var G__32136 = (0);
var G__32137 = (0);
seq__31912 = G__32134;
chunk__31915 = G__32135;
count__31916 = G__32136;
i__31917 = G__32137;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31896){
var G__31897 = cljs.core.first(seq31896);
var seq31896__$1 = cljs.core.next(seq31896);
var G__31898 = cljs.core.first(seq31896__$1);
var seq31896__$2 = cljs.core.next(seq31896__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31897,G__31898,seq31896__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31964,p__31965){
var map__31966 = p__31964;
var map__31966__$1 = cljs.core.__destructure_map(map__31966);
var runtime = map__31966__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31966__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31967 = p__31965;
var map__31967__$1 = cljs.core.__destructure_map(map__31967);
var msg = map__31967__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31967__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31968 = cljs.core.deref(state_ref);
var map__31968__$1 = cljs.core.__destructure_map(map__31968);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31968__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31968__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31974){
var map__31975 = p__31974;
var map__31975__$1 = cljs.core.__destructure_map(map__31975);
var runtime = map__31975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31978,msg){
var map__31979 = p__31978;
var map__31979__$1 = cljs.core.__destructure_map(map__31979);
var runtime = map__31979__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31979__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31985,key,p__31986){
var map__31988 = p__31985;
var map__31988__$1 = cljs.core.__destructure_map(map__31988);
var state = map__31988__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31988__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31989 = p__31986;
var map__31989__$1 = cljs.core.__destructure_map(map__31989);
var spec = map__31989__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31989__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31995,key,spec){
var map__31996 = p__31995;
var map__31996__$1 = cljs.core.__destructure_map(map__31996);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31998_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31998_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31999_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31999_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32000_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32000_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32001_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32001_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32002_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32002_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32008,key){
var map__32009 = p__32008;
var map__32009__$1 = cljs.core.__destructure_map(map__32009);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32009__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32035,msg){
var map__32036 = p__32035;
var map__32036__$1 = cljs.core.__destructure_map(map__32036);
var runtime = map__32036__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32036__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32043,p__32044){
var map__32045 = p__32043;
var map__32045__$1 = cljs.core.__destructure_map(map__32045);
var runtime = map__32045__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32045__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32046 = p__32044;
var map__32046__$1 = cljs.core.__destructure_map(map__32046);
var msg = map__32046__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32046__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32046__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32056 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32058 = null;
var count__32059 = (0);
var i__32060 = (0);
while(true){
if((i__32060 < count__32059)){
var map__32070 = chunk__32058.cljs$core$IIndexed$_nth$arity$2(null,i__32060);
var map__32070__$1 = cljs.core.__destructure_map(map__32070);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32070__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32173 = seq__32056;
var G__32174 = chunk__32058;
var G__32175 = count__32059;
var G__32176 = (i__32060 + (1));
seq__32056 = G__32173;
chunk__32058 = G__32174;
count__32059 = G__32175;
i__32060 = G__32176;
continue;
} else {
var G__32178 = seq__32056;
var G__32179 = chunk__32058;
var G__32180 = count__32059;
var G__32181 = (i__32060 + (1));
seq__32056 = G__32178;
chunk__32058 = G__32179;
count__32059 = G__32180;
i__32060 = G__32181;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32056);
if(temp__5753__auto__){
var seq__32056__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32056__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32056__$1);
var G__32183 = cljs.core.chunk_rest(seq__32056__$1);
var G__32184 = c__4679__auto__;
var G__32185 = cljs.core.count(c__4679__auto__);
var G__32186 = (0);
seq__32056 = G__32183;
chunk__32058 = G__32184;
count__32059 = G__32185;
i__32060 = G__32186;
continue;
} else {
var map__32083 = cljs.core.first(seq__32056__$1);
var map__32083__$1 = cljs.core.__destructure_map(map__32083);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32083__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32188 = cljs.core.next(seq__32056__$1);
var G__32189 = null;
var G__32190 = (0);
var G__32191 = (0);
seq__32056 = G__32188;
chunk__32058 = G__32189;
count__32059 = G__32190;
i__32060 = G__32191;
continue;
} else {
var G__32192 = cljs.core.next(seq__32056__$1);
var G__32193 = null;
var G__32194 = (0);
var G__32195 = (0);
seq__32056 = G__32192;
chunk__32058 = G__32193;
count__32059 = G__32194;
i__32060 = G__32195;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
