goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33765 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33765(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33766 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33766(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32736 = coll;
var G__32737 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32736,G__32737) : shadow.dom.lazy_native_coll_seq.call(null,G__32736,G__32737));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32766 = arguments.length;
switch (G__32766) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32772 = arguments.length;
switch (G__32772) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32786 = arguments.length;
switch (G__32786) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32797 = arguments.length;
switch (G__32797) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32814 = arguments.length;
switch (G__32814) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32830 = arguments.length;
switch (G__32830) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32846){if((e32846 instanceof Object)){
var e = e32846;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32846;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32854 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32855 = null;
var count__32856 = (0);
var i__32857 = (0);
while(true){
if((i__32857 < count__32856)){
var el = chunk__32855.cljs$core$IIndexed$_nth$arity$2(null,i__32857);
var handler_33780__$1 = ((function (seq__32854,chunk__32855,count__32856,i__32857,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32854,chunk__32855,count__32856,i__32857,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33780__$1);


var G__33781 = seq__32854;
var G__33782 = chunk__32855;
var G__33783 = count__32856;
var G__33784 = (i__32857 + (1));
seq__32854 = G__33781;
chunk__32855 = G__33782;
count__32856 = G__33783;
i__32857 = G__33784;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32854);
if(temp__5753__auto__){
var seq__32854__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32854__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32854__$1);
var G__33785 = cljs.core.chunk_rest(seq__32854__$1);
var G__33786 = c__4679__auto__;
var G__33787 = cljs.core.count(c__4679__auto__);
var G__33788 = (0);
seq__32854 = G__33785;
chunk__32855 = G__33786;
count__32856 = G__33787;
i__32857 = G__33788;
continue;
} else {
var el = cljs.core.first(seq__32854__$1);
var handler_33789__$1 = ((function (seq__32854,chunk__32855,count__32856,i__32857,el,seq__32854__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32854,chunk__32855,count__32856,i__32857,el,seq__32854__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33789__$1);


var G__33790 = cljs.core.next(seq__32854__$1);
var G__33791 = null;
var G__33792 = (0);
var G__33793 = (0);
seq__32854 = G__33790;
chunk__32855 = G__33791;
count__32856 = G__33792;
i__32857 = G__33793;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32883 = arguments.length;
switch (G__32883) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32892 = cljs.core.seq(events);
var chunk__32893 = null;
var count__32894 = (0);
var i__32895 = (0);
while(true){
if((i__32895 < count__32894)){
var vec__32908 = chunk__32893.cljs$core$IIndexed$_nth$arity$2(null,i__32895);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32908,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33796 = seq__32892;
var G__33797 = chunk__32893;
var G__33798 = count__32894;
var G__33799 = (i__32895 + (1));
seq__32892 = G__33796;
chunk__32893 = G__33797;
count__32894 = G__33798;
i__32895 = G__33799;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32892);
if(temp__5753__auto__){
var seq__32892__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32892__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32892__$1);
var G__33801 = cljs.core.chunk_rest(seq__32892__$1);
var G__33802 = c__4679__auto__;
var G__33803 = cljs.core.count(c__4679__auto__);
var G__33804 = (0);
seq__32892 = G__33801;
chunk__32893 = G__33802;
count__32894 = G__33803;
i__32895 = G__33804;
continue;
} else {
var vec__32918 = cljs.core.first(seq__32892__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32918,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32918,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33805 = cljs.core.next(seq__32892__$1);
var G__33806 = null;
var G__33807 = (0);
var G__33808 = (0);
seq__32892 = G__33805;
chunk__32893 = G__33806;
count__32894 = G__33807;
i__32895 = G__33808;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32924 = cljs.core.seq(styles);
var chunk__32925 = null;
var count__32926 = (0);
var i__32927 = (0);
while(true){
if((i__32927 < count__32926)){
var vec__32941 = chunk__32925.cljs$core$IIndexed$_nth$arity$2(null,i__32927);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32941,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33809 = seq__32924;
var G__33810 = chunk__32925;
var G__33811 = count__32926;
var G__33812 = (i__32927 + (1));
seq__32924 = G__33809;
chunk__32925 = G__33810;
count__32926 = G__33811;
i__32927 = G__33812;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32924);
if(temp__5753__auto__){
var seq__32924__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32924__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32924__$1);
var G__33813 = cljs.core.chunk_rest(seq__32924__$1);
var G__33814 = c__4679__auto__;
var G__33815 = cljs.core.count(c__4679__auto__);
var G__33816 = (0);
seq__32924 = G__33813;
chunk__32925 = G__33814;
count__32926 = G__33815;
i__32927 = G__33816;
continue;
} else {
var vec__32945 = cljs.core.first(seq__32924__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32945,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32945,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33820 = cljs.core.next(seq__32924__$1);
var G__33821 = null;
var G__33822 = (0);
var G__33823 = (0);
seq__32924 = G__33820;
chunk__32925 = G__33821;
count__32926 = G__33822;
i__32927 = G__33823;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32950_33824 = key;
var G__32950_33825__$1 = (((G__32950_33824 instanceof cljs.core.Keyword))?G__32950_33824.fqn:null);
switch (G__32950_33825__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33827 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_33827,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_33827,"aria-");
}
})())){
el.setAttribute(ks_33827,value);
} else {
(el[ks_33827] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32978){
var map__32979 = p__32978;
var map__32979__$1 = cljs.core.__destructure_map(map__32979);
var props = map__32979__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32979__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32981 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32981,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32981,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32981,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32986 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32986,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32986;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32994 = arguments.length;
switch (G__32994) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33009){
var vec__33012 = p__33009;
var seq__33013 = cljs.core.seq(vec__33012);
var first__33014 = cljs.core.first(seq__33013);
var seq__33013__$1 = cljs.core.next(seq__33013);
var nn = first__33014;
var first__33014__$1 = cljs.core.first(seq__33013__$1);
var seq__33013__$2 = cljs.core.next(seq__33013__$1);
var np = first__33014__$1;
var nc = seq__33013__$2;
var node = vec__33012;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33018 = nn;
var G__33019 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33018,G__33019) : create_fn.call(null,G__33018,G__33019));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33021 = nn;
var G__33022 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33021,G__33022) : create_fn.call(null,G__33021,G__33022));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33028 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33028,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33028,(1),null);
var seq__33032_33860 = cljs.core.seq(node_children);
var chunk__33033_33861 = null;
var count__33034_33862 = (0);
var i__33035_33863 = (0);
while(true){
if((i__33035_33863 < count__33034_33862)){
var child_struct_33864 = chunk__33033_33861.cljs$core$IIndexed$_nth$arity$2(null,i__33035_33863);
var children_33865 = shadow.dom.dom_node(child_struct_33864);
if(cljs.core.seq_QMARK_(children_33865)){
var seq__33063_33866 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33865));
var chunk__33065_33867 = null;
var count__33066_33868 = (0);
var i__33067_33869 = (0);
while(true){
if((i__33067_33869 < count__33066_33868)){
var child_33870 = chunk__33065_33867.cljs$core$IIndexed$_nth$arity$2(null,i__33067_33869);
if(cljs.core.truth_(child_33870)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33870);


var G__33871 = seq__33063_33866;
var G__33872 = chunk__33065_33867;
var G__33873 = count__33066_33868;
var G__33874 = (i__33067_33869 + (1));
seq__33063_33866 = G__33871;
chunk__33065_33867 = G__33872;
count__33066_33868 = G__33873;
i__33067_33869 = G__33874;
continue;
} else {
var G__33875 = seq__33063_33866;
var G__33876 = chunk__33065_33867;
var G__33877 = count__33066_33868;
var G__33878 = (i__33067_33869 + (1));
seq__33063_33866 = G__33875;
chunk__33065_33867 = G__33876;
count__33066_33868 = G__33877;
i__33067_33869 = G__33878;
continue;
}
} else {
var temp__5753__auto___33882 = cljs.core.seq(seq__33063_33866);
if(temp__5753__auto___33882){
var seq__33063_33883__$1 = temp__5753__auto___33882;
if(cljs.core.chunked_seq_QMARK_(seq__33063_33883__$1)){
var c__4679__auto___33884 = cljs.core.chunk_first(seq__33063_33883__$1);
var G__33885 = cljs.core.chunk_rest(seq__33063_33883__$1);
var G__33886 = c__4679__auto___33884;
var G__33887 = cljs.core.count(c__4679__auto___33884);
var G__33888 = (0);
seq__33063_33866 = G__33885;
chunk__33065_33867 = G__33886;
count__33066_33868 = G__33887;
i__33067_33869 = G__33888;
continue;
} else {
var child_33889 = cljs.core.first(seq__33063_33883__$1);
if(cljs.core.truth_(child_33889)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33889);


var G__33890 = cljs.core.next(seq__33063_33883__$1);
var G__33891 = null;
var G__33892 = (0);
var G__33893 = (0);
seq__33063_33866 = G__33890;
chunk__33065_33867 = G__33891;
count__33066_33868 = G__33892;
i__33067_33869 = G__33893;
continue;
} else {
var G__33894 = cljs.core.next(seq__33063_33883__$1);
var G__33895 = null;
var G__33896 = (0);
var G__33897 = (0);
seq__33063_33866 = G__33894;
chunk__33065_33867 = G__33895;
count__33066_33868 = G__33896;
i__33067_33869 = G__33897;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33865);
}


var G__33898 = seq__33032_33860;
var G__33899 = chunk__33033_33861;
var G__33900 = count__33034_33862;
var G__33901 = (i__33035_33863 + (1));
seq__33032_33860 = G__33898;
chunk__33033_33861 = G__33899;
count__33034_33862 = G__33900;
i__33035_33863 = G__33901;
continue;
} else {
var temp__5753__auto___33902 = cljs.core.seq(seq__33032_33860);
if(temp__5753__auto___33902){
var seq__33032_33903__$1 = temp__5753__auto___33902;
if(cljs.core.chunked_seq_QMARK_(seq__33032_33903__$1)){
var c__4679__auto___33904 = cljs.core.chunk_first(seq__33032_33903__$1);
var G__33905 = cljs.core.chunk_rest(seq__33032_33903__$1);
var G__33906 = c__4679__auto___33904;
var G__33907 = cljs.core.count(c__4679__auto___33904);
var G__33908 = (0);
seq__33032_33860 = G__33905;
chunk__33033_33861 = G__33906;
count__33034_33862 = G__33907;
i__33035_33863 = G__33908;
continue;
} else {
var child_struct_33909 = cljs.core.first(seq__33032_33903__$1);
var children_33910 = shadow.dom.dom_node(child_struct_33909);
if(cljs.core.seq_QMARK_(children_33910)){
var seq__33085_33911 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33910));
var chunk__33087_33912 = null;
var count__33088_33913 = (0);
var i__33089_33914 = (0);
while(true){
if((i__33089_33914 < count__33088_33913)){
var child_33915 = chunk__33087_33912.cljs$core$IIndexed$_nth$arity$2(null,i__33089_33914);
if(cljs.core.truth_(child_33915)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33915);


var G__33916 = seq__33085_33911;
var G__33917 = chunk__33087_33912;
var G__33918 = count__33088_33913;
var G__33919 = (i__33089_33914 + (1));
seq__33085_33911 = G__33916;
chunk__33087_33912 = G__33917;
count__33088_33913 = G__33918;
i__33089_33914 = G__33919;
continue;
} else {
var G__33920 = seq__33085_33911;
var G__33921 = chunk__33087_33912;
var G__33922 = count__33088_33913;
var G__33923 = (i__33089_33914 + (1));
seq__33085_33911 = G__33920;
chunk__33087_33912 = G__33921;
count__33088_33913 = G__33922;
i__33089_33914 = G__33923;
continue;
}
} else {
var temp__5753__auto___33924__$1 = cljs.core.seq(seq__33085_33911);
if(temp__5753__auto___33924__$1){
var seq__33085_33925__$1 = temp__5753__auto___33924__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33085_33925__$1)){
var c__4679__auto___33926 = cljs.core.chunk_first(seq__33085_33925__$1);
var G__33927 = cljs.core.chunk_rest(seq__33085_33925__$1);
var G__33928 = c__4679__auto___33926;
var G__33929 = cljs.core.count(c__4679__auto___33926);
var G__33930 = (0);
seq__33085_33911 = G__33927;
chunk__33087_33912 = G__33928;
count__33088_33913 = G__33929;
i__33089_33914 = G__33930;
continue;
} else {
var child_33931 = cljs.core.first(seq__33085_33925__$1);
if(cljs.core.truth_(child_33931)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33931);


var G__33932 = cljs.core.next(seq__33085_33925__$1);
var G__33933 = null;
var G__33934 = (0);
var G__33935 = (0);
seq__33085_33911 = G__33932;
chunk__33087_33912 = G__33933;
count__33088_33913 = G__33934;
i__33089_33914 = G__33935;
continue;
} else {
var G__33936 = cljs.core.next(seq__33085_33925__$1);
var G__33937 = null;
var G__33938 = (0);
var G__33939 = (0);
seq__33085_33911 = G__33936;
chunk__33087_33912 = G__33937;
count__33088_33913 = G__33938;
i__33089_33914 = G__33939;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33910);
}


var G__33940 = cljs.core.next(seq__33032_33903__$1);
var G__33941 = null;
var G__33942 = (0);
var G__33943 = (0);
seq__33032_33860 = G__33940;
chunk__33033_33861 = G__33941;
count__33034_33862 = G__33942;
i__33035_33863 = G__33943;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33120 = cljs.core.seq(node);
var chunk__33121 = null;
var count__33122 = (0);
var i__33123 = (0);
while(true){
if((i__33123 < count__33122)){
var n = chunk__33121.cljs$core$IIndexed$_nth$arity$2(null,i__33123);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33950 = seq__33120;
var G__33951 = chunk__33121;
var G__33952 = count__33122;
var G__33953 = (i__33123 + (1));
seq__33120 = G__33950;
chunk__33121 = G__33951;
count__33122 = G__33952;
i__33123 = G__33953;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33120);
if(temp__5753__auto__){
var seq__33120__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33120__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33120__$1);
var G__33954 = cljs.core.chunk_rest(seq__33120__$1);
var G__33955 = c__4679__auto__;
var G__33956 = cljs.core.count(c__4679__auto__);
var G__33957 = (0);
seq__33120 = G__33954;
chunk__33121 = G__33955;
count__33122 = G__33956;
i__33123 = G__33957;
continue;
} else {
var n = cljs.core.first(seq__33120__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33959 = cljs.core.next(seq__33120__$1);
var G__33960 = null;
var G__33961 = (0);
var G__33962 = (0);
seq__33120 = G__33959;
chunk__33121 = G__33960;
count__33122 = G__33961;
i__33123 = G__33962;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33132 = arguments.length;
switch (G__33132) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33145 = arguments.length;
switch (G__33145) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33162 = arguments.length;
switch (G__33162) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33978 = arguments.length;
var i__4865__auto___33979 = (0);
while(true){
if((i__4865__auto___33979 < len__4864__auto___33978)){
args__4870__auto__.push((arguments[i__4865__auto___33979]));

var G__33980 = (i__4865__auto___33979 + (1));
i__4865__auto___33979 = G__33980;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33192_33981 = cljs.core.seq(nodes);
var chunk__33194_33982 = null;
var count__33195_33983 = (0);
var i__33196_33984 = (0);
while(true){
if((i__33196_33984 < count__33195_33983)){
var node_33985 = chunk__33194_33982.cljs$core$IIndexed$_nth$arity$2(null,i__33196_33984);
fragment.appendChild(shadow.dom._to_dom(node_33985));


var G__33986 = seq__33192_33981;
var G__33987 = chunk__33194_33982;
var G__33988 = count__33195_33983;
var G__33989 = (i__33196_33984 + (1));
seq__33192_33981 = G__33986;
chunk__33194_33982 = G__33987;
count__33195_33983 = G__33988;
i__33196_33984 = G__33989;
continue;
} else {
var temp__5753__auto___33990 = cljs.core.seq(seq__33192_33981);
if(temp__5753__auto___33990){
var seq__33192_33991__$1 = temp__5753__auto___33990;
if(cljs.core.chunked_seq_QMARK_(seq__33192_33991__$1)){
var c__4679__auto___33992 = cljs.core.chunk_first(seq__33192_33991__$1);
var G__33993 = cljs.core.chunk_rest(seq__33192_33991__$1);
var G__33994 = c__4679__auto___33992;
var G__33995 = cljs.core.count(c__4679__auto___33992);
var G__33996 = (0);
seq__33192_33981 = G__33993;
chunk__33194_33982 = G__33994;
count__33195_33983 = G__33995;
i__33196_33984 = G__33996;
continue;
} else {
var node_33997 = cljs.core.first(seq__33192_33991__$1);
fragment.appendChild(shadow.dom._to_dom(node_33997));


var G__33998 = cljs.core.next(seq__33192_33991__$1);
var G__33999 = null;
var G__34000 = (0);
var G__34001 = (0);
seq__33192_33981 = G__33998;
chunk__33194_33982 = G__33999;
count__33195_33983 = G__34000;
i__33196_33984 = G__34001;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33187){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33187));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33211_34003 = cljs.core.seq(scripts);
var chunk__33212_34004 = null;
var count__33213_34005 = (0);
var i__33214_34006 = (0);
while(true){
if((i__33214_34006 < count__33213_34005)){
var vec__33232_34008 = chunk__33212_34004.cljs$core$IIndexed$_nth$arity$2(null,i__33214_34006);
var script_tag_34009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232_34008,(0),null);
var script_body_34010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232_34008,(1),null);
eval(script_body_34010);


var G__34011 = seq__33211_34003;
var G__34012 = chunk__33212_34004;
var G__34013 = count__33213_34005;
var G__34014 = (i__33214_34006 + (1));
seq__33211_34003 = G__34011;
chunk__33212_34004 = G__34012;
count__33213_34005 = G__34013;
i__33214_34006 = G__34014;
continue;
} else {
var temp__5753__auto___34015 = cljs.core.seq(seq__33211_34003);
if(temp__5753__auto___34015){
var seq__33211_34016__$1 = temp__5753__auto___34015;
if(cljs.core.chunked_seq_QMARK_(seq__33211_34016__$1)){
var c__4679__auto___34017 = cljs.core.chunk_first(seq__33211_34016__$1);
var G__34019 = cljs.core.chunk_rest(seq__33211_34016__$1);
var G__34020 = c__4679__auto___34017;
var G__34021 = cljs.core.count(c__4679__auto___34017);
var G__34022 = (0);
seq__33211_34003 = G__34019;
chunk__33212_34004 = G__34020;
count__33213_34005 = G__34021;
i__33214_34006 = G__34022;
continue;
} else {
var vec__33239_34023 = cljs.core.first(seq__33211_34016__$1);
var script_tag_34024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33239_34023,(0),null);
var script_body_34025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33239_34023,(1),null);
eval(script_body_34025);


var G__34028 = cljs.core.next(seq__33211_34016__$1);
var G__34029 = null;
var G__34030 = (0);
var G__34031 = (0);
seq__33211_34003 = G__34028;
chunk__33212_34004 = G__34029;
count__33213_34005 = G__34030;
i__33214_34006 = G__34031;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33245){
var vec__33246 = p__33245;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33246,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33261 = arguments.length;
switch (G__33261) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33286 = cljs.core.seq(style_keys);
var chunk__33287 = null;
var count__33289 = (0);
var i__33290 = (0);
while(true){
if((i__33290 < count__33289)){
var it = chunk__33287.cljs$core$IIndexed$_nth$arity$2(null,i__33290);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34040 = seq__33286;
var G__34041 = chunk__33287;
var G__34042 = count__33289;
var G__34043 = (i__33290 + (1));
seq__33286 = G__34040;
chunk__33287 = G__34041;
count__33289 = G__34042;
i__33290 = G__34043;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33286);
if(temp__5753__auto__){
var seq__33286__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33286__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33286__$1);
var G__34044 = cljs.core.chunk_rest(seq__33286__$1);
var G__34045 = c__4679__auto__;
var G__34046 = cljs.core.count(c__4679__auto__);
var G__34047 = (0);
seq__33286 = G__34044;
chunk__33287 = G__34045;
count__33289 = G__34046;
i__33290 = G__34047;
continue;
} else {
var it = cljs.core.first(seq__33286__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34048 = cljs.core.next(seq__33286__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__33286 = G__34048;
chunk__33287 = G__34049;
count__33289 = G__34050;
i__33290 = G__34051;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33304,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33312 = k33304;
var G__33312__$1 = (((G__33312 instanceof cljs.core.Keyword))?G__33312.fqn:null);
switch (G__33312__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33304,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33313){
var vec__33314 = p__33313;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33303){
var self__ = this;
var G__33303__$1 = this;
return (new cljs.core.RecordIter((0),G__33303__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33305,other33306){
var self__ = this;
var this33305__$1 = this;
return (((!((other33306 == null)))) && ((((this33305__$1.constructor === other33306.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33305__$1.x,other33306.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33305__$1.y,other33306.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33305__$1.__extmap,other33306.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33304){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33377 = k33304;
var G__33377__$1 = (((G__33377 instanceof cljs.core.Keyword))?G__33377.fqn:null);
switch (G__33377__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33304);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33303){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33380 = cljs.core.keyword_identical_QMARK_;
var expr__33381 = k__4511__auto__;
if(cljs.core.truth_((pred__33380.cljs$core$IFn$_invoke$arity$2 ? pred__33380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33381) : pred__33380.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33381)))){
return (new shadow.dom.Coordinate(G__33303,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33380.cljs$core$IFn$_invoke$arity$2 ? pred__33380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33381) : pred__33380.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33381)))){
return (new shadow.dom.Coordinate(self__.x,G__33303,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33303),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33303){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33303,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33309){
var extmap__4542__auto__ = (function (){var G__33400 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33309,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33309)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33400);
} else {
return G__33400;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33309),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33309),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33411,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33423 = k33411;
var G__33423__$1 = (((G__33423 instanceof cljs.core.Keyword))?G__33423.fqn:null);
switch (G__33423__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33411,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33430){
var vec__33432 = p__33430;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33432,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33432,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33410){
var self__ = this;
var G__33410__$1 = this;
return (new cljs.core.RecordIter((0),G__33410__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33412,other33413){
var self__ = this;
var this33412__$1 = this;
return (((!((other33413 == null)))) && ((((this33412__$1.constructor === other33413.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33412__$1.w,other33413.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33412__$1.h,other33413.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33412__$1.__extmap,other33413.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33411){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33474 = k33411;
var G__33474__$1 = (((G__33474 instanceof cljs.core.Keyword))?G__33474.fqn:null);
switch (G__33474__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33411);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33410){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33478 = cljs.core.keyword_identical_QMARK_;
var expr__33479 = k__4511__auto__;
if(cljs.core.truth_((pred__33478.cljs$core$IFn$_invoke$arity$2 ? pred__33478.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33479) : pred__33478.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33479)))){
return (new shadow.dom.Size(G__33410,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33478.cljs$core$IFn$_invoke$arity$2 ? pred__33478.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33479) : pred__33478.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33479)))){
return (new shadow.dom.Size(self__.w,G__33410,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33410),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33410){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33410,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33417){
var extmap__4542__auto__ = (function (){var G__33543 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33417,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33417)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33543);
} else {
return G__33543;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33417),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33417),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34085 = (i + (1));
var G__34086 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34085;
ret = G__34086;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33583){
var vec__33584 = p__33583;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33584,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33584,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33592 = arguments.length;
switch (G__33592) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34092 = ps;
var G__34093 = (i + (1));
el__$1 = G__34092;
i = G__34093;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33627 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33633_34101 = cljs.core.seq(props);
var chunk__33634_34102 = null;
var count__33635_34103 = (0);
var i__33636_34104 = (0);
while(true){
if((i__33636_34104 < count__33635_34103)){
var vec__33653_34105 = chunk__33634_34102.cljs$core$IIndexed$_nth$arity$2(null,i__33636_34104);
var k_34106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653_34105,(0),null);
var v_34107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653_34105,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34106);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34106),v_34107);


var G__34108 = seq__33633_34101;
var G__34109 = chunk__33634_34102;
var G__34110 = count__33635_34103;
var G__34111 = (i__33636_34104 + (1));
seq__33633_34101 = G__34108;
chunk__33634_34102 = G__34109;
count__33635_34103 = G__34110;
i__33636_34104 = G__34111;
continue;
} else {
var temp__5753__auto___34112 = cljs.core.seq(seq__33633_34101);
if(temp__5753__auto___34112){
var seq__33633_34113__$1 = temp__5753__auto___34112;
if(cljs.core.chunked_seq_QMARK_(seq__33633_34113__$1)){
var c__4679__auto___34114 = cljs.core.chunk_first(seq__33633_34113__$1);
var G__34115 = cljs.core.chunk_rest(seq__33633_34113__$1);
var G__34116 = c__4679__auto___34114;
var G__34117 = cljs.core.count(c__4679__auto___34114);
var G__34118 = (0);
seq__33633_34101 = G__34115;
chunk__33634_34102 = G__34116;
count__33635_34103 = G__34117;
i__33636_34104 = G__34118;
continue;
} else {
var vec__33663_34119 = cljs.core.first(seq__33633_34113__$1);
var k_34120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33663_34119,(0),null);
var v_34121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33663_34119,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34120);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34120),v_34121);


var G__34122 = cljs.core.next(seq__33633_34113__$1);
var G__34123 = null;
var G__34124 = (0);
var G__34125 = (0);
seq__33633_34101 = G__34122;
chunk__33634_34102 = G__34123;
count__33635_34103 = G__34124;
i__33636_34104 = G__34125;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33681 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33681,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33681,(1),null);
var seq__33684_34126 = cljs.core.seq(node_children);
var chunk__33686_34127 = null;
var count__33687_34128 = (0);
var i__33688_34129 = (0);
while(true){
if((i__33688_34129 < count__33687_34128)){
var child_struct_34130 = chunk__33686_34127.cljs$core$IIndexed$_nth$arity$2(null,i__33688_34129);
if((!((child_struct_34130 == null)))){
if(typeof child_struct_34130 === 'string'){
var text_34131 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34131),child_struct_34130].join(''));
} else {
var children_34132 = shadow.dom.svg_node(child_struct_34130);
if(cljs.core.seq_QMARK_(children_34132)){
var seq__33726_34133 = cljs.core.seq(children_34132);
var chunk__33728_34134 = null;
var count__33729_34135 = (0);
var i__33730_34136 = (0);
while(true){
if((i__33730_34136 < count__33729_34135)){
var child_34137 = chunk__33728_34134.cljs$core$IIndexed$_nth$arity$2(null,i__33730_34136);
if(cljs.core.truth_(child_34137)){
node.appendChild(child_34137);


var G__34138 = seq__33726_34133;
var G__34139 = chunk__33728_34134;
var G__34140 = count__33729_34135;
var G__34141 = (i__33730_34136 + (1));
seq__33726_34133 = G__34138;
chunk__33728_34134 = G__34139;
count__33729_34135 = G__34140;
i__33730_34136 = G__34141;
continue;
} else {
var G__34142 = seq__33726_34133;
var G__34143 = chunk__33728_34134;
var G__34144 = count__33729_34135;
var G__34145 = (i__33730_34136 + (1));
seq__33726_34133 = G__34142;
chunk__33728_34134 = G__34143;
count__33729_34135 = G__34144;
i__33730_34136 = G__34145;
continue;
}
} else {
var temp__5753__auto___34146 = cljs.core.seq(seq__33726_34133);
if(temp__5753__auto___34146){
var seq__33726_34147__$1 = temp__5753__auto___34146;
if(cljs.core.chunked_seq_QMARK_(seq__33726_34147__$1)){
var c__4679__auto___34148 = cljs.core.chunk_first(seq__33726_34147__$1);
var G__34149 = cljs.core.chunk_rest(seq__33726_34147__$1);
var G__34150 = c__4679__auto___34148;
var G__34151 = cljs.core.count(c__4679__auto___34148);
var G__34152 = (0);
seq__33726_34133 = G__34149;
chunk__33728_34134 = G__34150;
count__33729_34135 = G__34151;
i__33730_34136 = G__34152;
continue;
} else {
var child_34153 = cljs.core.first(seq__33726_34147__$1);
if(cljs.core.truth_(child_34153)){
node.appendChild(child_34153);


var G__34154 = cljs.core.next(seq__33726_34147__$1);
var G__34155 = null;
var G__34156 = (0);
var G__34157 = (0);
seq__33726_34133 = G__34154;
chunk__33728_34134 = G__34155;
count__33729_34135 = G__34156;
i__33730_34136 = G__34157;
continue;
} else {
var G__34158 = cljs.core.next(seq__33726_34147__$1);
var G__34159 = null;
var G__34160 = (0);
var G__34161 = (0);
seq__33726_34133 = G__34158;
chunk__33728_34134 = G__34159;
count__33729_34135 = G__34160;
i__33730_34136 = G__34161;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34132);
}
}


var G__34162 = seq__33684_34126;
var G__34163 = chunk__33686_34127;
var G__34164 = count__33687_34128;
var G__34165 = (i__33688_34129 + (1));
seq__33684_34126 = G__34162;
chunk__33686_34127 = G__34163;
count__33687_34128 = G__34164;
i__33688_34129 = G__34165;
continue;
} else {
var G__34166 = seq__33684_34126;
var G__34167 = chunk__33686_34127;
var G__34168 = count__33687_34128;
var G__34169 = (i__33688_34129 + (1));
seq__33684_34126 = G__34166;
chunk__33686_34127 = G__34167;
count__33687_34128 = G__34168;
i__33688_34129 = G__34169;
continue;
}
} else {
var temp__5753__auto___34170 = cljs.core.seq(seq__33684_34126);
if(temp__5753__auto___34170){
var seq__33684_34171__$1 = temp__5753__auto___34170;
if(cljs.core.chunked_seq_QMARK_(seq__33684_34171__$1)){
var c__4679__auto___34172 = cljs.core.chunk_first(seq__33684_34171__$1);
var G__34173 = cljs.core.chunk_rest(seq__33684_34171__$1);
var G__34174 = c__4679__auto___34172;
var G__34175 = cljs.core.count(c__4679__auto___34172);
var G__34176 = (0);
seq__33684_34126 = G__34173;
chunk__33686_34127 = G__34174;
count__33687_34128 = G__34175;
i__33688_34129 = G__34176;
continue;
} else {
var child_struct_34177 = cljs.core.first(seq__33684_34171__$1);
if((!((child_struct_34177 == null)))){
if(typeof child_struct_34177 === 'string'){
var text_34178 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34178),child_struct_34177].join(''));
} else {
var children_34179 = shadow.dom.svg_node(child_struct_34177);
if(cljs.core.seq_QMARK_(children_34179)){
var seq__33735_34180 = cljs.core.seq(children_34179);
var chunk__33737_34181 = null;
var count__33738_34182 = (0);
var i__33739_34183 = (0);
while(true){
if((i__33739_34183 < count__33738_34182)){
var child_34184 = chunk__33737_34181.cljs$core$IIndexed$_nth$arity$2(null,i__33739_34183);
if(cljs.core.truth_(child_34184)){
node.appendChild(child_34184);


var G__34185 = seq__33735_34180;
var G__34186 = chunk__33737_34181;
var G__34187 = count__33738_34182;
var G__34188 = (i__33739_34183 + (1));
seq__33735_34180 = G__34185;
chunk__33737_34181 = G__34186;
count__33738_34182 = G__34187;
i__33739_34183 = G__34188;
continue;
} else {
var G__34189 = seq__33735_34180;
var G__34190 = chunk__33737_34181;
var G__34191 = count__33738_34182;
var G__34192 = (i__33739_34183 + (1));
seq__33735_34180 = G__34189;
chunk__33737_34181 = G__34190;
count__33738_34182 = G__34191;
i__33739_34183 = G__34192;
continue;
}
} else {
var temp__5753__auto___34193__$1 = cljs.core.seq(seq__33735_34180);
if(temp__5753__auto___34193__$1){
var seq__33735_34194__$1 = temp__5753__auto___34193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33735_34194__$1)){
var c__4679__auto___34195 = cljs.core.chunk_first(seq__33735_34194__$1);
var G__34196 = cljs.core.chunk_rest(seq__33735_34194__$1);
var G__34197 = c__4679__auto___34195;
var G__34198 = cljs.core.count(c__4679__auto___34195);
var G__34199 = (0);
seq__33735_34180 = G__34196;
chunk__33737_34181 = G__34197;
count__33738_34182 = G__34198;
i__33739_34183 = G__34199;
continue;
} else {
var child_34200 = cljs.core.first(seq__33735_34194__$1);
if(cljs.core.truth_(child_34200)){
node.appendChild(child_34200);


var G__34202 = cljs.core.next(seq__33735_34194__$1);
var G__34203 = null;
var G__34204 = (0);
var G__34205 = (0);
seq__33735_34180 = G__34202;
chunk__33737_34181 = G__34203;
count__33738_34182 = G__34204;
i__33739_34183 = G__34205;
continue;
} else {
var G__34206 = cljs.core.next(seq__33735_34194__$1);
var G__34207 = null;
var G__34208 = (0);
var G__34209 = (0);
seq__33735_34180 = G__34206;
chunk__33737_34181 = G__34207;
count__33738_34182 = G__34208;
i__33739_34183 = G__34209;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34179);
}
}


var G__34210 = cljs.core.next(seq__33684_34171__$1);
var G__34211 = null;
var G__34212 = (0);
var G__34213 = (0);
seq__33684_34126 = G__34210;
chunk__33686_34127 = G__34211;
count__33687_34128 = G__34212;
i__33688_34129 = G__34213;
continue;
} else {
var G__34215 = cljs.core.next(seq__33684_34171__$1);
var G__34216 = null;
var G__34217 = (0);
var G__34218 = (0);
seq__33684_34126 = G__34215;
chunk__33686_34127 = G__34216;
count__33687_34128 = G__34217;
i__33688_34129 = G__34218;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34219 = arguments.length;
var i__4865__auto___34220 = (0);
while(true){
if((i__4865__auto___34220 < len__4864__auto___34219)){
args__4870__auto__.push((arguments[i__4865__auto___34220]));

var G__34221 = (i__4865__auto___34220 + (1));
i__4865__auto___34220 = G__34221;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33741){
var G__33742 = cljs.core.first(seq33741);
var seq33741__$1 = cljs.core.next(seq33741);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33742,seq33741__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33746 = arguments.length;
switch (G__33746) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29562__auto___34230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_33753){
var state_val_33754 = (state_33753[(1)]);
if((state_val_33754 === (1))){
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33753__$1,(2),once_or_cleanup);
} else {
if((state_val_33754 === (2))){
var inst_33750 = (state_33753[(2)]);
var inst_33751 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33753__$1 = (function (){var statearr_33756 = state_33753;
(statearr_33756[(7)] = inst_33750);

return statearr_33756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33753__$1,inst_33751);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29400__auto__ = null;
var shadow$dom$state_machine__29400__auto____0 = (function (){
var statearr_33758 = [null,null,null,null,null,null,null,null];
(statearr_33758[(0)] = shadow$dom$state_machine__29400__auto__);

(statearr_33758[(1)] = (1));

return statearr_33758;
});
var shadow$dom$state_machine__29400__auto____1 = (function (state_33753){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_33753);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e33759){var ex__29403__auto__ = e33759;
var statearr_33760_34231 = state_33753;
(statearr_33760_34231[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_33753[(4)]))){
var statearr_33761_34232 = state_33753;
(statearr_33761_34232[(1)] = cljs.core.first((state_33753[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34233 = state_33753;
state_33753 = G__34233;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
shadow$dom$state_machine__29400__auto__ = function(state_33753){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29400__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29400__auto____1.call(this,state_33753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29400__auto____0;
shadow$dom$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29400__auto____1;
return shadow$dom$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_33762 = f__29563__auto__();
(statearr_33762[(6)] = c__29562__auto___34230);

return statearr_33762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
