(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{P7Xh:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return d}));var r,o=n("aurelia-framework"),i=n("logofx/index"),u=n("data/index"),a=n("model/index"),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},f=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(e,n,r,o){return new(r||(r=t))((function(t,i){function u(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(u,a)}c((o=o.apply(e,n||[])).next())}))},l=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},d=function(){function e(t,e,n){this.contactProvider=t,this.heatmapProvider=e,this.investProvider=n,this.contacts=[],this.heatmapPrismList=[]}return e.prototype.getPortfoliosLastDate=function(){return p(this,void 0,void 0,(function(){return l(this,(function(t){return[2,this.investProvider.getLastDateAvailable()]}))}))},e.prototype.getPortfolios=function(t){return p(this,void 0,void 0,(function(){var e,n,r=this;return l(this,(function(o){switch(o.label){case 0:return[4,this.investProvider.getPortfolios(t)];case 1:return e=o.sent(),(n=new a.Portfolios).structure=e.structure.map((function(t){return r.mapPortfolioStructure(t)})),n.items=e.items.map((function(t){return r.mapPortfolio(t)})),[2,n]}}))}))},e.prototype.getLineChartData=function(t,e,n,r){return p(this,void 0,void 0,(function(){var o,i=this;return l(this,(function(c){switch(c.label){case 0:return(o=new u.FilterScopeDto).filters=e.filters.map((function(t){return i.mapFilterDto(t)})),[4,this.heatmapProvider.getLineChartDataAsync(t,o,n,r)];case 1:return[2,c.sent().map((function(t){return new a.LineChartModel(t.title,t.columns,t.dates,t.series.map((function(t){return new a.LineChartValue(t.name,t.values)})))}))]}}))}))},e.prototype.getHeatmap=function(t,e,n){return p(this,void 0,void 0,(function(){var r,o,i,c=this;return l(this,(function(s){switch(s.label){case 0:return(r=new u.FilterScopeDto).filters=e.filters.map((function(t){return c.mapFilterDto(t)})),[4,this.heatmapProvider.getHeatmap(t,r)];case 1:return o=s.sent(),(i=new a.Heatmap).matrix=o.data,i.axisXLabels=o.symbols,i.axisYLabels=o.topics,[2,this.orderData(i,n)]}}))}))},e.prototype.sortHeatmap=function(t,e){return this.orderData(t,e)},e.prototype.getHeatmapPrismList=function(){return p(this,void 0,void 0,(function(){var t,e=this;return l(this,(function(n){switch(n.label){case 0:return[4,this.heatmapProvider.getPrismDefinitionList()];case 1:return t=n.sent(),this.heatmapPrismList=t.map((function(t){return e.mapPrismDefinition(t)})),[2]}}))}))},e.prototype.createContact=function(){return p(this,void 0,void 0,(function(){var e;return l(this,(function(n){return e=function(t){function e(e){var n=t.call(this)||this;return n.id=e,n.makeNew(),n}return c(e,t),e}(a.Contact),[2,new t((function(t){t(new e(i.Guid.create().toString()))}))]}))}))},e.prototype.getContact=function(e){return p(this,void 0,void 0,(function(){var n=this;return l(this,(function(r){return[2,new t((function(t){return p(n,void 0,void 0,(function(){var n,r;return l(this,(function(o){switch(o.label){case 0:return[4,this.contactProvider.getAsync(e)];case 1:return n=o.sent(),(r=new a.Contact).id=n[0].id,r.firstName=n[0].firstName,r.lastName=n[0].lastName,r.email=n[0].email,r._rev=n[0]._rev,t(r),[2]}}))}))}))]}))}))},e.prototype.getContacts=function(){return p(this,void 0,void 0,(function(){var e=this;return l(this,(function(n){switch(n.label){case 0:return[4,this.updateLocalContacts()];case 1:return n.sent(),[2,new t((function(t){t(e.contacts)}))]}}))}))},e.prototype.updateContact=function(t){return p(this,void 0,void 0,(function(){var e,n=this;return l(this,(function(r){switch(r.label){case 0:return(e=new u.ContactDto).id=t.id,e.firstName=t.firstName,e.lastName=t.lastName,e.email=t.email,t.isNew?[3,2]:(e._rev=t._rev,[4,this.contactProvider.putAsync(e).then((function(){return n.updateLocalContacts()})).catch((function(t){throw t}))]);case 1:return r.sent(),[3,4];case 2:return[4,this.contactProvider.postAsync(e).then((function(){return n.updateLocalContacts()})).catch((function(t){throw t}))];case 3:r.sent(),r.label=4;case 4:return[2,this.contacts.find((function(e){return e.id===t.id}))]}}))}))},e.prototype.deleteContact=function(t){return p(this,void 0,void 0,(function(){var e=this;return l(this,(function(n){switch(n.label){case 0:return[4,this.contactProvider.deleteAsync(t.id).then((function(){return p(e,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return[4,this.updateLocalContacts()];case 1:return t.sent(),[2]}}))}))})).catch((function(t){throw t}))];case 1:return n.sent(),[2]}}))}))},e.prototype.mapPortfolioStructure=function(t){var e=new a.PortfolioStructure;return e.title=t.title,e.type=t.type,e},e.prototype.mapPortfolio=function(t){var e=new a.Portfolio;return e.id=t.id,e.date=t.date,e.topic=t.topic,e.performanceValues=t.performanceValues,e.characteristics=t.characteristics,e},e.prototype.rearangementRows=function(t,e){var n=[],r=[];return e.forEach((function(e,o){n.push(t.matrix[e]),r.push(t.axisYLabels[e])})),t.matrix=n,t.axisYLabels=r,t},e.prototype.rearangementColumns=function(t,e){var n=t.matrix.map((function(t){return t.map((function(t){return 0}))})),r=[];return e.forEach((function(e,o){for(var i=0;i<n.length;++i)n[i][o]=t.matrix[i][e];r.push(t.axisXLabels[e])})),t.matrix=n,t.axisXLabels=r,t},e.prototype.sortRows=function(t,e){var n=[];return 0===e.id?n=t.axisYLabels.map((function(t,e){return{value:t,index:e}})).sort((function(t,e){return t.value>e.value?1:t.value<e.value?-1:0})).map((function(t){return t.index})):2===e.id&&(n=t.matrix.map((function(t,e){return{value:t.reduce((function(t,e){return t+e}),0),index:e}})).sort((function(t,e){return e.value-t.value})).map((function(t){return t.index}))),0===n.length?t:this.rearangementRows(t,n)},e.prototype.sortColumns=function(t,e){var n=[];if(0===e.id)n=t.axisXLabels.map((function(t,e){return{value:t,index:e}})).sort((function(t,e){return t.value>e.value?1:t.value<e.value?-1:0})).map((function(t){return t.index}));else if(2===e.id){for(var r=t.axisYLabels.length,o=t.axisXLabels.length,i=t.axisXLabels.map((function(t,e){return{value:0,index:e}})),u=0;u<o;++u)for(var a=0;a<r;++a)i[u].value+=t.matrix[a][u];n=(i=i.sort((function(t,e){return e.value-t.value}))).map((function(t){return t.index}))}return 0===n.length?t:this.rearangementColumns(t,n)},e.prototype.orderDataWithSelectSort=function(t,e){var n=e.options.find((function(t){return t.id===e.selectedOption.id}));if(0===e.id)return this.sortRows(t,n);if(1===e.id)return this.sortColumns(t,n);throw new Error("Unknown sort kind.")},e.prototype.orderDataWithSort=function(t,e){if(e instanceof a.SelectSort)return this.orderDataWithSelectSort(t,e);throw new Error("Unknown sort kind.")},e.prototype.orderData=function(t,e){for(var n=t,r=0,o=e.sorts;r<o.length;r++){var i=o[r];n=this.orderDataWithSort(n,i)}n.values=[];for(var u=0;u<n.axisYLabels.length;++u)for(var a=0;a<n.axisXLabels.length;++a)n.values.push({XLabel:n.axisXLabels[a],YLabel:n.axisYLabels[u],Value:n.matrix[u][a]});return n},e.prototype.mapPrismDefinition=function(t){var e=this,n=new a.PrismDefinition(t.id,t.name);return n.filterScope=new a.FilterScope,n.filterScope.filters=t.filterScope.filters.map((function(t){return e.mapFilter(t)})),n.sortScope=new a.SortScope,n.sortScope.sorts=t.sortScope.sorts.map((function(t){return e.mapSort(t)})),n.heatmap=new a.HeatmapDefinition,n.heatmap.dataSourceUri=t.heatmap.dataSourceUri,n.heatmap.relatedData=t.heatmap.relatedData.map((function(t){return e.mapRelatedData(t)})),n},e.prototype.mapRelatedData=function(t){var e=this;return{slice:t.slice,items:t.items.map((function(t){return e.mapRelatedDataItem(t)}))}},e.prototype.mapRelatedDataItem=function(t){return{title:t.title,indicatorValue:t.indicatorValue}},e.prototype.mapSortNamedItem=function(t){return new a.SortNamedItem(t.id,t.name)},e.prototype.mapFilterNamedItem=function(t){return new a.FilterNamedItem(t.id,t.name,t.value)},e.prototype.mapFilterNamedItemDto=function(t){return new u.FilterNamedItemDto(t.id,t.name)},e.prototype.mapSortNamedItemDto=function(t){return new u.SortNamedItemDto(t.id,t.name)},e.prototype.mapSort=function(t){var e=this;if("SelectSortDto"===t.type){var n=t,r=new a.SelectSort(n.id,n.name);return r.options=n.options.map((function(t){return e.mapSortNamedItem(t)})),r.selectedOption=r.options.find((function(t){return t.id===n.selectedOptionId})),r}return null},e.prototype.mapFilter=function(t){var e=this;if("SelectFilterDto"===t.type){var n=t,r=new a.SelectFilter(n.id,n.name);return r.options=n.options.map((function(t){return e.mapFilterNamedItem(t)})),r.selectedOption=r.options.find((function(t){return t.id===n.selectedOptionId})),r}if("DateFilterDto"===t.type){var o=t,i=new a.DateFilter(o.id,o.name);return i.selectedDate=o.selectedDate,i}return null},e.prototype.mapFilterDto=function(t){var e=this;if("SelectFilter"===t.type){var n=t,r=new u.SelectFilterDto(n.id,n.name,n.options.map((function(t){return e.mapFilterNamedItemDto(t)})));return r.selectedOptionId=n.selectedOption.id,r}if("DateFilter"===t.type){var o=t;return new u.DateFilterDto(o.id,o.name,o.selectedDate)}return null},e.prototype.mapSortDto=function(t){var e=this;if("SelectSort"===t.type){var n=t,r=new u.SelectSortDto(n.id,n.name,n.options.map((function(t){return e.mapSortNamedItemDto(t)})));return r.selectedOptionId=n.selectedOption.id,r}return null},e.prototype.updateLocalContacts=function(){return p(this,void 0,void 0,(function(){var t=this;return l(this,(function(e){switch(e.label){case 0:return this.contacts.splice(0,this.contacts.length),[4,this.contactProvider.getAsync()];case 1:return e.sent().forEach((function(e){var n=new a.Contact;n.id=e.id,n.firstName=e.firstName,n.lastName=e.lastName,n.email=e.email,n._rev=e._rev,t.contacts.push(n)})),[2]}}))}))},e=s([o.f,f("design:paramtypes",[u.ContactProvider,u.HeatmapProvider,u.InvestProvider])],e)}()}).call(this,n("B/eG").default)},"model/contracts/index":function(t,e){},"model/implementation/index":function(t,e,n){"use strict";n.r(e);var r,o=n("093o"),i=n("aurelia-validation"),u=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t){function e(){var e=t.call(this)||this;return e._firstName=String.empty,e._lastName=String.empty,e._email=String.empty,e._gender=String.empty,e.rules=i.ValidationRules.ensure((function(t){return t.firstName})).displayName("First Name").required().withMessage("The value is mandatory").ensure((function(t){return t.lastName})).displayName("Last Name").required().withMessage("The value is mandatory").minLength(3).withMessage("The value < 3").rules,e}return u(e,t),Object.defineProperty(e.prototype,"firstName",{get:function(){return this._firstName},set:function(t){this._firstName=t,this.makeDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastName",{get:function(){return this._lastName},set:function(t){this._lastName=t,this.makeDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"email",{get:function(){return this._email},set:function(t){this._email=t,this.makeDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gender",{get:function(){return this._gender},set:function(t){this._gender=t,this.makeDirty()},enumerable:!0,configurable:!0}),e}(o.a),c=n("P7Xh"),s=function(){function t(t,e,n,r){this._title=t,this._columns=e,this._dates=n,this._series=r}return Object.defineProperty(t.prototype,"title",{get:function(){return this._title},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"columns",{get:function(){return this._columns},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dates",{get:function(){return this._dates},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"series",{get:function(){return this._series},enumerable:!0,configurable:!0}),t}(),f=function(){function t(t,e){this._name=t,this._values=e}return Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){return this._values},enumerable:!0,configurable:!0}),t}(),p=n("logofx/index"),l=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(t){function e(e,n,r){var o=t.call(this)||this;return o.id=e,o._name=n,o._type=r,o}return l(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),e}(p.Model),m=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t){function e(e,n,r){var o=t.call(this)||this;return o.id=e,o._name=n,o._value=r,o}return m(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),e}(p.Model),y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return y(e,t),Object.defineProperty(e.prototype,"filters",{get:function(){return this._filters},set:function(t){this._filters=t},enumerable:!0,configurable:!0}),e}(p.Model),b=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=function(t){function e(e,n){return t.call(this,e,n,"DateFilter")||this}return b(e,t),Object.defineProperty(e.prototype,"selectedDate",{get:function(){return this._selectedDate},set:function(t){this._selectedDate=t},enumerable:!0,configurable:!0}),e}(d),g=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),P=function(t){function e(e,n){return t.call(this,e,n,"SelectFilter")||this}return g(e,t),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},set:function(t){this._options=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedOption",{get:function(){return this._selectedOption},set:function(t){this._selectedOption=new h(t.id,t.name,t.value)},enumerable:!0,configurable:!0}),e}(d),w=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),O=function(t){function e(e,n,r){var o=t.call(this)||this;return o.id=e,o._name=n,o._type=r,o}return w(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),e}(p.Model),S=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),D=function(t){function e(e,n){var r=t.call(this)||this;return r.id=e,r._name=n,r}return S(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),e}(p.Model),j=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return j(e,t),Object.defineProperty(e.prototype,"sorts",{get:function(){return this._sorts},set:function(t){this._sorts=t},enumerable:!0,configurable:!0}),e}(p.Model),L=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),N=function(t){function e(e,n){return t.call(this,e,n,"SelectSort")||this}return L(e,t),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},set:function(t){this._options=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedOption",{get:function(){return this._selectedOption},set:function(t){this._selectedOption=t},enumerable:!0,configurable:!0}),e}(O),F=function(){},C=function(){function t(){}return Object.defineProperty(t.prototype,"axisXLabels",{get:function(){return this._axisXLabels},set:function(t){this._axisXLabels=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axisYLabels",{get:function(){return this._axisYLabels},set:function(t){this._axisYLabels=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){return this._values},set:function(t){this._values=t},enumerable:!0,configurable:!0}),t}(),I=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),A=function(t){function e(e,n){var r=t.call(this)||this;return r._name=n,r.id=e,r}return I(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filterScope",{get:function(){return this._filterScope},set:function(t){this._filterScope=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sortScope",{get:function(){return this._sortScope},set:function(t){this._sortScope=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"heatmap",{get:function(){return this._heatmap},set:function(t){this._heatmap=t},enumerable:!0,configurable:!0}),e}(p.Model),R=function(){},k=function(){},M=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),X=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return M(e,t),e}(p.Model),H=function(){},Y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Y(e,t),e}(p.Model);n.d(e,"Contact",(function(){return a})),n.d(e,"DataService",(function(){return c.a})),n.d(e,"LineChartModel",(function(){return s})),n.d(e,"LineChartValue",(function(){return f})),n.d(e,"FilterBase",(function(){return d})),n.d(e,"FilterNamedItem",(function(){return h})),n.d(e,"FilterScope",(function(){return _})),n.d(e,"DateFilter",(function(){return v})),n.d(e,"SelectFilter",(function(){return P})),n.d(e,"SortBase",(function(){return O})),n.d(e,"SortNamedItem",(function(){return D})),n.d(e,"SortScope",(function(){return x})),n.d(e,"SelectSort",(function(){return N})),n.d(e,"HeatmapDefinition",(function(){return F})),n.d(e,"Heatmap",(function(){return C})),n.d(e,"PrismDefinition",(function(){return A})),n.d(e,"RelatedData",(function(){return R})),n.d(e,"RelatedDataItem",(function(){return k})),n.d(e,"Portfolio",(function(){return X})),n.d(e,"Portfolios",(function(){return H})),n.d(e,"PortfolioStructure",(function(){return V}))},"model/index":function(t,e,n){"use strict";n.r(e),n.d(e,"configure",(function(){return o}));n("aurelia-framework");var r=n("model/implementation/index");function o(t){t.aurelia.use.feature("model/contracts/index").feature("model/implementation/index")}n.d(e,"DataService",(function(){return r.DataService})),n.d(e,"Contact",(function(){return r.Contact})),n.d(e,"LineChartModel",(function(){return r.LineChartModel})),n.d(e,"LineChartValue",(function(){return r.LineChartValue})),n.d(e,"FilterBase",(function(){return r.FilterBase})),n.d(e,"FilterNamedItem",(function(){return r.FilterNamedItem})),n.d(e,"FilterScope",(function(){return r.FilterScope})),n.d(e,"DateFilter",(function(){return r.DateFilter})),n.d(e,"SelectFilter",(function(){return r.SelectFilter})),n.d(e,"SortBase",(function(){return r.SortBase})),n.d(e,"SortNamedItem",(function(){return r.SortNamedItem})),n.d(e,"SortScope",(function(){return r.SortScope})),n.d(e,"SelectSort",(function(){return r.SelectSort})),n.d(e,"HeatmapDefinition",(function(){return r.HeatmapDefinition})),n.d(e,"Heatmap",(function(){return r.Heatmap})),n.d(e,"PrismDefinition",(function(){return r.PrismDefinition})),n.d(e,"RelatedData",(function(){return r.RelatedData})),n.d(e,"RelatedDataItem",(function(){return r.RelatedDataItem})),n.d(e,"Portfolio",(function(){return r.Portfolio})),n.d(e,"Portfolios",(function(){return r.Portfolios})),n.d(e,"PortfolioStructure",(function(){return r.PortfolioStructure}))}}]);
//# sourceMappingURL=app~897c5a68.1703256e62c0b04cf6eb.bundle.map