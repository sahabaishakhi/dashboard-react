goog.provide('io.ianalytics.d4d.api.trend');
/**
 * 
 */
io.ianalytics.d4d.api.trend.getTrend = (function io$ianalytics$d4d$api$trend$getTrend(var_args){
var G__35814 = arguments.length;
switch (G__35814) {
case 3:
return io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$3 = (function (uid,from,to){
return io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$6(uid,from,to,null,console.log,console.log);
}));

(io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$4 = (function (uid,from,to,intv){
return io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$6(uid,from,to,intv,console.log,console.log);
}));

(io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$5 = (function (uid,from,to,intv,callback){
return io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$6(uid,from,to,intv,callback,console.log);
}));

(io.ianalytics.d4d.api.trend.getTrend.cljs$core$IFn$_invoke$arity$6 = (function (uid,from,to,intv,callback,error){
var iso_from = from.toISOString();
var iso_to = to.toISOString();
var url = [io.ianalytics.d4d.api.core.API_URL,"/trend/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),"?from=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(iso_from),"&to=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(iso_to),(cljs.core.truth_(intv)?["&intv=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(intv),"s&aggr=mean&fill=linear"].join(''):null)].join('');
var response = window.fetch(url);
return response.then((function (response__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(response__$1.status,(200))){
return response__$1.json().then(callback);
} else {
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(response__$1) : error.call(null,response__$1));

}
})).catch((function (response__$1){
return console.log("Error getting trend with id ",uid," between ",iso_from," and ",iso_to,": ",response__$1);
}));
}));

(io.ianalytics.d4d.api.trend.getTrend.cljs$lang$maxFixedArity = 6);


//# sourceMappingURL=io.ianalytics.d4d.api.trend.js.map
