goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29649 = arguments.length;
switch (G__29649) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29654 = (function (f,blockable,meta29655){
this.f = f;
this.blockable = blockable;
this.meta29655 = meta29655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29656,meta29655__$1){
var self__ = this;
var _29656__$1 = this;
return (new cljs.core.async.t_cljs$core$async29654(self__.f,self__.blockable,meta29655__$1));
}));

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29656){
var self__ = this;
var _29656__$1 = this;
return self__.meta29655;
}));

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29655","meta29655",-1097781518,null)], null);
}));

(cljs.core.async.t_cljs$core$async29654.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29654");

(cljs.core.async.t_cljs$core$async29654.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29654");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29654.
 */
cljs.core.async.__GT_t_cljs$core$async29654 = (function cljs$core$async$__GT_t_cljs$core$async29654(f__$1,blockable__$1,meta29655){
return (new cljs.core.async.t_cljs$core$async29654(f__$1,blockable__$1,meta29655));
});

}

return (new cljs.core.async.t_cljs$core$async29654(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29681 = arguments.length;
switch (G__29681) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29704 = arguments.length;
switch (G__29704) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29734 = arguments.length;
switch (G__29734) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32729 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32729) : fn1.call(null,val_32729));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32729) : fn1.call(null,val_32729));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29757 = arguments.length;
switch (G__29757) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32731 = n;
var x_32732 = (0);
while(true){
if((x_32732 < n__4741__auto___32731)){
(a[x_32732] = x_32732);

var G__32734 = (x_32732 + (1));
x_32732 = G__32734;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29801 = (function (flag,meta29802){
this.flag = flag;
this.meta29802 = meta29802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29803,meta29802__$1){
var self__ = this;
var _29803__$1 = this;
return (new cljs.core.async.t_cljs$core$async29801(self__.flag,meta29802__$1));
}));

(cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29803){
var self__ = this;
var _29803__$1 = this;
return self__.meta29802;
}));

(cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29801.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29802","meta29802",782663313,null)], null);
}));

(cljs.core.async.t_cljs$core$async29801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29801");

(cljs.core.async.t_cljs$core$async29801.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29801.
 */
cljs.core.async.__GT_t_cljs$core$async29801 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29801(flag__$1,meta29802){
return (new cljs.core.async.t_cljs$core$async29801(flag__$1,meta29802));
});

}

return (new cljs.core.async.t_cljs$core$async29801(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29825 = (function (flag,cb,meta29826){
this.flag = flag;
this.cb = cb;
this.meta29826 = meta29826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29827,meta29826__$1){
var self__ = this;
var _29827__$1 = this;
return (new cljs.core.async.t_cljs$core$async29825(self__.flag,self__.cb,meta29826__$1));
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29827){
var self__ = this;
var _29827__$1 = this;
return self__.meta29826;
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29826","meta29826",1522954689,null)], null);
}));

(cljs.core.async.t_cljs$core$async29825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29825");

(cljs.core.async.t_cljs$core$async29825.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29825.
 */
cljs.core.async.__GT_t_cljs$core$async29825 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29825(flag__$1,cb__$1,meta29826){
return (new cljs.core.async.t_cljs$core$async29825(flag__$1,cb__$1,meta29826));
});

}

return (new cljs.core.async.t_cljs$core$async29825(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29838_SHARP_){
var G__29843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29838_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29843) : fret.call(null,G__29843));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29839_SHARP_){
var G__29845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29839_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29845) : fret.call(null,G__29845));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32738 = (i + (1));
i = G__32738;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32739 = arguments.length;
var i__4865__auto___32740 = (0);
while(true){
if((i__4865__auto___32740 < len__4864__auto___32739)){
args__4870__auto__.push((arguments[i__4865__auto___32740]));

var G__32741 = (i__4865__auto___32740 + (1));
i__4865__auto___32740 = G__32741;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29857){
var map__29858 = p__29857;
var map__29858__$1 = cljs.core.__destructure_map(map__29858);
var opts = map__29858__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29851){
var G__29852 = cljs.core.first(seq29851);
var seq29851__$1 = cljs.core.next(seq29851);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29852,seq29851__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29874 = arguments.length;
switch (G__29874) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29562__auto___32743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_29932){
var state_val_29933 = (state_29932[(1)]);
if((state_val_29933 === (7))){
var inst_29918 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29936_32745 = state_29932__$1;
(statearr_29936_32745[(2)] = inst_29918);

(statearr_29936_32745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (1))){
var state_29932__$1 = state_29932;
var statearr_29937_32746 = state_29932__$1;
(statearr_29937_32746[(2)] = null);

(statearr_29937_32746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (4))){
var inst_29896 = (state_29932[(7)]);
var inst_29896__$1 = (state_29932[(2)]);
var inst_29900 = (inst_29896__$1 == null);
var state_29932__$1 = (function (){var statearr_29943 = state_29932;
(statearr_29943[(7)] = inst_29896__$1);

return statearr_29943;
})();
if(cljs.core.truth_(inst_29900)){
var statearr_29944_32747 = state_29932__$1;
(statearr_29944_32747[(1)] = (5));

} else {
var statearr_29945_32748 = state_29932__$1;
(statearr_29945_32748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (13))){
var state_29932__$1 = state_29932;
var statearr_29946_32749 = state_29932__$1;
(statearr_29946_32749[(2)] = null);

(statearr_29946_32749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (6))){
var inst_29896 = (state_29932[(7)]);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29932__$1,(11),to,inst_29896);
} else {
if((state_val_29933 === (3))){
var inst_29924 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29932__$1,inst_29924);
} else {
if((state_val_29933 === (12))){
var state_29932__$1 = state_29932;
var statearr_29947_32750 = state_29932__$1;
(statearr_29947_32750[(2)] = null);

(statearr_29947_32750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (2))){
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29932__$1,(4),from);
} else {
if((state_val_29933 === (11))){
var inst_29911 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
if(cljs.core.truth_(inst_29911)){
var statearr_29953_32751 = state_29932__$1;
(statearr_29953_32751[(1)] = (12));

} else {
var statearr_29954_32752 = state_29932__$1;
(statearr_29954_32752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (9))){
var state_29932__$1 = state_29932;
var statearr_29956_32753 = state_29932__$1;
(statearr_29956_32753[(2)] = null);

(statearr_29956_32753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (5))){
var state_29932__$1 = state_29932;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29958_32754 = state_29932__$1;
(statearr_29958_32754[(1)] = (8));

} else {
var statearr_29959_32755 = state_29932__$1;
(statearr_29959_32755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (14))){
var inst_29916 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29961_32756 = state_29932__$1;
(statearr_29961_32756[(2)] = inst_29916);

(statearr_29961_32756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (10))){
var inst_29908 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29962_32757 = state_29932__$1;
(statearr_29962_32757[(2)] = inst_29908);

(statearr_29962_32757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29933 === (8))){
var inst_29905 = cljs.core.async.close_BANG_(to);
var state_29932__$1 = state_29932;
var statearr_29963_32758 = state_29932__$1;
(statearr_29963_32758[(2)] = inst_29905);

(statearr_29963_32758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_29967 = [null,null,null,null,null,null,null,null];
(statearr_29967[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_29967[(1)] = (1));

return statearr_29967;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_29932){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_29932);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e29968){var ex__29403__auto__ = e29968;
var statearr_29969_32761 = state_29932;
(statearr_29969_32761[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_29932[(4)]))){
var statearr_29970_32762 = state_29932;
(statearr_29970_32762[(1)] = cljs.core.first((state_29932[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32763 = state_29932;
state_29932 = G__32763;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_29932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_29932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_29971 = f__29563__auto__();
(statearr_29971[(6)] = c__29562__auto___32743);

return statearr_29971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29977){
var vec__29983 = p__29977;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29983,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29983,(1),null);
var job = vec__29983;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29562__auto___32765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_29991){
var state_val_29992 = (state_29991[(1)]);
if((state_val_29992 === (1))){
var state_29991__$1 = state_29991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29991__$1,(2),res,v);
} else {
if((state_val_29992 === (2))){
var inst_29988 = (state_29991[(2)]);
var inst_29989 = cljs.core.async.close_BANG_(res);
var state_29991__$1 = (function (){var statearr_29997 = state_29991;
(statearr_29997[(7)] = inst_29988);

return statearr_29997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29991__$1,inst_29989);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0 = (function (){
var statearr_29998 = [null,null,null,null,null,null,null,null];
(statearr_29998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__);

(statearr_29998[(1)] = (1));

return statearr_29998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1 = (function (state_29991){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_29991);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e29999){var ex__29403__auto__ = e29999;
var statearr_30000_32767 = state_29991;
(statearr_30000_32767[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_29991[(4)]))){
var statearr_30001_32768 = state_29991;
(statearr_30001_32768[(1)] = cljs.core.first((state_29991[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32769 = state_29991;
state_29991 = G__32769;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = function(state_29991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1.call(this,state_29991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_30003 = f__29563__auto__();
(statearr_30003[(6)] = c__29562__auto___32765);

return statearr_30003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30006){
var vec__30007 = p__30006;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(1),null);
var job = vec__30007;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___32773 = n;
var __32774 = (0);
while(true){
if((__32774 < n__4741__auto___32773)){
var G__30014_32775 = type;
var G__30014_32776__$1 = (((G__30014_32775 instanceof cljs.core.Keyword))?G__30014_32775.fqn:null);
switch (G__30014_32776__$1) {
case "compute":
var c__29562__auto___32778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32774,c__29562__auto___32778,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async){
return (function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = ((function (__32774,c__29562__auto___32778,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async){
return (function (state_30027){
var state_val_30028 = (state_30027[(1)]);
if((state_val_30028 === (1))){
var state_30027__$1 = state_30027;
var statearr_30037_32779 = state_30027__$1;
(statearr_30037_32779[(2)] = null);

(statearr_30037_32779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (2))){
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30027__$1,(4),jobs);
} else {
if((state_val_30028 === (3))){
var inst_30025 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30027__$1,inst_30025);
} else {
if((state_val_30028 === (4))){
var inst_30017 = (state_30027[(2)]);
var inst_30018 = process(inst_30017);
var state_30027__$1 = state_30027;
if(cljs.core.truth_(inst_30018)){
var statearr_30047_32780 = state_30027__$1;
(statearr_30047_32780[(1)] = (5));

} else {
var statearr_30048_32781 = state_30027__$1;
(statearr_30048_32781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (5))){
var state_30027__$1 = state_30027;
var statearr_30049_32782 = state_30027__$1;
(statearr_30049_32782[(2)] = null);

(statearr_30049_32782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (6))){
var state_30027__$1 = state_30027;
var statearr_30050_32783 = state_30027__$1;
(statearr_30050_32783[(2)] = null);

(statearr_30050_32783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (7))){
var inst_30023 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30051_32785 = state_30027__$1;
(statearr_30051_32785[(2)] = inst_30023);

(statearr_30051_32785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32774,c__29562__auto___32778,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async))
;
return ((function (__32774,switch__29399__auto__,c__29562__auto___32778,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0 = (function (){
var statearr_30052 = [null,null,null,null,null,null,null];
(statearr_30052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__);

(statearr_30052[(1)] = (1));

return statearr_30052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1 = (function (state_30027){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30027);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e30054){var ex__29403__auto__ = e30054;
var statearr_30055_32787 = state_30027;
(statearr_30055_32787[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30027[(4)]))){
var statearr_30056_32789 = state_30027;
(statearr_30056_32789[(1)] = cljs.core.first((state_30027[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32790 = state_30027;
state_30027 = G__32790;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = function(state_30027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1.call(this,state_30027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__;
})()
;})(__32774,switch__29399__auto__,c__29562__auto___32778,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async))
})();
var state__29564__auto__ = (function (){var statearr_30057 = f__29563__auto__();
(statearr_30057[(6)] = c__29562__auto___32778);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
});})(__32774,c__29562__auto___32778,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async))
);


break;
case "async":
var c__29562__auto___32791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32774,c__29562__auto___32791,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async){
return (function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = ((function (__32774,c__29562__auto___32791,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async){
return (function (state_30070){
var state_val_30072 = (state_30070[(1)]);
if((state_val_30072 === (1))){
var state_30070__$1 = state_30070;
var statearr_30076_32792 = state_30070__$1;
(statearr_30076_32792[(2)] = null);

(statearr_30076_32792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (2))){
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30070__$1,(4),jobs);
} else {
if((state_val_30072 === (3))){
var inst_30068 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30070__$1,inst_30068);
} else {
if((state_val_30072 === (4))){
var inst_30060 = (state_30070[(2)]);
var inst_30061 = async(inst_30060);
var state_30070__$1 = state_30070;
if(cljs.core.truth_(inst_30061)){
var statearr_30077_32794 = state_30070__$1;
(statearr_30077_32794[(1)] = (5));

} else {
var statearr_30078_32795 = state_30070__$1;
(statearr_30078_32795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (5))){
var state_30070__$1 = state_30070;
var statearr_30081_32796 = state_30070__$1;
(statearr_30081_32796[(2)] = null);

(statearr_30081_32796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (6))){
var state_30070__$1 = state_30070;
var statearr_30082_32798 = state_30070__$1;
(statearr_30082_32798[(2)] = null);

(statearr_30082_32798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30072 === (7))){
var inst_30066 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30085_32799 = state_30070__$1;
(statearr_30085_32799[(2)] = inst_30066);

(statearr_30085_32799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32774,c__29562__auto___32791,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async))
;
return ((function (__32774,switch__29399__auto__,c__29562__auto___32791,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0 = (function (){
var statearr_30094 = [null,null,null,null,null,null,null];
(statearr_30094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__);

(statearr_30094[(1)] = (1));

return statearr_30094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1 = (function (state_30070){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30070);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e30096){var ex__29403__auto__ = e30096;
var statearr_30097_32800 = state_30070;
(statearr_30097_32800[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30070[(4)]))){
var statearr_30105_32801 = state_30070;
(statearr_30105_32801[(1)] = cljs.core.first((state_30070[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32802 = state_30070;
state_30070 = G__32802;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = function(state_30070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1.call(this,state_30070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__;
})()
;})(__32774,switch__29399__auto__,c__29562__auto___32791,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async))
})();
var state__29564__auto__ = (function (){var statearr_30106 = f__29563__auto__();
(statearr_30106[(6)] = c__29562__auto___32791);

return statearr_30106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
});})(__32774,c__29562__auto___32791,G__30014_32775,G__30014_32776__$1,n__4741__auto___32773,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30014_32776__$1)].join('')));

}

var G__32804 = (__32774 + (1));
__32774 = G__32804;
continue;
} else {
}
break;
}

var c__29562__auto___32805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_30135){
var state_val_30136 = (state_30135[(1)]);
if((state_val_30136 === (7))){
var inst_30131 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30141_32806 = state_30135__$1;
(statearr_30141_32806[(2)] = inst_30131);

(statearr_30141_32806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (1))){
var state_30135__$1 = state_30135;
var statearr_30142_32807 = state_30135__$1;
(statearr_30142_32807[(2)] = null);

(statearr_30142_32807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (4))){
var inst_30109 = (state_30135[(7)]);
var inst_30109__$1 = (state_30135[(2)]);
var inst_30110 = (inst_30109__$1 == null);
var state_30135__$1 = (function (){var statearr_30145 = state_30135;
(statearr_30145[(7)] = inst_30109__$1);

return statearr_30145;
})();
if(cljs.core.truth_(inst_30110)){
var statearr_30147_32808 = state_30135__$1;
(statearr_30147_32808[(1)] = (5));

} else {
var statearr_30148_32809 = state_30135__$1;
(statearr_30148_32809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (6))){
var inst_30114 = (state_30135[(8)]);
var inst_30109 = (state_30135[(7)]);
var inst_30114__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30123 = [inst_30109,inst_30114__$1];
var inst_30124 = (new cljs.core.PersistentVector(null,2,(5),inst_30118,inst_30123,null));
var state_30135__$1 = (function (){var statearr_30150 = state_30135;
(statearr_30150[(8)] = inst_30114__$1);

return statearr_30150;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30135__$1,(8),jobs,inst_30124);
} else {
if((state_val_30136 === (3))){
var inst_30133 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30135__$1,inst_30133);
} else {
if((state_val_30136 === (2))){
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30135__$1,(4),from);
} else {
if((state_val_30136 === (9))){
var inst_30128 = (state_30135[(2)]);
var state_30135__$1 = (function (){var statearr_30151 = state_30135;
(statearr_30151[(9)] = inst_30128);

return statearr_30151;
})();
var statearr_30152_32810 = state_30135__$1;
(statearr_30152_32810[(2)] = null);

(statearr_30152_32810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (5))){
var inst_30112 = cljs.core.async.close_BANG_(jobs);
var state_30135__$1 = state_30135;
var statearr_30153_32811 = state_30135__$1;
(statearr_30153_32811[(2)] = inst_30112);

(statearr_30153_32811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (8))){
var inst_30114 = (state_30135[(8)]);
var inst_30126 = (state_30135[(2)]);
var state_30135__$1 = (function (){var statearr_30154 = state_30135;
(statearr_30154[(10)] = inst_30126);

return statearr_30154;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30135__$1,(9),results,inst_30114);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0 = (function (){
var statearr_30164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__);

(statearr_30164[(1)] = (1));

return statearr_30164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1 = (function (state_30135){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30135);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e30165){var ex__29403__auto__ = e30165;
var statearr_30166_32813 = state_30135;
(statearr_30166_32813[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30135[(4)]))){
var statearr_30167_32815 = state_30135;
(statearr_30167_32815[(1)] = cljs.core.first((state_30135[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32817 = state_30135;
state_30135 = G__32817;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = function(state_30135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1.call(this,state_30135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_30172 = f__29563__auto__();
(statearr_30172[(6)] = c__29562__auto___32805);

return statearr_30172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


var c__29562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_30217){
var state_val_30218 = (state_30217[(1)]);
if((state_val_30218 === (7))){
var inst_30212 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
var statearr_30219_32818 = state_30217__$1;
(statearr_30219_32818[(2)] = inst_30212);

(statearr_30219_32818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (20))){
var state_30217__$1 = state_30217;
var statearr_30220_32819 = state_30217__$1;
(statearr_30220_32819[(2)] = null);

(statearr_30220_32819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (1))){
var state_30217__$1 = state_30217;
var statearr_30221_32820 = state_30217__$1;
(statearr_30221_32820[(2)] = null);

(statearr_30221_32820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (4))){
var inst_30175 = (state_30217[(7)]);
var inst_30175__$1 = (state_30217[(2)]);
var inst_30177 = (inst_30175__$1 == null);
var state_30217__$1 = (function (){var statearr_30222 = state_30217;
(statearr_30222[(7)] = inst_30175__$1);

return statearr_30222;
})();
if(cljs.core.truth_(inst_30177)){
var statearr_30223_32821 = state_30217__$1;
(statearr_30223_32821[(1)] = (5));

} else {
var statearr_30224_32822 = state_30217__$1;
(statearr_30224_32822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (15))){
var inst_30192 = (state_30217[(8)]);
var state_30217__$1 = state_30217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30217__$1,(18),to,inst_30192);
} else {
if((state_val_30218 === (21))){
var inst_30206 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
var statearr_30226_32823 = state_30217__$1;
(statearr_30226_32823[(2)] = inst_30206);

(statearr_30226_32823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (13))){
var inst_30208 = (state_30217[(2)]);
var state_30217__$1 = (function (){var statearr_30227 = state_30217;
(statearr_30227[(9)] = inst_30208);

return statearr_30227;
})();
var statearr_30228_32824 = state_30217__$1;
(statearr_30228_32824[(2)] = null);

(statearr_30228_32824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (6))){
var inst_30175 = (state_30217[(7)]);
var state_30217__$1 = state_30217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30217__$1,(11),inst_30175);
} else {
if((state_val_30218 === (17))){
var inst_30200 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
if(cljs.core.truth_(inst_30200)){
var statearr_30232_32825 = state_30217__$1;
(statearr_30232_32825[(1)] = (19));

} else {
var statearr_30233_32826 = state_30217__$1;
(statearr_30233_32826[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (3))){
var inst_30214 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30217__$1,inst_30214);
} else {
if((state_val_30218 === (12))){
var inst_30189 = (state_30217[(10)]);
var state_30217__$1 = state_30217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30217__$1,(14),inst_30189);
} else {
if((state_val_30218 === (2))){
var state_30217__$1 = state_30217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30217__$1,(4),results);
} else {
if((state_val_30218 === (19))){
var state_30217__$1 = state_30217;
var statearr_30234_32827 = state_30217__$1;
(statearr_30234_32827[(2)] = null);

(statearr_30234_32827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (11))){
var inst_30189 = (state_30217[(2)]);
var state_30217__$1 = (function (){var statearr_30235 = state_30217;
(statearr_30235[(10)] = inst_30189);

return statearr_30235;
})();
var statearr_30236_32829 = state_30217__$1;
(statearr_30236_32829[(2)] = null);

(statearr_30236_32829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (9))){
var state_30217__$1 = state_30217;
var statearr_30241_32832 = state_30217__$1;
(statearr_30241_32832[(2)] = null);

(statearr_30241_32832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (5))){
var state_30217__$1 = state_30217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30242_32833 = state_30217__$1;
(statearr_30242_32833[(1)] = (8));

} else {
var statearr_30243_32834 = state_30217__$1;
(statearr_30243_32834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (14))){
var inst_30192 = (state_30217[(8)]);
var inst_30194 = (state_30217[(11)]);
var inst_30192__$1 = (state_30217[(2)]);
var inst_30193 = (inst_30192__$1 == null);
var inst_30194__$1 = cljs.core.not(inst_30193);
var state_30217__$1 = (function (){var statearr_30253 = state_30217;
(statearr_30253[(8)] = inst_30192__$1);

(statearr_30253[(11)] = inst_30194__$1);

return statearr_30253;
})();
if(inst_30194__$1){
var statearr_30254_32835 = state_30217__$1;
(statearr_30254_32835[(1)] = (15));

} else {
var statearr_30255_32836 = state_30217__$1;
(statearr_30255_32836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (16))){
var inst_30194 = (state_30217[(11)]);
var state_30217__$1 = state_30217;
var statearr_30257_32837 = state_30217__$1;
(statearr_30257_32837[(2)] = inst_30194);

(statearr_30257_32837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (10))){
var inst_30186 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
var statearr_30262_32838 = state_30217__$1;
(statearr_30262_32838[(2)] = inst_30186);

(statearr_30262_32838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (18))){
var inst_30197 = (state_30217[(2)]);
var state_30217__$1 = state_30217;
var statearr_30263_32839 = state_30217__$1;
(statearr_30263_32839[(2)] = inst_30197);

(statearr_30263_32839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30218 === (8))){
var inst_30183 = cljs.core.async.close_BANG_(to);
var state_30217__$1 = state_30217;
var statearr_30264_32840 = state_30217__$1;
(statearr_30264_32840[(2)] = inst_30183);

(statearr_30264_32840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0 = (function (){
var statearr_30265 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__);

(statearr_30265[(1)] = (1));

return statearr_30265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1 = (function (state_30217){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30217);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e30266){var ex__29403__auto__ = e30266;
var statearr_30267_32841 = state_30217;
(statearr_30267_32841[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30217[(4)]))){
var statearr_30268_32842 = state_30217;
(statearr_30268_32842[(1)] = cljs.core.first((state_30217[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32843 = state_30217;
state_30217 = G__32843;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__ = function(state_30217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1.call(this,state_30217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_30273 = f__29563__auto__();
(statearr_30273[(6)] = c__29562__auto__);

return statearr_30273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));

return c__29562__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30279 = arguments.length;
switch (G__30279) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30286 = arguments.length;
switch (G__30286) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30306 = arguments.length;
switch (G__30306) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29562__auto___32849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_30336){
var state_val_30337 = (state_30336[(1)]);
if((state_val_30337 === (7))){
var inst_30332 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30346_32850 = state_30336__$1;
(statearr_30346_32850[(2)] = inst_30332);

(statearr_30346_32850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (1))){
var state_30336__$1 = state_30336;
var statearr_30347_32851 = state_30336__$1;
(statearr_30347_32851[(2)] = null);

(statearr_30347_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (4))){
var inst_30313 = (state_30336[(7)]);
var inst_30313__$1 = (state_30336[(2)]);
var inst_30314 = (inst_30313__$1 == null);
var state_30336__$1 = (function (){var statearr_30348 = state_30336;
(statearr_30348[(7)] = inst_30313__$1);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30314)){
var statearr_30353_32852 = state_30336__$1;
(statearr_30353_32852[(1)] = (5));

} else {
var statearr_30358_32853 = state_30336__$1;
(statearr_30358_32853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (13))){
var state_30336__$1 = state_30336;
var statearr_30361_32858 = state_30336__$1;
(statearr_30361_32858[(2)] = null);

(statearr_30361_32858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (6))){
var inst_30313 = (state_30336[(7)]);
var inst_30319 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30313) : p.call(null,inst_30313));
var state_30336__$1 = state_30336;
if(cljs.core.truth_(inst_30319)){
var statearr_30362_32859 = state_30336__$1;
(statearr_30362_32859[(1)] = (9));

} else {
var statearr_30363_32860 = state_30336__$1;
(statearr_30363_32860[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (3))){
var inst_30334 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30336__$1,inst_30334);
} else {
if((state_val_30337 === (12))){
var state_30336__$1 = state_30336;
var statearr_30371_32862 = state_30336__$1;
(statearr_30371_32862[(2)] = null);

(statearr_30371_32862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (2))){
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30336__$1,(4),ch);
} else {
if((state_val_30337 === (11))){
var inst_30313 = (state_30336[(7)]);
var inst_30323 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30336__$1,(8),inst_30323,inst_30313);
} else {
if((state_val_30337 === (9))){
var state_30336__$1 = state_30336;
var statearr_30376_32863 = state_30336__$1;
(statearr_30376_32863[(2)] = tc);

(statearr_30376_32863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (5))){
var inst_30316 = cljs.core.async.close_BANG_(tc);
var inst_30317 = cljs.core.async.close_BANG_(fc);
var state_30336__$1 = (function (){var statearr_30383 = state_30336;
(statearr_30383[(8)] = inst_30316);

return statearr_30383;
})();
var statearr_30384_32864 = state_30336__$1;
(statearr_30384_32864[(2)] = inst_30317);

(statearr_30384_32864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (14))){
var inst_30330 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30390_32865 = state_30336__$1;
(statearr_30390_32865[(2)] = inst_30330);

(statearr_30390_32865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (10))){
var state_30336__$1 = state_30336;
var statearr_30391_32866 = state_30336__$1;
(statearr_30391_32866[(2)] = fc);

(statearr_30391_32866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (8))){
var inst_30325 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
if(cljs.core.truth_(inst_30325)){
var statearr_30397_32867 = state_30336__$1;
(statearr_30397_32867[(1)] = (12));

} else {
var statearr_30398_32868 = state_30336__$1;
(statearr_30398_32868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_30336){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30336);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e30409){var ex__29403__auto__ = e30409;
var statearr_30411_32869 = state_30336;
(statearr_30411_32869[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30336[(4)]))){
var statearr_30418_32870 = state_30336;
(statearr_30418_32870[(1)] = cljs.core.first((state_30336[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32871 = state_30336;
state_30336 = G__32871;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_30336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_30336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_30424 = f__29563__auto__();
(statearr_30424[(6)] = c__29562__auto___32849);

return statearr_30424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_30453){
var state_val_30454 = (state_30453[(1)]);
if((state_val_30454 === (7))){
var inst_30449 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30460_32872 = state_30453__$1;
(statearr_30460_32872[(2)] = inst_30449);

(statearr_30460_32872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (1))){
var inst_30432 = init;
var inst_30433 = inst_30432;
var state_30453__$1 = (function (){var statearr_30461 = state_30453;
(statearr_30461[(7)] = inst_30433);

return statearr_30461;
})();
var statearr_30463_32873 = state_30453__$1;
(statearr_30463_32873[(2)] = null);

(statearr_30463_32873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (4))){
var inst_30436 = (state_30453[(8)]);
var inst_30436__$1 = (state_30453[(2)]);
var inst_30437 = (inst_30436__$1 == null);
var state_30453__$1 = (function (){var statearr_30466 = state_30453;
(statearr_30466[(8)] = inst_30436__$1);

return statearr_30466;
})();
if(cljs.core.truth_(inst_30437)){
var statearr_30467_32874 = state_30453__$1;
(statearr_30467_32874[(1)] = (5));

} else {
var statearr_30469_32875 = state_30453__$1;
(statearr_30469_32875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (6))){
var inst_30436 = (state_30453[(8)]);
var inst_30440 = (state_30453[(9)]);
var inst_30433 = (state_30453[(7)]);
var inst_30440__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30433,inst_30436) : f.call(null,inst_30433,inst_30436));
var inst_30441 = cljs.core.reduced_QMARK_(inst_30440__$1);
var state_30453__$1 = (function (){var statearr_30474 = state_30453;
(statearr_30474[(9)] = inst_30440__$1);

return statearr_30474;
})();
if(inst_30441){
var statearr_30475_32876 = state_30453__$1;
(statearr_30475_32876[(1)] = (8));

} else {
var statearr_30476_32877 = state_30453__$1;
(statearr_30476_32877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (3))){
var inst_30451 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30453__$1,inst_30451);
} else {
if((state_val_30454 === (2))){
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30453__$1,(4),ch);
} else {
if((state_val_30454 === (9))){
var inst_30440 = (state_30453[(9)]);
var inst_30433 = inst_30440;
var state_30453__$1 = (function (){var statearr_30480 = state_30453;
(statearr_30480[(7)] = inst_30433);

return statearr_30480;
})();
var statearr_30481_32879 = state_30453__$1;
(statearr_30481_32879[(2)] = null);

(statearr_30481_32879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (5))){
var inst_30433 = (state_30453[(7)]);
var state_30453__$1 = state_30453;
var statearr_30482_32881 = state_30453__$1;
(statearr_30482_32881[(2)] = inst_30433);

(statearr_30482_32881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (10))){
var inst_30447 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30483_32882 = state_30453__$1;
(statearr_30483_32882[(2)] = inst_30447);

(statearr_30483_32882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (8))){
var inst_30440 = (state_30453[(9)]);
var inst_30443 = cljs.core.deref(inst_30440);
var state_30453__$1 = state_30453;
var statearr_30485_32884 = state_30453__$1;
(statearr_30485_32884[(2)] = inst_30443);

(statearr_30485_32884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29400__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29400__auto____0 = (function (){
var statearr_30492 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30492[(0)] = cljs$core$async$reduce_$_state_machine__29400__auto__);

(statearr_30492[(1)] = (1));

return statearr_30492;
});
var cljs$core$async$reduce_$_state_machine__29400__auto____1 = (function (state_30453){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30453);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e30493){var ex__29403__auto__ = e30493;
var statearr_30496_32885 = state_30453;
(statearr_30496_32885[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30453[(4)]))){
var statearr_30498_32886 = state_30453;
(statearr_30498_32886[(1)] = cljs.core.first((state_30453[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32887 = state_30453;
state_30453 = G__32887;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29400__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29400__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29400__auto____0;
cljs$core$async$reduce_$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29400__auto____1;
return cljs$core$async$reduce_$_state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_30499 = f__29563__auto__();
(statearr_30499[(6)] = c__29562__auto__);

return statearr_30499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));

return c__29562__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_30507){
var state_val_30508 = (state_30507[(1)]);
if((state_val_30508 === (1))){
var inst_30502 = cljs.core.async.reduce(f__$1,init,ch);
var state_30507__$1 = state_30507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30507__$1,(2),inst_30502);
} else {
if((state_val_30508 === (2))){
var inst_30504 = (state_30507[(2)]);
var inst_30505 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30504) : f__$1.call(null,inst_30504));
var state_30507__$1 = state_30507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30507__$1,inst_30505);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29400__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29400__auto____0 = (function (){
var statearr_30521 = [null,null,null,null,null,null,null];
(statearr_30521[(0)] = cljs$core$async$transduce_$_state_machine__29400__auto__);

(statearr_30521[(1)] = (1));

return statearr_30521;
});
var cljs$core$async$transduce_$_state_machine__29400__auto____1 = (function (state_30507){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30507);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e30522){var ex__29403__auto__ = e30522;
var statearr_30524_32889 = state_30507;
(statearr_30524_32889[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30507[(4)]))){
var statearr_30525_32890 = state_30507;
(statearr_30525_32890[(1)] = cljs.core.first((state_30507[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32891 = state_30507;
state_30507 = G__32891;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29400__auto__ = function(state_30507){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29400__auto____1.call(this,state_30507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29400__auto____0;
cljs$core$async$transduce_$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29400__auto____1;
return cljs$core$async$transduce_$_state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_30526 = f__29563__auto__();
(statearr_30526[(6)] = c__29562__auto__);

return statearr_30526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));

return c__29562__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30528 = arguments.length;
switch (G__30528) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_30565){
var state_val_30566 = (state_30565[(1)]);
if((state_val_30566 === (7))){
var inst_30542 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
var statearr_30571_32900 = state_30565__$1;
(statearr_30571_32900[(2)] = inst_30542);

(statearr_30571_32900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (1))){
var inst_30533 = cljs.core.seq(coll);
var inst_30534 = inst_30533;
var state_30565__$1 = (function (){var statearr_30572 = state_30565;
(statearr_30572[(7)] = inst_30534);

return statearr_30572;
})();
var statearr_30573_32901 = state_30565__$1;
(statearr_30573_32901[(2)] = null);

(statearr_30573_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (4))){
var inst_30534 = (state_30565[(7)]);
var inst_30540 = cljs.core.first(inst_30534);
var state_30565__$1 = state_30565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30565__$1,(7),ch,inst_30540);
} else {
if((state_val_30566 === (13))){
var inst_30557 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
var statearr_30580_32905 = state_30565__$1;
(statearr_30580_32905[(2)] = inst_30557);

(statearr_30580_32905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (6))){
var inst_30545 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
if(cljs.core.truth_(inst_30545)){
var statearr_30581_32907 = state_30565__$1;
(statearr_30581_32907[(1)] = (8));

} else {
var statearr_30582_32911 = state_30565__$1;
(statearr_30582_32911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (3))){
var inst_30561 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30565__$1,inst_30561);
} else {
if((state_val_30566 === (12))){
var state_30565__$1 = state_30565;
var statearr_30590_32912 = state_30565__$1;
(statearr_30590_32912[(2)] = null);

(statearr_30590_32912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (2))){
var inst_30534 = (state_30565[(7)]);
var state_30565__$1 = state_30565;
if(cljs.core.truth_(inst_30534)){
var statearr_30602_32913 = state_30565__$1;
(statearr_30602_32913[(1)] = (4));

} else {
var statearr_30603_32914 = state_30565__$1;
(statearr_30603_32914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (11))){
var inst_30553 = cljs.core.async.close_BANG_(ch);
var state_30565__$1 = state_30565;
var statearr_30604_32915 = state_30565__$1;
(statearr_30604_32915[(2)] = inst_30553);

(statearr_30604_32915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (9))){
var state_30565__$1 = state_30565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30609_32916 = state_30565__$1;
(statearr_30609_32916[(1)] = (11));

} else {
var statearr_30610_32917 = state_30565__$1;
(statearr_30610_32917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (5))){
var inst_30534 = (state_30565[(7)]);
var state_30565__$1 = state_30565;
var statearr_30612_32921 = state_30565__$1;
(statearr_30612_32921[(2)] = inst_30534);

(statearr_30612_32921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (10))){
var inst_30559 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
var statearr_30613_32922 = state_30565__$1;
(statearr_30613_32922[(2)] = inst_30559);

(statearr_30613_32922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (8))){
var inst_30534 = (state_30565[(7)]);
var inst_30549 = cljs.core.next(inst_30534);
var inst_30534__$1 = inst_30549;
var state_30565__$1 = (function (){var statearr_30617 = state_30565;
(statearr_30617[(7)] = inst_30534__$1);

return statearr_30617;
})();
var statearr_30618_32923 = state_30565__$1;
(statearr_30618_32923[(2)] = null);

(statearr_30618_32923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_30628 = [null,null,null,null,null,null,null,null];
(statearr_30628[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_30628[(1)] = (1));

return statearr_30628;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_30565){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30565);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e30637){var ex__29403__auto__ = e30637;
var statearr_30640_32928 = state_30565;
(statearr_30640_32928[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30565[(4)]))){
var statearr_30651_32929 = state_30565;
(statearr_30651_32929[(1)] = cljs.core.first((state_30565[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32930 = state_30565;
state_30565 = G__32930;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_30565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_30565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_30663 = f__29563__auto__();
(statearr_30663[(6)] = c__29562__auto__);

return statearr_30663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));

return c__29562__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30671 = arguments.length;
switch (G__30671) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32939 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32939(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32940 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32940(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32944 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32944(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32948 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32948(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30773 = (function (ch,cs,meta30774){
this.ch = ch;
this.cs = cs;
this.meta30774 = meta30774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30775,meta30774__$1){
var self__ = this;
var _30775__$1 = this;
return (new cljs.core.async.t_cljs$core$async30773(self__.ch,self__.cs,meta30774__$1));
}));

(cljs.core.async.t_cljs$core$async30773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30775){
var self__ = this;
var _30775__$1 = this;
return self__.meta30774;
}));

(cljs.core.async.t_cljs$core$async30773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30773.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30773.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30773.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30773.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30774","meta30774",1098305106,null)], null);
}));

(cljs.core.async.t_cljs$core$async30773.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30773");

(cljs.core.async.t_cljs$core$async30773.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30773");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30773.
 */
cljs.core.async.__GT_t_cljs$core$async30773 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30773(ch__$1,cs__$1,meta30774){
return (new cljs.core.async.t_cljs$core$async30773(ch__$1,cs__$1,meta30774));
});

}

return (new cljs.core.async.t_cljs$core$async30773(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29562__auto___32951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_30939){
var state_val_30941 = (state_30939[(1)]);
if((state_val_30941 === (7))){
var inst_30935 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_30947_32952 = state_30939__$1;
(statearr_30947_32952[(2)] = inst_30935);

(statearr_30947_32952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (20))){
var inst_30826 = (state_30939[(7)]);
var inst_30843 = cljs.core.first(inst_30826);
var inst_30844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30843,(0),null);
var inst_30845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30843,(1),null);
var state_30939__$1 = (function (){var statearr_30948 = state_30939;
(statearr_30948[(8)] = inst_30844);

return statearr_30948;
})();
if(cljs.core.truth_(inst_30845)){
var statearr_30949_32953 = state_30939__$1;
(statearr_30949_32953[(1)] = (22));

} else {
var statearr_30951_32954 = state_30939__$1;
(statearr_30951_32954[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (27))){
var inst_30884 = (state_30939[(9)]);
var inst_30876 = (state_30939[(10)]);
var inst_30878 = (state_30939[(11)]);
var inst_30790 = (state_30939[(12)]);
var inst_30884__$1 = cljs.core._nth(inst_30876,inst_30878);
var inst_30885 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30884__$1,inst_30790,done);
var state_30939__$1 = (function (){var statearr_30960 = state_30939;
(statearr_30960[(9)] = inst_30884__$1);

return statearr_30960;
})();
if(cljs.core.truth_(inst_30885)){
var statearr_30961_32956 = state_30939__$1;
(statearr_30961_32956[(1)] = (30));

} else {
var statearr_30962_32957 = state_30939__$1;
(statearr_30962_32957[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (1))){
var state_30939__$1 = state_30939;
var statearr_30965_32958 = state_30939__$1;
(statearr_30965_32958[(2)] = null);

(statearr_30965_32958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (24))){
var inst_30826 = (state_30939[(7)]);
var inst_30852 = (state_30939[(2)]);
var inst_30853 = cljs.core.next(inst_30826);
var inst_30801 = inst_30853;
var inst_30802 = null;
var inst_30803 = (0);
var inst_30804 = (0);
var state_30939__$1 = (function (){var statearr_30968 = state_30939;
(statearr_30968[(13)] = inst_30803);

(statearr_30968[(14)] = inst_30802);

(statearr_30968[(15)] = inst_30804);

(statearr_30968[(16)] = inst_30801);

(statearr_30968[(17)] = inst_30852);

return statearr_30968;
})();
var statearr_30969_32959 = state_30939__$1;
(statearr_30969_32959[(2)] = null);

(statearr_30969_32959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (39))){
var state_30939__$1 = state_30939;
var statearr_30974_32960 = state_30939__$1;
(statearr_30974_32960[(2)] = null);

(statearr_30974_32960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (4))){
var inst_30790 = (state_30939[(12)]);
var inst_30790__$1 = (state_30939[(2)]);
var inst_30791 = (inst_30790__$1 == null);
var state_30939__$1 = (function (){var statearr_30976 = state_30939;
(statearr_30976[(12)] = inst_30790__$1);

return statearr_30976;
})();
if(cljs.core.truth_(inst_30791)){
var statearr_30977_32961 = state_30939__$1;
(statearr_30977_32961[(1)] = (5));

} else {
var statearr_30978_32962 = state_30939__$1;
(statearr_30978_32962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (15))){
var inst_30803 = (state_30939[(13)]);
var inst_30802 = (state_30939[(14)]);
var inst_30804 = (state_30939[(15)]);
var inst_30801 = (state_30939[(16)]);
var inst_30820 = (state_30939[(2)]);
var inst_30821 = (inst_30804 + (1));
var tmp30970 = inst_30803;
var tmp30971 = inst_30802;
var tmp30972 = inst_30801;
var inst_30801__$1 = tmp30972;
var inst_30802__$1 = tmp30971;
var inst_30803__$1 = tmp30970;
var inst_30804__$1 = inst_30821;
var state_30939__$1 = (function (){var statearr_30980 = state_30939;
(statearr_30980[(13)] = inst_30803__$1);

(statearr_30980[(14)] = inst_30802__$1);

(statearr_30980[(18)] = inst_30820);

(statearr_30980[(15)] = inst_30804__$1);

(statearr_30980[(16)] = inst_30801__$1);

return statearr_30980;
})();
var statearr_30981_32963 = state_30939__$1;
(statearr_30981_32963[(2)] = null);

(statearr_30981_32963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (21))){
var inst_30856 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_30986_32964 = state_30939__$1;
(statearr_30986_32964[(2)] = inst_30856);

(statearr_30986_32964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (31))){
var inst_30884 = (state_30939[(9)]);
var inst_30888 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30884);
var state_30939__$1 = state_30939;
var statearr_30987_32965 = state_30939__$1;
(statearr_30987_32965[(2)] = inst_30888);

(statearr_30987_32965[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (32))){
var inst_30876 = (state_30939[(10)]);
var inst_30878 = (state_30939[(11)]);
var inst_30877 = (state_30939[(19)]);
var inst_30875 = (state_30939[(20)]);
var inst_30890 = (state_30939[(2)]);
var inst_30892 = (inst_30878 + (1));
var tmp30982 = inst_30876;
var tmp30983 = inst_30877;
var tmp30984 = inst_30875;
var inst_30875__$1 = tmp30984;
var inst_30876__$1 = tmp30982;
var inst_30877__$1 = tmp30983;
var inst_30878__$1 = inst_30892;
var state_30939__$1 = (function (){var statearr_30990 = state_30939;
(statearr_30990[(21)] = inst_30890);

(statearr_30990[(10)] = inst_30876__$1);

(statearr_30990[(11)] = inst_30878__$1);

(statearr_30990[(19)] = inst_30877__$1);

(statearr_30990[(20)] = inst_30875__$1);

return statearr_30990;
})();
var statearr_30993_32966 = state_30939__$1;
(statearr_30993_32966[(2)] = null);

(statearr_30993_32966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (40))){
var inst_30907 = (state_30939[(22)]);
var inst_30911 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30907);
var state_30939__$1 = state_30939;
var statearr_30995_32967 = state_30939__$1;
(statearr_30995_32967[(2)] = inst_30911);

(statearr_30995_32967[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (33))){
var inst_30895 = (state_30939[(23)]);
var inst_30898 = cljs.core.chunked_seq_QMARK_(inst_30895);
var state_30939__$1 = state_30939;
if(inst_30898){
var statearr_30999_32968 = state_30939__$1;
(statearr_30999_32968[(1)] = (36));

} else {
var statearr_31003_32969 = state_30939__$1;
(statearr_31003_32969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (13))){
var inst_30814 = (state_30939[(24)]);
var inst_30817 = cljs.core.async.close_BANG_(inst_30814);
var state_30939__$1 = state_30939;
var statearr_31006_32970 = state_30939__$1;
(statearr_31006_32970[(2)] = inst_30817);

(statearr_31006_32970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (22))){
var inst_30844 = (state_30939[(8)]);
var inst_30849 = cljs.core.async.close_BANG_(inst_30844);
var state_30939__$1 = state_30939;
var statearr_31010_32971 = state_30939__$1;
(statearr_31010_32971[(2)] = inst_30849);

(statearr_31010_32971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (36))){
var inst_30895 = (state_30939[(23)]);
var inst_30900 = cljs.core.chunk_first(inst_30895);
var inst_30901 = cljs.core.chunk_rest(inst_30895);
var inst_30904 = cljs.core.count(inst_30900);
var inst_30875 = inst_30901;
var inst_30876 = inst_30900;
var inst_30877 = inst_30904;
var inst_30878 = (0);
var state_30939__$1 = (function (){var statearr_31018 = state_30939;
(statearr_31018[(10)] = inst_30876);

(statearr_31018[(11)] = inst_30878);

(statearr_31018[(19)] = inst_30877);

(statearr_31018[(20)] = inst_30875);

return statearr_31018;
})();
var statearr_31019_32973 = state_30939__$1;
(statearr_31019_32973[(2)] = null);

(statearr_31019_32973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (41))){
var inst_30895 = (state_30939[(23)]);
var inst_30913 = (state_30939[(2)]);
var inst_30914 = cljs.core.next(inst_30895);
var inst_30875 = inst_30914;
var inst_30876 = null;
var inst_30877 = (0);
var inst_30878 = (0);
var state_30939__$1 = (function (){var statearr_31022 = state_30939;
(statearr_31022[(10)] = inst_30876);

(statearr_31022[(11)] = inst_30878);

(statearr_31022[(25)] = inst_30913);

(statearr_31022[(19)] = inst_30877);

(statearr_31022[(20)] = inst_30875);

return statearr_31022;
})();
var statearr_31025_32974 = state_30939__$1;
(statearr_31025_32974[(2)] = null);

(statearr_31025_32974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (43))){
var state_30939__$1 = state_30939;
var statearr_31029_32975 = state_30939__$1;
(statearr_31029_32975[(2)] = null);

(statearr_31029_32975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (29))){
var inst_30922 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31030_32976 = state_30939__$1;
(statearr_31030_32976[(2)] = inst_30922);

(statearr_31030_32976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (44))){
var inst_30932 = (state_30939[(2)]);
var state_30939__$1 = (function (){var statearr_31035 = state_30939;
(statearr_31035[(26)] = inst_30932);

return statearr_31035;
})();
var statearr_31036_32977 = state_30939__$1;
(statearr_31036_32977[(2)] = null);

(statearr_31036_32977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (6))){
var inst_30866 = (state_30939[(27)]);
var inst_30865 = cljs.core.deref(cs);
var inst_30866__$1 = cljs.core.keys(inst_30865);
var inst_30867 = cljs.core.count(inst_30866__$1);
var inst_30868 = cljs.core.reset_BANG_(dctr,inst_30867);
var inst_30874 = cljs.core.seq(inst_30866__$1);
var inst_30875 = inst_30874;
var inst_30876 = null;
var inst_30877 = (0);
var inst_30878 = (0);
var state_30939__$1 = (function (){var statearr_31041 = state_30939;
(statearr_31041[(27)] = inst_30866__$1);

(statearr_31041[(10)] = inst_30876);

(statearr_31041[(11)] = inst_30878);

(statearr_31041[(28)] = inst_30868);

(statearr_31041[(19)] = inst_30877);

(statearr_31041[(20)] = inst_30875);

return statearr_31041;
})();
var statearr_31048_32980 = state_30939__$1;
(statearr_31048_32980[(2)] = null);

(statearr_31048_32980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (28))){
var inst_30895 = (state_30939[(23)]);
var inst_30875 = (state_30939[(20)]);
var inst_30895__$1 = cljs.core.seq(inst_30875);
var state_30939__$1 = (function (){var statearr_31051 = state_30939;
(statearr_31051[(23)] = inst_30895__$1);

return statearr_31051;
})();
if(inst_30895__$1){
var statearr_31054_32984 = state_30939__$1;
(statearr_31054_32984[(1)] = (33));

} else {
var statearr_31056_32985 = state_30939__$1;
(statearr_31056_32985[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (25))){
var inst_30878 = (state_30939[(11)]);
var inst_30877 = (state_30939[(19)]);
var inst_30880 = (inst_30878 < inst_30877);
var inst_30881 = inst_30880;
var state_30939__$1 = state_30939;
if(cljs.core.truth_(inst_30881)){
var statearr_31060_32987 = state_30939__$1;
(statearr_31060_32987[(1)] = (27));

} else {
var statearr_31061_32989 = state_30939__$1;
(statearr_31061_32989[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (34))){
var state_30939__$1 = state_30939;
var statearr_31062_32990 = state_30939__$1;
(statearr_31062_32990[(2)] = null);

(statearr_31062_32990[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (17))){
var state_30939__$1 = state_30939;
var statearr_31063_32991 = state_30939__$1;
(statearr_31063_32991[(2)] = null);

(statearr_31063_32991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (3))){
var inst_30937 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30939__$1,inst_30937);
} else {
if((state_val_30941 === (12))){
var inst_30861 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31065_32993 = state_30939__$1;
(statearr_31065_32993[(2)] = inst_30861);

(statearr_31065_32993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (2))){
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30939__$1,(4),ch);
} else {
if((state_val_30941 === (23))){
var state_30939__$1 = state_30939;
var statearr_31068_32995 = state_30939__$1;
(statearr_31068_32995[(2)] = null);

(statearr_31068_32995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (35))){
var inst_30920 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31069_32996 = state_30939__$1;
(statearr_31069_32996[(2)] = inst_30920);

(statearr_31069_32996[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (19))){
var inst_30826 = (state_30939[(7)]);
var inst_30833 = cljs.core.chunk_first(inst_30826);
var inst_30834 = cljs.core.chunk_rest(inst_30826);
var inst_30837 = cljs.core.count(inst_30833);
var inst_30801 = inst_30834;
var inst_30802 = inst_30833;
var inst_30803 = inst_30837;
var inst_30804 = (0);
var state_30939__$1 = (function (){var statearr_31070 = state_30939;
(statearr_31070[(13)] = inst_30803);

(statearr_31070[(14)] = inst_30802);

(statearr_31070[(15)] = inst_30804);

(statearr_31070[(16)] = inst_30801);

return statearr_31070;
})();
var statearr_31072_32997 = state_30939__$1;
(statearr_31072_32997[(2)] = null);

(statearr_31072_32997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (11))){
var inst_30826 = (state_30939[(7)]);
var inst_30801 = (state_30939[(16)]);
var inst_30826__$1 = cljs.core.seq(inst_30801);
var state_30939__$1 = (function (){var statearr_31078 = state_30939;
(statearr_31078[(7)] = inst_30826__$1);

return statearr_31078;
})();
if(inst_30826__$1){
var statearr_31079_32998 = state_30939__$1;
(statearr_31079_32998[(1)] = (16));

} else {
var statearr_31080_32999 = state_30939__$1;
(statearr_31080_32999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (9))){
var inst_30863 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31081_33000 = state_30939__$1;
(statearr_31081_33000[(2)] = inst_30863);

(statearr_31081_33000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (5))){
var inst_30799 = cljs.core.deref(cs);
var inst_30800 = cljs.core.seq(inst_30799);
var inst_30801 = inst_30800;
var inst_30802 = null;
var inst_30803 = (0);
var inst_30804 = (0);
var state_30939__$1 = (function (){var statearr_31082 = state_30939;
(statearr_31082[(13)] = inst_30803);

(statearr_31082[(14)] = inst_30802);

(statearr_31082[(15)] = inst_30804);

(statearr_31082[(16)] = inst_30801);

return statearr_31082;
})();
var statearr_31083_33001 = state_30939__$1;
(statearr_31083_33001[(2)] = null);

(statearr_31083_33001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (14))){
var state_30939__$1 = state_30939;
var statearr_31090_33002 = state_30939__$1;
(statearr_31090_33002[(2)] = null);

(statearr_31090_33002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (45))){
var inst_30929 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31096_33003 = state_30939__$1;
(statearr_31096_33003[(2)] = inst_30929);

(statearr_31096_33003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (26))){
var inst_30866 = (state_30939[(27)]);
var inst_30924 = (state_30939[(2)]);
var inst_30926 = cljs.core.seq(inst_30866);
var state_30939__$1 = (function (){var statearr_31100 = state_30939;
(statearr_31100[(29)] = inst_30924);

return statearr_31100;
})();
if(inst_30926){
var statearr_31101_33005 = state_30939__$1;
(statearr_31101_33005[(1)] = (42));

} else {
var statearr_31102_33006 = state_30939__$1;
(statearr_31102_33006[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (16))){
var inst_30826 = (state_30939[(7)]);
var inst_30831 = cljs.core.chunked_seq_QMARK_(inst_30826);
var state_30939__$1 = state_30939;
if(inst_30831){
var statearr_31111_33007 = state_30939__$1;
(statearr_31111_33007[(1)] = (19));

} else {
var statearr_31116_33008 = state_30939__$1;
(statearr_31116_33008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (38))){
var inst_30917 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31119_33010 = state_30939__$1;
(statearr_31119_33010[(2)] = inst_30917);

(statearr_31119_33010[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (30))){
var state_30939__$1 = state_30939;
var statearr_31120_33011 = state_30939__$1;
(statearr_31120_33011[(2)] = null);

(statearr_31120_33011[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (10))){
var inst_30802 = (state_30939[(14)]);
var inst_30804 = (state_30939[(15)]);
var inst_30813 = cljs.core._nth(inst_30802,inst_30804);
var inst_30814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30813,(0),null);
var inst_30815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30813,(1),null);
var state_30939__$1 = (function (){var statearr_31125 = state_30939;
(statearr_31125[(24)] = inst_30814);

return statearr_31125;
})();
if(cljs.core.truth_(inst_30815)){
var statearr_31126_33015 = state_30939__$1;
(statearr_31126_33015[(1)] = (13));

} else {
var statearr_31128_33016 = state_30939__$1;
(statearr_31128_33016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (18))){
var inst_30859 = (state_30939[(2)]);
var state_30939__$1 = state_30939;
var statearr_31130_33017 = state_30939__$1;
(statearr_31130_33017[(2)] = inst_30859);

(statearr_31130_33017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (42))){
var state_30939__$1 = state_30939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30939__$1,(45),dchan);
} else {
if((state_val_30941 === (37))){
var inst_30895 = (state_30939[(23)]);
var inst_30790 = (state_30939[(12)]);
var inst_30907 = (state_30939[(22)]);
var inst_30907__$1 = cljs.core.first(inst_30895);
var inst_30908 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30907__$1,inst_30790,done);
var state_30939__$1 = (function (){var statearr_31133 = state_30939;
(statearr_31133[(22)] = inst_30907__$1);

return statearr_31133;
})();
if(cljs.core.truth_(inst_30908)){
var statearr_31134_33020 = state_30939__$1;
(statearr_31134_33020[(1)] = (39));

} else {
var statearr_31135_33023 = state_30939__$1;
(statearr_31135_33023[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (8))){
var inst_30803 = (state_30939[(13)]);
var inst_30804 = (state_30939[(15)]);
var inst_30807 = (inst_30804 < inst_30803);
var inst_30808 = inst_30807;
var state_30939__$1 = state_30939;
if(cljs.core.truth_(inst_30808)){
var statearr_31139_33024 = state_30939__$1;
(statearr_31139_33024[(1)] = (10));

} else {
var statearr_31140_33025 = state_30939__$1;
(statearr_31140_33025[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29400__auto__ = null;
var cljs$core$async$mult_$_state_machine__29400__auto____0 = (function (){
var statearr_31144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31144[(0)] = cljs$core$async$mult_$_state_machine__29400__auto__);

(statearr_31144[(1)] = (1));

return statearr_31144;
});
var cljs$core$async$mult_$_state_machine__29400__auto____1 = (function (state_30939){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_30939);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e31149){var ex__29403__auto__ = e31149;
var statearr_31150_33026 = state_30939;
(statearr_31150_33026[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_30939[(4)]))){
var statearr_31155_33027 = state_30939;
(statearr_31155_33027[(1)] = cljs.core.first((state_30939[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33031 = state_30939;
state_30939 = G__33031;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29400__auto__ = function(state_30939){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29400__auto____1.call(this,state_30939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29400__auto____0;
cljs$core$async$mult_$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29400__auto____1;
return cljs$core$async$mult_$_state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_31162 = f__29563__auto__();
(statearr_31162[(6)] = c__29562__auto___32951);

return statearr_31162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31179 = arguments.length;
switch (G__31179) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33044 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33044(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33045 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33045(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33046 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33046(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33047 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33047(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33049 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33049(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33050 = arguments.length;
var i__4865__auto___33051 = (0);
while(true){
if((i__4865__auto___33051 < len__4864__auto___33050)){
args__4870__auto__.push((arguments[i__4865__auto___33051]));

var G__33052 = (i__4865__auto___33051 + (1));
i__4865__auto___33051 = G__33052;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31225){
var map__31226 = p__31225;
var map__31226__$1 = cljs.core.__destructure_map(map__31226);
var opts = map__31226__$1;
var statearr_31227_33053 = state;
(statearr_31227_33053[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31230_33054 = state;
(statearr_31230_33054[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31234_33055 = state;
(statearr_31234_33055[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31221){
var G__31222 = cljs.core.first(seq31221);
var seq31221__$1 = cljs.core.next(seq31221);
var G__31223 = cljs.core.first(seq31221__$1);
var seq31221__$2 = cljs.core.next(seq31221__$1);
var G__31224 = cljs.core.first(seq31221__$2);
var seq31221__$3 = cljs.core.next(seq31221__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31222,G__31223,G__31224,seq31221__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31278 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31279){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31279 = meta31279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31280,meta31279__$1){
var self__ = this;
var _31280__$1 = this;
return (new cljs.core.async.t_cljs$core$async31278(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31279__$1));
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31280){
var self__ = this;
var _31280__$1 = this;
return self__.meta31279;
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31278.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31279","meta31279",167567245,null)], null);
}));

(cljs.core.async.t_cljs$core$async31278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31278");

(cljs.core.async.t_cljs$core$async31278.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31278.
 */
cljs.core.async.__GT_t_cljs$core$async31278 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31278(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31279){
return (new cljs.core.async.t_cljs$core$async31278(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31279));
});

}

return (new cljs.core.async.t_cljs$core$async31278(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29562__auto___33070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_31394){
var state_val_31395 = (state_31394[(1)]);
if((state_val_31395 === (7))){
var inst_31333 = (state_31394[(2)]);
var state_31394__$1 = state_31394;
if(cljs.core.truth_(inst_31333)){
var statearr_31397_33071 = state_31394__$1;
(statearr_31397_33071[(1)] = (8));

} else {
var statearr_31399_33072 = state_31394__$1;
(statearr_31399_33072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (20))){
var inst_31322 = (state_31394[(7)]);
var state_31394__$1 = state_31394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31394__$1,(23),out,inst_31322);
} else {
if((state_val_31395 === (1))){
var inst_31300 = calc_state();
var inst_31301 = cljs.core.__destructure_map(inst_31300);
var inst_31302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31301,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31301,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31301,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31305 = inst_31300;
var state_31394__$1 = (function (){var statearr_31401 = state_31394;
(statearr_31401[(8)] = inst_31302);

(statearr_31401[(9)] = inst_31303);

(statearr_31401[(10)] = inst_31304);

(statearr_31401[(11)] = inst_31305);

return statearr_31401;
})();
var statearr_31402_33074 = state_31394__$1;
(statearr_31402_33074[(2)] = null);

(statearr_31402_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (24))){
var inst_31309 = (state_31394[(12)]);
var inst_31305 = inst_31309;
var state_31394__$1 = (function (){var statearr_31403 = state_31394;
(statearr_31403[(11)] = inst_31305);

return statearr_31403;
})();
var statearr_31406_33075 = state_31394__$1;
(statearr_31406_33075[(2)] = null);

(statearr_31406_33075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (4))){
var inst_31322 = (state_31394[(7)]);
var inst_31324 = (state_31394[(13)]);
var inst_31321 = (state_31394[(2)]);
var inst_31322__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31321,(0),null);
var inst_31323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31321,(1),null);
var inst_31324__$1 = (inst_31322__$1 == null);
var state_31394__$1 = (function (){var statearr_31410 = state_31394;
(statearr_31410[(7)] = inst_31322__$1);

(statearr_31410[(14)] = inst_31323);

(statearr_31410[(13)] = inst_31324__$1);

return statearr_31410;
})();
if(cljs.core.truth_(inst_31324__$1)){
var statearr_31411_33076 = state_31394__$1;
(statearr_31411_33076[(1)] = (5));

} else {
var statearr_31416_33077 = state_31394__$1;
(statearr_31416_33077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (15))){
var inst_31360 = (state_31394[(15)]);
var inst_31310 = (state_31394[(16)]);
var inst_31360__$1 = cljs.core.empty_QMARK_(inst_31310);
var state_31394__$1 = (function (){var statearr_31435 = state_31394;
(statearr_31435[(15)] = inst_31360__$1);

return statearr_31435;
})();
if(inst_31360__$1){
var statearr_31439_33078 = state_31394__$1;
(statearr_31439_33078[(1)] = (17));

} else {
var statearr_31444_33079 = state_31394__$1;
(statearr_31444_33079[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (21))){
var inst_31309 = (state_31394[(12)]);
var inst_31305 = inst_31309;
var state_31394__$1 = (function (){var statearr_31450 = state_31394;
(statearr_31450[(11)] = inst_31305);

return statearr_31450;
})();
var statearr_31456_33080 = state_31394__$1;
(statearr_31456_33080[(2)] = null);

(statearr_31456_33080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (13))){
var inst_31342 = (state_31394[(2)]);
var inst_31343 = calc_state();
var inst_31305 = inst_31343;
var state_31394__$1 = (function (){var statearr_31468 = state_31394;
(statearr_31468[(17)] = inst_31342);

(statearr_31468[(11)] = inst_31305);

return statearr_31468;
})();
var statearr_31469_33081 = state_31394__$1;
(statearr_31469_33081[(2)] = null);

(statearr_31469_33081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (22))){
var inst_31385 = (state_31394[(2)]);
var state_31394__$1 = state_31394;
var statearr_31471_33082 = state_31394__$1;
(statearr_31471_33082[(2)] = inst_31385);

(statearr_31471_33082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (6))){
var inst_31323 = (state_31394[(14)]);
var inst_31331 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31323,change);
var state_31394__$1 = state_31394;
var statearr_31473_33083 = state_31394__$1;
(statearr_31473_33083[(2)] = inst_31331);

(statearr_31473_33083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (25))){
var state_31394__$1 = state_31394;
var statearr_31477_33084 = state_31394__$1;
(statearr_31477_33084[(2)] = null);

(statearr_31477_33084[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (17))){
var inst_31323 = (state_31394[(14)]);
var inst_31311 = (state_31394[(18)]);
var inst_31363 = (inst_31311.cljs$core$IFn$_invoke$arity$1 ? inst_31311.cljs$core$IFn$_invoke$arity$1(inst_31323) : inst_31311.call(null,inst_31323));
var inst_31364 = cljs.core.not(inst_31363);
var state_31394__$1 = state_31394;
var statearr_31481_33092 = state_31394__$1;
(statearr_31481_33092[(2)] = inst_31364);

(statearr_31481_33092[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (3))){
var inst_31389 = (state_31394[(2)]);
var state_31394__$1 = state_31394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31394__$1,inst_31389);
} else {
if((state_val_31395 === (12))){
var state_31394__$1 = state_31394;
var statearr_31482_33093 = state_31394__$1;
(statearr_31482_33093[(2)] = null);

(statearr_31482_33093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (2))){
var inst_31309 = (state_31394[(12)]);
var inst_31305 = (state_31394[(11)]);
var inst_31309__$1 = cljs.core.__destructure_map(inst_31305);
var inst_31310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31309__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31309__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31309__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31394__$1 = (function (){var statearr_31485 = state_31394;
(statearr_31485[(12)] = inst_31309__$1);

(statearr_31485[(16)] = inst_31310);

(statearr_31485[(18)] = inst_31311);

return statearr_31485;
})();
return cljs.core.async.ioc_alts_BANG_(state_31394__$1,(4),inst_31312);
} else {
if((state_val_31395 === (23))){
var inst_31372 = (state_31394[(2)]);
var state_31394__$1 = state_31394;
if(cljs.core.truth_(inst_31372)){
var statearr_31495_33094 = state_31394__$1;
(statearr_31495_33094[(1)] = (24));

} else {
var statearr_31498_33095 = state_31394__$1;
(statearr_31498_33095[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (19))){
var inst_31367 = (state_31394[(2)]);
var state_31394__$1 = state_31394;
var statearr_31500_33096 = state_31394__$1;
(statearr_31500_33096[(2)] = inst_31367);

(statearr_31500_33096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (11))){
var inst_31323 = (state_31394[(14)]);
var inst_31339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31323);
var state_31394__$1 = state_31394;
var statearr_31503_33097 = state_31394__$1;
(statearr_31503_33097[(2)] = inst_31339);

(statearr_31503_33097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (9))){
var inst_31323 = (state_31394[(14)]);
var inst_31310 = (state_31394[(16)]);
var inst_31351 = (state_31394[(19)]);
var inst_31351__$1 = (inst_31310.cljs$core$IFn$_invoke$arity$1 ? inst_31310.cljs$core$IFn$_invoke$arity$1(inst_31323) : inst_31310.call(null,inst_31323));
var state_31394__$1 = (function (){var statearr_31506 = state_31394;
(statearr_31506[(19)] = inst_31351__$1);

return statearr_31506;
})();
if(cljs.core.truth_(inst_31351__$1)){
var statearr_31507_33098 = state_31394__$1;
(statearr_31507_33098[(1)] = (14));

} else {
var statearr_31508_33099 = state_31394__$1;
(statearr_31508_33099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (5))){
var inst_31324 = (state_31394[(13)]);
var state_31394__$1 = state_31394;
var statearr_31509_33100 = state_31394__$1;
(statearr_31509_33100[(2)] = inst_31324);

(statearr_31509_33100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (14))){
var inst_31351 = (state_31394[(19)]);
var state_31394__$1 = state_31394;
var statearr_31512_33101 = state_31394__$1;
(statearr_31512_33101[(2)] = inst_31351);

(statearr_31512_33101[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (26))){
var inst_31381 = (state_31394[(2)]);
var state_31394__$1 = state_31394;
var statearr_31514_33102 = state_31394__$1;
(statearr_31514_33102[(2)] = inst_31381);

(statearr_31514_33102[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (16))){
var inst_31369 = (state_31394[(2)]);
var state_31394__$1 = state_31394;
if(cljs.core.truth_(inst_31369)){
var statearr_31519_33103 = state_31394__$1;
(statearr_31519_33103[(1)] = (20));

} else {
var statearr_31520_33104 = state_31394__$1;
(statearr_31520_33104[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (10))){
var inst_31387 = (state_31394[(2)]);
var state_31394__$1 = state_31394;
var statearr_31521_33106 = state_31394__$1;
(statearr_31521_33106[(2)] = inst_31387);

(statearr_31521_33106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (18))){
var inst_31360 = (state_31394[(15)]);
var state_31394__$1 = state_31394;
var statearr_31523_33107 = state_31394__$1;
(statearr_31523_33107[(2)] = inst_31360);

(statearr_31523_33107[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31395 === (8))){
var inst_31322 = (state_31394[(7)]);
var inst_31336 = (inst_31322 == null);
var state_31394__$1 = state_31394;
if(cljs.core.truth_(inst_31336)){
var statearr_31526_33108 = state_31394__$1;
(statearr_31526_33108[(1)] = (11));

} else {
var statearr_31528_33109 = state_31394__$1;
(statearr_31528_33109[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29400__auto__ = null;
var cljs$core$async$mix_$_state_machine__29400__auto____0 = (function (){
var statearr_31530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31530[(0)] = cljs$core$async$mix_$_state_machine__29400__auto__);

(statearr_31530[(1)] = (1));

return statearr_31530;
});
var cljs$core$async$mix_$_state_machine__29400__auto____1 = (function (state_31394){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_31394);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e31532){var ex__29403__auto__ = e31532;
var statearr_31534_33110 = state_31394;
(statearr_31534_33110[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_31394[(4)]))){
var statearr_31535_33111 = state_31394;
(statearr_31535_33111[(1)] = cljs.core.first((state_31394[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33112 = state_31394;
state_31394 = G__33112;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29400__auto__ = function(state_31394){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29400__auto____1.call(this,state_31394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29400__auto____0;
cljs$core$async$mix_$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29400__auto____1;
return cljs$core$async$mix_$_state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_31537 = f__29563__auto__();
(statearr_31537[(6)] = c__29562__auto___33070);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33113 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33113(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33115 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33115(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33116 = (function() {
var G__33117 = null;
var G__33117__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33117__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33117 = function(p,v){
switch(arguments.length){
case 1:
return G__33117__1.call(this,p);
case 2:
return G__33117__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33117.cljs$core$IFn$_invoke$arity$1 = G__33117__1;
G__33117.cljs$core$IFn$_invoke$arity$2 = G__33117__2;
return G__33117;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31559 = arguments.length;
switch (G__31559) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33116(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33116(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31571 = arguments.length;
switch (G__31571) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31569_SHARP_){
if(cljs.core.truth_((p1__31569_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31569_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31569_SHARP_.call(null,topic)))){
return p1__31569_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31569_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31580 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31581){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31581 = meta31581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31582,meta31581__$1){
var self__ = this;
var _31582__$1 = this;
return (new cljs.core.async.t_cljs$core$async31580(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31581__$1));
}));

(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31582){
var self__ = this;
var _31582__$1 = this;
return self__.meta31581;
}));

(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31580.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31581","meta31581",-2041648466,null)], null);
}));

(cljs.core.async.t_cljs$core$async31580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31580");

(cljs.core.async.t_cljs$core$async31580.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31580.
 */
cljs.core.async.__GT_t_cljs$core$async31580 = (function cljs$core$async$__GT_t_cljs$core$async31580(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31581){
return (new cljs.core.async.t_cljs$core$async31580(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31581));
});

}

return (new cljs.core.async.t_cljs$core$async31580(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29562__auto___33126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_31665){
var state_val_31666 = (state_31665[(1)]);
if((state_val_31666 === (7))){
var inst_31661 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31667_33127 = state_31665__$1;
(statearr_31667_33127[(2)] = inst_31661);

(statearr_31667_33127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (20))){
var state_31665__$1 = state_31665;
var statearr_31668_33128 = state_31665__$1;
(statearr_31668_33128[(2)] = null);

(statearr_31668_33128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (1))){
var state_31665__$1 = state_31665;
var statearr_31669_33129 = state_31665__$1;
(statearr_31669_33129[(2)] = null);

(statearr_31669_33129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (24))){
var inst_31644 = (state_31665[(7)]);
var inst_31653 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31644);
var state_31665__$1 = state_31665;
var statearr_31671_33130 = state_31665__$1;
(statearr_31671_33130[(2)] = inst_31653);

(statearr_31671_33130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (4))){
var inst_31596 = (state_31665[(8)]);
var inst_31596__$1 = (state_31665[(2)]);
var inst_31597 = (inst_31596__$1 == null);
var state_31665__$1 = (function (){var statearr_31672 = state_31665;
(statearr_31672[(8)] = inst_31596__$1);

return statearr_31672;
})();
if(cljs.core.truth_(inst_31597)){
var statearr_31673_33133 = state_31665__$1;
(statearr_31673_33133[(1)] = (5));

} else {
var statearr_31674_33134 = state_31665__$1;
(statearr_31674_33134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (15))){
var inst_31638 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31681_33135 = state_31665__$1;
(statearr_31681_33135[(2)] = inst_31638);

(statearr_31681_33135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (21))){
var inst_31658 = (state_31665[(2)]);
var state_31665__$1 = (function (){var statearr_31682 = state_31665;
(statearr_31682[(9)] = inst_31658);

return statearr_31682;
})();
var statearr_31683_33136 = state_31665__$1;
(statearr_31683_33136[(2)] = null);

(statearr_31683_33136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (13))){
var inst_31620 = (state_31665[(10)]);
var inst_31622 = cljs.core.chunked_seq_QMARK_(inst_31620);
var state_31665__$1 = state_31665;
if(inst_31622){
var statearr_31688_33138 = state_31665__$1;
(statearr_31688_33138[(1)] = (16));

} else {
var statearr_31693_33139 = state_31665__$1;
(statearr_31693_33139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (22))){
var inst_31650 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
if(cljs.core.truth_(inst_31650)){
var statearr_31714_33140 = state_31665__$1;
(statearr_31714_33140[(1)] = (23));

} else {
var statearr_31715_33141 = state_31665__$1;
(statearr_31715_33141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (6))){
var inst_31644 = (state_31665[(7)]);
var inst_31596 = (state_31665[(8)]);
var inst_31646 = (state_31665[(11)]);
var inst_31644__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31596) : topic_fn.call(null,inst_31596));
var inst_31645 = cljs.core.deref(mults);
var inst_31646__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31645,inst_31644__$1);
var state_31665__$1 = (function (){var statearr_31716 = state_31665;
(statearr_31716[(7)] = inst_31644__$1);

(statearr_31716[(11)] = inst_31646__$1);

return statearr_31716;
})();
if(cljs.core.truth_(inst_31646__$1)){
var statearr_31717_33143 = state_31665__$1;
(statearr_31717_33143[(1)] = (19));

} else {
var statearr_31718_33144 = state_31665__$1;
(statearr_31718_33144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (25))){
var inst_31655 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31719_33146 = state_31665__$1;
(statearr_31719_33146[(2)] = inst_31655);

(statearr_31719_33146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (17))){
var inst_31620 = (state_31665[(10)]);
var inst_31629 = cljs.core.first(inst_31620);
var inst_31630 = cljs.core.async.muxch_STAR_(inst_31629);
var inst_31631 = cljs.core.async.close_BANG_(inst_31630);
var inst_31632 = cljs.core.next(inst_31620);
var inst_31606 = inst_31632;
var inst_31607 = null;
var inst_31608 = (0);
var inst_31609 = (0);
var state_31665__$1 = (function (){var statearr_31726 = state_31665;
(statearr_31726[(12)] = inst_31631);

(statearr_31726[(13)] = inst_31606);

(statearr_31726[(14)] = inst_31607);

(statearr_31726[(15)] = inst_31609);

(statearr_31726[(16)] = inst_31608);

return statearr_31726;
})();
var statearr_31727_33147 = state_31665__$1;
(statearr_31727_33147[(2)] = null);

(statearr_31727_33147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (3))){
var inst_31663 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31665__$1,inst_31663);
} else {
if((state_val_31666 === (12))){
var inst_31640 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31729_33148 = state_31665__$1;
(statearr_31729_33148[(2)] = inst_31640);

(statearr_31729_33148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (2))){
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31665__$1,(4),ch);
} else {
if((state_val_31666 === (23))){
var state_31665__$1 = state_31665;
var statearr_31730_33149 = state_31665__$1;
(statearr_31730_33149[(2)] = null);

(statearr_31730_33149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (19))){
var inst_31596 = (state_31665[(8)]);
var inst_31646 = (state_31665[(11)]);
var inst_31648 = cljs.core.async.muxch_STAR_(inst_31646);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31665__$1,(22),inst_31648,inst_31596);
} else {
if((state_val_31666 === (11))){
var inst_31606 = (state_31665[(13)]);
var inst_31620 = (state_31665[(10)]);
var inst_31620__$1 = cljs.core.seq(inst_31606);
var state_31665__$1 = (function (){var statearr_31731 = state_31665;
(statearr_31731[(10)] = inst_31620__$1);

return statearr_31731;
})();
if(inst_31620__$1){
var statearr_31732_33151 = state_31665__$1;
(statearr_31732_33151[(1)] = (13));

} else {
var statearr_31733_33152 = state_31665__$1;
(statearr_31733_33152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (9))){
var inst_31642 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31734_33153 = state_31665__$1;
(statearr_31734_33153[(2)] = inst_31642);

(statearr_31734_33153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (5))){
var inst_31603 = cljs.core.deref(mults);
var inst_31604 = cljs.core.vals(inst_31603);
var inst_31605 = cljs.core.seq(inst_31604);
var inst_31606 = inst_31605;
var inst_31607 = null;
var inst_31608 = (0);
var inst_31609 = (0);
var state_31665__$1 = (function (){var statearr_31735 = state_31665;
(statearr_31735[(13)] = inst_31606);

(statearr_31735[(14)] = inst_31607);

(statearr_31735[(15)] = inst_31609);

(statearr_31735[(16)] = inst_31608);

return statearr_31735;
})();
var statearr_31736_33154 = state_31665__$1;
(statearr_31736_33154[(2)] = null);

(statearr_31736_33154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (14))){
var state_31665__$1 = state_31665;
var statearr_31740_33155 = state_31665__$1;
(statearr_31740_33155[(2)] = null);

(statearr_31740_33155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (16))){
var inst_31620 = (state_31665[(10)]);
var inst_31624 = cljs.core.chunk_first(inst_31620);
var inst_31625 = cljs.core.chunk_rest(inst_31620);
var inst_31626 = cljs.core.count(inst_31624);
var inst_31606 = inst_31625;
var inst_31607 = inst_31624;
var inst_31608 = inst_31626;
var inst_31609 = (0);
var state_31665__$1 = (function (){var statearr_31742 = state_31665;
(statearr_31742[(13)] = inst_31606);

(statearr_31742[(14)] = inst_31607);

(statearr_31742[(15)] = inst_31609);

(statearr_31742[(16)] = inst_31608);

return statearr_31742;
})();
var statearr_31743_33156 = state_31665__$1;
(statearr_31743_33156[(2)] = null);

(statearr_31743_33156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (10))){
var inst_31606 = (state_31665[(13)]);
var inst_31607 = (state_31665[(14)]);
var inst_31609 = (state_31665[(15)]);
var inst_31608 = (state_31665[(16)]);
var inst_31614 = cljs.core._nth(inst_31607,inst_31609);
var inst_31615 = cljs.core.async.muxch_STAR_(inst_31614);
var inst_31616 = cljs.core.async.close_BANG_(inst_31615);
var inst_31617 = (inst_31609 + (1));
var tmp31737 = inst_31606;
var tmp31738 = inst_31607;
var tmp31739 = inst_31608;
var inst_31606__$1 = tmp31737;
var inst_31607__$1 = tmp31738;
var inst_31608__$1 = tmp31739;
var inst_31609__$1 = inst_31617;
var state_31665__$1 = (function (){var statearr_31744 = state_31665;
(statearr_31744[(13)] = inst_31606__$1);

(statearr_31744[(14)] = inst_31607__$1);

(statearr_31744[(17)] = inst_31616);

(statearr_31744[(15)] = inst_31609__$1);

(statearr_31744[(16)] = inst_31608__$1);

return statearr_31744;
})();
var statearr_31748_33157 = state_31665__$1;
(statearr_31748_33157[(2)] = null);

(statearr_31748_33157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (18))){
var inst_31635 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31749_33158 = state_31665__$1;
(statearr_31749_33158[(2)] = inst_31635);

(statearr_31749_33158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (8))){
var inst_31609 = (state_31665[(15)]);
var inst_31608 = (state_31665[(16)]);
var inst_31611 = (inst_31609 < inst_31608);
var inst_31612 = inst_31611;
var state_31665__$1 = state_31665;
if(cljs.core.truth_(inst_31612)){
var statearr_31750_33160 = state_31665__$1;
(statearr_31750_33160[(1)] = (10));

} else {
var statearr_31751_33161 = state_31665__$1;
(statearr_31751_33161[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_31755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31755[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_31755[(1)] = (1));

return statearr_31755;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_31665){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_31665);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e31756){var ex__29403__auto__ = e31756;
var statearr_31757_33164 = state_31665;
(statearr_31757_33164[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_31665[(4)]))){
var statearr_31761_33165 = state_31665;
(statearr_31761_33165[(1)] = cljs.core.first((state_31665[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_31665;
state_31665 = G__33166;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_31665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_31665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_31762 = f__29563__auto__();
(statearr_31762[(6)] = c__29562__auto___33126);

return statearr_31762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31775 = arguments.length;
switch (G__31775) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31796 = arguments.length;
switch (G__31796) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31803 = arguments.length;
switch (G__31803) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29562__auto___33172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_31851){
var state_val_31852 = (state_31851[(1)]);
if((state_val_31852 === (7))){
var state_31851__$1 = state_31851;
var statearr_31853_33173 = state_31851__$1;
(statearr_31853_33173[(2)] = null);

(statearr_31853_33173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (1))){
var state_31851__$1 = state_31851;
var statearr_31854_33174 = state_31851__$1;
(statearr_31854_33174[(2)] = null);

(statearr_31854_33174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (4))){
var inst_31810 = (state_31851[(7)]);
var inst_31811 = (state_31851[(8)]);
var inst_31813 = (inst_31811 < inst_31810);
var state_31851__$1 = state_31851;
if(cljs.core.truth_(inst_31813)){
var statearr_31859_33175 = state_31851__$1;
(statearr_31859_33175[(1)] = (6));

} else {
var statearr_31865_33176 = state_31851__$1;
(statearr_31865_33176[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (15))){
var inst_31837 = (state_31851[(9)]);
var inst_31842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31837);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31851__$1,(17),out,inst_31842);
} else {
if((state_val_31852 === (13))){
var inst_31837 = (state_31851[(9)]);
var inst_31837__$1 = (state_31851[(2)]);
var inst_31838 = cljs.core.some(cljs.core.nil_QMARK_,inst_31837__$1);
var state_31851__$1 = (function (){var statearr_31866 = state_31851;
(statearr_31866[(9)] = inst_31837__$1);

return statearr_31866;
})();
if(cljs.core.truth_(inst_31838)){
var statearr_31867_33177 = state_31851__$1;
(statearr_31867_33177[(1)] = (14));

} else {
var statearr_31868_33178 = state_31851__$1;
(statearr_31868_33178[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (6))){
var state_31851__$1 = state_31851;
var statearr_31873_33179 = state_31851__$1;
(statearr_31873_33179[(2)] = null);

(statearr_31873_33179[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (17))){
var inst_31844 = (state_31851[(2)]);
var state_31851__$1 = (function (){var statearr_31875 = state_31851;
(statearr_31875[(10)] = inst_31844);

return statearr_31875;
})();
var statearr_31876_33180 = state_31851__$1;
(statearr_31876_33180[(2)] = null);

(statearr_31876_33180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (3))){
var inst_31849 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31851__$1,inst_31849);
} else {
if((state_val_31852 === (12))){
var _ = (function (){var statearr_31877 = state_31851;
(statearr_31877[(4)] = cljs.core.rest((state_31851[(4)])));

return statearr_31877;
})();
var state_31851__$1 = state_31851;
var ex31874 = (state_31851__$1[(2)]);
var statearr_31878_33181 = state_31851__$1;
(statearr_31878_33181[(5)] = ex31874);


if((ex31874 instanceof Object)){
var statearr_31881_33182 = state_31851__$1;
(statearr_31881_33182[(1)] = (11));

(statearr_31881_33182[(5)] = null);

} else {
throw ex31874;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (2))){
var inst_31809 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31810 = cnt;
var inst_31811 = (0);
var state_31851__$1 = (function (){var statearr_31883 = state_31851;
(statearr_31883[(7)] = inst_31810);

(statearr_31883[(8)] = inst_31811);

(statearr_31883[(11)] = inst_31809);

return statearr_31883;
})();
var statearr_31885_33185 = state_31851__$1;
(statearr_31885_33185[(2)] = null);

(statearr_31885_33185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (11))){
var inst_31815 = (state_31851[(2)]);
var inst_31816 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31851__$1 = (function (){var statearr_31887 = state_31851;
(statearr_31887[(12)] = inst_31815);

return statearr_31887;
})();
var statearr_31888_33186 = state_31851__$1;
(statearr_31888_33186[(2)] = inst_31816);

(statearr_31888_33186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (9))){
var inst_31811 = (state_31851[(8)]);
var _ = (function (){var statearr_31889 = state_31851;
(statearr_31889[(4)] = cljs.core.cons((12),(state_31851[(4)])));

return statearr_31889;
})();
var inst_31823 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31811) : chs__$1.call(null,inst_31811));
var inst_31824 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31811) : done.call(null,inst_31811));
var inst_31825 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31823,inst_31824);
var ___$1 = (function (){var statearr_31891 = state_31851;
(statearr_31891[(4)] = cljs.core.rest((state_31851[(4)])));

return statearr_31891;
})();
var state_31851__$1 = state_31851;
var statearr_31893_33188 = state_31851__$1;
(statearr_31893_33188[(2)] = inst_31825);

(statearr_31893_33188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (5))){
var inst_31835 = (state_31851[(2)]);
var state_31851__$1 = (function (){var statearr_31894 = state_31851;
(statearr_31894[(13)] = inst_31835);

return statearr_31894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31851__$1,(13),dchan);
} else {
if((state_val_31852 === (14))){
var inst_31840 = cljs.core.async.close_BANG_(out);
var state_31851__$1 = state_31851;
var statearr_31895_33189 = state_31851__$1;
(statearr_31895_33189[(2)] = inst_31840);

(statearr_31895_33189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (16))){
var inst_31847 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31899_33190 = state_31851__$1;
(statearr_31899_33190[(2)] = inst_31847);

(statearr_31899_33190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (10))){
var inst_31811 = (state_31851[(8)]);
var inst_31828 = (state_31851[(2)]);
var inst_31829 = (inst_31811 + (1));
var inst_31811__$1 = inst_31829;
var state_31851__$1 = (function (){var statearr_31900 = state_31851;
(statearr_31900[(14)] = inst_31828);

(statearr_31900[(8)] = inst_31811__$1);

return statearr_31900;
})();
var statearr_31901_33191 = state_31851__$1;
(statearr_31901_33191[(2)] = null);

(statearr_31901_33191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (8))){
var inst_31833 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31905_33193 = state_31851__$1;
(statearr_31905_33193[(2)] = inst_31833);

(statearr_31905_33193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_31920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31920[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_31920[(1)] = (1));

return statearr_31920;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_31851){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_31851);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e31921){var ex__29403__auto__ = e31921;
var statearr_31922_33197 = state_31851;
(statearr_31922_33197[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_31851[(4)]))){
var statearr_31925_33198 = state_31851;
(statearr_31925_33198[(1)] = cljs.core.first((state_31851[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33199 = state_31851;
state_31851 = G__33199;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_31851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_31851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_31927 = f__29563__auto__();
(statearr_31927[(6)] = c__29562__auto___33172);

return statearr_31927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31930 = arguments.length;
switch (G__31930) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29562__auto___33201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_31962){
var state_val_31963 = (state_31962[(1)]);
if((state_val_31963 === (7))){
var inst_31942 = (state_31962[(7)]);
var inst_31941 = (state_31962[(8)]);
var inst_31941__$1 = (state_31962[(2)]);
var inst_31942__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31941__$1,(0),null);
var inst_31943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31941__$1,(1),null);
var inst_31944 = (inst_31942__$1 == null);
var state_31962__$1 = (function (){var statearr_31969 = state_31962;
(statearr_31969[(9)] = inst_31943);

(statearr_31969[(7)] = inst_31942__$1);

(statearr_31969[(8)] = inst_31941__$1);

return statearr_31969;
})();
if(cljs.core.truth_(inst_31944)){
var statearr_31970_33202 = state_31962__$1;
(statearr_31970_33202[(1)] = (8));

} else {
var statearr_31971_33203 = state_31962__$1;
(statearr_31971_33203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (1))){
var inst_31931 = cljs.core.vec(chs);
var inst_31932 = inst_31931;
var state_31962__$1 = (function (){var statearr_31972 = state_31962;
(statearr_31972[(10)] = inst_31932);

return statearr_31972;
})();
var statearr_31973_33204 = state_31962__$1;
(statearr_31973_33204[(2)] = null);

(statearr_31973_33204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (4))){
var inst_31932 = (state_31962[(10)]);
var state_31962__$1 = state_31962;
return cljs.core.async.ioc_alts_BANG_(state_31962__$1,(7),inst_31932);
} else {
if((state_val_31963 === (6))){
var inst_31958 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
var statearr_31976_33205 = state_31962__$1;
(statearr_31976_33205[(2)] = inst_31958);

(statearr_31976_33205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (3))){
var inst_31960 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31962__$1,inst_31960);
} else {
if((state_val_31963 === (2))){
var inst_31932 = (state_31962[(10)]);
var inst_31934 = cljs.core.count(inst_31932);
var inst_31935 = (inst_31934 > (0));
var state_31962__$1 = state_31962;
if(cljs.core.truth_(inst_31935)){
var statearr_31980_33206 = state_31962__$1;
(statearr_31980_33206[(1)] = (4));

} else {
var statearr_31981_33207 = state_31962__$1;
(statearr_31981_33207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (11))){
var inst_31932 = (state_31962[(10)]);
var inst_31951 = (state_31962[(2)]);
var tmp31977 = inst_31932;
var inst_31932__$1 = tmp31977;
var state_31962__$1 = (function (){var statearr_31982 = state_31962;
(statearr_31982[(10)] = inst_31932__$1);

(statearr_31982[(11)] = inst_31951);

return statearr_31982;
})();
var statearr_31983_33208 = state_31962__$1;
(statearr_31983_33208[(2)] = null);

(statearr_31983_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (9))){
var inst_31942 = (state_31962[(7)]);
var state_31962__$1 = state_31962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31962__$1,(11),out,inst_31942);
} else {
if((state_val_31963 === (5))){
var inst_31956 = cljs.core.async.close_BANG_(out);
var state_31962__$1 = state_31962;
var statearr_31984_33209 = state_31962__$1;
(statearr_31984_33209[(2)] = inst_31956);

(statearr_31984_33209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (10))){
var inst_31954 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
var statearr_31987_33210 = state_31962__$1;
(statearr_31987_33210[(2)] = inst_31954);

(statearr_31987_33210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (8))){
var inst_31943 = (state_31962[(9)]);
var inst_31942 = (state_31962[(7)]);
var inst_31932 = (state_31962[(10)]);
var inst_31941 = (state_31962[(8)]);
var inst_31946 = (function (){var cs = inst_31932;
var vec__31937 = inst_31941;
var v = inst_31942;
var c = inst_31943;
return (function (p1__31928_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31928_SHARP_);
});
})();
var inst_31947 = cljs.core.filterv(inst_31946,inst_31932);
var inst_31932__$1 = inst_31947;
var state_31962__$1 = (function (){var statearr_31990 = state_31962;
(statearr_31990[(10)] = inst_31932__$1);

return statearr_31990;
})();
var statearr_31991_33215 = state_31962__$1;
(statearr_31991_33215[(2)] = null);

(statearr_31991_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_31992 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31992[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_31992[(1)] = (1));

return statearr_31992;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_31962){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_31962);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e31993){var ex__29403__auto__ = e31993;
var statearr_31994_33221 = state_31962;
(statearr_31994_33221[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_31962[(4)]))){
var statearr_31997_33222 = state_31962;
(statearr_31997_33222[(1)] = cljs.core.first((state_31962[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33223 = state_31962;
state_31962 = G__33223;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_31962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_31962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_32003 = f__29563__auto__();
(statearr_32003[(6)] = c__29562__auto___33201);

return statearr_32003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32006 = arguments.length;
switch (G__32006) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29562__auto___33228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_32033){
var state_val_32034 = (state_32033[(1)]);
if((state_val_32034 === (7))){
var inst_32015 = (state_32033[(7)]);
var inst_32015__$1 = (state_32033[(2)]);
var inst_32016 = (inst_32015__$1 == null);
var inst_32017 = cljs.core.not(inst_32016);
var state_32033__$1 = (function (){var statearr_32037 = state_32033;
(statearr_32037[(7)] = inst_32015__$1);

return statearr_32037;
})();
if(inst_32017){
var statearr_32038_33229 = state_32033__$1;
(statearr_32038_33229[(1)] = (8));

} else {
var statearr_32039_33230 = state_32033__$1;
(statearr_32039_33230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (1))){
var inst_32010 = (0);
var state_32033__$1 = (function (){var statearr_32040 = state_32033;
(statearr_32040[(8)] = inst_32010);

return statearr_32040;
})();
var statearr_32041_33231 = state_32033__$1;
(statearr_32041_33231[(2)] = null);

(statearr_32041_33231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (4))){
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32033__$1,(7),ch);
} else {
if((state_val_32034 === (6))){
var inst_32028 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32042_33235 = state_32033__$1;
(statearr_32042_33235[(2)] = inst_32028);

(statearr_32042_33235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (3))){
var inst_32030 = (state_32033[(2)]);
var inst_32031 = cljs.core.async.close_BANG_(out);
var state_32033__$1 = (function (){var statearr_32047 = state_32033;
(statearr_32047[(9)] = inst_32030);

return statearr_32047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32033__$1,inst_32031);
} else {
if((state_val_32034 === (2))){
var inst_32010 = (state_32033[(8)]);
var inst_32012 = (inst_32010 < n);
var state_32033__$1 = state_32033;
if(cljs.core.truth_(inst_32012)){
var statearr_32048_33236 = state_32033__$1;
(statearr_32048_33236[(1)] = (4));

} else {
var statearr_32049_33237 = state_32033__$1;
(statearr_32049_33237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (11))){
var inst_32010 = (state_32033[(8)]);
var inst_32020 = (state_32033[(2)]);
var inst_32021 = (inst_32010 + (1));
var inst_32010__$1 = inst_32021;
var state_32033__$1 = (function (){var statearr_32050 = state_32033;
(statearr_32050[(10)] = inst_32020);

(statearr_32050[(8)] = inst_32010__$1);

return statearr_32050;
})();
var statearr_32051_33238 = state_32033__$1;
(statearr_32051_33238[(2)] = null);

(statearr_32051_33238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (9))){
var state_32033__$1 = state_32033;
var statearr_32052_33301 = state_32033__$1;
(statearr_32052_33301[(2)] = null);

(statearr_32052_33301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (5))){
var state_32033__$1 = state_32033;
var statearr_32053_33302 = state_32033__$1;
(statearr_32053_33302[(2)] = null);

(statearr_32053_33302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (10))){
var inst_32025 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32054_33307 = state_32033__$1;
(statearr_32054_33307[(2)] = inst_32025);

(statearr_32054_33307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (8))){
var inst_32015 = (state_32033[(7)]);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32033__$1,(11),out,inst_32015);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_32063 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32063[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_32063[(1)] = (1));

return statearr_32063;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_32033){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_32033);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e32065){var ex__29403__auto__ = e32065;
var statearr_32066_33308 = state_32033;
(statearr_32066_33308[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_32033[(4)]))){
var statearr_32067_33310 = state_32033;
(statearr_32067_33310[(1)] = cljs.core.first((state_32033[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33311 = state_32033;
state_32033 = G__33311;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_32033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_32033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_32069 = f__29563__auto__();
(statearr_32069[(6)] = c__29562__auto___33228);

return statearr_32069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32076 = (function (f,ch,meta32077){
this.f = f;
this.ch = ch;
this.meta32077 = meta32077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32078,meta32077__$1){
var self__ = this;
var _32078__$1 = this;
return (new cljs.core.async.t_cljs$core$async32076(self__.f,self__.ch,meta32077__$1));
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32078){
var self__ = this;
var _32078__$1 = this;
return self__.meta32077;
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32095 = (function (f,ch,meta32077,_,fn1,meta32096){
this.f = f;
this.ch = ch;
this.meta32077 = meta32077;
this._ = _;
this.fn1 = fn1;
this.meta32096 = meta32096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32097,meta32096__$1){
var self__ = this;
var _32097__$1 = this;
return (new cljs.core.async.t_cljs$core$async32095(self__.f,self__.ch,self__.meta32077,self__._,self__.fn1,meta32096__$1));
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32097){
var self__ = this;
var _32097__$1 = this;
return self__.meta32096;
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32071_SHARP_){
var G__32129 = (((p1__32071_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32071_SHARP_) : self__.f.call(null,p1__32071_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32129) : f1.call(null,G__32129));
});
}));

(cljs.core.async.t_cljs$core$async32095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32077","meta32077",-1464118207,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32076","cljs.core.async/t_cljs$core$async32076",1885371687,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32096","meta32096",-651993443,null)], null);
}));

(cljs.core.async.t_cljs$core$async32095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32095");

(cljs.core.async.t_cljs$core$async32095.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32095.
 */
cljs.core.async.__GT_t_cljs$core$async32095 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32095(f__$1,ch__$1,meta32077__$1,___$2,fn1__$1,meta32096){
return (new cljs.core.async.t_cljs$core$async32095(f__$1,ch__$1,meta32077__$1,___$2,fn1__$1,meta32096));
});

}

return (new cljs.core.async.t_cljs$core$async32095(self__.f,self__.ch,self__.meta32077,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32145 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32145) : self__.f.call(null,G__32145));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32077","meta32077",-1464118207,null)], null);
}));

(cljs.core.async.t_cljs$core$async32076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32076");

(cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32076.
 */
cljs.core.async.__GT_t_cljs$core$async32076 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32076(f__$1,ch__$1,meta32077){
return (new cljs.core.async.t_cljs$core$async32076(f__$1,ch__$1,meta32077));
});

}

return (new cljs.core.async.t_cljs$core$async32076(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32154 = (function (f,ch,meta32155){
this.f = f;
this.ch = ch;
this.meta32155 = meta32155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32156,meta32155__$1){
var self__ = this;
var _32156__$1 = this;
return (new cljs.core.async.t_cljs$core$async32154(self__.f,self__.ch,meta32155__$1));
}));

(cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32156){
var self__ = this;
var _32156__$1 = this;
return self__.meta32155;
}));

(cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32155","meta32155",937435878,null)], null);
}));

(cljs.core.async.t_cljs$core$async32154.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32154");

(cljs.core.async.t_cljs$core$async32154.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32154");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32154.
 */
cljs.core.async.__GT_t_cljs$core$async32154 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32154(f__$1,ch__$1,meta32155){
return (new cljs.core.async.t_cljs$core$async32154(f__$1,ch__$1,meta32155));
});

}

return (new cljs.core.async.t_cljs$core$async32154(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32215 = (function (p,ch,meta32216){
this.p = p;
this.ch = ch;
this.meta32216 = meta32216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32217,meta32216__$1){
var self__ = this;
var _32217__$1 = this;
return (new cljs.core.async.t_cljs$core$async32215(self__.p,self__.ch,meta32216__$1));
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32217){
var self__ = this;
var _32217__$1 = this;
return self__.meta32216;
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32216","meta32216",-1757355173,null)], null);
}));

(cljs.core.async.t_cljs$core$async32215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32215");

(cljs.core.async.t_cljs$core$async32215.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32215.
 */
cljs.core.async.__GT_t_cljs$core$async32215 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32215(p__$1,ch__$1,meta32216){
return (new cljs.core.async.t_cljs$core$async32215(p__$1,ch__$1,meta32216));
});

}

return (new cljs.core.async.t_cljs$core$async32215(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32280 = arguments.length;
switch (G__32280) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29562__auto___33323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_32324){
var state_val_32325 = (state_32324[(1)]);
if((state_val_32325 === (7))){
var inst_32320 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
var statearr_32334_33324 = state_32324__$1;
(statearr_32334_33324[(2)] = inst_32320);

(statearr_32334_33324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (1))){
var state_32324__$1 = state_32324;
var statearr_32342_33325 = state_32324__$1;
(statearr_32342_33325[(2)] = null);

(statearr_32342_33325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (4))){
var inst_32302 = (state_32324[(7)]);
var inst_32302__$1 = (state_32324[(2)]);
var inst_32303 = (inst_32302__$1 == null);
var state_32324__$1 = (function (){var statearr_32347 = state_32324;
(statearr_32347[(7)] = inst_32302__$1);

return statearr_32347;
})();
if(cljs.core.truth_(inst_32303)){
var statearr_32350_33326 = state_32324__$1;
(statearr_32350_33326[(1)] = (5));

} else {
var statearr_32351_33327 = state_32324__$1;
(statearr_32351_33327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (6))){
var inst_32302 = (state_32324[(7)]);
var inst_32311 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32302) : p.call(null,inst_32302));
var state_32324__$1 = state_32324;
if(cljs.core.truth_(inst_32311)){
var statearr_32352_33331 = state_32324__$1;
(statearr_32352_33331[(1)] = (8));

} else {
var statearr_32353_33332 = state_32324__$1;
(statearr_32353_33332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (3))){
var inst_32322 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32324__$1,inst_32322);
} else {
if((state_val_32325 === (2))){
var state_32324__$1 = state_32324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32324__$1,(4),ch);
} else {
if((state_val_32325 === (11))){
var inst_32314 = (state_32324[(2)]);
var state_32324__$1 = state_32324;
var statearr_32363_33334 = state_32324__$1;
(statearr_32363_33334[(2)] = inst_32314);

(statearr_32363_33334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (9))){
var state_32324__$1 = state_32324;
var statearr_32366_33335 = state_32324__$1;
(statearr_32366_33335[(2)] = null);

(statearr_32366_33335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (5))){
var inst_32309 = cljs.core.async.close_BANG_(out);
var state_32324__$1 = state_32324;
var statearr_32367_33339 = state_32324__$1;
(statearr_32367_33339[(2)] = inst_32309);

(statearr_32367_33339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (10))){
var inst_32317 = (state_32324[(2)]);
var state_32324__$1 = (function (){var statearr_32368 = state_32324;
(statearr_32368[(8)] = inst_32317);

return statearr_32368;
})();
var statearr_32370_33340 = state_32324__$1;
(statearr_32370_33340[(2)] = null);

(statearr_32370_33340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (8))){
var inst_32302 = (state_32324[(7)]);
var state_32324__$1 = state_32324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32324__$1,(11),out,inst_32302);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_32371 = [null,null,null,null,null,null,null,null,null];
(statearr_32371[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_32371[(1)] = (1));

return statearr_32371;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_32324){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_32324);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e32372){var ex__29403__auto__ = e32372;
var statearr_32373_33346 = state_32324;
(statearr_32373_33346[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_32324[(4)]))){
var statearr_32374_33347 = state_32324;
(statearr_32374_33347[(1)] = cljs.core.first((state_32324[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33348 = state_32324;
state_32324 = G__33348;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_32324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_32324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_32375 = f__29563__auto__();
(statearr_32375[(6)] = c__29562__auto___33323);

return statearr_32375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32377 = arguments.length;
switch (G__32377) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_32453){
var state_val_32454 = (state_32453[(1)]);
if((state_val_32454 === (7))){
var inst_32449 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
var statearr_32455_33355 = state_32453__$1;
(statearr_32455_33355[(2)] = inst_32449);

(statearr_32455_33355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (20))){
var inst_32419 = (state_32453[(7)]);
var inst_32430 = (state_32453[(2)]);
var inst_32431 = cljs.core.next(inst_32419);
var inst_32405 = inst_32431;
var inst_32406 = null;
var inst_32407 = (0);
var inst_32408 = (0);
var state_32453__$1 = (function (){var statearr_32456 = state_32453;
(statearr_32456[(8)] = inst_32406);

(statearr_32456[(9)] = inst_32430);

(statearr_32456[(10)] = inst_32405);

(statearr_32456[(11)] = inst_32407);

(statearr_32456[(12)] = inst_32408);

return statearr_32456;
})();
var statearr_32457_33359 = state_32453__$1;
(statearr_32457_33359[(2)] = null);

(statearr_32457_33359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (1))){
var state_32453__$1 = state_32453;
var statearr_32458_33361 = state_32453__$1;
(statearr_32458_33361[(2)] = null);

(statearr_32458_33361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (4))){
var inst_32390 = (state_32453[(13)]);
var inst_32390__$1 = (state_32453[(2)]);
var inst_32391 = (inst_32390__$1 == null);
var state_32453__$1 = (function (){var statearr_32459 = state_32453;
(statearr_32459[(13)] = inst_32390__$1);

return statearr_32459;
})();
if(cljs.core.truth_(inst_32391)){
var statearr_32460_33363 = state_32453__$1;
(statearr_32460_33363[(1)] = (5));

} else {
var statearr_32461_33364 = state_32453__$1;
(statearr_32461_33364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (15))){
var state_32453__$1 = state_32453;
var statearr_32465_33365 = state_32453__$1;
(statearr_32465_33365[(2)] = null);

(statearr_32465_33365[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (21))){
var state_32453__$1 = state_32453;
var statearr_32466_33366 = state_32453__$1;
(statearr_32466_33366[(2)] = null);

(statearr_32466_33366[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (13))){
var inst_32406 = (state_32453[(8)]);
var inst_32405 = (state_32453[(10)]);
var inst_32407 = (state_32453[(11)]);
var inst_32408 = (state_32453[(12)]);
var inst_32415 = (state_32453[(2)]);
var inst_32416 = (inst_32408 + (1));
var tmp32462 = inst_32406;
var tmp32463 = inst_32405;
var tmp32464 = inst_32407;
var inst_32405__$1 = tmp32463;
var inst_32406__$1 = tmp32462;
var inst_32407__$1 = tmp32464;
var inst_32408__$1 = inst_32416;
var state_32453__$1 = (function (){var statearr_32467 = state_32453;
(statearr_32467[(8)] = inst_32406__$1);

(statearr_32467[(10)] = inst_32405__$1);

(statearr_32467[(14)] = inst_32415);

(statearr_32467[(11)] = inst_32407__$1);

(statearr_32467[(12)] = inst_32408__$1);

return statearr_32467;
})();
var statearr_32468_33370 = state_32453__$1;
(statearr_32468_33370[(2)] = null);

(statearr_32468_33370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (22))){
var state_32453__$1 = state_32453;
var statearr_32469_33371 = state_32453__$1;
(statearr_32469_33371[(2)] = null);

(statearr_32469_33371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (6))){
var inst_32390 = (state_32453[(13)]);
var inst_32403 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32390) : f.call(null,inst_32390));
var inst_32404 = cljs.core.seq(inst_32403);
var inst_32405 = inst_32404;
var inst_32406 = null;
var inst_32407 = (0);
var inst_32408 = (0);
var state_32453__$1 = (function (){var statearr_32470 = state_32453;
(statearr_32470[(8)] = inst_32406);

(statearr_32470[(10)] = inst_32405);

(statearr_32470[(11)] = inst_32407);

(statearr_32470[(12)] = inst_32408);

return statearr_32470;
})();
var statearr_32471_33374 = state_32453__$1;
(statearr_32471_33374[(2)] = null);

(statearr_32471_33374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (17))){
var inst_32419 = (state_32453[(7)]);
var inst_32423 = cljs.core.chunk_first(inst_32419);
var inst_32424 = cljs.core.chunk_rest(inst_32419);
var inst_32425 = cljs.core.count(inst_32423);
var inst_32405 = inst_32424;
var inst_32406 = inst_32423;
var inst_32407 = inst_32425;
var inst_32408 = (0);
var state_32453__$1 = (function (){var statearr_32472 = state_32453;
(statearr_32472[(8)] = inst_32406);

(statearr_32472[(10)] = inst_32405);

(statearr_32472[(11)] = inst_32407);

(statearr_32472[(12)] = inst_32408);

return statearr_32472;
})();
var statearr_32473_33375 = state_32453__$1;
(statearr_32473_33375[(2)] = null);

(statearr_32473_33375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (3))){
var inst_32451 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32453__$1,inst_32451);
} else {
if((state_val_32454 === (12))){
var inst_32439 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
var statearr_32474_33376 = state_32453__$1;
(statearr_32474_33376[(2)] = inst_32439);

(statearr_32474_33376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (2))){
var state_32453__$1 = state_32453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32453__$1,(4),in$);
} else {
if((state_val_32454 === (23))){
var inst_32447 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
var statearr_32475_33378 = state_32453__$1;
(statearr_32475_33378[(2)] = inst_32447);

(statearr_32475_33378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (19))){
var inst_32434 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
var statearr_32476_33379 = state_32453__$1;
(statearr_32476_33379[(2)] = inst_32434);

(statearr_32476_33379[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (11))){
var inst_32405 = (state_32453[(10)]);
var inst_32419 = (state_32453[(7)]);
var inst_32419__$1 = cljs.core.seq(inst_32405);
var state_32453__$1 = (function (){var statearr_32477 = state_32453;
(statearr_32477[(7)] = inst_32419__$1);

return statearr_32477;
})();
if(inst_32419__$1){
var statearr_32478_33383 = state_32453__$1;
(statearr_32478_33383[(1)] = (14));

} else {
var statearr_32479_33384 = state_32453__$1;
(statearr_32479_33384[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (9))){
var inst_32441 = (state_32453[(2)]);
var inst_32442 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32453__$1 = (function (){var statearr_32480 = state_32453;
(statearr_32480[(15)] = inst_32441);

return statearr_32480;
})();
if(cljs.core.truth_(inst_32442)){
var statearr_32481_33385 = state_32453__$1;
(statearr_32481_33385[(1)] = (21));

} else {
var statearr_32482_33386 = state_32453__$1;
(statearr_32482_33386[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (5))){
var inst_32393 = cljs.core.async.close_BANG_(out);
var state_32453__$1 = state_32453;
var statearr_32483_33387 = state_32453__$1;
(statearr_32483_33387[(2)] = inst_32393);

(statearr_32483_33387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (14))){
var inst_32419 = (state_32453[(7)]);
var inst_32421 = cljs.core.chunked_seq_QMARK_(inst_32419);
var state_32453__$1 = state_32453;
if(inst_32421){
var statearr_32484_33391 = state_32453__$1;
(statearr_32484_33391[(1)] = (17));

} else {
var statearr_32485_33392 = state_32453__$1;
(statearr_32485_33392[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (16))){
var inst_32437 = (state_32453[(2)]);
var state_32453__$1 = state_32453;
var statearr_32486_33393 = state_32453__$1;
(statearr_32486_33393[(2)] = inst_32437);

(statearr_32486_33393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32454 === (10))){
var inst_32406 = (state_32453[(8)]);
var inst_32408 = (state_32453[(12)]);
var inst_32413 = cljs.core._nth(inst_32406,inst_32408);
var state_32453__$1 = state_32453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32453__$1,(13),out,inst_32413);
} else {
if((state_val_32454 === (18))){
var inst_32419 = (state_32453[(7)]);
var inst_32428 = cljs.core.first(inst_32419);
var state_32453__$1 = state_32453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32453__$1,(20),out,inst_32428);
} else {
if((state_val_32454 === (8))){
var inst_32407 = (state_32453[(11)]);
var inst_32408 = (state_32453[(12)]);
var inst_32410 = (inst_32408 < inst_32407);
var inst_32411 = inst_32410;
var state_32453__$1 = state_32453;
if(cljs.core.truth_(inst_32411)){
var statearr_32487_33394 = state_32453__$1;
(statearr_32487_33394[(1)] = (10));

} else {
var statearr_32488_33395 = state_32453__$1;
(statearr_32488_33395[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29400__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29400__auto____0 = (function (){
var statearr_32489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32489[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29400__auto__);

(statearr_32489[(1)] = (1));

return statearr_32489;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29400__auto____1 = (function (state_32453){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_32453);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e32490){var ex__29403__auto__ = e32490;
var statearr_32491_33396 = state_32453;
(statearr_32491_33396[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_32453[(4)]))){
var statearr_32492_33397 = state_32453;
(statearr_32492_33397[(1)] = cljs.core.first((state_32453[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33398 = state_32453;
state_32453 = G__33398;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29400__auto__ = function(state_32453){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29400__auto____1.call(this,state_32453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29400__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29400__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_32493 = f__29563__auto__();
(statearr_32493[(6)] = c__29562__auto__);

return statearr_32493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));

return c__29562__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32495 = arguments.length;
switch (G__32495) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32497 = arguments.length;
switch (G__32497) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32499 = arguments.length;
switch (G__32499) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29562__auto___33404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_32523){
var state_val_32524 = (state_32523[(1)]);
if((state_val_32524 === (7))){
var inst_32518 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32525_33405 = state_32523__$1;
(statearr_32525_33405[(2)] = inst_32518);

(statearr_32525_33405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (1))){
var inst_32500 = null;
var state_32523__$1 = (function (){var statearr_32526 = state_32523;
(statearr_32526[(7)] = inst_32500);

return statearr_32526;
})();
var statearr_32527_33406 = state_32523__$1;
(statearr_32527_33406[(2)] = null);

(statearr_32527_33406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (4))){
var inst_32503 = (state_32523[(8)]);
var inst_32503__$1 = (state_32523[(2)]);
var inst_32504 = (inst_32503__$1 == null);
var inst_32505 = cljs.core.not(inst_32504);
var state_32523__$1 = (function (){var statearr_32528 = state_32523;
(statearr_32528[(8)] = inst_32503__$1);

return statearr_32528;
})();
if(inst_32505){
var statearr_32529_33414 = state_32523__$1;
(statearr_32529_33414[(1)] = (5));

} else {
var statearr_32530_33415 = state_32523__$1;
(statearr_32530_33415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (6))){
var state_32523__$1 = state_32523;
var statearr_32531_33416 = state_32523__$1;
(statearr_32531_33416[(2)] = null);

(statearr_32531_33416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (3))){
var inst_32520 = (state_32523[(2)]);
var inst_32521 = cljs.core.async.close_BANG_(out);
var state_32523__$1 = (function (){var statearr_32532 = state_32523;
(statearr_32532[(9)] = inst_32520);

return statearr_32532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32523__$1,inst_32521);
} else {
if((state_val_32524 === (2))){
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32523__$1,(4),ch);
} else {
if((state_val_32524 === (11))){
var inst_32503 = (state_32523[(8)]);
var inst_32512 = (state_32523[(2)]);
var inst_32500 = inst_32503;
var state_32523__$1 = (function (){var statearr_32533 = state_32523;
(statearr_32533[(7)] = inst_32500);

(statearr_32533[(10)] = inst_32512);

return statearr_32533;
})();
var statearr_32534_33418 = state_32523__$1;
(statearr_32534_33418[(2)] = null);

(statearr_32534_33418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (9))){
var inst_32503 = (state_32523[(8)]);
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32523__$1,(11),out,inst_32503);
} else {
if((state_val_32524 === (5))){
var inst_32503 = (state_32523[(8)]);
var inst_32500 = (state_32523[(7)]);
var inst_32507 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32503,inst_32500);
var state_32523__$1 = state_32523;
if(inst_32507){
var statearr_32536_33419 = state_32523__$1;
(statearr_32536_33419[(1)] = (8));

} else {
var statearr_32537_33420 = state_32523__$1;
(statearr_32537_33420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (10))){
var inst_32515 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32538_33421 = state_32523__$1;
(statearr_32538_33421[(2)] = inst_32515);

(statearr_32538_33421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (8))){
var inst_32500 = (state_32523[(7)]);
var tmp32535 = inst_32500;
var inst_32500__$1 = tmp32535;
var state_32523__$1 = (function (){var statearr_32539 = state_32523;
(statearr_32539[(7)] = inst_32500__$1);

return statearr_32539;
})();
var statearr_32540_33422 = state_32523__$1;
(statearr_32540_33422[(2)] = null);

(statearr_32540_33422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_32541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32541[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_32541[(1)] = (1));

return statearr_32541;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_32523){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_32523);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e32542){var ex__29403__auto__ = e32542;
var statearr_32543_33425 = state_32523;
(statearr_32543_33425[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_32523[(4)]))){
var statearr_32544_33426 = state_32523;
(statearr_32544_33426[(1)] = cljs.core.first((state_32523[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33428 = state_32523;
state_32523 = G__33428;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_32523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_32523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_32545 = f__29563__auto__();
(statearr_32545[(6)] = c__29562__auto___33404);

return statearr_32545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32547 = arguments.length;
switch (G__32547) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29562__auto___33437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_32585){
var state_val_32586 = (state_32585[(1)]);
if((state_val_32586 === (7))){
var inst_32581 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32587_33441 = state_32585__$1;
(statearr_32587_33441[(2)] = inst_32581);

(statearr_32587_33441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (1))){
var inst_32548 = (new Array(n));
var inst_32549 = inst_32548;
var inst_32550 = (0);
var state_32585__$1 = (function (){var statearr_32588 = state_32585;
(statearr_32588[(7)] = inst_32550);

(statearr_32588[(8)] = inst_32549);

return statearr_32588;
})();
var statearr_32589_33443 = state_32585__$1;
(statearr_32589_33443[(2)] = null);

(statearr_32589_33443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (4))){
var inst_32553 = (state_32585[(9)]);
var inst_32553__$1 = (state_32585[(2)]);
var inst_32554 = (inst_32553__$1 == null);
var inst_32555 = cljs.core.not(inst_32554);
var state_32585__$1 = (function (){var statearr_32590 = state_32585;
(statearr_32590[(9)] = inst_32553__$1);

return statearr_32590;
})();
if(inst_32555){
var statearr_32591_33444 = state_32585__$1;
(statearr_32591_33444[(1)] = (5));

} else {
var statearr_32592_33446 = state_32585__$1;
(statearr_32592_33446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (15))){
var inst_32575 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32594_33448 = state_32585__$1;
(statearr_32594_33448[(2)] = inst_32575);

(statearr_32594_33448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (13))){
var state_32585__$1 = state_32585;
var statearr_32595_33450 = state_32585__$1;
(statearr_32595_33450[(2)] = null);

(statearr_32595_33450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (6))){
var inst_32550 = (state_32585[(7)]);
var inst_32571 = (inst_32550 > (0));
var state_32585__$1 = state_32585;
if(cljs.core.truth_(inst_32571)){
var statearr_32596_33451 = state_32585__$1;
(statearr_32596_33451[(1)] = (12));

} else {
var statearr_32597_33453 = state_32585__$1;
(statearr_32597_33453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (3))){
var inst_32583 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32585__$1,inst_32583);
} else {
if((state_val_32586 === (12))){
var inst_32549 = (state_32585[(8)]);
var inst_32573 = cljs.core.vec(inst_32549);
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32585__$1,(15),out,inst_32573);
} else {
if((state_val_32586 === (2))){
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32585__$1,(4),ch);
} else {
if((state_val_32586 === (11))){
var inst_32565 = (state_32585[(2)]);
var inst_32566 = (new Array(n));
var inst_32549 = inst_32566;
var inst_32550 = (0);
var state_32585__$1 = (function (){var statearr_32599 = state_32585;
(statearr_32599[(7)] = inst_32550);

(statearr_32599[(8)] = inst_32549);

(statearr_32599[(10)] = inst_32565);

return statearr_32599;
})();
var statearr_32600_33455 = state_32585__$1;
(statearr_32600_33455[(2)] = null);

(statearr_32600_33455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (9))){
var inst_32549 = (state_32585[(8)]);
var inst_32563 = cljs.core.vec(inst_32549);
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32585__$1,(11),out,inst_32563);
} else {
if((state_val_32586 === (5))){
var inst_32550 = (state_32585[(7)]);
var inst_32549 = (state_32585[(8)]);
var inst_32553 = (state_32585[(9)]);
var inst_32558 = (state_32585[(11)]);
var inst_32557 = (inst_32549[inst_32550] = inst_32553);
var inst_32558__$1 = (inst_32550 + (1));
var inst_32559 = (inst_32558__$1 < n);
var state_32585__$1 = (function (){var statearr_32601 = state_32585;
(statearr_32601[(12)] = inst_32557);

(statearr_32601[(11)] = inst_32558__$1);

return statearr_32601;
})();
if(cljs.core.truth_(inst_32559)){
var statearr_32602_33460 = state_32585__$1;
(statearr_32602_33460[(1)] = (8));

} else {
var statearr_32603_33461 = state_32585__$1;
(statearr_32603_33461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (14))){
var inst_32578 = (state_32585[(2)]);
var inst_32579 = cljs.core.async.close_BANG_(out);
var state_32585__$1 = (function (){var statearr_32605 = state_32585;
(statearr_32605[(13)] = inst_32578);

return statearr_32605;
})();
var statearr_32606_33490 = state_32585__$1;
(statearr_32606_33490[(2)] = inst_32579);

(statearr_32606_33490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (10))){
var inst_32569 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32607_33492 = state_32585__$1;
(statearr_32607_33492[(2)] = inst_32569);

(statearr_32607_33492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (8))){
var inst_32549 = (state_32585[(8)]);
var inst_32558 = (state_32585[(11)]);
var tmp32604 = inst_32549;
var inst_32549__$1 = tmp32604;
var inst_32550 = inst_32558;
var state_32585__$1 = (function (){var statearr_32608 = state_32585;
(statearr_32608[(7)] = inst_32550);

(statearr_32608[(8)] = inst_32549__$1);

return statearr_32608;
})();
var statearr_32609_33495 = state_32585__$1;
(statearr_32609_33495[(2)] = null);

(statearr_32609_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_32610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32610[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_32610[(1)] = (1));

return statearr_32610;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_32585){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_32585);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e32612){var ex__29403__auto__ = e32612;
var statearr_32613_33498 = state_32585;
(statearr_32613_33498[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_32585[(4)]))){
var statearr_32614_33499 = state_32585;
(statearr_32614_33499[(1)] = cljs.core.first((state_32585[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33502 = state_32585;
state_32585 = G__33502;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_32585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_32585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_32616 = f__29563__auto__();
(statearr_32616[(6)] = c__29562__auto___33437);

return statearr_32616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32620 = arguments.length;
switch (G__32620) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29562__auto___33510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29563__auto__ = (function (){var switch__29399__auto__ = (function (state_32666){
var state_val_32667 = (state_32666[(1)]);
if((state_val_32667 === (7))){
var inst_32662 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32668_33512 = state_32666__$1;
(statearr_32668_33512[(2)] = inst_32662);

(statearr_32668_33512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (1))){
var inst_32621 = [];
var inst_32622 = inst_32621;
var inst_32623 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32666__$1 = (function (){var statearr_32669 = state_32666;
(statearr_32669[(7)] = inst_32623);

(statearr_32669[(8)] = inst_32622);

return statearr_32669;
})();
var statearr_32670_33514 = state_32666__$1;
(statearr_32670_33514[(2)] = null);

(statearr_32670_33514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (4))){
var inst_32626 = (state_32666[(9)]);
var inst_32626__$1 = (state_32666[(2)]);
var inst_32628 = (inst_32626__$1 == null);
var inst_32629 = cljs.core.not(inst_32628);
var state_32666__$1 = (function (){var statearr_32672 = state_32666;
(statearr_32672[(9)] = inst_32626__$1);

return statearr_32672;
})();
if(inst_32629){
var statearr_32673_33517 = state_32666__$1;
(statearr_32673_33517[(1)] = (5));

} else {
var statearr_32674_33518 = state_32666__$1;
(statearr_32674_33518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (15))){
var inst_32622 = (state_32666[(8)]);
var inst_32654 = cljs.core.vec(inst_32622);
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32666__$1,(18),out,inst_32654);
} else {
if((state_val_32667 === (13))){
var inst_32649 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32675_33520 = state_32666__$1;
(statearr_32675_33520[(2)] = inst_32649);

(statearr_32675_33520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (6))){
var inst_32622 = (state_32666[(8)]);
var inst_32651 = inst_32622.length;
var inst_32652 = (inst_32651 > (0));
var state_32666__$1 = state_32666;
if(cljs.core.truth_(inst_32652)){
var statearr_32676_33522 = state_32666__$1;
(statearr_32676_33522[(1)] = (15));

} else {
var statearr_32677_33523 = state_32666__$1;
(statearr_32677_33523[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (17))){
var inst_32659 = (state_32666[(2)]);
var inst_32660 = cljs.core.async.close_BANG_(out);
var state_32666__$1 = (function (){var statearr_32678 = state_32666;
(statearr_32678[(10)] = inst_32659);

return statearr_32678;
})();
var statearr_32680_33525 = state_32666__$1;
(statearr_32680_33525[(2)] = inst_32660);

(statearr_32680_33525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (3))){
var inst_32664 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32666__$1,inst_32664);
} else {
if((state_val_32667 === (12))){
var inst_32622 = (state_32666[(8)]);
var inst_32642 = cljs.core.vec(inst_32622);
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32666__$1,(14),out,inst_32642);
} else {
if((state_val_32667 === (2))){
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32666__$1,(4),ch);
} else {
if((state_val_32667 === (11))){
var inst_32631 = (state_32666[(11)]);
var inst_32626 = (state_32666[(9)]);
var inst_32622 = (state_32666[(8)]);
var inst_32639 = inst_32622.push(inst_32626);
var tmp32681 = inst_32622;
var inst_32622__$1 = tmp32681;
var inst_32623 = inst_32631;
var state_32666__$1 = (function (){var statearr_32682 = state_32666;
(statearr_32682[(12)] = inst_32639);

(statearr_32682[(7)] = inst_32623);

(statearr_32682[(8)] = inst_32622__$1);

return statearr_32682;
})();
var statearr_32683_33528 = state_32666__$1;
(statearr_32683_33528[(2)] = null);

(statearr_32683_33528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (9))){
var inst_32623 = (state_32666[(7)]);
var inst_32635 = cljs.core.keyword_identical_QMARK_(inst_32623,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32666__$1 = state_32666;
var statearr_32684_33529 = state_32666__$1;
(statearr_32684_33529[(2)] = inst_32635);

(statearr_32684_33529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (5))){
var inst_32631 = (state_32666[(11)]);
var inst_32626 = (state_32666[(9)]);
var inst_32632 = (state_32666[(13)]);
var inst_32623 = (state_32666[(7)]);
var inst_32631__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32626) : f.call(null,inst_32626));
var inst_32632__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32631__$1,inst_32623);
var state_32666__$1 = (function (){var statearr_32686 = state_32666;
(statearr_32686[(11)] = inst_32631__$1);

(statearr_32686[(13)] = inst_32632__$1);

return statearr_32686;
})();
if(inst_32632__$1){
var statearr_32687_33530 = state_32666__$1;
(statearr_32687_33530[(1)] = (8));

} else {
var statearr_32688_33531 = state_32666__$1;
(statearr_32688_33531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (14))){
var inst_32631 = (state_32666[(11)]);
var inst_32626 = (state_32666[(9)]);
var inst_32644 = (state_32666[(2)]);
var inst_32645 = [];
var inst_32646 = inst_32645.push(inst_32626);
var inst_32622 = inst_32645;
var inst_32623 = inst_32631;
var state_32666__$1 = (function (){var statearr_32689 = state_32666;
(statearr_32689[(14)] = inst_32644);

(statearr_32689[(15)] = inst_32646);

(statearr_32689[(7)] = inst_32623);

(statearr_32689[(8)] = inst_32622);

return statearr_32689;
})();
var statearr_32690_33533 = state_32666__$1;
(statearr_32690_33533[(2)] = null);

(statearr_32690_33533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (16))){
var state_32666__$1 = state_32666;
var statearr_32691_33534 = state_32666__$1;
(statearr_32691_33534[(2)] = null);

(statearr_32691_33534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (10))){
var inst_32637 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
if(cljs.core.truth_(inst_32637)){
var statearr_32692_33538 = state_32666__$1;
(statearr_32692_33538[(1)] = (11));

} else {
var statearr_32694_33539 = state_32666__$1;
(statearr_32694_33539[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (18))){
var inst_32656 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32695_33540 = state_32666__$1;
(statearr_32695_33540[(2)] = inst_32656);

(statearr_32695_33540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (8))){
var inst_32632 = (state_32666[(13)]);
var state_32666__$1 = state_32666;
var statearr_32696_33542 = state_32666__$1;
(statearr_32696_33542[(2)] = inst_32632);

(statearr_32696_33542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29400__auto__ = null;
var cljs$core$async$state_machine__29400__auto____0 = (function (){
var statearr_32697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32697[(0)] = cljs$core$async$state_machine__29400__auto__);

(statearr_32697[(1)] = (1));

return statearr_32697;
});
var cljs$core$async$state_machine__29400__auto____1 = (function (state_32666){
while(true){
var ret_value__29401__auto__ = (function (){try{while(true){
var result__29402__auto__ = switch__29399__auto__(state_32666);
if(cljs.core.keyword_identical_QMARK_(result__29402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29402__auto__;
}
break;
}
}catch (e32698){var ex__29403__auto__ = e32698;
var statearr_32699_33547 = state_32666;
(statearr_32699_33547[(2)] = ex__29403__auto__);


if(cljs.core.seq((state_32666[(4)]))){
var statearr_32700_33548 = state_32666;
(statearr_32700_33548[(1)] = cljs.core.first((state_32666[(4)])));

} else {
throw ex__29403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33549 = state_32666;
state_32666 = G__33549;
continue;
} else {
return ret_value__29401__auto__;
}
break;
}
});
cljs$core$async$state_machine__29400__auto__ = function(state_32666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29400__auto____1.call(this,state_32666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29400__auto____0;
cljs$core$async$state_machine__29400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29400__auto____1;
return cljs$core$async$state_machine__29400__auto__;
})()
})();
var state__29564__auto__ = (function (){var statearr_32701 = f__29563__auto__();
(statearr_32701[(6)] = c__29562__auto___33510);

return statearr_32701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29564__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
