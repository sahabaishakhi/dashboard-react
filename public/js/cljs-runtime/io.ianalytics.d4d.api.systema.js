goog.provide('io.ianalytics.d4d.api.systema');
if((typeof io !== 'undefined') && (typeof io.ianalytics !== 'undefined') && (typeof io.ianalytics.d4d !== 'undefined') && (typeof io.ianalytics.d4d.api !== 'undefined') && (typeof io.ianalytics.d4d.api.systema !== 'undefined') && (typeof io.ianalytics.d4d.api.systema.state !== 'undefined')){
} else {
io.ianalytics.d4d.api.systema.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"json","json",1279968570),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null));
}
io.ianalytics.d4d.api.systema.C = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
io.ianalytics.d4d.api.systema.uid__GT_node = (function io$ianalytics$d4d$api$systema$uid__GT_node(uid){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state))),uid);
});
/**
 * Unmarshal systema nodes into a hashmap {uid (atom node), ...} where all nodes hold
 *   the atomic references to their neighbors (instead of uids).
 */
io.ianalytics.d4d.api.systema.unmarshal_systema_nodes = (function io$ianalytics$d4d$api$systema$unmarshal_systema_nodes(nodes){
var a_nodes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35681(s__35682){
return (new cljs.core.LazySeq(null,(function (){
var s__35682__$1 = s__35682;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35682__$1);
if(temp__5753__auto__){
var s__35682__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35682__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35682__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35684 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35683 = (0);
while(true){
if((i__35683 < size__4651__auto__)){
var node = cljs.core._nth(c__4650__auto__,i__35683);
cljs.core.chunk_append(b__35684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(node),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node)], null));

var G__36095 = (i__35683 + (1));
i__35683 = G__36095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35684),io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35681(cljs.core.chunk_rest(s__35682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35684),null);
}
} else {
var node = cljs.core.first(s__35682__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(node),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node)], null),io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35681(cljs.core.rest(s__35682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nodes);
})());
var seq__35685_36098 = cljs.core.seq(a_nodes);
var chunk__35686_36099 = null;
var count__35687_36100 = (0);
var i__35688_36101 = (0);
while(true){
if((i__35688_36101 < count__35687_36100)){
var vec__35709_36103 = chunk__35686_36099.cljs$core$IIndexed$_nth$arity$2(null,i__35688_36101);
var __36104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35709_36103,(0),null);
var a_node_36105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35709_36103,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a_node_36105,((function (seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35709_36103,__36104,a_node_36105,a_nodes){
return (function (p1__35680_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35709_36103,__36104,a_node_36105,a_nodes){
return (function (node,field){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,field,cljs.core.vec((function (){var iter__4652__auto__ = ((function (seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35709_36103,__36104,a_node_36105,a_nodes){
return (function io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35712(s__35713){
return (new cljs.core.LazySeq(null,((function (seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35709_36103,__36104,a_node_36105,a_nodes){
return (function (){
var s__35713__$1 = s__35713;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35713__$1);
if(temp__5753__auto__){
var s__35713__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35713__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35713__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35715 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35714 = (0);
while(true){
if((i__35714 < size__4651__auto__)){
var uid = cljs.core._nth(c__4650__auto__,i__35714);
cljs.core.chunk_append(b__35715,cljs.core.get.cljs$core$IFn$_invoke$arity$2(a_nodes,uid));

var G__36106 = (i__35714 + (1));
i__35714 = G__36106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35715),io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35712(cljs.core.chunk_rest(s__35713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35715),null);
}
} else {
var uid = cljs.core.first(s__35713__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a_nodes,uid),io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35712(cljs.core.rest(s__35713__$2)));
}
} else {
return null;
}
break;
}
});})(seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35709_36103,__36104,a_node_36105,a_nodes))
,null,null));
});})(seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35709_36103,__36104,a_node_36105,a_nodes))
;
return iter__4652__auto__((field.cljs$core$IFn$_invoke$arity$1 ? field.cljs$core$IFn$_invoke$arity$1(node) : field.call(null,node)));
})()));
});})(seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35709_36103,__36104,a_node_36105,a_nodes))
,p1__35680_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null));
});})(seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35709_36103,__36104,a_node_36105,a_nodes))
);


var G__36112 = seq__35685_36098;
var G__36113 = chunk__35686_36099;
var G__36114 = count__35687_36100;
var G__36115 = (i__35688_36101 + (1));
seq__35685_36098 = G__36112;
chunk__35686_36099 = G__36113;
count__35687_36100 = G__36114;
i__35688_36101 = G__36115;
continue;
} else {
var temp__5753__auto___36120 = cljs.core.seq(seq__35685_36098);
if(temp__5753__auto___36120){
var seq__35685_36121__$1 = temp__5753__auto___36120;
if(cljs.core.chunked_seq_QMARK_(seq__35685_36121__$1)){
var c__4679__auto___36122 = cljs.core.chunk_first(seq__35685_36121__$1);
var G__36123 = cljs.core.chunk_rest(seq__35685_36121__$1);
var G__36124 = c__4679__auto___36122;
var G__36125 = cljs.core.count(c__4679__auto___36122);
var G__36126 = (0);
seq__35685_36098 = G__36123;
chunk__35686_36099 = G__36124;
count__35687_36100 = G__36125;
i__35688_36101 = G__36126;
continue;
} else {
var vec__35722_36127 = cljs.core.first(seq__35685_36121__$1);
var __36128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35722_36127,(0),null);
var a_node_36129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35722_36127,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a_node_36129,((function (seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35722_36127,__36128,a_node_36129,seq__35685_36121__$1,temp__5753__auto___36120,a_nodes){
return (function (p1__35680_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35722_36127,__36128,a_node_36129,seq__35685_36121__$1,temp__5753__auto___36120,a_nodes){
return (function (node,field){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,field,cljs.core.vec((function (){var iter__4652__auto__ = ((function (seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35722_36127,__36128,a_node_36129,seq__35685_36121__$1,temp__5753__auto___36120,a_nodes){
return (function io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35725(s__35726){
return (new cljs.core.LazySeq(null,((function (seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35722_36127,__36128,a_node_36129,seq__35685_36121__$1,temp__5753__auto___36120,a_nodes){
return (function (){
var s__35726__$1 = s__35726;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35726__$1);
if(temp__5753__auto____$1){
var s__35726__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35726__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35726__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35728 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35727 = (0);
while(true){
if((i__35727 < size__4651__auto__)){
var uid = cljs.core._nth(c__4650__auto__,i__35727);
cljs.core.chunk_append(b__35728,cljs.core.get.cljs$core$IFn$_invoke$arity$2(a_nodes,uid));

var G__36140 = (i__35727 + (1));
i__35727 = G__36140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35728),io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35725(cljs.core.chunk_rest(s__35726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35728),null);
}
} else {
var uid = cljs.core.first(s__35726__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a_nodes,uid),io$ianalytics$d4d$api$systema$unmarshal_systema_nodes_$_iter__35725(cljs.core.rest(s__35726__$2)));
}
} else {
return null;
}
break;
}
});})(seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35722_36127,__36128,a_node_36129,seq__35685_36121__$1,temp__5753__auto___36120,a_nodes))
,null,null));
});})(seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35722_36127,__36128,a_node_36129,seq__35685_36121__$1,temp__5753__auto___36120,a_nodes))
;
return iter__4652__auto__((field.cljs$core$IFn$_invoke$arity$1 ? field.cljs$core$IFn$_invoke$arity$1(node) : field.call(null,node)));
})()));
});})(seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35722_36127,__36128,a_node_36129,seq__35685_36121__$1,temp__5753__auto___36120,a_nodes))
,p1__35680_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null));
});})(seq__35685_36098,chunk__35686_36099,count__35687_36100,i__35688_36101,vec__35722_36127,__36128,a_node_36129,seq__35685_36121__$1,temp__5753__auto___36120,a_nodes))
);


var G__36150 = cljs.core.next(seq__35685_36121__$1);
var G__36151 = null;
var G__36152 = (0);
var G__36153 = (0);
seq__35685_36098 = G__36150;
chunk__35686_36099 = G__36151;
count__35687_36100 = G__36152;
i__35688_36101 = G__36153;
continue;
}
} else {
}
}
break;
}

return a_nodes;
});
/**
 * Make convenient systema graph-map from atomic-node-map.
 */
io.ianalytics.d4d.api.systema.systema_graph = (function io$ianalytics$d4d$api$systema$systema_graph(nodes){
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,"0");
var concepts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function io$ianalytics$d4d$api$systema$systema_graph_$_iter__35732(s__35733){
return (new cljs.core.LazySeq(null,(function (){
var s__35733__$1 = s__35733;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35733__$1);
if(temp__5753__auto__){
var s__35733__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35733__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35733__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35735 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35734 = (0);
while(true){
if((i__35734 < size__4651__auto__)){
var node = cljs.core._nth(c__4650__auto__,i__35734);
cljs.core.chunk_append(b__35735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)))),node], null));

var G__36154 = (i__35734 + (1));
i__35734 = G__36154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35735),io$ianalytics$d4d$api$systema$systema_graph_$_iter__35732(cljs.core.chunk_rest(s__35733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35735),null);
}
} else {
var node = cljs.core.first(s__35733__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)))),node], null),io$ianalytics$d4d$api$systema$systema_graph_$_iter__35732(cljs.core.rest(s__35733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"has","has",1466247447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(root)));
})());
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"concepts","concepts",-855842190),concepts,new cljs.core.Keyword(null,"root","root",-448657453),root], null);
});
if((typeof io !== 'undefined') && (typeof io.ianalytics !== 'undefined') && (typeof io.ianalytics.d4d !== 'undefined') && (typeof io.ianalytics.d4d.api !== 'undefined') && (typeof io.ianalytics.d4d.api.systema !== 'undefined') && (typeof io.ianalytics.d4d.api.systema.show !== 'undefined')){
} else {
/**
 * Print uid_long of nodes.
 */
io.ianalytics.d4d.api.systema.show = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35744 = cljs.core.get_global_hierarchy;
return (fexpr__35744.cljs$core$IFn$_invoke$arity$0 ? fexpr__35744.cljs$core$IFn$_invoke$arity$0() : fexpr__35744.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("io.ianalytics.d4d.api.systema","show"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
io.ianalytics.d4d.api.systema.show.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (node){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));
io.ianalytics.d4d.api.systema.show.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Atom,(function (node){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__35745 = cljs.core.deref(node);
return (fexpr__35745.cljs$core$IFn$_invoke$arity$1 ? fexpr__35745.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid_long","uid_long",361324491)) : fexpr__35745.call(null,new cljs.core.Keyword(null,"uid_long","uid_long",361324491)));
})()], 0));
}));
io.ianalytics.d4d.api.systema.show.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.type(cljs.core.PersistentVector.EMPTY),(function (nodes){
var seq__35746 = cljs.core.seq(nodes);
var chunk__35747 = null;
var count__35748 = (0);
var i__35749 = (0);
while(true){
if((i__35749 < count__35748)){
var node = chunk__35747.cljs$core$IIndexed$_nth$arity$2(null,i__35749);
io.ianalytics.d4d.api.systema.show.cljs$core$IFn$_invoke$arity$1(node);


var G__36176 = seq__35746;
var G__36177 = chunk__35747;
var G__36178 = count__35748;
var G__36179 = (i__35749 + (1));
seq__35746 = G__36176;
chunk__35747 = G__36177;
count__35748 = G__36178;
i__35749 = G__36179;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35746);
if(temp__5753__auto__){
var seq__35746__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35746__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35746__$1);
var G__36191 = cljs.core.chunk_rest(seq__35746__$1);
var G__36192 = c__4679__auto__;
var G__36193 = cljs.core.count(c__4679__auto__);
var G__36194 = (0);
seq__35746 = G__36191;
chunk__35747 = G__36192;
count__35748 = G__36193;
i__35749 = G__36194;
continue;
} else {
var node = cljs.core.first(seq__35746__$1);
io.ianalytics.d4d.api.systema.show.cljs$core$IFn$_invoke$arity$1(node);


var G__36195 = cljs.core.next(seq__35746__$1);
var G__36196 = null;
var G__36197 = (0);
var G__36198 = (0);
seq__35746 = G__36195;
chunk__35747 = G__36196;
count__35748 = G__36197;
i__35749 = G__36198;
continue;
}
} else {
return null;
}
}
break;
}
}));
io.ianalytics.d4d.api.systema.in_QMARK_ = (function io$ianalytics$d4d$api$systema$in_QMARK_(x,y){
return cljs.core.some((function (p1__35751_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__35751_SHARP_,y);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x)));
});
io.ianalytics.d4d.api.systema.has_QMARK_ = (function io$ianalytics$d4d$api$systema$has_QMARK_(x,y){
return io.ianalytics.d4d.api.systema.in_QMARK_(y,x);
});
io.ianalytics.d4d.api.systema.from_QMARK_ = (function io$ianalytics$d4d$api$systema$from_QMARK_(x,y){
return cljs.core.some((function (p1__35754_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__35754_SHARP_,y);
}),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x)));
});
io.ianalytics.d4d.api.systema.to_QMARK_ = (function io$ianalytics$d4d$api$systema$to_QMARK_(x,y){
return cljs.core.some((function (p1__35756_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__35756_SHARP_,y);
}),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x)));
});
/**
 * Is the 'element of set' relation (transitive in-has relation). (elem? a a) is false.
 */
io.ianalytics.d4d.api.systema.elem_QMARK_ = (function io$ianalytics$d4d$api$systema$elem_QMARK_(var_args){
var G__35762 = arguments.length;
switch (G__35762) {
case 1:
return io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (y){
return (function (p1__35758_SHARP_){
return io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__35758_SHARP_,y);
});
}));

(io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var or__4253__auto__ = io.ianalytics.d4d.api.systema.in_QMARK_(x,y);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.some((function (p1__35759_SHARP_){
return io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__35759_SHARP_,y);
}),(function (){var fexpr__35767 = cljs.core.deref(x);
return (fexpr__35767.cljs$core$IFn$_invoke$arity$1 ? fexpr__35767.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"in","in",-1531184865)) : fexpr__35767.call(null,new cljs.core.Keyword(null,"in","in",-1531184865)));
})());
}
}));

(io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$lang$maxFixedArity = 2);

io.ianalytics.d4d.api.systema.not_elem_QMARK_ = (function io$ianalytics$d4d$api$systema$not_elem_QMARK_(x,y){
return cljs.core.not(io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y));
});
/**
 * Checks if a node is a direct element of root.
 */
io.ianalytics.d4d.api.systema.concept_QMARK_ = (function io$ianalytics$d4d$api$systema$concept_QMARK_(node){
return cljs.core.some((function (p1__35768_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__35769 = cljs.core.deref(p1__35768_SHARP_);
return (fexpr__35769.cljs$core$IFn$_invoke$arity$1 ? fexpr__35769.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400)) : fexpr__35769.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
})(),"0");
}),(function (){var fexpr__35770 = cljs.core.deref(node);
return (fexpr__35770.cljs$core$IFn$_invoke$arity$1 ? fexpr__35770.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"in","in",-1531184865)) : fexpr__35770.call(null,new cljs.core.Keyword(null,"in","in",-1531184865)));
})());
});
/**
 * Checks if a node is an instance.
 */
io.ianalytics.d4d.api.systema.instance_QMARK__QMARK_ = (function io$ianalytics$d4d$api$systema$instance_QMARK__QMARK_(node){
var and__4251__auto__ = node;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__35772 = cljs.core.deref(node);
return (fexpr__35772.cljs$core$IFn$_invoke$arity$1 ? fexpr__35772.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400)) : fexpr__35772.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
})(),"0")) && (cljs.core.not(io.ianalytics.d4d.api.systema.concept_QMARK_(node))));
} else {
return and__4251__auto__;
}
});
/**
 * Checks if a node is an instance of a certain concept.
 */
io.ianalytics.d4d.api.systema.is_a_QMARK_ = (function io$ianalytics$d4d$api$systema$is_a_QMARK_(var_args){
var G__35784 = arguments.length;
switch (G__35784) {
case 1:
return io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (concept){
return (function (p1__35773_SHARP_){
return io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__35773_SHARP_,concept);
});
}));

(io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (node,concept){
var and__4251__auto__ = io.ianalytics.d4d.api.systema.instance_QMARK__QMARK_(node);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.some((function (p1__35775_SHARP_){
var and__4251__auto____$1 = io.ianalytics.d4d.api.systema.concept_QMARK_(p1__35775_SHARP_);
if(cljs.core.truth_(and__4251__auto____$1)){
var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__35775_SHARP_,concept);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__35775_SHARP_,concept);
}
} else {
return and__4251__auto____$1;
}
}),(function (){var fexpr__35799 = cljs.core.deref(node);
return (fexpr__35799.cljs$core$IFn$_invoke$arity$1 ? fexpr__35799.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"in","in",-1531184865)) : fexpr__35799.call(null,new cljs.core.Keyword(null,"in","in",-1531184865)));
})());
} else {
return and__4251__auto__;
}
}));

(io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$lang$maxFixedArity = 2);

io.ianalytics.d4d.api.systema.is_not_a_QMARK_ = (function io$ianalytics$d4d$api$systema$is_not_a_QMARK_(node,concept){
return cljs.core.not(io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$2(node,concept));
});
if((typeof io !== 'undefined') && (typeof io.ianalytics !== 'undefined') && (typeof io.ianalytics.d4d !== 'undefined') && (typeof io.ianalytics.d4d.api !== 'undefined') && (typeof io.ianalytics.d4d.api.systema !== 'undefined') && (typeof io.ianalytics.d4d.api.systema.pfn !== 'undefined')){
} else {
io.ianalytics.d4d.api.systema.pfn = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35802 = cljs.core.get_global_hierarchy;
return (fexpr__35802.cljs$core$IFn$_invoke$arity$0 ? fexpr__35802.cljs$core$IFn$_invoke$arity$0() : fexpr__35802.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("io.ianalytics.d4d.api.systema","pfn"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
io.ianalytics.d4d.api.systema.pfn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.type((function (){
return cljs.core.List.EMPTY;
})),(function (predicate){
return predicate;
}));
io.ianalytics.d4d.api.systema.pfn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Atom,(function (concept){
return io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$1(concept);
}));
io.ianalytics.d4d.api.systema.pfn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.type(""),(function (name){
return (function (node){
return cljs.core.some((function (p1__35803_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,p1__35803_SHARP_);
}),new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)));
});
}));
io.ianalytics.d4d.api.systema.pfn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.type((new RegExp(""))),(function (regex){
return (function (node){
return cljs.core.some((function (p1__35804_SHARP_){
return cljs.core.re_matches(regex,p1__35804_SHARP_);
}),new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)));
});
}));
io.ianalytics.d4d.api.systema._AMPERSAND__AMPERSAND_ = (function io$ianalytics$d4d$api$systema$_AMPERSAND__AMPERSAND_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36277 = arguments.length;
var i__4865__auto___36278 = (0);
while(true){
if((i__4865__auto___36278 < len__4864__auto___36277)){
args__4870__auto__.push((arguments[i__4865__auto___36278]));

var G__36282 = (i__4865__auto___36278 + (1));
i__4865__auto___36278 = G__36282;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return io.ianalytics.d4d.api.systema._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(io.ianalytics.d4d.api.systema._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return (function (node){
return cljs.core.every_QMARK_((function (p1__35809_SHARP_){
var fexpr__35815 = io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p1__35809_SHARP_);
return (fexpr__35815.cljs$core$IFn$_invoke$arity$1 ? fexpr__35815.cljs$core$IFn$_invoke$arity$1(node) : fexpr__35815.call(null,node));
}),ps);
});
}));

(io.ianalytics.d4d.api.systema._AMPERSAND__AMPERSAND_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(io.ianalytics.d4d.api.systema._AMPERSAND__AMPERSAND_.cljs$lang$applyTo = (function (seq35811){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35811));
}));

io.ianalytics.d4d.api.systema._BAR__BAR_ = (function io$ianalytics$d4d$api$systema$_BAR__BAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36306 = arguments.length;
var i__4865__auto___36311 = (0);
while(true){
if((i__4865__auto___36311 < len__4864__auto___36306)){
args__4870__auto__.push((arguments[i__4865__auto___36311]));

var G__36312 = (i__4865__auto___36311 + (1));
i__4865__auto___36311 = G__36312;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return io.ianalytics.d4d.api.systema._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(io.ianalytics.d4d.api.systema._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return (function (node){
return cljs.core.some((function (p1__35816_SHARP_){
var fexpr__35818 = io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p1__35816_SHARP_);
return (fexpr__35818.cljs$core$IFn$_invoke$arity$1 ? fexpr__35818.cljs$core$IFn$_invoke$arity$1(node) : fexpr__35818.call(null,node));
}),ps);
});
}));

(io.ianalytics.d4d.api.systema._BAR__BAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(io.ianalytics.d4d.api.systema._BAR__BAR_.cljs$lang$applyTo = (function (seq35817){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35817));
}));

io.ianalytics.d4d.api.systema.$ = (function io$ianalytics$d4d$api$systema$$(arg){
var and__4251__auto__ = arg;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(arg);
} else {
return and__4251__auto__;
}
});
io.ianalytics.d4d.api.systema.get_ = (function io$ianalytics$d4d$api$systema$get_(nodes,relation){
if((nodes instanceof cljs.core.Atom)){
var fexpr__35819 = cljs.core.deref(nodes);
return (fexpr__35819.cljs$core$IFn$_invoke$arity$1 ? fexpr__35819.cljs$core$IFn$_invoke$arity$1(relation) : fexpr__35819.call(null,relation));
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten((function (){var iter__4652__auto__ = (function io$ianalytics$d4d$api$systema$get__$_iter__35821(s__35822){
return (new cljs.core.LazySeq(null,(function (){
var s__35822__$1 = s__35822;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35822__$1);
if(temp__5753__auto__){
var s__35822__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35822__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35822__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35824 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35823 = (0);
while(true){
if((i__35823 < size__4651__auto__)){
var node = cljs.core._nth(c__4650__auto__,i__35823);
cljs.core.chunk_append(b__35824,(function (){var fexpr__35829 = cljs.core.deref(node);
return (fexpr__35829.cljs$core$IFn$_invoke$arity$1 ? fexpr__35829.cljs$core$IFn$_invoke$arity$1(relation) : fexpr__35829.call(null,relation));
})());

var G__36313 = (i__35823 + (1));
i__35823 = G__36313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35824),io$ianalytics$d4d$api$systema$get__$_iter__35821(cljs.core.chunk_rest(s__35822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35824),null);
}
} else {
var node = cljs.core.first(s__35822__$2);
return cljs.core.cons((function (){var fexpr__35833 = cljs.core.deref(node);
return (fexpr__35833.cljs$core$IFn$_invoke$arity$1 ? fexpr__35833.cljs$core$IFn$_invoke$arity$1(relation) : fexpr__35833.call(null,relation));
})(),io$ianalytics$d4d$api$systema$get__$_iter__35821(cljs.core.rest(s__35822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nodes);
})()));
}
});
/**
 * Performs recursive filtering (breadth-first search) for `relation =
 *   <:in|:has|:from|:to>`.
 *   If `break-early = true`, the search stops at the first findings. If
 *   `nested = true`,
 *   the search steps also into branches of nodes that satisfy the
 *   predicate (it goes everywhere).
 */
io.ianalytics.d4d.api.systema.r_filter_ = (function io$ianalytics$d4d$api$systema$r_filter_(var_args){
var G__35840 = arguments.length;
switch (G__35840) {
case 5:
return io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5 = (function (predicate,nodes,relation,break_early,nested){
var nodes__$1 = (((nodes instanceof cljs.core.Atom))?io.ianalytics.d4d.api.systema.get_(nodes,relation):nodes);
return io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$6(predicate,nodes__$1,relation,break_early,nested,cljs.core.PersistentHashSet.EMPTY);
}));

(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$6 = (function (predicate,nodes,relation,break_early,nested,visited){
var grouped_nodes = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,predicate),nodes);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_nodes,true);
var new_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(visited),io.ianalytics.d4d.api.systema.get_((cljs.core.truth_(nested)?nodes:cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_nodes,false)),relation));
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.empty_QMARK_(new_nodes);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = break_early;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_empty(results);
} else {
return and__4251__auto__;
}
}
})())){
return results;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(results,io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$6(predicate,new_nodes,relation,break_early,nested,cljs.core.into.cljs$core$IFn$_invoke$arity$2(visited,nodes)));
}
}));

(io.ianalytics.d4d.api.systema.r_filter_.cljs$lang$maxFixedArity = 6);

/**
 * Get all nodes of the **direct** in-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.g_in = (function io$ianalytics$d4d$api$systema$g_in(var_args){
var G__35851 = arguments.length;
switch (G__35851) {
case 1:
return io.ianalytics.d4d.api.systema.g_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.g_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.g_in.cljs$core$IFn$_invoke$arity$1 = (function (nodes__35664__auto__){
return io.ianalytics.d4d.api.systema.get_(nodes__35664__auto__,new cljs.core.Keyword(null,"in","in",-1531184865));
}));

(io.ianalytics.d4d.api.systema.g_in.cljs$core$IFn$_invoke$arity$2 = (function (nodes__35664__auto__,p__35665__auto__){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),io.ianalytics.d4d.api.systema.g_in.cljs$core$IFn$_invoke$arity$1(nodes__35664__auto__));
}));

(io.ianalytics.d4d.api.systema.g_in.cljs$lang$maxFixedArity = 2);


/**
 * Get first node of the **direct** in-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.gf_in = (function io$ianalytics$d4d$api$systema$gf_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36316 = arguments.length;
var i__4865__auto___36317 = (0);
while(true){
if((i__4865__auto___36317 < len__4864__auto___36316)){
args__4870__auto__.push((arguments[i__4865__auto___36317]));

var G__36318 = (i__4865__auto___36317 + (1));
i__4865__auto___36317 = G__36318;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return io.ianalytics.d4d.api.systema.gf_in.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(io.ianalytics.d4d.api.systema.gf_in.cljs$core$IFn$_invoke$arity$variadic = (function (x__35666__auto__){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.g_in,x__35666__auto__));
}));

(io.ianalytics.d4d.api.systema.gf_in.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(io.ianalytics.d4d.api.systema.gf_in.cljs$lang$applyTo = (function (seq35854){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35854));
}));


/**
 * Recursively select all non-nested nodes along the in-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.r_in = (function io$ianalytics$d4d$api$systema$r_in(nodes__35664__auto__,p__35665__auto__){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"in","in",-1531184865),false,false));
});

/**
 * Recursively select all (including nested) nodes along the in-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.rn_in = (function io$ianalytics$d4d$api$systema$rn_in(nodes__35664__auto__,p__35665__auto__){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"in","in",-1531184865),false,true));
});

/**
 * Recursively select first (nearest) node along the in-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.rf_in = (function io$ianalytics$d4d$api$systema$rf_in(nodes__35664__auto__,p__35665__auto__){
return cljs.core.first(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"in","in",-1531184865),true,false));
});
/**
 * Get all nodes of the **direct** has-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.g_has = (function io$ianalytics$d4d$api$systema$g_has(var_args){
var G__35867 = arguments.length;
switch (G__35867) {
case 1:
return io.ianalytics.d4d.api.systema.g_has.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.g_has.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.g_has.cljs$core$IFn$_invoke$arity$1 = (function (nodes__35664__auto__){
return io.ianalytics.d4d.api.systema.get_(nodes__35664__auto__,new cljs.core.Keyword(null,"has","has",1466247447));
}));

(io.ianalytics.d4d.api.systema.g_has.cljs$core$IFn$_invoke$arity$2 = (function (nodes__35664__auto__,p__35665__auto__){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),io.ianalytics.d4d.api.systema.g_has.cljs$core$IFn$_invoke$arity$1(nodes__35664__auto__));
}));

(io.ianalytics.d4d.api.systema.g_has.cljs$lang$maxFixedArity = 2);


/**
 * Get first node of the **direct** has-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.gf_has = (function io$ianalytics$d4d$api$systema$gf_has(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36320 = arguments.length;
var i__4865__auto___36321 = (0);
while(true){
if((i__4865__auto___36321 < len__4864__auto___36320)){
args__4870__auto__.push((arguments[i__4865__auto___36321]));

var G__36322 = (i__4865__auto___36321 + (1));
i__4865__auto___36321 = G__36322;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return io.ianalytics.d4d.api.systema.gf_has.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(io.ianalytics.d4d.api.systema.gf_has.cljs$core$IFn$_invoke$arity$variadic = (function (x__35666__auto__){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.g_has,x__35666__auto__));
}));

(io.ianalytics.d4d.api.systema.gf_has.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(io.ianalytics.d4d.api.systema.gf_has.cljs$lang$applyTo = (function (seq35868){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35868));
}));


/**
 * Recursively select all non-nested nodes along the has-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.r_has = (function io$ianalytics$d4d$api$systema$r_has(nodes__35664__auto__,p__35665__auto__){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"has","has",1466247447),false,false));
});

/**
 * Recursively select all (including nested) nodes along the has-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.rn_has = (function io$ianalytics$d4d$api$systema$rn_has(nodes__35664__auto__,p__35665__auto__){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"has","has",1466247447),false,true));
});

/**
 * Recursively select first (nearest) node along the has-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.rf_has = (function io$ianalytics$d4d$api$systema$rf_has(nodes__35664__auto__,p__35665__auto__){
return cljs.core.first(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"has","has",1466247447),true,false));
});
/**
 * Get all nodes of the **direct** from-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.g_from = (function io$ianalytics$d4d$api$systema$g_from(var_args){
var G__35870 = arguments.length;
switch (G__35870) {
case 1:
return io.ianalytics.d4d.api.systema.g_from.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.g_from.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.g_from.cljs$core$IFn$_invoke$arity$1 = (function (nodes__35664__auto__){
return io.ianalytics.d4d.api.systema.get_(nodes__35664__auto__,new cljs.core.Keyword(null,"from","from",1815293044));
}));

(io.ianalytics.d4d.api.systema.g_from.cljs$core$IFn$_invoke$arity$2 = (function (nodes__35664__auto__,p__35665__auto__){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),io.ianalytics.d4d.api.systema.g_from.cljs$core$IFn$_invoke$arity$1(nodes__35664__auto__));
}));

(io.ianalytics.d4d.api.systema.g_from.cljs$lang$maxFixedArity = 2);


/**
 * Get first node of the **direct** from-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.gf_from = (function io$ianalytics$d4d$api$systema$gf_from(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36324 = arguments.length;
var i__4865__auto___36325 = (0);
while(true){
if((i__4865__auto___36325 < len__4864__auto___36324)){
args__4870__auto__.push((arguments[i__4865__auto___36325]));

var G__36326 = (i__4865__auto___36325 + (1));
i__4865__auto___36325 = G__36326;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return io.ianalytics.d4d.api.systema.gf_from.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(io.ianalytics.d4d.api.systema.gf_from.cljs$core$IFn$_invoke$arity$variadic = (function (x__35666__auto__){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.g_from,x__35666__auto__));
}));

(io.ianalytics.d4d.api.systema.gf_from.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(io.ianalytics.d4d.api.systema.gf_from.cljs$lang$applyTo = (function (seq35873){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35873));
}));


/**
 * Recursively select all non-nested nodes along the from-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.r_from = (function io$ianalytics$d4d$api$systema$r_from(nodes__35664__auto__,p__35665__auto__){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"from","from",1815293044),false,false));
});

/**
 * Recursively select all (including nested) nodes along the from-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.rn_from = (function io$ianalytics$d4d$api$systema$rn_from(nodes__35664__auto__,p__35665__auto__){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"from","from",1815293044),false,true));
});

/**
 * Recursively select first (nearest) node along the from-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.rf_from = (function io$ianalytics$d4d$api$systema$rf_from(nodes__35664__auto__,p__35665__auto__){
return cljs.core.first(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"from","from",1815293044),true,false));
});
/**
 * Get all nodes of the **direct** to-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.g_to = (function io$ianalytics$d4d$api$systema$g_to(var_args){
var G__35884 = arguments.length;
switch (G__35884) {
case 1:
return io.ianalytics.d4d.api.systema.g_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.g_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.g_to.cljs$core$IFn$_invoke$arity$1 = (function (nodes__35664__auto__){
return io.ianalytics.d4d.api.systema.get_(nodes__35664__auto__,new cljs.core.Keyword(null,"to","to",192099007));
}));

(io.ianalytics.d4d.api.systema.g_to.cljs$core$IFn$_invoke$arity$2 = (function (nodes__35664__auto__,p__35665__auto__){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),io.ianalytics.d4d.api.systema.g_to.cljs$core$IFn$_invoke$arity$1(nodes__35664__auto__));
}));

(io.ianalytics.d4d.api.systema.g_to.cljs$lang$maxFixedArity = 2);


/**
 * Get first node of the **direct** to-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.gf_to = (function io$ianalytics$d4d$api$systema$gf_to(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36328 = arguments.length;
var i__4865__auto___36329 = (0);
while(true){
if((i__4865__auto___36329 < len__4864__auto___36328)){
args__4870__auto__.push((arguments[i__4865__auto___36329]));

var G__36330 = (i__4865__auto___36329 + (1));
i__4865__auto___36329 = G__36330;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return io.ianalytics.d4d.api.systema.gf_to.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(io.ianalytics.d4d.api.systema.gf_to.cljs$core$IFn$_invoke$arity$variadic = (function (x__35666__auto__){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.g_to,x__35666__auto__));
}));

(io.ianalytics.d4d.api.systema.gf_to.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(io.ianalytics.d4d.api.systema.gf_to.cljs$lang$applyTo = (function (seq35887){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35887));
}));


/**
 * Recursively select all non-nested nodes along the to-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.r_to = (function io$ianalytics$d4d$api$systema$r_to(nodes__35664__auto__,p__35665__auto__){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"to","to",192099007),false,false));
});

/**
 * Recursively select all (including nested) nodes along the to-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.rn_to = (function io$ianalytics$d4d$api$systema$rn_to(nodes__35664__auto__,p__35665__auto__){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"to","to",192099007),false,true));
});

/**
 * Recursively select first (nearest) node along the to-relation of `basenode<s>` where `predicate` is satisfied.
 */
io.ianalytics.d4d.api.systema.rf_to = (function io$ianalytics$d4d$api$systema$rf_to(nodes__35664__auto__,p__35665__auto__){
return cljs.core.first(io.ianalytics.d4d.api.systema.r_filter_.cljs$core$IFn$_invoke$arity$5(io.ianalytics.d4d.api.systema.pfn.cljs$core$IFn$_invoke$arity$1(p__35665__auto__),nodes__35664__auto__,new cljs.core.Keyword(null,"to","to",192099007),true,false));
});
/**
 * Return action based on systema description.
 * NODE is an atom wrapping a systema-node, C the concepts of the systema graph.
 */
io.ianalytics.d4d.api.systema.tree_action = (function io$ianalytics$d4d$api$systema$tree_action(var_args){
var G__35897 = arguments.length;
switch (G__35897) {
case 1:
return io.ianalytics.d4d.api.systema.tree_action.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.tree_action.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.tree_action.cljs$core$IFn$_invoke$arity$1 = (function (node){
return io.ianalytics.d4d.api.systema.tree_action.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state))));
}));

(io.ianalytics.d4d.api.systema.tree_action.cljs$core$IFn$_invoke$arity$2 = (function (node,C){
if(cljs.core.truth_(io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$2(node,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397)) : C.call(null,new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397)))))){
if(cljs.core.truth_(io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$2(node,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Vector","Vector",-767641200)) : C.call(null,new cljs.core.Keyword(null,"Vector","Vector",-767641200)))))){
return (function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["     [ Plot heatmap ] "], 0));
});
} else {
return (function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["     [ Plot single-trend with expectation band ] "], 0));
});
}
} else {
if(cljs.core.truth_(io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$2(node,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"TimeSeries","TimeSeries",-2039386457)) : C.call(null,new cljs.core.Keyword(null,"TimeSeries","TimeSeries",-2039386457)))))){
if(cljs.core.truth_(io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$2(node,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Vector","Vector",-767641200)) : C.call(null,new cljs.core.Keyword(null,"Vector","Vector",-767641200)))))){
return (function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["     [ Plot heatmap ] "], 0));
});
} else {
return (function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["     [ Plot single-trend ] "], 0));
});
}
} else {
if(cljs.core.truth_(io.ianalytics.d4d.api.systema.gf_has.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Plot","Plot",-483745027)) : C.call(null,new cljs.core.Keyword(null,"Plot","Plot",-483745027)))], 0)))){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["     [ Plot ############ ] "], 0));

var seq__35898 = cljs.core.seq(io.ianalytics.d4d.api.systema.g_has.cljs$core$IFn$_invoke$arity$2(node,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Plot","Plot",-483745027)) : C.call(null,new cljs.core.Keyword(null,"Plot","Plot",-483745027)))));
var chunk__35899 = null;
var count__35900 = (0);
var i__35901 = (0);
while(true){
if((i__35901 < count__35900)){
var plot = chunk__35899.cljs$core$IIndexed$_nth$arity$2(null,i__35901);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* Plot",cljs.core.first(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(plot))),": "], 0));

var seq__35941_36332 = cljs.core.seq(io.ianalytics.d4d.api.systema.r_has(io.ianalytics.d4d.api.systema.g_from.cljs$core$IFn$_invoke$arity$1(plot),io.ianalytics.d4d.api.systema._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397)) : C.call(null,new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397))),(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"TimeSeries","TimeSeries",-2039386457)) : C.call(null,new cljs.core.Keyword(null,"TimeSeries","TimeSeries",-2039386457)))], 0))));
var chunk__35942_36333 = null;
var count__35943_36334 = (0);
var i__35944_36335 = (0);
while(true){
if((i__35944_36335 < count__35943_36334)){
var trend_36336 = chunk__35942_36333.cljs$core$IIndexed$_nth$arity$2(null,i__35944_36335);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  - Trend",(function (){var fexpr__35947 = cljs.core.deref(trend_36336);
return (fexpr__35947.cljs$core$IFn$_invoke$arity$1 ? fexpr__35947.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400)) : fexpr__35947.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
})()], 0));


var G__36337 = seq__35941_36332;
var G__36338 = chunk__35942_36333;
var G__36339 = count__35943_36334;
var G__36340 = (i__35944_36335 + (1));
seq__35941_36332 = G__36337;
chunk__35942_36333 = G__36338;
count__35943_36334 = G__36339;
i__35944_36335 = G__36340;
continue;
} else {
var temp__5753__auto___36341 = cljs.core.seq(seq__35941_36332);
if(temp__5753__auto___36341){
var seq__35941_36342__$1 = temp__5753__auto___36341;
if(cljs.core.chunked_seq_QMARK_(seq__35941_36342__$1)){
var c__4679__auto___36343 = cljs.core.chunk_first(seq__35941_36342__$1);
var G__36344 = cljs.core.chunk_rest(seq__35941_36342__$1);
var G__36345 = c__4679__auto___36343;
var G__36346 = cljs.core.count(c__4679__auto___36343);
var G__36347 = (0);
seq__35941_36332 = G__36344;
chunk__35942_36333 = G__36345;
count__35943_36334 = G__36346;
i__35944_36335 = G__36347;
continue;
} else {
var trend_36348 = cljs.core.first(seq__35941_36342__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  - Trend",(function (){var fexpr__35948 = cljs.core.deref(trend_36348);
return (fexpr__35948.cljs$core$IFn$_invoke$arity$1 ? fexpr__35948.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400)) : fexpr__35948.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
})()], 0));


var G__36349 = cljs.core.next(seq__35941_36342__$1);
var G__36350 = null;
var G__36351 = (0);
var G__36352 = (0);
seq__35941_36332 = G__36349;
chunk__35942_36333 = G__36350;
count__35943_36334 = G__36351;
i__35944_36335 = G__36352;
continue;
}
} else {
}
}
break;
}


var G__36353 = seq__35898;
var G__36354 = chunk__35899;
var G__36355 = count__35900;
var G__36356 = (i__35901 + (1));
seq__35898 = G__36353;
chunk__35899 = G__36354;
count__35900 = G__36355;
i__35901 = G__36356;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35898);
if(temp__5753__auto__){
var seq__35898__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35898__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35898__$1);
var G__36357 = cljs.core.chunk_rest(seq__35898__$1);
var G__36358 = c__4679__auto__;
var G__36359 = cljs.core.count(c__4679__auto__);
var G__36360 = (0);
seq__35898 = G__36357;
chunk__35899 = G__36358;
count__35900 = G__36359;
i__35901 = G__36360;
continue;
} else {
var plot = cljs.core.first(seq__35898__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* Plot",cljs.core.first(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(plot))),": "], 0));

var seq__35951_36361 = cljs.core.seq(io.ianalytics.d4d.api.systema.r_has(io.ianalytics.d4d.api.systema.g_from.cljs$core$IFn$_invoke$arity$1(plot),io.ianalytics.d4d.api.systema._BAR__BAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397)) : C.call(null,new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397))),(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"TimeSeries","TimeSeries",-2039386457)) : C.call(null,new cljs.core.Keyword(null,"TimeSeries","TimeSeries",-2039386457)))], 0))));
var chunk__35954_36362 = null;
var count__35955_36363 = (0);
var i__35956_36364 = (0);
while(true){
if((i__35956_36364 < count__35955_36363)){
var trend_36365 = chunk__35954_36362.cljs$core$IIndexed$_nth$arity$2(null,i__35956_36364);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  - Trend",(function (){var fexpr__35974 = cljs.core.deref(trend_36365);
return (fexpr__35974.cljs$core$IFn$_invoke$arity$1 ? fexpr__35974.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400)) : fexpr__35974.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
})()], 0));


var G__36366 = seq__35951_36361;
var G__36367 = chunk__35954_36362;
var G__36368 = count__35955_36363;
var G__36369 = (i__35956_36364 + (1));
seq__35951_36361 = G__36366;
chunk__35954_36362 = G__36367;
count__35955_36363 = G__36368;
i__35956_36364 = G__36369;
continue;
} else {
var temp__5753__auto___36370__$1 = cljs.core.seq(seq__35951_36361);
if(temp__5753__auto___36370__$1){
var seq__35951_36371__$1 = temp__5753__auto___36370__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35951_36371__$1)){
var c__4679__auto___36372 = cljs.core.chunk_first(seq__35951_36371__$1);
var G__36373 = cljs.core.chunk_rest(seq__35951_36371__$1);
var G__36374 = c__4679__auto___36372;
var G__36375 = cljs.core.count(c__4679__auto___36372);
var G__36376 = (0);
seq__35951_36361 = G__36373;
chunk__35954_36362 = G__36374;
count__35955_36363 = G__36375;
i__35956_36364 = G__36376;
continue;
} else {
var trend_36377 = cljs.core.first(seq__35951_36371__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  - Trend",(function (){var fexpr__35977 = cljs.core.deref(trend_36377);
return (fexpr__35977.cljs$core$IFn$_invoke$arity$1 ? fexpr__35977.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400)) : fexpr__35977.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400)));
})()], 0));


var G__36378 = cljs.core.next(seq__35951_36371__$1);
var G__36379 = null;
var G__36380 = (0);
var G__36381 = (0);
seq__35951_36361 = G__36378;
chunk__35954_36362 = G__36379;
count__35955_36363 = G__36380;
i__35956_36364 = G__36381;
continue;
}
} else {
}
}
break;
}


var G__36382 = cljs.core.next(seq__35898__$1);
var G__36383 = null;
var G__36384 = (0);
var G__36385 = (0);
seq__35898 = G__36382;
chunk__35899 = G__36383;
count__35900 = G__36384;
i__35901 = G__36385;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return (function (){
return cljs.core.List.EMPTY;
});

}
}
}
}));

(io.ianalytics.d4d.api.systema.tree_action.cljs$lang$maxFixedArity = 2);

/**
 * Generate tree for demonstration.
 */
io.ianalytics.d4d.api.systema.make_tree = (function io$ianalytics$d4d$api$systema$make_tree(var_args){
var G__35980 = arguments.length;
switch (G__35980) {
case 1:
return io.ianalytics.d4d.api.systema.make_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.make_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.make_tree.cljs$core$IFn$_invoke$arity$1 = (function (node){
return io.ianalytics.d4d.api.systema.make_tree.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state))));
}));

(io.ianalytics.d4d.api.systema.make_tree.cljs$core$IFn$_invoke$arity$2 = (function (node,C){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node))),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node))),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4652__auto__ = (function io$ianalytics$d4d$api$systema$iter__35982(s__35983){
return (new cljs.core.LazySeq(null,(function (){
var s__35983__$1 = s__35983;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35983__$1);
if(temp__5753__auto__){
var s__35983__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35983__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35983__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35985 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35984 = (0);
while(true){
if((i__35984 < size__4651__auto__)){
var subnode = cljs.core._nth(c__4650__auto__,i__35984);
if(((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Monitor","Monitor",-1349640387)) : C.call(null,new cljs.core.Keyword(null,"Monitor","Monitor",-1349640387))))) && (((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Mean","Mean",-1007176183)) : C.call(null,new cljs.core.Keyword(null,"Mean","Mean",-1007176183))))) && (((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Measured","Measured",1893673082)) : C.call(null,new cljs.core.Keyword(null,"Measured","Measured",1893673082))))) && (((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Expected","Expected",-1169968620)) : C.call(null,new cljs.core.Keyword(null,"Expected","Expected",-1169968620))))) && (((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Variance","Variance",-1274962810)) : C.call(null,new cljs.core.Keyword(null,"Variance","Variance",-1274962810))))) && (io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"KRI","KRI",1496200104)) : C.call(null,new cljs.core.Keyword(null,"KRI","KRI",1496200104))))))))))))))){
cljs.core.chunk_append(b__35985,io.ianalytics.d4d.api.systema.make_tree.cljs$core$IFn$_invoke$arity$2(subnode,C));

var G__36387 = (i__35984 + (1));
i__35984 = G__36387;
continue;
} else {
var G__36388 = (i__35984 + (1));
i__35984 = G__36388;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35985),io$ianalytics$d4d$api$systema$iter__35982(cljs.core.chunk_rest(s__35983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35985),null);
}
} else {
var subnode = cljs.core.first(s__35983__$2);
if(((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Monitor","Monitor",-1349640387)) : C.call(null,new cljs.core.Keyword(null,"Monitor","Monitor",-1349640387))))) && (((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Mean","Mean",-1007176183)) : C.call(null,new cljs.core.Keyword(null,"Mean","Mean",-1007176183))))) && (((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Measured","Measured",1893673082)) : C.call(null,new cljs.core.Keyword(null,"Measured","Measured",1893673082))))) && (((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Expected","Expected",-1169968620)) : C.call(null,new cljs.core.Keyword(null,"Expected","Expected",-1169968620))))) && (((io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Variance","Variance",-1274962810)) : C.call(null,new cljs.core.Keyword(null,"Variance","Variance",-1274962810))))) && (io.ianalytics.d4d.api.systema.is_not_a_QMARK_(subnode,(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"KRI","KRI",1496200104)) : C.call(null,new cljs.core.Keyword(null,"KRI","KRI",1496200104))))))))))))))){
return cljs.core.cons(io.ianalytics.d4d.api.systema.make_tree.cljs$core$IFn$_invoke$arity$2(subnode,C),io$ianalytics$d4d$api$systema$iter__35982(cljs.core.rest(s__35983__$2)));
} else {
var G__36389 = cljs.core.rest(s__35983__$2);
s__35983__$1 = G__36389;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__((function (){var fexpr__35997 = cljs.core.deref(node);
return (fexpr__35997.cljs$core$IFn$_invoke$arity$1 ? fexpr__35997.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"has","has",1466247447)) : fexpr__35997.call(null,new cljs.core.Keyword(null,"has","has",1466247447)));
})());
})(),new cljs.core.Keyword(null,"action","action",-811238024),io.ianalytics.d4d.api.systema.tree_action.cljs$core$IFn$_invoke$arity$2(node,C)], null);
}));

(io.ianalytics.d4d.api.systema.make_tree.cljs$lang$maxFixedArity = 2);

/**
 * Print tree for demonstration and trigger actions.
 */
io.ianalytics.d4d.api.systema.print_tree = (function io$ianalytics$d4d$api$systema$print_tree(var_args){
var G__36000 = arguments.length;
switch (G__36000) {
case 1:
return io.ianalytics.d4d.api.systema.print_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.print_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.print_tree.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return io.ianalytics.d4d.api.systema.print_tree.cljs$core$IFn$_invoke$arity$2(tree,"");
}));

(io.ianalytics.d4d.api.systema.print_tree.cljs$core$IFn$_invoke$arity$2 = (function (tree,indent){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([indent,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tree)], 0));

var fexpr__36001_36391 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(tree);
(fexpr__36001_36391.cljs$core$IFn$_invoke$arity$0 ? fexpr__36001_36391.cljs$core$IFn$_invoke$arity$0() : fexpr__36001_36391.call(null));

cljs.core.println();

var seq__36002 = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(tree));
var chunk__36003 = null;
var count__36004 = (0);
var i__36005 = (0);
while(true){
if((i__36005 < count__36004)){
var child = chunk__36003.cljs$core$IIndexed$_nth$arity$2(null,i__36005);
io.ianalytics.d4d.api.systema.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),"  "].join(''));


var G__36392 = seq__36002;
var G__36393 = chunk__36003;
var G__36394 = count__36004;
var G__36395 = (i__36005 + (1));
seq__36002 = G__36392;
chunk__36003 = G__36393;
count__36004 = G__36394;
i__36005 = G__36395;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36002);
if(temp__5753__auto__){
var seq__36002__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36002__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36002__$1);
var G__36396 = cljs.core.chunk_rest(seq__36002__$1);
var G__36397 = c__4679__auto__;
var G__36398 = cljs.core.count(c__4679__auto__);
var G__36399 = (0);
seq__36002 = G__36396;
chunk__36003 = G__36397;
count__36004 = G__36398;
i__36005 = G__36399;
continue;
} else {
var child = cljs.core.first(seq__36002__$1);
io.ianalytics.d4d.api.systema.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),"  "].join(''));


var G__36400 = cljs.core.next(seq__36002__$1);
var G__36401 = null;
var G__36402 = (0);
var G__36403 = (0);
seq__36002 = G__36400;
chunk__36003 = G__36401;
count__36004 = G__36402;
i__36005 = G__36403;
continue;
}
} else {
return null;
}
}
break;
}
}));

(io.ianalytics.d4d.api.systema.print_tree.cljs$lang$maxFixedArity = 2);

io.ianalytics.d4d.api.systema.globals = (function io$ianalytics$d4d$api$systema$globals(sys){
var nodes = ((cljs.core.map_QMARK_(sys))?cljs.core.vals(sys):sys);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,"names")),m], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36008_SHARP_){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"0"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36008_SHARP_,"in"));
}),nodes)));
});
io.ianalytics.d4d.api.systema.get_instances = (function io$ianalytics$d4d$api$systema$get_instances(var_args){
var G__36022 = arguments.length;
switch (G__36022) {
case 2:
return io.ianalytics.d4d.api.systema.get_instances.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return io.ianalytics.d4d.api.systema.get_instances.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.get_instances.cljs$core$IFn$_invoke$arity$2 = (function (concept,sys){
return io.ianalytics.d4d.api.systema.get_instances.cljs$core$IFn$_invoke$arity$3(concept,sys,io.ianalytics.d4d.api.systema.globals(sys));
}));

(io.ianalytics.d4d.api.systema.get_instances.cljs$core$IFn$_invoke$arity$3 = (function (concept,sys,globals){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(sys,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(globals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [concept,"has"], null))));
}));

(io.ianalytics.d4d.api.systema.get_instances.cljs$lang$maxFixedArity = 3);

/**
 * Takes a sequence of nodes `parents` and returns a function of
 *   `node` that checks if `node` is in `parents`.
 */
io.ianalytics.d4d.api.systema.is_in_QMARK_ = (function io$ianalytics$d4d$api$systema$is_in_QMARK_(parents){
return (function (node){
var node_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"in"));
var parent_uids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36023_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36023_SHARP_,"uid");
}),parents));
return cljs.core.some(node_parents,parent_uids);
});
});
/**
 * Takes sequence of Systema `nodes` and returns a closure to
 *   type nodes.
 * 
 *   Typed nodes have a property with a list of types.
 */
io.ianalytics.d4d.api.systema.make_typer = (function io$ianalytics$d4d$api$systema$make_typer(nodes){
var globals = io.ianalytics.d4d.api.systema.globals(nodes);
var plot_concept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(globals,"Plot");
var is_plot_QMARK_ = io.ianalytics.d4d.api.systema.is_in_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [plot_concept], null));
var timeseries_concepts = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (n){
var G__36027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(n,"uid");
var fexpr__36026 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(globals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TimeSeries","has"], null)));
return (fexpr__36026.cljs$core$IFn$_invoke$arity$1 ? fexpr__36026.cljs$core$IFn$_invoke$arity$1(G__36027) : fexpr__36026.call(null,G__36027));
}),nodes);
var is_timeseries_QMARK_ = io.ianalytics.d4d.api.systema.is_in_QMARK_(timeseries_concepts);
return (function (node){
if(cljs.core.truth_(is_plot_QMARK_(node))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["plot"], null));
} else {
if(cljs.core.truth_(is_timeseries_QMARK_(node))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["timeseries"], null));
} else {
if(cljs.core.map_QMARK_(node)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unknown"], null));
} else {
return node;

}
}
}
});
});
/**
 * Build a node of a tree.
 * 
 *   Node is excluded from the tree if
 * 
 *  (pred node)
 * 
 *   evaluates to true.
 * 
 *   A node of a tree has a `children` property containing sequence
 *   of subnodes.
 */
io.ianalytics.d4d.api.systema.build_raw_subtree = (function io$ianalytics$d4d$api$systema$build_raw_subtree(nodes,node,pred){
var child_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"has");
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(node) : pred.call(null,node)))){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (uuid){
var G__36029 = nodes;
var G__36030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,uuid);
var G__36031 = pred;
return (io.ianalytics.d4d.api.systema.build_raw_subtree.cljs$core$IFn$_invoke$arity$3 ? io.ianalytics.d4d.api.systema.build_raw_subtree.cljs$core$IFn$_invoke$arity$3(G__36029,G__36030,G__36031) : io.ianalytics.d4d.api.systema.build_raw_subtree.call(null,G__36029,G__36030,G__36031));
}),child_uuids)));
}
});
/**
 * Returns true if at least one child of `node` is of type plot.
 */
io.ianalytics.d4d.api.systema.has_plots_QMARK_ = (function io$ianalytics$d4d$api$systema$has_plots_QMARK_(node){
var plots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36032_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["plot",null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__36032_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.seq(plots)){
return true;
} else {
return false;
}
});
/**
 * Returns true if at least one child of `node` is of any 'TimeSeries' type.
 */
io.ianalytics.d4d.api.systema.has_timeseries_QMARK_ = (function io$ianalytics$d4d$api$systema$has_timeseries_QMARK_(node){
var plots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36043_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["timeseries",null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__36043_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.seq(plots)){
return true;
} else {
return false;
}
});
/**
 * Build the tree to display from node sequence.
 * 
 *   This relies on a :Tree node being attached to the root.
 *   Nodes of concept 'Model' are excluded.
 */
io.ianalytics.d4d.api.systema.buildTree = (function io$ianalytics$d4d$api$systema$buildTree(nodes){
return cljs.core.clj__GT_js(io.ianalytics.d4d.api.systema.make_tree.cljs$core$IFn$_invoke$arity$2(cljs.core.first(io.ianalytics.d4d.api.systema.g_from.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Tree","Tree",11446750).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)))))),new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)))));
});
/**
 * Retrieve current systems Systema description.
 * 
 *   Systema description is an Object, where the properties are
 *   the `uid`s and values are corresponding nodes.
 * 
 *   This is memoized in @state, results will be fetched with respect to the API_URL.
 */
io.ianalytics.d4d.api.systema.getDescription = (function io$ianalytics$d4d$api$systema$getDescription(var_args){
var G__36046 = arguments.length;
switch (G__36046) {
case 0:
return io.ianalytics.d4d.api.systema.getDescription.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return io.ianalytics.d4d.api.systema.getDescription.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.getDescription.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.getDescription.cljs$core$IFn$_invoke$arity$0 = (function (){
return io.ianalytics.d4d.api.systema.getDescription.cljs$core$IFn$_invoke$arity$2(console.log,console.log);
}));

(io.ianalytics.d4d.api.systema.getDescription.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return io.ianalytics.d4d.api.systema.getDescription.cljs$core$IFn$_invoke$arity$2(callback,console.log);
}));

(io.ianalytics.d4d.api.systema.getDescription.cljs$core$IFn$_invoke$arity$2 = (function (callback,error){
var url = [io.ianalytics.d4d.api.core.API_URL,"/system"].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)))){
var G__36048 = new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36048) : callback.call(null,G__36048));
} else {
var response = window.fetch(url);
return response.then((function (response__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(response__$1.status,(200))){
return response__$1.json().then((function (json){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(io.ianalytics.d4d.api.systema.state,cljs.core.assoc,new cljs.core.Keyword(null,"url","url",276297046),url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"json","json",1279968570),json,new cljs.core.Keyword(null,"graph","graph",1558099509),io.ianalytics.d4d.api.systema.systema_graph(io.ianalytics.d4d.api.systema.unmarshal_systema_nodes(cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))))], 0));

cljs.core.reset_BANG_(io.ianalytics.d4d.api.systema.C,new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state))));

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(json) : callback.call(null,json));
}));
} else {
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(response__$1) : error.call(null,response__$1));

}
})).catch((function (response__$1){
return console.log("Error retrieving systema configuration:",response__$1);
}));

}
}));

(io.ianalytics.d4d.api.systema.getDescription.cljs$lang$maxFixedArity = 2);

/**
 * Takes node sequence `nodes`. Attach node types and potential plots
 *   to nodes of node sequence.
 */
io.ianalytics.d4d.api.systema.enrichNodesWithPlots = (function io$ianalytics$d4d$api$systema$enrichNodesWithPlots(nodes){
var nodes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36052){
var vec__36054 = p__36052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36054,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36054,(1),null);
return cljs.core.map_QMARK_(node);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(nodes));
var typer = io.ianalytics.d4d.api.systema.make_typer(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,nodes__$1));
var typed_nodes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36057){
var vec__36058 = p__36057;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,typer(v)], null);
}),nodes__$1));
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36061){
var vec__36062 = p__36061;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,(function (){var node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36050_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(typed_nodes,p1__36050_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"has")));
if(io.ianalytics.d4d.api.systema.has_timeseries_QMARK_(node__$1)){
var plots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36051_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["timeseries",null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__36051_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node__$1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["plotStack"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"plots","plots",-405750310),plots], 0));
} else {
return node__$1;
}
})()], null);
}),typed_nodes)));
});
/**
 * Return a string of node names on the tree path from UID to a root node, separated by '>'.
 */
io.ianalytics.d4d.api.systema.nodePathAsString = (function io$ianalytics$d4d$api$systema$nodePathAsString(var_args){
var G__36070 = arguments.length;
switch (G__36070) {
case 1:
return io.ianalytics.d4d.api.systema.nodePathAsString.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return io.ianalytics.d4d.api.systema.nodePathAsString.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.systema.nodePathAsString.cljs$core$IFn$_invoke$arity$1 = (function (uid){
return io.ianalytics.d4d.api.systema.nodePathAsString.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.first(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"Tree","Tree",11446750).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state))))))))));
}));

(io.ianalytics.d4d.api.systema.nodePathAsString.cljs$core$IFn$_invoke$arity$2 = (function (uid,root_uid){
var graph = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)));
var parent_uids = (function (){var current_uid = uid;
var parents = cljs.core.List.EMPTY;
while(true){
var current_parent_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_uid,"in"], null));
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.empty_QMARK_(current_parent_list);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([root_uid]),current_parent_list);
}
})())){
return parents;
} else {
var G__36407 = cljs.core.first(current_parent_list);
var G__36408 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,cljs.core.first(current_parent_list));
current_uid = G__36407;
parents = G__36408;
continue;
}
break;
}
})();
return cljs.core.clj__GT_js(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.first,(function (p1__36067_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36067_SHARP_,"names");
}),(function (p1__36068_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,p1__36068_SHARP_);
})),parent_uids))));
}));

(io.ianalytics.d4d.api.systema.nodePathAsString.cljs$lang$maxFixedArity = 2);

/**
 * Return a sequence of node uids on the tree path from UID to the graph root.
 */
io.ianalytics.d4d.api.systema.nodePathAsNodeSeq = (function io$ianalytics$d4d$api$systema$nodePathAsNodeSeq(uid){
var graph = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)));
var parent_uids = (function (){var current_uid = uid;
var parents = cljs.core.List.EMPTY;
while(true){
var current_parent_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_uid,"in"], null));
if(cljs.core.empty_QMARK_(current_parent_list)){
return parents;
} else {
var G__36409 = cljs.core.first(current_parent_list);
var G__36410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,cljs.core.first(current_parent_list));
current_uid = G__36409;
parents = G__36410;
continue;
}
break;
}
})();
return cljs.core.clj__GT_js(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__36071_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36071_SHARP_,"uid");
}),(function (p1__36072_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,p1__36072_SHARP_);
})),parent_uids)));
});
io.ianalytics.d4d.api.systema.isSpectrum = (function io$ianalytics$d4d$api$systema$isSpectrum(node_uid){
var node = io.ianalytics.d4d.api.systema.uid__GT_node(node_uid);
var C = new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)));
return (!(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.$(cljs.core.first(io.ianalytics.d4d.api.systema.r_in(io.ianalytics.d4d.api.systema.uid__GT_node(node_uid),(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Spectrum","Spectrum",-1827141300)) : C.call(null,new cljs.core.Keyword(null,"Spectrum","Spectrum",-1827141300))))))))));
});
io.ianalytics.d4d.api.systema.getRangeAndLength = (function io$ianalytics$d4d$api$systema$getRangeAndLength(node_uid){
var C = new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)));
var temp__5753__auto__ = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.$(cljs.core.first(io.ianalytics.d4d.api.systema.r_in(io.ianalytics.d4d.api.systema.uid__GT_node(node_uid),(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Spectrum","Spectrum",-1827141300)) : C.call(null,new cljs.core.Keyword(null,"Spectrum","Spectrum",-1827141300)))))));
if(cljs.core.truth_(temp__5753__auto__)){
var fields = temp__5753__auto__;
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(fields),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(fields)], null));
} else {
return null;
}
});
io.ianalytics.d4d.api.systema.which = (function io$ianalytics$d4d$api$systema$which(concept,node_uid){

var C = new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)));
return cljs.core.first(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.$(cljs.core.first(io.ianalytics.d4d.api.systema.r_in(io.ianalytics.d4d.api.systema.uid__GT_node(node_uid),io.ianalytics.d4d.api.systema._AMPERSAND__AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([io.ianalytics.d4d.api.systema.elem_QMARK_.cljs$core$IFn$_invoke$arity$1((C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(concept) : C.call(null,concept))),io.ianalytics.d4d.api.systema.concept_QMARK_], 0)))))));
});
io.ianalytics.d4d.api.systema.isCompressorMap = (function io$ianalytics$d4d$api$systema$isCompressorMap(node_uid_x,node_uid_y){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Volume Flow",io.ianalytics.d4d.api.systema.which(new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397),node_uid_x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Head",io.ianalytics.d4d.api.systema.which(new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397),node_uid_y))));
});
/**
 * Return the symbol for the unit that NODE-UID's data should be displayed as. This is either the default SI Unit for this nodes :Quantity, or the displayUnit defined in the systema description, or a user-defined localStorage entry for the lower-case name for this quantity.
 */
io.ianalytics.d4d.api.systema.displayUnit = (function io$ianalytics$d4d$api$systema$displayUnit(node_uid){
var default_display_unit = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"influx","influx",-461839770).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.$(io.ianalytics.d4d.api.systema.uid__GT_node(node_uid)))));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1((function (){var G__36084 = io.ianalytics.d4d.api.systema.which(new cljs.core.Keyword(null,"Quantity","Quantity",-1939883397),node_uid);
return (io.ianalytics.d4d.api.units.display_unit_map.cljs$core$IFn$_invoke$arity$1 ? io.ianalytics.d4d.api.units.display_unit_map.cljs$core$IFn$_invoke$arity$1(G__36084) : io.ianalytics.d4d.api.units.display_unit_map.call(null,G__36084));
})());
}
})();
var stored_unit = (function (){var and__4251__auto__ = default_display_unit;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = io.ianalytics.d4d.api.units.dimension(default_display_unit);
if(cljs.core.truth_(and__4251__auto____$1)){
return localStorage.getItem(clojure.string.lower_case(io.ianalytics.d4d.api.units.dimension(default_display_unit)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
return cljs.core.clj__GT_js((function (){var or__4253__auto__ = stored_unit;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var and__4251__auto__ = io.ianalytics.d4d.api.systema.is_a_QMARK_.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.uid__GT_node(node_uid),new cljs.core.Keyword(null,"KRI","KRI",1496200104).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)))));
if(cljs.core.truth_(and__4251__auto__)){
return "KRI";
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var and__4251__auto__ = io.ianalytics.d4d.api.systema.isSpectrum(node_uid);
if(and__4251__auto__){
return node_uid;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = default_display_unit;
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
return "";
}
}
}
}
})());
});
io.ianalytics.d4d.api.systema.timeseries_nodes = (function io$ianalytics$d4d$api$systema$timeseries_nodes(node_uid){
var C = new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36088_SHARP_){
return new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(io.ianalytics.d4d.api.systema.$(p1__36088_SHARP_));
}),io.ianalytics.d4d.api.systema.r_has(io.ianalytics.d4d.api.systema.uid__GT_node(node_uid),(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"TimeSeries","TimeSeries",-2039386457)) : C.call(null,new cljs.core.Keyword(null,"TimeSeries","TimeSeries",-2039386457)))));
});
io.ianalytics.d4d.api.systema.displayUnitGroups = (function io$ianalytics$d4d$api$systema$displayUnitGroups(node_uids){
var C = new cljs.core.Keyword(null,"concepts","concepts",-855842190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(io.ianalytics.d4d.api.systema.state)));
var expanded_nodes = cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(io.ianalytics.d4d.api.systema.timeseries_nodes,node_uids)));
return cljs.core.clj__GT_js(cljs.core.vals(cljs.core.group_by(io.ianalytics.d4d.api.systema.displayUnit,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,expanded_nodes))));
});
io.ianalytics.d4d.api.systema.plotTitle = (function io$ianalytics$d4d$api$systema$plotTitle(node_uid){
return cljs.core.clj__GT_js(io.ianalytics.d4d.api.systema.nodePathAsString.cljs$core$IFn$_invoke$arity$1(node_uid));
});

//# sourceMappingURL=io.ianalytics.d4d.api.systema.js.map
