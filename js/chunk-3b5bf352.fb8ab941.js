(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b5bf352"],{"1f4f":function(t,e,a){"use strict";a("a9e3");var s=a("5530"),l=(a("8b37"),a("80d2")),i=a("7560"),r=a("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(l["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},8494:function(t,e,a){"use strict";var s=a("e0f0"),l=a.n(s);l.a},"8b37":function(t,e,a){},e0f0:function(t,e,a){},f757:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"",tag:"section"}},[a("v-card",{staticClass:"px-5 py-3"},[a("v-simple-table",{attrs:{"fixed-header":"",height:"300px"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"table-title"},[t._v("Название источника")]),a("th",{staticClass:"table-title"},[t._v("Город")]),a("th",{staticClass:"table-title"},[t._v("Дата начало работ")]),a("th",{staticClass:"table-title"},[t._v("Размер комиссии")]),a("th",{staticClass:"table-title"},[t._v("Блоки")]),a("th",{staticClass:"table-title"},[t._v("Доступ")])])]),a("tbody",t._l(t.$store.state.salesChannel,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.city))]),a("td",[t._v(t._s(e.datebeg))]),a("td",[t._v(t._s(e.commSize))]),a("td",[t._v(t._s(e.blocks))]),a("td",[a("v-btn",{attrs:{text:"",small:"",color:e.perm?"primary":"error"},on:{click:function(a){return t.$store.commit("OPEN_CLOSE_SALES_CHANNEL",e.id-1)}}},[e.perm?a("span",[t._v("Открыть")]):a("span",[t._v(" Закрыть ")])])],1)])})),0)]},proxy:!0}])}),a("v-row",[a("v-col",[a("v-btn",{attrs:{color:"primary",to:"/sales-channels/create"}},[t._v("Создать")]),a("v-btn",{attrs:{color:"primary",to:"/sales-channels/settings"}},[t._v("Настройки")]),a("v-btn",{attrs:{color:"primary"}},[t._v("Добавить блоки")]),a("v-btn",{attrs:{color:"primary"}},[t._v("Выход")])],1)],1)],1)],1)},l=[],i={name:"SalesChannels",data:function(){return{headers:[{text:"Название источника",align:"start",sortable:!1,value:"name",class:"table-title"},{text:"Город",value:"city",class:"table-title"},{text:"Дата начало работ",value:"dateBeg",class:"table-title"},{text:"Размер комиссии",value:"commSize",class:"table-title"},{text:"Блоки",value:"blocks",class:"table-title"},{text:"Доступ",value:"perm",class:"table-title"}]}}},r=i,n=(a("8494"),a("2877")),c=a("6544"),o=a.n(c),d=a("8336"),h=a("b0af"),v=a("62ad"),b=a("a523"),u=a("0fd9"),f=a("1f4f"),p=Object(n["a"])(r,s,l,!1,null,null,null);e["default"]=p.exports;o()(p,{VBtn:d["a"],VCard:h["a"],VCol:v["a"],VContainer:b["a"],VRow:u["a"],VSimpleTable:f["a"]})}}]);
//# sourceMappingURL=chunk-3b5bf352.fb8ab941.js.map