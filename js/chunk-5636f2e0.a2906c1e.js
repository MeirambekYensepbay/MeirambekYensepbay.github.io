(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5636f2e0"],{"1f4f":function(t,a,s){"use strict";s("a9e3");var e=s("5530"),i=(s("8b37"),s("80d2")),r=s("7560"),n=s("58df");a["a"]=Object(n["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(e["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(t,a,s){},"5a7c":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{attrs:{id:"details",fluid:"",tag:"section"}},[s("base-material-card",{staticClass:"px-5 py-3",attrs:{icon:"mdi-clipboard-text",title:"Отчеты"}},[s("v-simple-table",[s("thead",[s("tr",[s("th",{staticClass:"text-right primary--text"},[t._v(" Номер ID ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Источник ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Дата Бронирования ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Категория/Номер ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Заезд ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Выезд ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" ФИО ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Контакты ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Стоимость ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Оплачено ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Долг ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Статус ")]),s("th",{staticClass:"text-right primary--text"},[t._v(" Сотрудник ")])])]),s("tbody",t._l(t.$store.state.config.chart.items,(function(a,e){return s("tr",{key:a},[s("td",{staticClass:"text-right"},[t._v(" "+t._s(e)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(a.reservSource)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(new Date(a.time.start).toISOString().substr(0,10))+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(a.rowId)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(new Date(a.time.start).toISOString().substr(0,10))+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(new Date(a.time.end).toISOString().substr(0,10))+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(t.getName(a))+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(a.phone)+" / "+t._s(a.email)+" ")]),s("td",{staticClass:"text-right"},[t._v(" $"+t._s(a.cost)+" ")]),s("td",{staticClass:"text-right"},[t._v(" $"+t._s(a.paid)+" ")]),s("td",{staticClass:"text-right"},[t._v(" $"+t._s(a.cost-a.paid)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(t.status[a.status])+" ")]),s("td",{staticClass:"text-right"},[t._v(" 0 ")])])})),0)])],1),s("div",{staticClass:"py-3"})],1)},i=[],r={data:function(){return{status:{undefined:"Не подтверждено",accepted:"Подтверждено",cancelled:"Отменено",booking:"Забронировано",out:"Выезд",in:"Назаезд",halfBooking:"Частично оплачен",reserve:"Резерв",overbooking:"Overbooking"}}},methods:{getName:function(t){return t.firstName+" "+t.lastName+" "+t.patronymic}}},n=r,c=s("2877"),o=s("6544"),l=s.n(o),d=s("a523"),h=s("1f4f"),p=Object(c["a"])(n,e,i,!1,null,null,null);a["default"]=p.exports;l()(p,{VContainer:d["a"],VSimpleTable:h["a"]})},"8b37":function(t,a,s){},a523:function(t,a,s){"use strict";s("99af"),s("4de4"),s("b64b"),s("2ca0"),s("20f6"),s("4b85"),s("a15b"),s("498a");var e=s("2b0e");function i(t){return e["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,s){var e=s.props,i=s.data,r=s.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var n=i.attrs;if(n){i.attrs={};var c=Object.keys(n).filter((function(t){if("slot"===t)return!1;var a=n[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}));c.length&&(i.staticClass+=" ".concat(c.join(" ")))}return e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),a(e.tag,i,r)}})}var r=s("d9f7");a["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var s,e=a.props,i=a.data,n=a.children,c=i.attrs;return c&&(i.attrs={},s=Object.keys(c).filter((function(t){if("slot"===t)return!1;var a=c[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),n)}})}}]);
//# sourceMappingURL=chunk-5636f2e0.a2906c1e.js.map