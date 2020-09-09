(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a32ace7"],{"493d":function(t,e,s){},"56a4":function(t,e,s){"use strict";s("45fc"),s("a9e3"),s("d3b7"),s("25f0");var i=s("9d26"),n=s("a9ad"),a=s("3206"),r=s("5607"),l=s("58df"),c=Object(l["a"])(n["a"],Object(a["a"])("stepper","v-stepper-step","v-stepper"));e["a"]=c.extend().extend({name:"v-stepper-step",directives:{ripple:r["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(i["a"],t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}})},"7ce4":function(t,e,s){"use strict";var i=s("493d"),n=s.n(i);n.a},"7e85":function(t,e,s){"use strict";s("4de4"),s("b0c0"),s("a9e3");var i=s("5530"),n=(s("8836"),s("3206")),a=s("a452"),r=s("7560"),l=s("58df"),c=s("d9bd"),o=Object(l["a"])(Object(n["b"])("stepper"),a["a"],r["a"]);e["a"]=o.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,vertical:Boolean},data:function(){var t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes:function(){return Object(i["a"])({"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(c["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(e){return e!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(e){return e!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t("div",{staticClass:"v-stepper",class:this.classes},this.$slots.default)}})},8836:function(t,e,s){},"9c54":function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return c}));var i=s("80d2"),n=s("7e85"),a=s("56a4"),r=s("e516"),l=Object(i["i"])("v-stepper__header"),c=Object(i["i"])("v-stepper__items");n["a"],r["a"],a["a"]},"9e45":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-stepper",{staticStyle:{"min-width":"900px","max-width":"900px"},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{step:"1"},on:{click:function(e){t.e1=1}}},[t._v("Общая информация")]),s("v-divider"),s("v-stepper-step",{attrs:{step:"2"},on:{click:function(e){t.e1=2}}},[t._v("Реквизиты")]),s("v-divider"),s("v-stepper-step",{attrs:{step:"3"},on:{click:function(e){t.e1=3}}},[t._v("Условия")]),s("v-divider"),s("v-stepper-step",{attrs:{step:"4"},on:{click:function(e){t.e1=4}}},[t._v("Блоки")])],1),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-row",[s("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Наименование"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Город"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Контактное лицо"},model:{value:t.clientName,callback:function(e){t.clientName=e},expression:"clientName"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Телефон"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e1=2}}},[t._v(" Далее ")]),s("v-btn",{attrs:{to:"/",text:""}},[t._v("Выход")])],1),s("v-stepper-content",{attrs:{step:"2"}},[s("v-row",[s("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{dense:"",label:"ИП (ФИО)"}})],1),s("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Адрес регистрации"}})],1),s("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Почтовый адрес"}})],1),s("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{dense:"",label:"БИК банка"}})],1),s("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Телефон"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{dense:"",label:"E-mail"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12",md:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Контактное лицо"}})],1)],1),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e1=3}}},[t._v(" Сохранить ")]),s("v-btn",{attrs:{text:""},on:{click:function(e){t.e1=3}}},[t._v("Назад")])],1),s("v-stepper-content",{attrs:{step:"3"}},[s("v-row",[s("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Комиссия"},model:{value:t.comission,callback:function(e){t.comission=e},expression:"comission"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Сроки оплаты"},model:{value:t.days,callback:function(e){t.days=e},expression:"days"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Просмотр календаря"},model:{value:t.calendar,callback:function(e){t.calendar=e},expression:"calendar"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Форма бронирования"},model:{value:t.bookingForm,callback:function(e){t.bookingForm=e},expression:"bookingForm"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Разрешить статусы"},model:{value:t.statusPerm,callback:function(e){t.statusPerm=e},expression:"statusPerm"}})],1),s("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{dense:"",label:"Лимиты на продажу"},model:{value:t.saleLimit,callback:function(e){t.saleLimit=e},expression:"saleLimit"}})],1)],1),s("v-btn",{attrs:{color:"primary",to:"list"},on:{click:t.createSource}},[t._v(" Сохранить ")]),s("v-btn",{attrs:{text:"",to:"/"}},[t._v("Выход")])],1)],1)],1)],1)],1)},n=[],a=(s("b0c0"),{name:"CreateSource",data:function(){return{e1:1,name:null,clientName:null,email:null,phone:null,city:null,bookingForm:null,statusPerm:null,saleLimit:null,comission:null,days:null,calendar:null}},methods:{createSource:function(){var t={name:this.name,clientName:this.clientName,email:this.email,phone:this.phone,city:this.city,bookingForm:this.bookingForm,statusPerm:this.statusPerm,saleLimit:this.saleLimit,commSize:this.comission+"%",days:this.days,blocks:"Да",calendar:this.calendar,datebeg:(new Date).toDateString(),perm:!1};this.$store.commit("CREATE_SOURCE",t)}}}),r=a,l=(s("7ce4"),s("2877")),c=s("6544"),o=s.n(c),p=s("8336"),u=s("62ad"),h=s("a523"),v=s("ce7e"),d=s("0fd9"),m=s("7e85"),f=s("e516"),b=s("9c54"),g=s("56a4"),x=s("8654"),k=Object(l["a"])(r,i,n,!1,null,"3254f460",null);e["default"]=k.exports;o()(k,{VBtn:p["a"],VCol:u["a"],VContainer:h["a"],VDivider:v["a"],VRow:d["a"],VStepper:m["a"],VStepperContent:f["a"],VStepperHeader:b["a"],VStepperItems:b["b"],VStepperStep:g["a"],VTextField:x["a"]})},e516:function(t,e,s){"use strict";s("a9e3"),s("d3b7"),s("25f0");var i=s("0789"),n=s("3206"),a=s("80d2"),r=s("58df"),l=Object(r["a"])(Object(n["a"])("stepper","v-stepper-content","v-stepper"));e["a"]=l.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var t=this.$vuetify.rtl?!this.isReverse:this.isReverse;return t?i["e"]:i["f"]},styles:function(){return this.isVertical?{height:Object(a["g"])(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},s={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var i=t("div",s,[this.$slots.default]),n=t("div",e,[i]);return t(this.computedTransition,{on:this.$listeners},[n])}})}}]);
//# sourceMappingURL=chunk-2a32ace7.916a9201.js.map