(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _js_routes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/routes.js */ "./assets/js/routes.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var _js_views_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/views/App */ "./assets/js/views/App.vue");
/* harmony import */ var _js_store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/store/store */ "./assets/js/store/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application




vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(vuelidate__WEBPACK_IMPORTED_MODULE_6__.Vuelidate);



window.axios = (axios__WEBPACK_IMPORTED_MODULE_9___default());
var token = JSON.parse(localStorage.getItem('token'));
if (token) {
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
var app = new vue__WEBPACK_IMPORTED_MODULE_5__["default"]({
  el: '#app',
  router: _js_routes_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: function render(h) {
    return h(_js_views_App__WEBPACK_IMPORTED_MODULE_7__["default"]);
  },
  store: _js_store_store__WEBPACK_IMPORTED_MODULE_8__.store,
  beforeCreate: function beforeCreate() {
    axios__WEBPACK_IMPORTED_MODULE_9___default().interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      console.log(error.response.status);
      console.log(token);
      if (error.response.status == 401 && token) {
        localStorage.removeItem('token');
        window.location.assign(window.location.origin + '/login');
      }
      return Promise.reject(error);
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/routes.js":
/*!*****************************!*\
  !*** ./assets/js/routes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store */ "./assets/js/store/store.js");









vue__WEBPACK_IMPORTED_MODULE_7__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_8__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_8__["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    meta: {
      requiresAuth: true
    },
    component: function component() {
      return __webpack_require__.e(/*! import() */ "assets_js_views_Home_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./views/Home */ "./assets/js/views/Home.vue"));
    }
  }, {
    path: '/register',
    name: 'register',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "assets_js_views_Public_Register_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./views/Public/Register */ "./assets/js/views/Public/Register.vue"));
    }
  }, {
    path: '/login',
    name: 'login',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "assets_js_views_Public_Login_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./views/Public/Login */ "./assets/js/views/Public/Login.vue"));
    }
  }]
});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    var token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      next({
        name: 'login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./assets/js/store/ratings.js":
/*!************************************!*\
  !*** ./assets/js/store/ratings.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ratings": () => (/* binding */ ratings)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_unshift_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.unshift.js */ "./node_modules/core-js/modules/es.array.unshift.js");
/* harmony import */ var core_js_modules_es_array_unshift_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unshift_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var ratings = {
  namespaced: true,
  state: {
    ratings: null
  },
  mutations: {
    setRatings: function setRatings(state, ratings) {
      state.ratings = ratings;
    },
    addRating: function addRating(state, rating) {
      state.ratings.unshift(rating);
    }
  },
  actions: {
    add: function add(_ref, data) {
      var commit = _ref.commit;
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/rate', data).then(function (result) {
        console.log(result.data);
        commit('addRating', result.data);
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    getRatings: function getRatings(_ref2) {
      var commit = _ref2.commit;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/ratings').then(function (result) {
        console.log(result.data);
        commit('setRatings', result.data);
      })["catch"](function (error) {});
    }
  },
  getters: {
    ratings: function ratings(state) {
      console.log(state.ratings);
      return state.ratings;
    }
  }
};

/***/ }),

/***/ "./assets/js/store/store.js":
/*!**********************************!*\
  !*** ./assets/js/store/store.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./assets/js/store/user.js");
/* harmony import */ var _ratings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratings */ "./assets/js/store/ratings.js");




vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_3__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_3__["default"].Store({
  modules: {
    user: _user__WEBPACK_IMPORTED_MODULE_0__.user,
    ratings: _ratings__WEBPACK_IMPORTED_MODULE_1__.ratings
  }
});

/***/ }),

/***/ "./assets/js/store/user.js":
/*!*********************************!*\
  !*** ./assets/js/store/user.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => (/* binding */ user)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./assets/js/routes.js");




var user = {
  namespaced: true,
  state: {
    message: null,
    error: false
  },
  mutations: {
    changeMessage: function changeMessage(state, data) {
      state.message = data.message;
      state.error = data.error;
    }
  },
  actions: {
    register: function register(_ref, data) {
      var commit = _ref.commit;
      axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/register', data).then(function (result) {
        commit('changeMessage', {
          message: result.data.message,
          error: false
        });
      })["catch"](function (error) {
        commit('changeMessage', {
          message: error.response.data.message,
          error: true
        });
      });
    },
    login: function login(_ref2, data) {
      var commit = _ref2.commit;
      axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/login_check', data).then(function (result) {
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = 'Bearer ' + result.data.token;
        localStorage.setItem('token', JSON.stringify(result.data.token));
        _routes__WEBPACK_IMPORTED_MODULE_3__["default"].push('/');
      })["catch"](function (error) {
        commit('changeMessage', {
          message: error.response.data.message,
          error: true
        });
      });
    },
    clearError: function clearError(_ref3) {
      var commit = _ref3.commit;
      commit('changeMessage', {
        message: null,
        error: false
      });
    },
    logout: function logout() {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/logout').then(function (result) {
        console.log(result);
        localStorage.removeItem('token');
        _routes__WEBPACK_IMPORTED_MODULE_3__["default"].push('/login');
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  getters: {}
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/views/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/views/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "App"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/views/App.vue?vue&type=template&id=1d8190f0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/views/App.vue?vue&type=template&id=1d8190f0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("router-view");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/views/App.vue":
/*!*********************************!*\
  !*** ./assets/js/views/App.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_1d8190f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1d8190f0&scoped=true& */ "./assets/js/views/App.vue?vue&type=template&id=1d8190f0&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/js/views/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_1d8190f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_1d8190f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1d8190f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/views/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/js/views/App.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./assets/js/views/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/views/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/views/App.vue?vue&type=template&id=1d8190f0&scoped=true&":
/*!****************************************************************************!*\
  !*** ./assets/js/views/App.vue?vue&type=template&id=1d8190f0&scoped=true& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1d8190f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1d8190f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1d8190f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=1d8190f0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/js/views/App.vue?vue&type=template&id=1d8190f0&scoped=true&");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-3e6a78"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDaUIsVUFBVSxDQUFFLE9BQU8sQ0FBQztRQUNqQ1Ysb0RBQVcsQ0FBQyxRQUFRLENBQUM7TUFDekIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDTSxLQUFLLEVBQUs7UUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUN0QixDQUFDLENBQUM7SUFDVjtFQUNKLENBQUM7RUFDRDZDLE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RELGlFQUFlO0VBQ2Y1QjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRCxJQUFJdEIsTUFBTSxHQUFHLFNBQVNBLE1BQU0sR0FBRztFQUM3QixJQUFJZ0UsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQUMsYUFBYSxDQUFDO0FBQzFCLENBQUM7QUFDRCxJQUFJRSxlQUFlLEdBQUcsRUFBRTtBQUN4Qm5FLE1BQU0sQ0FBQ29FLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7O0FDTjNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQThGO0FBQ3ZDO0FBQ0w7OztBQUdsRDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLHlFQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENrTCxDQUFDLGlFQUFlLDhMQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvcmF0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JlL3VzZXIuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy92aWV3cy9BcHAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92aWV3cy9BcHAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz85ZDcxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92aWV3cy9BcHAudnVlPzkzMzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZpZXdzL0FwcC52dWU/YTQzNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmlld3MvQXBwLnZ1ZT8yNWQ0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuaW1wb3J0IFJvdXRlcyBmcm9tICcuL2pzL3JvdXRlcy5qcyc7XG5pbXBvcnQge1Z1ZWxpZGF0ZX0gZnJvbSBcInZ1ZWxpZGF0ZVwiO1xuXG5WdWUudXNlKFZ1ZWxpZGF0ZSk7XG5pbXBvcnQgQXBwIGZyb20gJy4vanMvdmlld3MvQXBwJztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9qcy9zdG9yZS9zdG9yZSdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxud2luZG93LmF4aW9zID0gYXhpb3M7XG5cbmxldCB0b2tlbiA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICk7XG5pZiggdG9rZW4gKXtcbiAgICB3aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRva2VuO1xufVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIHJvdXRlcjogUm91dGVzLFxuICAgIHJlbmRlcjogaCA9PiBoKEFwcCksXG4gICAgc3RvcmUsXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9LCAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgICAgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSAmJiB0b2tlbil7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2xvZ2luJyApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4vc3RvcmUvc3RvcmUnO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICAgIG1vZGU6ICdoaXN0b3J5JyxcbiAgICByb3V0ZXM6W1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOicvJyxcbiAgICAgICAgICAgIG5hbWU6J2hvbWUnLFxuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVzQXV0aDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0hvbWUnKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL3JlZ2lzdGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZWdpc3RlcicsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi92aWV3cy9QdWJsaWMvUmVnaXN0ZXInKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgICAgICAgIG5hbWU6ICdsb2dpbicsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICgpID0+ICBpbXBvcnQoJy4vdmlld3MvUHVibGljL0xvZ2luJylcbiAgICAgICAgfVxuICAgIF1cbn0pO1xuXG5yb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICBpZiAodG8ubWF0Y2hlZC5zb21lKHJlY29yZCA9PiByZWNvcmQubWV0YS5yZXF1aXJlc0F1dGgpKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIG5leHQoeyBuYW1lOiAnbG9naW4nIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKVxuICAgIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCByYXRpbmdzID0ge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgc3RhdGU6IHtcbiAgICAgICAgcmF0aW5nczogbnVsbFxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIHNldFJhdGluZ3Moc3RhdGUsIHJhdGluZ3Mpe1xuICAgICAgICAgICAgc3RhdGUucmF0aW5ncyA9IHJhdGluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFJhdGluZyhzdGF0ZSwgcmF0aW5nKXtcbiAgICAgICAgICAgIHN0YXRlLnJhdGluZ3MudW5zaGlmdChyYXRpbmcpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZCh7Y29tbWl0fSwgZGF0YSkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9yYXRlJywgZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KCdhZGRSYXRpbmcnLCByZXN1bHQuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJhdGluZ3MoeyBjb21taXQgfSkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3JhdGluZ3MnKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnc2V0UmF0aW5ncycsIHJlc3VsdC5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldHRlcnM6IHtcbiAgICAgICAgcmF0aW5ncyhzdGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUucmF0aW5ncylcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5yYXRpbmdzO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG5pbXBvcnQgeyB1c2VyIH0gZnJvbSAnLi91c2VyJztcbmltcG9ydCB7IHJhdGluZ3MgfSBmcm9tICcuL3JhdGluZ3MnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG4gICAgbW9kdWxlczoge1xuICAgICAgICB1c2VyLFxuICAgICAgICByYXRpbmdzXG4gICAgfVxufSkiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VyID0ge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgc3RhdGU6IHtcbiAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgY2hhbmdlTWVzc2FnZShzdGF0ZSxkYXRhKSB7XG4gICAgICAgICAgICBzdGF0ZS5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBkYXRhLmVycm9yO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHJlZ2lzdGVyKHtjb21taXR9LCBkYXRhKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3JlZ2lzdGVyJywgZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnY2hhbmdlTWVzc2FnZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnY2hhbmdlTWVzc2FnZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOmVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvZ2luKHtjb21taXR9LCBkYXRhKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2xvZ2luX2NoZWNrJywgZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyByZXN1bHQuZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oICd0b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhLnRva2VuKSApO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21taXQoJ2NoYW5nZU1lc3NhZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOmVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9LFxuICAgICAgICBjbGVhckVycm9yKHtjb21taXR9KXtcbiAgICAgICAgICAgIGNvbW1pdCgnY2hhbmdlTWVzc2FnZScsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2xvZ291dCcpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCAndG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXR0ZXJzOiB7fVxufSIsIjx0ZW1wbGF0ZT5cbiAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJBcHBcIlxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwicm91dGVyLXZpZXdcIilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQ4MTkwZjAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWQ4MTkwZjBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3NwaXJpdHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWQ4MTkwZjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWQ4MTkwZjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWQ4MTkwZjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQ4MTkwZjAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWQ4MTkwZjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy92aWV3cy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkODE5MGYwJnNjb3BlZD10cnVlJlwiIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJWdWUiLCJSb3V0ZXMiLCJWdWVsaWRhdGUiLCJ1c2UiLCJBcHAiLCJzdG9yZSIsImF4aW9zIiwid2luZG93IiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXBwIiwiZWwiLCJyb3V0ZXIiLCJyZW5kZXIiLCJoIiwiYmVmb3JlQ3JlYXRlIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJhc3NpZ24iLCJvcmlnaW4iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiVnVlUm91dGVyIiwibW9kZSIsInJvdXRlcyIsInBhdGgiLCJuYW1lIiwibWV0YSIsInJlcXVpcmVzQXV0aCIsImNvbXBvbmVudCIsImJlZm9yZUVhY2giLCJ0byIsImZyb20iLCJuZXh0IiwibWF0Y2hlZCIsInNvbWUiLCJyZWNvcmQiLCJyYXRpbmdzIiwibmFtZXNwYWNlZCIsInN0YXRlIiwibXV0YXRpb25zIiwic2V0UmF0aW5ncyIsImFkZFJhdGluZyIsInJhdGluZyIsInVuc2hpZnQiLCJhY3Rpb25zIiwiYWRkIiwiZGF0YSIsImNvbW1pdCIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwiZ2V0UmF0aW5ncyIsImdldCIsImdldHRlcnMiLCJWdWV4IiwidXNlciIsIlN0b3JlIiwibW9kdWxlcyIsIm1lc3NhZ2UiLCJjaGFuZ2VNZXNzYWdlIiwicmVnaXN0ZXIiLCJsb2dpbiIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwdXNoIiwiY2xlYXJFcnJvciIsImxvZ291dCIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sInNvdXJjZVJvb3QiOiIifQ==