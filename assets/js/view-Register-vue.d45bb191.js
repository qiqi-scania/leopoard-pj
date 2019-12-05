(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-Register-vue"],{"2cfd":function(t,e,r){"use strict";var i=r("96d5"),s=r.n(i);s.a},"4bd4":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("7db0"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("07ac"),r("2532"),r("159b");var i=r("fc11"),s=r("58df"),a=r("7e2b"),o=r("3206");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(s["a"])(a["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=r(t)))})):i.valid=r(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:l({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"73cf":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"mx-3 fill-height",attrs:{"no-gutters":"",align:"start",justify:"start"}},[r("v-col",{staticClass:"mt-2",attrs:{cols:"12"}},[r("p",{staticClass:"subheading font-weight-medium"},[t._v(" Choose one of the following sign up methods. ")])]),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"white--text teneo-social-btn px-1 mr-1 mb-1",attrs:{color:"#375A9A"},on:{click:function(e){return t.loginSocial("facebook")}}},[r("v-icon",{staticClass:"ml-1",attrs:{left:"",light:""}},[t._v("mdi-facebook-box")]),t._v(" Facebook ")],1),r("v-btn",{staticClass:"white--text teneo-social-btn px-1 mr-1 mb-1",attrs:{color:"#EE4036"},on:{click:function(e){return t.loginSocial("google")}}},[r("v-icon",{staticClass:"ml-1",attrs:{left:"",light:""}},[t._v("mdi-google-plus")]),t._v(" Google+ ")],1),r("v-btn",{staticClass:"white--text teneo-social-btn px-1 mr-0 mb-1",attrs:{color:"#464646"},on:{click:function(e){return t.loginSocial("facebook")}}},[r("v-icon",{staticClass:"ml-1",attrs:{left:"",light:""}},[t._v("mdi-github-circle")]),t._v(" GitHub ")],1)],1),r("v-col",{staticClass:"mt-2",attrs:{cols:"12"}},[r("p",{staticClass:"subheading font-weight-medium"},[t._v(" Or signup using your email address. ")])]),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.registerUser(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[t.rules.required],label:"Name",clearable:"",autocomplete:"off",required:"","append-icon":"mdi-account-card-details-outline"},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:[t.rules.emailRules],label:"E-mail",clearable:"",autocomplete:"off",required:"","append-icon":"mdi-at"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.showPassword?"text":"password",name:"password",clearable:"",autocomplete:"off",label:"Password",hint:"At least 6 characters",counter:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("v-col",{staticClass:"my-0 py-0",attrs:{cols:"6"}},[r("v-btn",{attrs:{type:"submit",color:"success"},on:{click:t.registerUser}},[t._v(" Sign Up ")])],1),t.errorMessage?r("v-col",{attrs:{cols:"6"}},[r("v-alert",{attrs:{value:!0,type:"info"}},[t._v(" "+t._s(t.errorMessage)+" ")])],1):t._e()],1)],1)],1)],1)},s=[],a=(r("ca6b").getLogger("Register.vue"),{name:"register",components:{},data:function(){return{displayName:"",email:"",errorMessage:"",password:"",valid:!1,showPassword:!1,rules:{required:function(t){return!!t||"Required"},min:function(t){return t&&t.length>=6||"Min 6 characters"},emailRules:function(t){if(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail"}return"Email is required"}}}},beforeRouteLeave:function(t,e,r){this.$emit("closeMenu"),r()},methods:{hideErrorMessage:function(){this.errorMessage=""},loginSocial:function(t){var e=this;this.$store.dispatch("loginSocial",t).then((function(){"/"!==e.$router.currentRoute.path&&e.$router.push("/")})).catch((function(t){e.errorMessage=t,setTimeout(e.hideErrorMessage,2e3)}))},registerUser:function(){var t=this;this.$refs.form.validate()&&this.$store.dispatch("registerUserWithUsernameEmailPassword",{displayName:this.displayName,email:this.email,password:this.password}).then((function(){"/"!==t.$router.currentRoute.path&&t.$router.push("/")})).catch((function(e){t.errorMessage=e,setTimeout(t.hideErrorMessage,2e3)}))}},computed:{}}),o=a,n=(r("2cfd"),r("2877")),l=r("6544"),c=r.n(l),u=r("0798"),d=r("8336"),f=r("62ad"),h=r("a523"),p=r("4bd4"),m=r("132d"),v=r("0fd9b"),b=r("8654"),g=Object(n["a"])(o,i,s,!1,null,null,null);e["default"]=g.exports;c()(g,{VAlert:u["a"],VBtn:d["a"],VCol:f["a"],VContainer:h["a"],VForm:p["a"],VIcon:m["a"],VRow:v["a"],VTextField:b["a"]})},"96d5":function(t,e,r){}}]);