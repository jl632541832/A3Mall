(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b7ef63a"],{"0197":function(t,e,s){"use strict";var i=s("a1ed"),a=s.n(i);a.a},"43a4":function(t,e,s){"use strict";s.r(e);var i,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav-bar",{attrs:{title:"商品详情","left-arrow":"",fixed:!0,placeholder:!0,"z-index":9999},on:{"click-left":t.prev}}),s("div",{style:"height:"+t.clientHeight+"px"},[s("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[s("van-swipe",{staticClass:"swiper-box",attrs:{autoplay:3e3},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[s("div",{staticClass:"custom-indicator"},[t._v(" "+t._s(t.current+1)+" / "+t._s(t.images.length)+" ")])]},proxy:!0}])},t._l(t.images,(function(t,e){return s("van-swipe-item",{key:e},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})),1),s("div",{staticClass:"goods-price"},[s("div",{staticClass:"price"},[s("span",[t._v("￥"),s("i",[t._v(t._s(t.products.sell_price))])]),s("span",[t._v("原价格"),s("i",[t._v("￥"+t._s(t.products.market_price))])])]),s("div",{staticClass:"count-down-box"},[s("count-down",{attrs:{"now-time":t.products.now_time,"start-time":t.products.start_time,"end-time":t.products.end_time,status:t.isActivityStatus},on:{"update:status":function(e){t.isActivityStatus=e}}})],1)]),s("div",{staticClass:"goods-info clear"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.products.title)+" ")]),s("div",{staticClass:"goods-info-box"},[s("span",[t._v("库存: "+t._s(t.products.store_nums)+"件")]),s("span",[t._v("销量: "+t._s(t.products.sale)+"件")])])]),s("div",{staticClass:"goods-content clear"},[s("div",{staticClass:"title"},[t._v("图文详情")]),s("div",{staticClass:"clear",domProps:{innerHTML:t._s(t.products.content)}},[t._v(" "+t._s(t.products.content)+" ")])])],1)],1),s("sku-action",{attrs:{goods:t.products,attribute:t.attribute,item:t.item,"goods-info":t.selectedGoodsInfo,fields:t.fields},on:{"update:goodsInfo":function(e){t.selectedGoodsInfo=e},"update:goods-info":function(e){t.selectedGoodsInfo=e}},model:{value:t.isSkuStatus,callback:function(e){t.isSkuStatus=e},expression:"isSkuStatus"}}),s("goods-action",[s("goods-action-icon",{attrs:{icon:"home",text:"首页"},on:{click:function(e){return t.$router.replace("/")}}}),s("goods-action-button",{attrs:{type:"buy",text:"立即购买"},on:{click:t.onBuyClicked}})],1)],1)},n=[],o=(s("b0c0"),s("ade3")),r=(s("4b0a"),s("2bb1")),u=(s("7844"),s("5596")),c=(s("ab71"),s("58e6")),d=(s("66cf"),s("343b")),l=(s("e7e5"),s("d399")),h=s("2b0e"),f=s("d434"),m=s("85b3"),p=s("3050"),v=s("7cc0"),_=s("ed72"),g=s("a65e");l["a"].setDefaultOptions({duration:5e3}),h["a"].use(d["a"]);var b={name:"RegimentView",components:(i={},Object(o["a"])(i,c["a"].name,c["a"]),Object(o["a"])(i,p["a"].name,p["a"]),Object(o["a"])(i,u["a"].name,u["a"]),Object(o["a"])(i,r["a"].name,r["a"]),Object(o["a"])(i,v["a"].name,v["a"]),Object(o["a"])(i,g["a"].name,g["a"]),Object(o["a"])(i,_["a"].name,_["a"]),Object(o["a"])(i,f["a"].name,f["a"]),Object(o["a"])(i,m["a"].name,m["a"]),i),data:function(){return{fields:["id","goods_id"],isSkuStatus:!1,selectedGoodsInfo:{},products:{},attribute:[],item:{},images:[],cartCount:0,current:0,isRefresh:!1,isActivityStatus:!1,clientHeight:window.outerHeight-50}},created:function(){var t=this.$storage.get("users",!0);this.cartCount=null!=t?t.shop_count:0,this.onLoad()},methods:{onLoad:function(){var t=this;this.$http.getRegimentDetail({id:this.$route.params.id}).then((function(e){t.products=e.data.goods,t.attribute=e.data.attr,t.item=e.data.item,t.images=e.data.photo}))},onChange:function(t){this.current=t},onRefresh:function(){var t=this;setTimeout((function(){t.isRefresh=!1,t.onLoad()}),1500)},onBuyClicked:function(){var t=this;return 0==this.isActivityStatus?(Object(l["a"])("活动己结束！"),!1):0!=this.isSkuStatus?this.selectedGoodsInfo.isSubmit?void this.$store.dispatch("isUsers").then((function(){t.$router.push({path:"/cart/confirm",query:{id:t.selectedGoodsInfo.id,sku_id:t.selectedGoodsInfo.selectedSku.id,num:t.selectedGoodsInfo.num,type:"regiment"}})})).catch((function(){t.$storage.set("VUE_REFERER","/regiment/view/"+t.$route.params.id),t.$router.push("/public/login")})):(Object(l["a"])("请选择规格！"),!1):void(this.isSkuStatus=!0)},prev:function(){this.$tools.prev()}}},S=b,w=(s("d35e"),s("2877")),y=Object(w["a"])(S,a,n,!1,null,"61e54fff",null);e["default"]=y.exports},"81d5":function(t,e,s){"use strict";var i=s("7b0b"),a=s("23cb"),n=s("50c4");t.exports=function(t){var e=i(this),s=n(e.length),o=arguments.length,r=a(o>1?arguments[1]:void 0,s),u=o>2?arguments[2]:void 0,c=void 0===u?s:a(u,s);while(c>r)e[r++]=t;return e}},a1ed:function(t,e,s){},b4f7:function(t,e,s){},cb29:function(t,e,s){var i=s("23e7"),a=s("81d5"),n=s("44d2");i({target:"Array",proto:!0},{fill:a}),n("fill")},d35e:function(t,e,s){"use strict";var i=s("b4f7"),a=s.n(i);a.a},d434:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aaa-count-down",class:t.theme},[t.isShow?s("div",{class:"wrap-"+t.theme},[t.before?s("span",{staticClass:"before"},[t._v(t._s(t.before))]):t._e(),s("span",{staticClass:"day"},[s("i",[t._v(t._s(t.time.day))]),s("i",[t._v(t._s(t.dayText))])]),s("span",{staticClass:"hour"},[s("i",[t._v(t._s(t.time.hour))]),s("i",[t._v(t._s(t.hourText))])]),s("span",{staticClass:"minute"},[s("i",[t._v(t._s(t.time.minute))]),s("i",[t._v(t._s(t.minuteText))])]),s("span",{staticClass:"second"},[s("i",[t._v(t._s(t.time.second))]),s("i",[t._v(t._s(t.secondText))])]),t.after?s("span",{staticClass:"after"},[t._v(t._s(t.after))]):t._e()]):t._e(),t.isShow?t._e():s("div",{class:"tips-"+t.theme},[t._v(t._s(t.tips))])])},a=[],n=(s("cb29"),s("a9e3"),s("d3b7"),s("25f0"),{name:"CountDown",props:{nowTime:{type:[String,Number],default:"0"},startTime:{type:[String,Number],default:"0"},endTime:{type:[String,Number],default:"0"},startText:{type:String,default:"距开始仅剩："},endText:{type:String,default:"距结束仅剩："},finishText:{type:String,default:"活动己结束"},dayText:{type:String,default:"天"},hourText:{type:String,default:"小时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},theme:{type:String,default:"simple"},fillZero:{type:Object,default:function(){return{day:{count:86400,num:2,def:"00"},hour:{count:3600,num:2,def:"00"},minute:{count:60,num:2,def:"00"},second:{count:1,num:2,def:"00"}}}}},data:function(){return{time:{day:"",hour:"",minute:"",second:""},before:"",after:"",current:0,start:0,end:0,total:0,tips:"",isShow:!1,timer:null}},watch:{endTime:function(t,e){this.run()}},methods:{run:function(){var t=this;void 0!=this.nowTime&&void 0!=this.startTime&&void 0!=this.endTime&&(this.now=this.nowTime,this.start=this.startTime,this.end=this.endTime,this.total=this.end-this.now,this.updateStatus(!1),this.message(!1,""),this.total<=0?this.message(!1,this.finishText):(this.nowTime<this.startTime?this.before=this.startText:this.nowTime>this.startTime&&this.endTime>this.nowTime&&(this.before=this.endText,this.updateStatus(!0)),this.timer=setInterval((function(){t.runTime()}),1e3)))},runTime:function(){if(this.total<=0)return this.timer&&clearInterval(this.timer),this.message(!1,this.finishText),void this.updateStatus(!1);var t=this.total;for(var e in this.fillZero){var s=this.fillZero[e],i=t>s.count;if(i||(this.time[e]=s.def),i){var a=Math.floor(t/s.count);this.time[e]=this.fill(a.toString(),s.num),t-=a*s.count}}this.total--,this.message(!0)},fill:function(t,e){var s=""+t;while(s.length<e)s="0"+s;return s},message:function(t,e){this.tips=e||"",this.isShow=t},updateStatus:function(t){this.$emit("update:status",t)}}}),o=n,r=(s("0197"),s("2877")),u=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=u.exports}}]);