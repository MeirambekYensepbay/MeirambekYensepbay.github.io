(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba396"],{"35fd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"regular-tables",fluid:"",tag:"section"}},[a("base-material-card",{staticClass:"px-5 py-3",attrs:{icon:"mdi-clipboard-text",title:"Состояние броней"}},[a("v-simple-table",{scopedSlots:t._u([{key:"top",fn:function(){return[a("v-row",[a("v-col",[a("v-menu",{ref:"dialog",attrs:{"close-on-content-click":!1,"return-value":t.from,transition:"scale-transition","offset-y":"","min-width":"290px","max-width":"290px"},on:{"update:returnValue":function(e){t.from=e},"update:return-value":function(e){t.from=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"С:",readonly:"","prepend-icon":"mdi-calendar-blank-multiple"},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}},"v-text-field",r,!1),s))]}}]),model:{value:t.fromDateDialog,callback:function(e){t.fromDateDialog=e},expression:"fromDateDialog"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.fromDateDialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.fromDateDialog=!1}}},[t._v(" OK ")])],1)],1)],1),a("v-col",[a("v-menu",{ref:"dialog",attrs:{"close-on-content-click":!1,"return-value":t.to,transition:"scale-transition","offset-y":"","min-width":"290px","max-width":"290px"},on:{"update:returnValue":function(e){t.to=e},"update:return-value":function(e){t.to=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"По:",readonly:"","prepend-icon":"mdi-calendar-blank-multiple"},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}},"v-text-field",r,!1),s))]}}]),model:{value:t.toDateDialog,callback:function(e){t.toDateDialog=e},expression:"toDateDialog"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.toDateDialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.toDateDialog=!1}}},[t._v(" OK ")])],1)],1)],1),a("v-col",[a("v-select",{attrs:{label:"Статус оплаты",items:t.payStatuses},model:{value:t.payStatus,callback:function(e){t.payStatus=e},expression:"payStatus"}})],1),a("v-col",[a("v-select",{attrs:{label:"Статус",items:t.statuses},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),a("v-col",[a("v-select",{attrs:{label:"Тип отчета",items:t.types},on:{change:t.changeFilter},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),a("v-col",[a("v-select",{attrs:{label:"Тип отчета",items:t.sources},on:{change:t.changeFilter},model:{value:t.source,callback:function(e){t.source=e},expression:"source"}})],1)],1)]},proxy:!0}])},[a("thead",[a("tr",[a("th",{staticClass:"text-right primary--text"},[t._v(" Номер ID ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Источник ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Дата Бронирования ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Категория/Номер ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Заезд ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Выезд ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" ФИО ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Контакты ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Стоимость ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Оплачено ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Долг ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Статус ")]),a("th",{staticClass:"text-right primary--text"},[t._v(" Сотрудник ")])])]),a("tbody",t._l(t.$store.state.config.chart.items,(function(e,s){return a("tr",{key:e},[a("td",{staticClass:"text-right"},[t._v(" "+t._s(s)+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(e.reservSource)+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(new Date(e.time.start).toISOString().substr(0,10))+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(e.rowId)+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(new Date(e.time.start).toISOString().substr(0,10))+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(new Date(e.time.end).toISOString().substr(0,10))+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t.getName(e))+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(e.phone)+" / "+t._s(e.email)+" ")]),a("td",{staticClass:"text-right"},[t._v(" $"+t._s(e.cost)+" ")]),a("td",{staticClass:"text-right"},[t._v(" $"+t._s(e.paid)+" ")]),a("td",{staticClass:"text-right"},[t._v(" $"+t._s(e.cost-e.paid)+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t.statusy[e.status])+" ")]),a("td",{staticClass:"text-right"},[t._v(" 0 ")])])})),0)])],1),a("div",{staticClass:"py-3"})],1)},r=[],l={data:function(){return{type:"pay",from:(new Date).toISOString().substr(0,10),to:(new Date).toISOString().substr(0,10),payStatus:"all",payStatuses:[{text:"Все",value:"all"},{text:"Оплаченные",value:"paid"},{text:"Неоплаченные",value:"notPaid"}],status:"all",statuses:[{text:"Все",value:"all"},{text:"Резерв",value:"reserve"},{text:"Бронирование",value:"booking"}],source:"all",sources:[{text:"Все",value:"all"},{text:"Instagram",value:"instagram"},{text:"Youtube",value:"youtube"}],fromDateDialog:!1,toDateDialog:!1,types:[{text:"Список оплат",value:"pay"},{text:"По клиентам",value:"client"},{text:"По номерам",value:"room"},{text:"По источникам",value:"source"},{text:"По загрузке",value:"load"},{text:"По броням",value:"book"}],filter:"period",filters:[{text:"Период",value:"period"},{text:"Статус",value:"status"},{text:"Источник",value:"source"},{text:"Статус оплаты",value:"payStatus"}],"statusу":{undefined:"Не подтверждено",accepted:"Подтверждено",cancelled:"Отменено",booking:"Забронировано",out:"Выезд",in:"Назаезд",halfBooking:"Частично оплачен",reserve:"Резерв",overbooking:"Overbooking"}}},methods:{getName:function(t){return t.firstName+" "+t.lastName+" "+t.patronymic}}},i=l,o=a("2877"),n=a("6544"),c=a.n(n),u=a("8336"),v=a("62ad"),x=a("a523"),p=a("2e4b"),d=a("e449"),m=a("0fd9"),f=a("b974"),g=a("1f4f"),h=a("2fa4"),_=a("8654"),b=Object(o["a"])(i,s,r,!1,null,null,null);e["default"]=b.exports;c()(b,{VBtn:u["a"],VCol:v["a"],VContainer:x["a"],VDatePicker:p["a"],VMenu:d["a"],VRow:m["a"],VSelect:f["a"],VSimpleTable:g["a"],VSpacer:h["a"],VTextField:_["a"]})}}]);
//# sourceMappingURL=chunk-2d0ba396.3dc3d0cb.js.map