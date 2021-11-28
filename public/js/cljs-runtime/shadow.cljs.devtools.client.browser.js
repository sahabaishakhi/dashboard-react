goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36096 = arguments.length;
var i__4865__auto___36097 = (0);
while(true){
if((i__4865__auto___36097 < len__4864__auto___36096)){
args__4870__auto__.push((arguments[i__4865__auto___36097]));

var G__36102 = (i__4865__auto___36097 + (1));
i__4865__auto___36097 = G__36102;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35871){
var G__35872 = cljs.core.first(seq35871);
var seq35871__$1 = cljs.core.next(seq35871);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35872,seq35871__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35874 = cljs.core.seq(sources);
var chunk__35875 = null;
var count__35876 = (0);
var i__35877 = (0);
while(true){
if((i__35877 < count__35876)){
var map__35883 = chunk__35875.cljs$core$IIndexed$_nth$arity$2(null,i__35877);
var map__35883__$1 = cljs.core.__destructure_map(map__35883);
var src = map__35883__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35883__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35883__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35883__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35885){var e_36107 = e35885;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36107);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36107.message)].join('')));
}

var G__36108 = seq__35874;
var G__36109 = chunk__35875;
var G__36110 = count__35876;
var G__36111 = (i__35877 + (1));
seq__35874 = G__36108;
chunk__35875 = G__36109;
count__35876 = G__36110;
i__35877 = G__36111;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35874);
if(temp__5753__auto__){
var seq__35874__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35874__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35874__$1);
var G__36116 = cljs.core.chunk_rest(seq__35874__$1);
var G__36117 = c__4679__auto__;
var G__36118 = cljs.core.count(c__4679__auto__);
var G__36119 = (0);
seq__35874 = G__36116;
chunk__35875 = G__36117;
count__35876 = G__36118;
i__35877 = G__36119;
continue;
} else {
var map__35886 = cljs.core.first(seq__35874__$1);
var map__35886__$1 = cljs.core.__destructure_map(map__35886);
var src = map__35886__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35886__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35886__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35886__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35886__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35888){var e_36130 = e35888;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36130);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36130.message)].join('')));
}

var G__36131 = cljs.core.next(seq__35874__$1);
var G__36132 = null;
var G__36133 = (0);
var G__36134 = (0);
seq__35874 = G__36131;
chunk__35875 = G__36132;
count__35876 = G__36133;
i__35877 = G__36134;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35892 = cljs.core.seq(js_requires);
var chunk__35893 = null;
var count__35894 = (0);
var i__35895 = (0);
while(true){
if((i__35895 < count__35894)){
var js_ns = chunk__35893.cljs$core$IIndexed$_nth$arity$2(null,i__35895);
var require_str_36135 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36135);


var G__36136 = seq__35892;
var G__36137 = chunk__35893;
var G__36138 = count__35894;
var G__36139 = (i__35895 + (1));
seq__35892 = G__36136;
chunk__35893 = G__36137;
count__35894 = G__36138;
i__35895 = G__36139;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35892);
if(temp__5753__auto__){
var seq__35892__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35892__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35892__$1);
var G__36141 = cljs.core.chunk_rest(seq__35892__$1);
var G__36142 = c__4679__auto__;
var G__36143 = cljs.core.count(c__4679__auto__);
var G__36144 = (0);
seq__35892 = G__36141;
chunk__35893 = G__36142;
count__35894 = G__36143;
i__35895 = G__36144;
continue;
} else {
var js_ns = cljs.core.first(seq__35892__$1);
var require_str_36145 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36145);


var G__36146 = cljs.core.next(seq__35892__$1);
var G__36147 = null;
var G__36148 = (0);
var G__36149 = (0);
seq__35892 = G__36146;
chunk__35893 = G__36147;
count__35894 = G__36148;
i__35895 = G__36149;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35910){
var map__35911 = p__35910;
var map__35911__$1 = cljs.core.__destructure_map(map__35911);
var msg = map__35911__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35911__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35911__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35913(s__35914){
return (new cljs.core.LazySeq(null,(function (){
var s__35914__$1 = s__35914;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35914__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35920 = cljs.core.first(xs__6308__auto__);
var map__35920__$1 = cljs.core.__destructure_map(map__35920);
var src = map__35920__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35920__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35920__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__35914__$1,map__35920,map__35920__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35911,map__35911__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35913_$_iter__35915(s__35916){
return (new cljs.core.LazySeq(null,((function (s__35914__$1,map__35920,map__35920__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35911,map__35911__$1,msg,info,reload_info){
return (function (){
var s__35916__$1 = s__35916;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35916__$1);
if(temp__5753__auto____$1){
var s__35916__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35916__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35916__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35918 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35917 = (0);
while(true){
if((i__35917 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__35917);
cljs.core.chunk_append(b__35918,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36155 = (i__35917 + (1));
i__35917 = G__36155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35918),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35913_$_iter__35915(cljs.core.chunk_rest(s__35916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35918),null);
}
} else {
var warning = cljs.core.first(s__35916__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35913_$_iter__35915(cljs.core.rest(s__35916__$2)));
}
} else {
return null;
}
break;
}
});})(s__35914__$1,map__35920,map__35920__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35911,map__35911__$1,msg,info,reload_info))
,null,null));
});})(s__35914__$1,map__35920,map__35920__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35911,map__35911__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35913(cljs.core.rest(s__35914__$1)));
} else {
var G__36156 = cljs.core.rest(s__35914__$1);
s__35914__$1 = G__36156;
continue;
}
} else {
var G__36157 = cljs.core.rest(s__35914__$1);
s__35914__$1 = G__36157;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35929_36158 = cljs.core.seq(warnings);
var chunk__35930_36159 = null;
var count__35931_36160 = (0);
var i__35932_36161 = (0);
while(true){
if((i__35932_36161 < count__35931_36160)){
var map__35938_36162 = chunk__35930_36159.cljs$core$IIndexed$_nth$arity$2(null,i__35932_36161);
var map__35938_36163__$1 = cljs.core.__destructure_map(map__35938_36162);
var w_36164 = map__35938_36163__$1;
var msg_36165__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36163__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36163__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36163__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36163__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36168)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36166),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36167),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36165__$1)].join(''));


var G__36169 = seq__35929_36158;
var G__36170 = chunk__35930_36159;
var G__36171 = count__35931_36160;
var G__36172 = (i__35932_36161 + (1));
seq__35929_36158 = G__36169;
chunk__35930_36159 = G__36170;
count__35931_36160 = G__36171;
i__35932_36161 = G__36172;
continue;
} else {
var temp__5753__auto___36173 = cljs.core.seq(seq__35929_36158);
if(temp__5753__auto___36173){
var seq__35929_36174__$1 = temp__5753__auto___36173;
if(cljs.core.chunked_seq_QMARK_(seq__35929_36174__$1)){
var c__4679__auto___36175 = cljs.core.chunk_first(seq__35929_36174__$1);
var G__36180 = cljs.core.chunk_rest(seq__35929_36174__$1);
var G__36181 = c__4679__auto___36175;
var G__36182 = cljs.core.count(c__4679__auto___36175);
var G__36183 = (0);
seq__35929_36158 = G__36180;
chunk__35930_36159 = G__36181;
count__35931_36160 = G__36182;
i__35932_36161 = G__36183;
continue;
} else {
var map__35940_36184 = cljs.core.first(seq__35929_36174__$1);
var map__35940_36185__$1 = cljs.core.__destructure_map(map__35940_36184);
var w_36186 = map__35940_36185__$1;
var msg_36187__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35940_36185__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35940_36185__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35940_36185__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35940_36185__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36190)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36188),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36189),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36187__$1)].join(''));


var G__36199 = cljs.core.next(seq__35929_36174__$1);
var G__36200 = null;
var G__36201 = (0);
var G__36202 = (0);
seq__35929_36158 = G__36199;
chunk__35930_36159 = G__36200;
count__35931_36160 = G__36201;
i__35932_36161 = G__36202;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35905_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35905_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35949){
var map__35950 = p__35949;
var map__35950__$1 = cljs.core.__destructure_map(map__35950);
var msg = map__35950__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35952 = cljs.core.seq(updates);
var chunk__35957 = null;
var count__35958 = (0);
var i__35959 = (0);
while(true){
if((i__35959 < count__35958)){
var path = chunk__35957.cljs$core$IIndexed$_nth$arity$2(null,i__35959);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36010_36204 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36014_36205 = null;
var count__36015_36206 = (0);
var i__36016_36207 = (0);
while(true){
if((i__36016_36207 < count__36015_36206)){
var node_36208 = chunk__36014_36205.cljs$core$IIndexed$_nth$arity$2(null,i__36016_36207);
if(cljs.core.not(node_36208.shadow$old)){
var path_match_36209 = shadow.cljs.devtools.client.browser.match_paths(node_36208.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36209)){
var new_link_36210 = (function (){var G__36025 = node_36208.cloneNode(true);
G__36025.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36209),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36025;
})();
(node_36208.shadow$old = true);

(new_link_36210.onload = ((function (seq__36010_36204,chunk__36014_36205,count__36015_36206,i__36016_36207,seq__35952,chunk__35957,count__35958,i__35959,new_link_36210,path_match_36209,node_36208,path,map__35950,map__35950__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36208);
});})(seq__36010_36204,chunk__36014_36205,count__36015_36206,i__36016_36207,seq__35952,chunk__35957,count__35958,i__35959,new_link_36210,path_match_36209,node_36208,path,map__35950,map__35950__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36209], 0));

goog.dom.insertSiblingAfter(new_link_36210,node_36208);


var G__36211 = seq__36010_36204;
var G__36212 = chunk__36014_36205;
var G__36213 = count__36015_36206;
var G__36214 = (i__36016_36207 + (1));
seq__36010_36204 = G__36211;
chunk__36014_36205 = G__36212;
count__36015_36206 = G__36213;
i__36016_36207 = G__36214;
continue;
} else {
var G__36215 = seq__36010_36204;
var G__36216 = chunk__36014_36205;
var G__36217 = count__36015_36206;
var G__36218 = (i__36016_36207 + (1));
seq__36010_36204 = G__36215;
chunk__36014_36205 = G__36216;
count__36015_36206 = G__36217;
i__36016_36207 = G__36218;
continue;
}
} else {
var G__36220 = seq__36010_36204;
var G__36221 = chunk__36014_36205;
var G__36222 = count__36015_36206;
var G__36223 = (i__36016_36207 + (1));
seq__36010_36204 = G__36220;
chunk__36014_36205 = G__36221;
count__36015_36206 = G__36222;
i__36016_36207 = G__36223;
continue;
}
} else {
var temp__5753__auto___36224 = cljs.core.seq(seq__36010_36204);
if(temp__5753__auto___36224){
var seq__36010_36225__$1 = temp__5753__auto___36224;
if(cljs.core.chunked_seq_QMARK_(seq__36010_36225__$1)){
var c__4679__auto___36226 = cljs.core.chunk_first(seq__36010_36225__$1);
var G__36227 = cljs.core.chunk_rest(seq__36010_36225__$1);
var G__36228 = c__4679__auto___36226;
var G__36229 = cljs.core.count(c__4679__auto___36226);
var G__36230 = (0);
seq__36010_36204 = G__36227;
chunk__36014_36205 = G__36228;
count__36015_36206 = G__36229;
i__36016_36207 = G__36230;
continue;
} else {
var node_36231 = cljs.core.first(seq__36010_36225__$1);
if(cljs.core.not(node_36231.shadow$old)){
var path_match_36232 = shadow.cljs.devtools.client.browser.match_paths(node_36231.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36232)){
var new_link_36233 = (function (){var G__36028 = node_36231.cloneNode(true);
G__36028.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36232),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36028;
})();
(node_36231.shadow$old = true);

(new_link_36233.onload = ((function (seq__36010_36204,chunk__36014_36205,count__36015_36206,i__36016_36207,seq__35952,chunk__35957,count__35958,i__35959,new_link_36233,path_match_36232,node_36231,seq__36010_36225__$1,temp__5753__auto___36224,path,map__35950,map__35950__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36231);
});})(seq__36010_36204,chunk__36014_36205,count__36015_36206,i__36016_36207,seq__35952,chunk__35957,count__35958,i__35959,new_link_36233,path_match_36232,node_36231,seq__36010_36225__$1,temp__5753__auto___36224,path,map__35950,map__35950__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36232], 0));

goog.dom.insertSiblingAfter(new_link_36233,node_36231);


var G__36234 = cljs.core.next(seq__36010_36225__$1);
var G__36235 = null;
var G__36236 = (0);
var G__36237 = (0);
seq__36010_36204 = G__36234;
chunk__36014_36205 = G__36235;
count__36015_36206 = G__36236;
i__36016_36207 = G__36237;
continue;
} else {
var G__36238 = cljs.core.next(seq__36010_36225__$1);
var G__36239 = null;
var G__36240 = (0);
var G__36241 = (0);
seq__36010_36204 = G__36238;
chunk__36014_36205 = G__36239;
count__36015_36206 = G__36240;
i__36016_36207 = G__36241;
continue;
}
} else {
var G__36242 = cljs.core.next(seq__36010_36225__$1);
var G__36243 = null;
var G__36244 = (0);
var G__36245 = (0);
seq__36010_36204 = G__36242;
chunk__36014_36205 = G__36243;
count__36015_36206 = G__36244;
i__36016_36207 = G__36245;
continue;
}
}
} else {
}
}
break;
}


var G__36246 = seq__35952;
var G__36247 = chunk__35957;
var G__36248 = count__35958;
var G__36249 = (i__35959 + (1));
seq__35952 = G__36246;
chunk__35957 = G__36247;
count__35958 = G__36248;
i__35959 = G__36249;
continue;
} else {
var G__36250 = seq__35952;
var G__36251 = chunk__35957;
var G__36252 = count__35958;
var G__36253 = (i__35959 + (1));
seq__35952 = G__36250;
chunk__35957 = G__36251;
count__35958 = G__36252;
i__35959 = G__36253;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35952);
if(temp__5753__auto__){
var seq__35952__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35952__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35952__$1);
var G__36254 = cljs.core.chunk_rest(seq__35952__$1);
var G__36255 = c__4679__auto__;
var G__36256 = cljs.core.count(c__4679__auto__);
var G__36257 = (0);
seq__35952 = G__36254;
chunk__35957 = G__36255;
count__35958 = G__36256;
i__35959 = G__36257;
continue;
} else {
var path = cljs.core.first(seq__35952__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36033_36258 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36037_36259 = null;
var count__36038_36260 = (0);
var i__36039_36261 = (0);
while(true){
if((i__36039_36261 < count__36038_36260)){
var node_36262 = chunk__36037_36259.cljs$core$IIndexed$_nth$arity$2(null,i__36039_36261);
if(cljs.core.not(node_36262.shadow$old)){
var path_match_36263 = shadow.cljs.devtools.client.browser.match_paths(node_36262.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36263)){
var new_link_36264 = (function (){var G__36049 = node_36262.cloneNode(true);
G__36049.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36263),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36049;
})();
(node_36262.shadow$old = true);

(new_link_36264.onload = ((function (seq__36033_36258,chunk__36037_36259,count__36038_36260,i__36039_36261,seq__35952,chunk__35957,count__35958,i__35959,new_link_36264,path_match_36263,node_36262,path,seq__35952__$1,temp__5753__auto__,map__35950,map__35950__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36262);
});})(seq__36033_36258,chunk__36037_36259,count__36038_36260,i__36039_36261,seq__35952,chunk__35957,count__35958,i__35959,new_link_36264,path_match_36263,node_36262,path,seq__35952__$1,temp__5753__auto__,map__35950,map__35950__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36263], 0));

goog.dom.insertSiblingAfter(new_link_36264,node_36262);


var G__36265 = seq__36033_36258;
var G__36266 = chunk__36037_36259;
var G__36267 = count__36038_36260;
var G__36268 = (i__36039_36261 + (1));
seq__36033_36258 = G__36265;
chunk__36037_36259 = G__36266;
count__36038_36260 = G__36267;
i__36039_36261 = G__36268;
continue;
} else {
var G__36269 = seq__36033_36258;
var G__36270 = chunk__36037_36259;
var G__36271 = count__36038_36260;
var G__36272 = (i__36039_36261 + (1));
seq__36033_36258 = G__36269;
chunk__36037_36259 = G__36270;
count__36038_36260 = G__36271;
i__36039_36261 = G__36272;
continue;
}
} else {
var G__36273 = seq__36033_36258;
var G__36274 = chunk__36037_36259;
var G__36275 = count__36038_36260;
var G__36276 = (i__36039_36261 + (1));
seq__36033_36258 = G__36273;
chunk__36037_36259 = G__36274;
count__36038_36260 = G__36275;
i__36039_36261 = G__36276;
continue;
}
} else {
var temp__5753__auto___36279__$1 = cljs.core.seq(seq__36033_36258);
if(temp__5753__auto___36279__$1){
var seq__36033_36280__$1 = temp__5753__auto___36279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36033_36280__$1)){
var c__4679__auto___36281 = cljs.core.chunk_first(seq__36033_36280__$1);
var G__36283 = cljs.core.chunk_rest(seq__36033_36280__$1);
var G__36284 = c__4679__auto___36281;
var G__36285 = cljs.core.count(c__4679__auto___36281);
var G__36286 = (0);
seq__36033_36258 = G__36283;
chunk__36037_36259 = G__36284;
count__36038_36260 = G__36285;
i__36039_36261 = G__36286;
continue;
} else {
var node_36287 = cljs.core.first(seq__36033_36280__$1);
if(cljs.core.not(node_36287.shadow$old)){
var path_match_36288 = shadow.cljs.devtools.client.browser.match_paths(node_36287.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36288)){
var new_link_36289 = (function (){var G__36053 = node_36287.cloneNode(true);
G__36053.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36288),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36053;
})();
(node_36287.shadow$old = true);

(new_link_36289.onload = ((function (seq__36033_36258,chunk__36037_36259,count__36038_36260,i__36039_36261,seq__35952,chunk__35957,count__35958,i__35959,new_link_36289,path_match_36288,node_36287,seq__36033_36280__$1,temp__5753__auto___36279__$1,path,seq__35952__$1,temp__5753__auto__,map__35950,map__35950__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36287);
});})(seq__36033_36258,chunk__36037_36259,count__36038_36260,i__36039_36261,seq__35952,chunk__35957,count__35958,i__35959,new_link_36289,path_match_36288,node_36287,seq__36033_36280__$1,temp__5753__auto___36279__$1,path,seq__35952__$1,temp__5753__auto__,map__35950,map__35950__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36288], 0));

goog.dom.insertSiblingAfter(new_link_36289,node_36287);


var G__36290 = cljs.core.next(seq__36033_36280__$1);
var G__36291 = null;
var G__36292 = (0);
var G__36293 = (0);
seq__36033_36258 = G__36290;
chunk__36037_36259 = G__36291;
count__36038_36260 = G__36292;
i__36039_36261 = G__36293;
continue;
} else {
var G__36294 = cljs.core.next(seq__36033_36280__$1);
var G__36295 = null;
var G__36296 = (0);
var G__36297 = (0);
seq__36033_36258 = G__36294;
chunk__36037_36259 = G__36295;
count__36038_36260 = G__36296;
i__36039_36261 = G__36297;
continue;
}
} else {
var G__36298 = cljs.core.next(seq__36033_36280__$1);
var G__36299 = null;
var G__36300 = (0);
var G__36301 = (0);
seq__36033_36258 = G__36298;
chunk__36037_36259 = G__36299;
count__36038_36260 = G__36300;
i__36039_36261 = G__36301;
continue;
}
}
} else {
}
}
break;
}


var G__36302 = cljs.core.next(seq__35952__$1);
var G__36303 = null;
var G__36304 = (0);
var G__36305 = (0);
seq__35952 = G__36302;
chunk__35957 = G__36303;
count__35958 = G__36304;
i__35959 = G__36305;
continue;
} else {
var G__36307 = cljs.core.next(seq__35952__$1);
var G__36308 = null;
var G__36309 = (0);
var G__36310 = (0);
seq__35952 = G__36307;
chunk__35957 = G__36308;
count__35958 = G__36309;
i__35959 = G__36310;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36065){
var map__36066 = p__36065;
var map__36066__$1 = cljs.core.__destructure_map(map__36066);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36073){
var map__36074 = p__36073;
var map__36074__$1 = cljs.core.__destructure_map(map__36074);
var _ = map__36074__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36074__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36075,done,error){
var map__36076 = p__36075;
var map__36076__$1 = cljs.core.__destructure_map(map__36076);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36077,done,error){
var map__36078 = p__36077;
var map__36078__$1 = cljs.core.__destructure_map(map__36078);
var msg = map__36078__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36078__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36078__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36078__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36079){
var map__36080 = p__36079;
var map__36080__$1 = cljs.core.__destructure_map(map__36080);
var src = map__36080__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36081 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36081) : done.call(null,G__36081));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36082){
var map__36083 = p__36082;
var map__36083__$1 = cljs.core.__destructure_map(map__36083);
var msg__$1 = map__36083__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36085){var ex = e36085;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36086){
var map__36087 = p__36086;
var map__36087__$1 = cljs.core.__destructure_map(map__36087);
var env = map__36087__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36089){
var map__36090 = p__36089;
var map__36090__$1 = cljs.core.__destructure_map(map__36090);
var msg = map__36090__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36091){
var map__36092 = p__36091;
var map__36092__$1 = cljs.core.__destructure_map(map__36092);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36092__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36092__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36093){
var map__36094 = p__36093;
var map__36094__$1 = cljs.core.__destructure_map(map__36094);
var svc = map__36094__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36094__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
