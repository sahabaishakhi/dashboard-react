goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35040){
var map__35041 = p__35040;
var map__35041__$1 = cljs.core.__destructure_map(map__35041);
var m = map__35041__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35041__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35041__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35045_35293 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35046_35294 = null;
var count__35047_35295 = (0);
var i__35048_35296 = (0);
while(true){
if((i__35048_35296 < count__35047_35295)){
var f_35297 = chunk__35046_35294.cljs$core$IIndexed$_nth$arity$2(null,i__35048_35296);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35297], 0));


var G__35298 = seq__35045_35293;
var G__35299 = chunk__35046_35294;
var G__35300 = count__35047_35295;
var G__35301 = (i__35048_35296 + (1));
seq__35045_35293 = G__35298;
chunk__35046_35294 = G__35299;
count__35047_35295 = G__35300;
i__35048_35296 = G__35301;
continue;
} else {
var temp__5753__auto___35302 = cljs.core.seq(seq__35045_35293);
if(temp__5753__auto___35302){
var seq__35045_35303__$1 = temp__5753__auto___35302;
if(cljs.core.chunked_seq_QMARK_(seq__35045_35303__$1)){
var c__4679__auto___35304 = cljs.core.chunk_first(seq__35045_35303__$1);
var G__35305 = cljs.core.chunk_rest(seq__35045_35303__$1);
var G__35306 = c__4679__auto___35304;
var G__35307 = cljs.core.count(c__4679__auto___35304);
var G__35308 = (0);
seq__35045_35293 = G__35305;
chunk__35046_35294 = G__35306;
count__35047_35295 = G__35307;
i__35048_35296 = G__35308;
continue;
} else {
var f_35309 = cljs.core.first(seq__35045_35303__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35309], 0));


var G__35311 = cljs.core.next(seq__35045_35303__$1);
var G__35312 = null;
var G__35313 = (0);
var G__35314 = (0);
seq__35045_35293 = G__35311;
chunk__35046_35294 = G__35312;
count__35047_35295 = G__35313;
i__35048_35296 = G__35314;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35315 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35315], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35315)))?cljs.core.second(arglists_35315):arglists_35315)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35069_35316 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35070_35317 = null;
var count__35071_35318 = (0);
var i__35072_35319 = (0);
while(true){
if((i__35072_35319 < count__35071_35318)){
var vec__35086_35320 = chunk__35070_35317.cljs$core$IIndexed$_nth$arity$2(null,i__35072_35319);
var name_35321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35320,(0),null);
var map__35089_35322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35320,(1),null);
var map__35089_35323__$1 = cljs.core.__destructure_map(map__35089_35322);
var doc_35324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35089_35323__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35089_35323__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35321], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35325], 0));

if(cljs.core.truth_(doc_35324)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35324], 0));
} else {
}


var G__35326 = seq__35069_35316;
var G__35327 = chunk__35070_35317;
var G__35328 = count__35071_35318;
var G__35329 = (i__35072_35319 + (1));
seq__35069_35316 = G__35326;
chunk__35070_35317 = G__35327;
count__35071_35318 = G__35328;
i__35072_35319 = G__35329;
continue;
} else {
var temp__5753__auto___35330 = cljs.core.seq(seq__35069_35316);
if(temp__5753__auto___35330){
var seq__35069_35331__$1 = temp__5753__auto___35330;
if(cljs.core.chunked_seq_QMARK_(seq__35069_35331__$1)){
var c__4679__auto___35332 = cljs.core.chunk_first(seq__35069_35331__$1);
var G__35333 = cljs.core.chunk_rest(seq__35069_35331__$1);
var G__35334 = c__4679__auto___35332;
var G__35335 = cljs.core.count(c__4679__auto___35332);
var G__35336 = (0);
seq__35069_35316 = G__35333;
chunk__35070_35317 = G__35334;
count__35071_35318 = G__35335;
i__35072_35319 = G__35336;
continue;
} else {
var vec__35090_35337 = cljs.core.first(seq__35069_35331__$1);
var name_35338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35337,(0),null);
var map__35093_35339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090_35337,(1),null);
var map__35093_35340__$1 = cljs.core.__destructure_map(map__35093_35339);
var doc_35341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35093_35340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35093_35340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35338], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35342], 0));

if(cljs.core.truth_(doc_35341)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35341], 0));
} else {
}


var G__35343 = cljs.core.next(seq__35069_35331__$1);
var G__35344 = null;
var G__35345 = (0);
var G__35346 = (0);
seq__35069_35316 = G__35343;
chunk__35070_35317 = G__35344;
count__35071_35318 = G__35345;
i__35072_35319 = G__35346;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35097 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35098 = null;
var count__35099 = (0);
var i__35100 = (0);
while(true){
if((i__35100 < count__35099)){
var role = chunk__35098.cljs$core$IIndexed$_nth$arity$2(null,i__35100);
var temp__5753__auto___35347__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35347__$1)){
var spec_35348 = temp__5753__auto___35347__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35348)], 0));
} else {
}


var G__35349 = seq__35097;
var G__35350 = chunk__35098;
var G__35351 = count__35099;
var G__35352 = (i__35100 + (1));
seq__35097 = G__35349;
chunk__35098 = G__35350;
count__35099 = G__35351;
i__35100 = G__35352;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35097);
if(temp__5753__auto____$1){
var seq__35097__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35097__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35097__$1);
var G__35353 = cljs.core.chunk_rest(seq__35097__$1);
var G__35354 = c__4679__auto__;
var G__35355 = cljs.core.count(c__4679__auto__);
var G__35356 = (0);
seq__35097 = G__35353;
chunk__35098 = G__35354;
count__35099 = G__35355;
i__35100 = G__35356;
continue;
} else {
var role = cljs.core.first(seq__35097__$1);
var temp__5753__auto___35357__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35357__$2)){
var spec_35359 = temp__5753__auto___35357__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35359)], 0));
} else {
}


var G__35364 = cljs.core.next(seq__35097__$1);
var G__35365 = null;
var G__35366 = (0);
var G__35367 = (0);
seq__35097 = G__35364;
chunk__35098 = G__35365;
count__35099 = G__35366;
i__35100 = G__35367;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35369 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35370 = cljs.core.ex_cause(t);
via = G__35369;
t = G__35370;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35173 = datafied_throwable;
var map__35173__$1 = cljs.core.__destructure_map(map__35173);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35173__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35173__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35173__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35174 = cljs.core.last(via);
var map__35174__$1 = cljs.core.__destructure_map(map__35174);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35175 = data;
var map__35175__$1 = cljs.core.__destructure_map(map__35175);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35176 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35176__$1 = cljs.core.__destructure_map(map__35176);
var top_data = map__35176__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35176__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35193 = phase;
var G__35193__$1 = (((G__35193 instanceof cljs.core.Keyword))?G__35193.fqn:null);
switch (G__35193__$1) {
case "read-source":
var map__35208 = data;
var map__35208__$1 = cljs.core.__destructure_map(map__35208);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35208__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35209 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35209__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35209,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35209);
var G__35209__$2 = (cljs.core.truth_((function (){var fexpr__35218 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35218.cljs$core$IFn$_invoke$arity$1 ? fexpr__35218.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35218.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35209__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35209__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35209__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35209__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35219 = top_data;
var G__35219__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35219,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35219);
var G__35219__$2 = (cljs.core.truth_((function (){var fexpr__35224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35224.cljs$core$IFn$_invoke$arity$1 ? fexpr__35224.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35224.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35219__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35219__$1);
var G__35219__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35219__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35219__$2);
var G__35219__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35219__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35219__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35219__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35219__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35225 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(3),null);
var G__35230 = top_data;
var G__35230__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35230,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35230);
var G__35230__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35230__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35230__$1);
var G__35230__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35230__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35230__$2);
var G__35230__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35230__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35230__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35230__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35230__$4;
}

break;
case "execution":
var vec__35234 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35234,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35148_SHARP_){
var or__4253__auto__ = (p1__35148_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35237 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35237.cljs$core$IFn$_invoke$arity$1 ? fexpr__35237.cljs$core$IFn$_invoke$arity$1(p1__35148_SHARP_) : fexpr__35237.call(null,p1__35148_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35239 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35239__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35239);
var G__35239__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35239__$1);
var G__35239__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35239__$2);
var G__35239__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35239__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35239__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35239__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35193__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35246){
var map__35247 = p__35246;
var map__35247__$1 = cljs.core.__destructure_map(map__35247);
var triage_data = map__35247__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35248 = phase;
var G__35248__$1 = (((G__35248 instanceof cljs.core.Keyword))?G__35248.fqn:null);
switch (G__35248__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35249 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35250 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35251 = loc;
var G__35252 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35255_35378 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35256_35379 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35257_35380 = true;
var _STAR_print_fn_STAR__temp_val__35258_35381 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35257_35380);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35258_35381);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35243_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35243_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35256_35379);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35255_35378);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35249,G__35250,G__35251,G__35252) : format.call(null,G__35249,G__35250,G__35251,G__35252));

break;
case "macroexpansion":
var G__35265 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35266 = cause_type;
var G__35267 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35268 = loc;
var G__35269 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35265,G__35266,G__35267,G__35268,G__35269) : format.call(null,G__35265,G__35266,G__35267,G__35268,G__35269));

break;
case "compile-syntax-check":
var G__35270 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35271 = cause_type;
var G__35272 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35273 = loc;
var G__35274 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35270,G__35271,G__35272,G__35273,G__35274) : format.call(null,G__35270,G__35271,G__35272,G__35273,G__35274));

break;
case "compilation":
var G__35275 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35276 = cause_type;
var G__35277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35278 = loc;
var G__35279 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35275,G__35276,G__35277,G__35278,G__35279) : format.call(null,G__35275,G__35276,G__35277,G__35278,G__35279));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35280 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35281 = symbol;
var G__35282 = loc;
var G__35283 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35284_35382 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35285_35383 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35286_35384 = true;
var _STAR_print_fn_STAR__temp_val__35287_35385 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35286_35384);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35287_35385);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35245_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35245_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35285_35383);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35284_35382);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35280,G__35281,G__35282,G__35283) : format.call(null,G__35280,G__35281,G__35282,G__35283));
} else {
var G__35288 = "Execution error%s at %s(%s).\n%s\n";
var G__35289 = cause_type;
var G__35290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35291 = loc;
var G__35292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35288,G__35289,G__35290,G__35291,G__35292) : format.call(null,G__35288,G__35289,G__35290,G__35291,G__35292));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35248__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
