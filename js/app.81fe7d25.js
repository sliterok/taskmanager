(function(t){function e(e){for(var a,r,i=e[0],o=e[1],u=e[2],c=0,f=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return l.push.apply(l,u||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(l.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},l=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=o;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("md-toolbar",{staticClass:"md-primary toolbar"},[s("div",{staticClass:"md-title title"},[t._v("Мои дела")]),s("md-button",{staticClass:"md-raised md-primary addTask",on:{click:t.showAddTask}},[t._v("Новая задача")])],1),s("md-app",[s("md-app-drawer",{attrs:{"md-permanent":"full"}},[s("md-subheader",[t._v("Фильтры")]),s("md-list",[s("md-list-item",[s("md-subheader",[t._v("Тэги")]),s("md-chips",{attrs:{"md-placeholder":"добавить тэг..."},model:{value:t.filters.tags,callback:function(e){t.$set(t.filters,"tags",e)},expression:"filters.tags"}})],1),s("md-divider"),s("md-list-item",[s("md-subheader",[t._v("Статус")]),s("md-list",[s("md-switch",{attrs:{value:0},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},[t._v("В работе")]),s("md-switch",{attrs:{value:1},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},[t._v("Завершена")]),s("md-switch",{attrs:{value:-1},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},[t._v("Просрочена")])],1)],1)],1)],1),s("md-app-content",t._l(t.filteredTasks,(function(e){return s("Task",{attrs:{value:e},nativeOn:{click:function(s){return t.showTask(e.id)}}})})),1)],1),s("md-dialog",{attrs:{"md-active":t.shown},on:{"update:mdActive":function(e){t.shown=e},"update:md-active":function(e){t.shown=e}}},[-1===t.shows?s("Task",{attrs:{editable:!0,creating:!0},on:{saveTask:t.addTask},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}}):s("Task",{attrs:{editable:!0},on:{saveTask:t.saveTask},model:{value:t.tasks[t.shows],callback:function(e){t.$set(t.tasks,t.shows,e)},expression:"tasks[shows]"}})],1)],1)},l=[],r=(s("6762"),s("2fdb"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{staticClass:"taskCard",attrs:{"md-with-hover":""}},[s("md-card-header",[t.editable?s("md-field",[s("label",[t._v("Название")]),s("md-input",{attrs:{"md-counter":"30"},model:{value:t.value.title,callback:function(e){t.$set(t.value,"title",e)},expression:"value.title"}})],1):[s("div",{staticClass:"md-title"},[t._v(t._s(t.value.title))]),s("div",{staticClass:"md-subhead"},[1===t.value.status?s("span",[t._v("завершено")]):0===t.value.status&&t.value.date>Date.now()?s("span",[t._v("в работе до "+t._s(new Date(t.value.date).toLocaleDateString()))]):s("span",[t._v("просрочено от "+t._s(new Date(t.value.date).toLocaleDateString()))])])]],2),s("md-card-content",[t.editable?s("md-field",[s("label",[t._v("Задача")]),s("md-textarea",{attrs:{"md-counter":"2048"},model:{value:t.value.body,callback:function(e){t.$set(t.value,"body",e)},expression:"value.body"}})],1):s("div",{staticClass:"taskBody"},[t._v("\r\n            "+t._s(t.value.body)+"\r\n        ")])],1),s("md-card-content",[t.editable?s("md-datepicker",{attrs:{"md-model-type":Number},model:{value:t.value.date,callback:function(e){t.$set(t.value,"date",e)},expression:"value.date"}}):t._e(),t.editable?[s("md-chips",{attrs:{"md-placeholder":"добавить тэг..."},model:{value:t.value.tags,callback:function(e){t.$set(t.value,"tags",e)},expression:"value.tags"}})]:t._l(t.value.tags,(function(e){return s("md-chip",[t._v(t._s(e))])}))],2),s("md-card-actions",[t.editable?s("md-button",{staticClass:"md-accent md-raised",on:{click:t.close}},[t._v("Завершить")]):t._e(),t.editable?s("md-button",{staticClass:"md-primary md-raised",on:{click:t.save}},[t._v("Сохранить")]):t._e()],1)],1)}),i=[],o=(s("c5f6"),{name:"Task",props:{value:{id:Number,title:String,body:String,tags:Array,date:Number,status:Number},editable:Boolean,creating:Boolean},methods:{save:function(){this.$emit("saveTask",this.value)},close:function(){this.value.status=1}}}),u=o,d=(s("fcc1"),s("2877")),c=Object(d["a"])(u,r,i,!1,null,null,null),f=c.exports,m={id:null,title:"",body:"",tags:[],date:null,status:0},v={name:"app",components:{Task:f},data:function(){return{tasks:[],shows:-1,shown:!1,filters:{tags:[],status:null},newTask:Object.assign({},m)}},computed:{filteredTasks:function(){var t=this;return this.tasks.filter((function(e){return!(t.filters.tags.length>0&&!e.tags.some((function(e){return t.filters.tags.includes(e)})))&&(null===t.filters.status||(0===t.filters.status&&0===e.status?e.date>Date.now():-1===t.filters.status?0===e.status&&e.date<Date.now():t.filters.status===e.status))}))}},methods:{showAddTask:function(){this.shown=!0},showTask:function(t){this.shown=!0,this.shows=t},saveTask:function(t){this.$set(this.tasks,this.shows,t),this.shows=-1,this.shown=!1},addTask:function(){this.newTask.id=this.tasks.length,this.tasks.push(this.newTask),this.shown=!1,this.newTask=Object.assign({},m)}},watch:{tasks:function(t){localStorage.setItem("tasks",JSON.stringify(t))}},mounted:function(){if(localStorage.getItem("tasks"))try{this.tasks=JSON.parse(localStorage.getItem("tasks"))}catch(t){localStorage.removeItem("tasks")}}},h=v,p=(s("034f"),Object(d["a"])(h,n,l,!1,null,null,null)),b=p.exports,k=s("43f9"),w=s.n(k);s("51de"),s("e094");a["default"].use(w.a),a["default"].material.locale={startYear:2e3,endYear:2099,dateFormat:"dd.MM.yyyy",days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],shorterDays:["В","П","В","С","Ч","П","с"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Ноя","Дек"],shorterMonths:["Я","Ф","М","А","М","Ию","Ию","А","Се","О","Н","Д"],firstDayOfAWeek:1},console.log(a["default"].material),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,s){},f182:function(t,e,s){},fcc1:function(t,e,s){"use strict";var a=s("f182"),n=s.n(a);n.a}});
//# sourceMappingURL=app.81fe7d25.js.map