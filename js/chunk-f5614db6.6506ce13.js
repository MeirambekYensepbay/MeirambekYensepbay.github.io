(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5614db6"],{"145b":function(t,i,e){"use strict";var o=e("4a75"),n=e.n(o);n.a},1859:function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-footer",{attrs:{id:"dashboard-core-footer"}})},n=[],s={name:"DashboardCoreFooter",data:function(){return{links:[{href:"#",text:"Creative Tim"},{href:"#",text:"About Us"},{href:"#",text:"Blog"},{href:"#",text:"Licenses"}]}}},a=s,r=(e("145b"),e("2877")),c=e("6544"),p=e.n(c),u=(e("a9e3"),e("c7cd"),e("5530")),h=(e("b5b6"),e("8dd9")),l=e("3a66"),f=e("d10f"),d=e("58df"),b=e("80d2"),v=Object(d["a"])(h["a"],Object(l["a"])("footer",["height","inset"]),f["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(u["a"])(Object(u["a"])({},h["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(u["a"])(Object(u["a"])({},h["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(b["g"])(t),left:Object(b["g"])(this.computedLeft),right:Object(b["g"])(this.computedRight),bottom:Object(b["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var i=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,i,this.$slots.default)}}),m=Object(r["a"])(a,o,n,!1,null,null,null);i["default"]=m.exports;p()(m,{VFooter:v})},"3a66":function(t,i,e){"use strict";e.d(i,"a",(function(){return s}));var o=e("fe6c"),n=e("58df");function s(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,i){i?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,i){this.$vuetify.application.unregister(this._uid,i)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,e=i.length;t<e;t++)this.$watch(i[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"4a75":function(t,i,e){},b5b6:function(t,i,e){}}]);
//# sourceMappingURL=chunk-f5614db6.6506ce13.js.map