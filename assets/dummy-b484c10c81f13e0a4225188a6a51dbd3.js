define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,l){"use strict";var r;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:l["default"].modulePrefix,podModulePrefix:l["default"].podModulePrefix,Resolver:n["default"]}),a["default"](r,l["default"].modulePrefix),e["default"]=r}),define("dummy/components/select-list",["exports","ember-select-list/components/select-list"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/objects",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({actions:{setOneWayValue:function(e){this.set("oneWayValue",e)},setTwoWayValue:function(e){this.set("twoWayValue",e)}}})}),define("dummy/controllers/strings",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({actions:{setOneWayValue:function(e){this.set("oneWayValue",e)},setTwoWayValue:function(e){this.set("twoWayValue",e)}}})}),define("dummy/helpers/is-equal-by-path",["exports","ember"],function(e,t){"use strict";var n=function(){function e(e,t){var n=[],a=!0,l=!1,r=void 0;try{for(var d,o=e[Symbol.iterator]();!(a=(d=o.next()).done)&&(n.push(d.value),!t||n.length!==t);a=!0);}catch(i){l=!0,r=i}finally{try{!a&&o["return"]&&o["return"]()}finally{if(l)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=t["default"].Helper.helper(function(e){var a=n(e,3),l=a[0],r=a[1],d=a[2];return d?t["default"].get(l,d)===r:l===r})}),define("dummy/helpers/is-not",["exports","ember"],function(e,t){"use strict";var n=function(){function e(e,t){var n=[],a=!0,l=!1,r=void 0;try{for(var d,o=e[Symbol.iterator]();!(a=(d=o.next()).done)&&(n.push(d.value),!t||n.length!==t);a=!0);}catch(i){l=!0,r=i}finally{try{!a&&o["return"]&&o["return"]()}finally{if(l)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=t["default"].Helper.helper(function(e){var t=n(e,1),a=t[0];return!a})}),define("dummy/helpers/read-path",["exports","ember"],function(e,t){"use strict";var n=function(){function e(e,t){var n=[],a=!0,l=!1,r=void 0;try{for(var d,o=e[Symbol.iterator]();!(a=(d=o.next()).done)&&(n.push(d.value),!t||n.length!==t);a=!0);}catch(i){l=!0,r=i}finally{try{!a&&o["return"]&&o["return"]()}finally{if(l)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=t["default"].Helper.helper(function(e){var a=n(e,2),l=a[0],r=a[1];return r?t["default"].get(l,r):l})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,l=n["default"].exportApplicationGlobal;a="string"==typeof l?l:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,l=!1;e["default"]={name:"App Version",initialize:function(e){if(!l){var r=a(e.toString());n["default"].libraries.register(r,t["default"].APP.version),l=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("strings",function(){this.route("one-way"),this.route("two-way"),this.route("prompt")}),this.route("objects",function(){this.route("one-way"),this.route("two-way"),this.route("prompt")})}),e["default"]=a}),define("dummy/routes/objects",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return[{label:"Item A",value:"item-a"},{label:"Item B",value:"item-b"},{label:"Item C",value:"item-c"}]}})}),define("dummy/routes/strings",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return["Item A","Item B","Item C"]}})}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:4,column:8},end:{line:4,column:36}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("String");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:5,column:8},end:{line:5,column:36}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Object");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("header"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2");e.setAttribute(a,"id","title");var l=e.createTextNode("Welcome to Ember");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("ul");e.setAttribute(a,"class","nav");var l=e.createTextNode("\n    ");e.appendChild(a,l);var l=e.createElement("li"),r=e.createComment("");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode("\n    ");e.appendChild(a,l);var l=e.createElement("li"),r=e.createComment("");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,3]),l=new Array(3);return l[0]=e.createMorphAt(e.childAt(a,[1]),0,0),l[1]=e.createMorphAt(e.childAt(a,[3]),0,0),l[2]=e.createMorphAt(e.childAt(t,[2]),0,0),l},statements:[["block","link-to",["strings"],[],0,null,["loc",[null,[4,8],[4,48]]]],["block","link-to",["objects"],[],1,null,["loc",[null,[5,8],[5,48]]]],["content","outlet",["loc",[null,[9,23],[9,33]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/components/select-list",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"dummy/templates/components/select-list.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("option");e.setAttribute(n,"value",""),e.setAttribute(n,"disabled","");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),l=new Array(2);return l[0]=e.createAttrMorph(a,"selected"),l[1]=e.createMorphAt(a,1,1),l},statements:[["attribute","selected",["subexpr","is-not",[["get","selection",["loc",[null,[2,46],[2,55]]]]],[],["loc",[null,[2,37],[2,57]]]]],["content","prompt",["loc",[null,[3,4],[3,14]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:7,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/components/select-list.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("option"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),l=new Array(3);return l[0]=e.createAttrMorph(a,"value"),l[1]=e.createAttrMorph(a,"selected"),l[2]=e.createMorphAt(a,1,1),l},statements:[["attribute","value",["concat",[["subexpr","read-path",[["get","item",["loc",[null,[8,29],[8,33]]]],["get","optionValuePath",["loc",[null,[8,34],[8,49]]]]],[],["loc",[null,[8,17],[8,51]]]]]]],["attribute","selected",["subexpr","is-equal-by-path",[["get","item",["loc",[null,[8,81],[8,85]]]],["get","value",["loc",[null,[8,86],[8,91]]]],["get","optionValuePath",["loc",[null,[8,92],[8,107]]]]],[],["loc",[null,[8,62],[8,109]]]]],["inline","read-path",[["get","item",["loc",[null,[9,16],[9,20]]]],["get","optionLabelPath",["loc",[null,[9,21],[9,36]]]]],[],["loc",[null,[9,4],[9,38]]]]],locals:["item"],templates:[]}}();return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"dummy/templates/components/select-list.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","prompt",["loc",[null,[1,6],[1,12]]]]],[],0,null,["loc",[null,[1,0],[5,7]]]],["block","each",[["get","content",["loc",[null,[7,8],[7,15]]]]],["key","@identity"],1,null,["loc",[null,[7,0],[11,9]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/objects",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:14,column:4},end:{line:16,column:4}},moduleName:"dummy/templates/objects.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Set to ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),l=new Array(2);return l[0]=e.createElementMorph(a),l[1]=e.createMorphAt(a,1,1),l},statements:[["element","action",["setOneWayValue",["get","item.value",["loc",[null,[15,40],[15,50]]]]],[],["loc",[null,[15,14],[15,52]]]],["content","item.label",["loc",[null,[15,60],[15,74]]]]],locals:["item"],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:30,column:4},end:{line:32,column:4}},moduleName:"dummy/templates/objects.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Set to ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),l=new Array(2);return l[0]=e.createElementMorph(a),l[1]=e.createMorphAt(a,1,1),l},statements:[["element","action",["setTwoWayValue",["get","item.value",["loc",[null,[31,40],[31,50]]]]],[],["loc",[null,[31,14],[31,52]]]],["content","item.label",["loc",[null,[31,60],[31,74]]]]],locals:["item"],templates:[]}}();return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:1,column:0},end:{line:42,column:0}},moduleName:"dummy/templates/objects.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3"),a=e.createTextNode("Objects");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("section"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h4"),l=e.createTextNode("One way");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createElement("em"),r=e.createTextNode("By default, the selected value binding only 'reads down' into the component. Any changes to the property within the component will not propagate up. This follows the ember ");e.appendChild(l,r);var r=e.createElement("strong"),d=e.createTextNode("data down, actions up");e.appendChild(r,d),e.appendChild(l,r);var r=e.createTextNode(" philosophy");e.appendChild(l,r),e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createElement("strong"),r=e.createTextNode("Selected value in controller:");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode(" ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("However, you can set the value of the dropdown from the controller...");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("\n");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("  ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("section"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h4"),l=e.createTextNode("Two way");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createElement("em"),r=e.createTextNode("Using the new ");e.appendChild(l,r);var r=e.createElement("code"),d=e.createTextNode("mut");e.appendChild(r,d),e.appendChild(l,r);var r=e.createTextNode(" helper, however, we are able to recreate the old behavior where selecting something from the dropdown will update the selection property within the component. In order to do this, we bind to the component's action using ");e.appendChild(l,r);var r=e.createElement("code"),d=e.createTextNode("action=(action (mut value))");e.appendChild(r,d),e.appendChild(l,r),e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("Try changing the dropdown value again...");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createElement("strong"),r=e.createTextNode("Selected value in controller:");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode(" ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("Setting the value from the controller still works as well...");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("\n");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("  ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("section"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h4"),l=e.createTextNode("Prompt");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("Finally, you can also set a prompt which is not selectable...");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),l=e.childAt(t,[4]),r=new Array(7);return r[0]=e.createMorphAt(a,5,5),r[1]=e.createMorphAt(e.childAt(a,[7]),2,2),r[2]=e.createMorphAt(e.childAt(a,[11]),1,1),r[3]=e.createMorphAt(l,5,5),r[4]=e.createMorphAt(e.childAt(l,[9]),2,2),r[5]=e.createMorphAt(e.childAt(l,[13]),1,1),r[6]=e.createMorphAt(e.childAt(t,[6]),3,3),r},statements:[["inline","select-list",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[7,24],[7,29]]]]],[],[]],"optionLabelPath","label","optionValuePath","value","value",["subexpr","@mut",[["get","oneWayValue",["loc",[null,[7,84],[7,95]]]]],[],[]]],["loc",[null,[7,2],[7,97]]]],["content","oneWayValue",["loc",[null,[9,52],[9,67]]]],["block","each",[["get","model",["loc",[null,[14,12],[14,17]]]]],[],0,null,["loc",[null,[14,4],[16,13]]]],["inline","select-list",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[24,24],[24,29]]]]],[],[]],"optionLabelPath","label","optionValuePath","value","value",["subexpr","@mut",[["get","twoWayValue",["loc",[null,[24,84],[24,95]]]]],[],[]],"action",["subexpr","action",[["subexpr","mut",[["get","twoWayValue",["loc",[null,[24,116],[24,127]]]]],[],["loc",[null,[24,111],[24,128]]]]],[],["loc",[null,[24,103],[24,129]]]]],["loc",[null,[24,2],[24,131]]]],["content","twoWayValue",["loc",[null,[27,52],[27,67]]]],["block","each",[["get","model",["loc",[null,[30,12],[30,17]]]]],[],1,null,["loc",[null,[30,4],[32,13]]]],["inline","select-list",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[38,24],[38,29]]]]],[],[]],"optionLabelPath","label","value",["subexpr","@mut",[["get","promptValue",["loc",[null,[38,60],[38,71]]]]],[],[]],"prompt","Select a value..."],["loc",[null,[38,2],[38,100]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/strings",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:13,column:4},end:{line:15,column:4}},moduleName:"dummy/templates/strings.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Set to ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),l=new Array(2);return l[0]=e.createElementMorph(a),l[1]=e.createMorphAt(a,1,1),l},statements:[["element","action",["setOneWayValue",["get","item",["loc",[null,[14,40],[14,44]]]]],[],["loc",[null,[14,14],[14,46]]]],["content","item",["loc",[null,[14,54],[14,62]]]]],locals:["item"],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:28,column:4},end:{line:30,column:4}},moduleName:"dummy/templates/strings.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Set to ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),l=new Array(2);return l[0]=e.createElementMorph(a),l[1]=e.createMorphAt(a,1,1),l},statements:[["element","action",["setSelection",["get","item",["loc",[null,[29,38],[29,42]]]]],[],["loc",[null,[29,14],[29,44]]]],["content","item",["loc",[null,[29,52],[29,60]]]]],locals:["item"],templates:[]}}();return{meta:{revision:"Ember@1.13.4",loc:{source:null,start:{line:1,column:0},end:{line:40,column:0}},moduleName:"dummy/templates/strings.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3"),a=e.createTextNode("Strings");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("section"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h4"),l=e.createTextNode("One way");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createElement("strong"),r=e.createTextNode("Selected value in controller:");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode(" ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("However, you can set the value of the dropdown from the controller...");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("\n");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("  ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("section"),a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createElement("h4"),l=e.createTextNode("Two way");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("Try changing the dropdown value again...");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createElement("strong"),r=e.createTextNode("Selected value in controller:");e.appendChild(l,r),e.appendChild(a,l);var l=e.createTextNode(" ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("Setting the value from the controller still works as well...");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("\n");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("  ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("section"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h4"),l=e.createTextNode("Prompt");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),l=e.createTextNode("Finally, you can also set a prompt which is not selectable...");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),l=e.childAt(t,[4]),r=new Array(7);return r[0]=e.createMorphAt(a,3,3),r[1]=e.createMorphAt(e.childAt(a,[5]),2,2),r[2]=e.createMorphAt(e.childAt(a,[9]),1,1),r[3]=e.createMorphAt(l,3,3),r[4]=e.createMorphAt(e.childAt(l,[7]),2,2),r[5]=e.createMorphAt(e.childAt(l,[11]),1,1),r[6]=e.createMorphAt(e.childAt(t,[6]),3,3),r},statements:[["inline","select-list",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[6,24],[6,29]]]]],[],[]],"value",["subexpr","@mut",[["get","oneWayValue",["loc",[null,[6,36],[6,47]]]]],[],[]]],["loc",[null,[6,2],[6,49]]]],["content","oneWayValue",["loc",[null,[8,52],[8,67]]]],["block","each",[["get","model",["loc",[null,[13,12],[13,17]]]]],[],0,null,["loc",[null,[13,4],[15,13]]]],["inline","select-list",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[22,24],[22,29]]]]],[],[]],"value",["subexpr","@mut",[["get","twoWayValue",["loc",[null,[22,36],[22,47]]]]],[],[]],"action",["subexpr","action",[["subexpr","mut",[["get","twoWayValue",["loc",[null,[22,68],[22,79]]]]],[],["loc",[null,[22,63],[22,80]]]]],[],["loc",[null,[22,55],[22,81]]]]],["loc",[null,[22,2],[22,83]]]],["content","twoWayValue",["loc",[null,[25,52],[25,67]]]],["block","each",[["get","model",["loc",[null,[28,12],[28,17]]]]],[],1,null,["loc",[null,[28,4],[30,13]]]],["inline","select-list",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[36,24],[36,29]]]]],[],[]],"value",["subexpr","@mut",[["get","promptValue",["loc",[null,[36,36],[36,47]]]]],[],[]],"prompt","Select a value..."],["loc",[null,[36,2],[36,76]]]]],locals:[],templates:[e,t]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),l=JSON.parse(unescape(a));return{"default":l}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-select-list",version:"0.9.4+cc92c694"});