(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(142);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(140);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(141);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);


var actionCreators = {
    requestPeople: function () { return function (dispatch, getState) {
        var fetchTask = fetch('api/Person/Index', {
            method: 'get'
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            dispatch({ type: 'RECEIVE_PEOPLE', people: data });
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
        dispatch({ type: 'REQUEST_PEOPLE' });
    }; },
    addPerson: function () { return function (dispatch, getState) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/person/add"));
    }; },
    editPerson: function (person) { return function (dispatch, getState) {
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/person/edit/" + person.id));
    }; },
    deletePerson: function (personId) { return function (dispatch, getState) {
        var fetchTask = fetch("api/Person/Delete?personId=" + personId, {
            method: 'delete'
        })
            .then(function (data) {
            dispatch({ type: 'RECEIVE_GENERIC_RESULT' });
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
        dispatch({ type: 'DELETE_PERSON', personId: personId });
    }; },
};
var unloadedState = { people: [], isLoading: false };
var reducer = function (state, incomingAction) {
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_PEOPLE':
            return {
                people: state.people,
                isLoading: true
            };
        case 'DELETE_PERSON':
            var newState = Object.assign({}, state);
            var indexOfPersonToDelete = state.people.findIndex(function (person) {
                return person.id == action.personId;
            });
            newState.isLoading = true;
            newState.people.splice(indexOfPersonToDelete, 1);
            return newState;
        case 'RECEIVE_PEOPLE':
            return {
                people: action.people,
                isLoading: false
            };
        case 'RECEIVE_GENERIC_RESULT':
            return {
                people: state.people,
                isLoading: false
            };
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);


var actionCreators = {
    requestPerson: function (personId) { return function (dispatch, getState) {
        if (personId) {
            var fetchTask = fetch("api/Person/Details?personId=" + personId, {
                method: 'get'
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_PERSON', person: data });
            });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
            dispatch({ type: 'REQUEST_PERSON', personId: personId });
        }
    }; },
    savePersonChanges: function (person) { return function (dispatch, getState) {
        var apiMethodUrl = "api/Person/Add";
        var apiMethodType = "post";
        if (person.id && person.id != -1) {
            apiMethodUrl = "api/Person/Update";
            apiMethodType = "put";
        }
        var fetchTask = fetch(apiMethodUrl, {
            method: apiMethodType,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(person),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data) {
                dispatch({ type: 'VALIDATION_ERROR', errorMessage: data });
            }
            else {
                dispatch({ type: 'RECEIVE_GENERIC_RESULT' });
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/fetchpeople"));
            }
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
        dispatch({ type: 'SAVE_PERSON', person: person });
    }; },
    cancelManagePerson: function () { return function (dispatch, getState) {
        dispatch({ type: 'CANCEL_MANAGE' });
        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["push"])("/fetchpeople"));
    }; },
};
var emptyPerson = { firstName: '', lastName: '', phoneNumber: '' };
var unloadedState = { isLoading: false, person: emptyPerson };
var reducer = function (state, incomingAction) {
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_PERSON':
            return {
                person: state.person,
                isLoading: true
            };
        case 'RECEIVE_PERSON':
            return {
                person: action.person,
                isLoading: false
            };
        case 'SAVE_PERSON':
            return {
                person: action.person,
                isLoading: true
            };
        case 'RECEIVE_GENERIC_RESULT':
            return {
                person: emptyPerson,
                isLoading: false,
                validationErrorMessage: undefined
            };
        case 'CANCEL_MANAGE':
            return {
                person: emptyPerson,
                isLoading: false,
                validationErrorMessage: undefined
            };
        case 'VALIDATION_ERROR':
            return {
                person: state.person,
                isLoading: false,
                validationErrorMessage: action.errorMessage
            };
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(135);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(19);




function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history)), devToolsExtension ? devToolsExtension() : function (next) { return next; })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_FetchPeople__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ManagePerson__ = __webpack_require__(17);






var routes = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */], null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/fetchpeople', component: __WEBPACK_IMPORTED_MODULE_4__components_FetchPeople__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/person/add', component: __WEBPACK_IMPORTED_MODULE_5__components_ManagePerson__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/person/edit/:personId', component: __WEBPACK_IMPORTED_MODULE_5__components_ManagePerson__["a" /* default */] }));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(132);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(137);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(139);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(8);









/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        // Prepare Redux store with in-memory history, and dispatch a navigation event
        // corresponding to the incoming URL
        var basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
        var urlAfterBasename = params.url.substring(basename.length);
        var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__configureStore__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_history__["createMemoryHistory"])());
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["replace"])(urlAfterBasename));
        // Prepare an instance of the application and perform an inital render that will
        // cause any async tasks (e.g., data access) to begin
        var routerContext = {};
        var app = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], { store: store },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { basename: basename, context: routerContext, location: params.location.path, children: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */] })));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);
        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }
        // Once any async tasks are done, we can perform the final render
        // We also send the redux store state, so the client can continue execution where the server left off
        params.domainTasks.then(function () {
            resolve({
                html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                globals: { initialReduxState: store.getState() }
            });
        }, reject); // Also propagate any errors back into the host application
    });
}));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_People__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FetchPeople = (function (_super) {
    __extends(FetchPeople, _super);
    function FetchPeople() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FetchPeople.prototype.componentWillMount = function () {
        this.props.requestPeople();
    };
    //componentWillReceiveProps(nextProps: PersonProps) {
    //	this.props.requestPeople();
    //}
    FetchPeople.prototype.confirmDelete = function (person) {
        if (confirm("Are you sure you want to delete " + person.firstName + " " + person.lastName + "?")) {
            this.props.deletePerson(person.id);
        }
    };
    FetchPeople.prototype.render = function () {
        var contents = this.props.isLoading
            ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("em", null, "Loading..."))
            : this.renderPeopleTable();
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "People"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "This component is part of the Coding Challenge by Upstack."),
            contents);
    };
    FetchPeople.prototype.renderPeopleTable = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn", onClick: this.props.addPerson }, "Add"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { className: "table" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "First Name"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Last Name"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Phone Number"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Actions"))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, this.props.people.map(function (person) {
                    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: person.id },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, person.firstName),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, person.lastName),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, person.phoneNumber),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn", onClick: function (e) { return _this.props.editPerson(person); } }, "Edit"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn", onClick: function (e) { return _this.confirmDelete(person); } }, "Delete")));
                }))));
    };
    return FetchPeople;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) { return state.people; }, __WEBPACK_IMPORTED_MODULE_2__store_People__["a" /* actionCreators */])(FetchPeople));


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello, world!"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Welcome to your new single-page application, built with:"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://get.asp.net/' }, "ASP.NET Core"),
                    " and ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' }, "C#"),
                    " for cross-platform server-side code"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://facebook.github.io/react/' }, "React"),
                    ", ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'http://redux.js.org' }, "Redux"),
                    ", and ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'http://www.typescriptlang.org/' }, "TypeScript"),
                    " for client-side code"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'https://webpack.github.io/' }, "Webpack"),
                    " for building and bundling client-side resources"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: 'http://getbootstrap.com/' }, "Bootstrap"),
                    " for layout and styling")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "To help you get started, we've also set up:"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Client-side navigation"),
                    ". For example, click ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("em", null, "Counter"),
                    " then ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("em", null, "Back"),
                    " to return here."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Webpack dev middleware"),
                    ". In development mode, there's no need to run the ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("code", null, "webpack"),
                    " build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Hot module replacement"),
                    ". In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Efficient production builds"),
                    ". In production mode, development-time features are disabled, and the ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("code", null, "webpack"),
                    " build tool produces minified static CSS and JavaScript files."),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Server-side prerendering"),
                    ". To optimize startup time, your React application is first rendered on the server. The initial HTML and state is then transferred to the browser, where client-side code picks up where the server left off.")));
    };
    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Home);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'container-fluid' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-sm-3' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__NavMenu__["a" /* NavMenu */], null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'col-sm-9' }, this.props.children)));
    };
    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_Person__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ManagePerson = (function (_super) {
    __extends(ManagePerson, _super);
    function ManagePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManagePerson.prototype.componentWillMount = function () {
        var personId = parseInt(this.props.match.params.personId);
        if (personId) {
            this.props.requestPerson(personId);
        }
    };
    ManagePerson.prototype.onFirstNameChange = function (e) {
        this.props.person.firstName = e.target.value;
    };
    ManagePerson.prototype.onLastNameChange = function (e) {
        this.props.person.lastName = e.target.value;
    };
    ManagePerson.prototype.onPhoneNumberChange = function (e) {
        this.props.person.phoneNumber = e.target.value;
    };
    ManagePerson.prototype.render = function () {
        var contents = this.props.isLoading
            ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("em", null, "Loading..."))
            : this.renderPersonForm();
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Person"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "This component is part of the Coding Challenge by Upstack."),
            contents);
    };
    ManagePerson.prototype.renderPersonForm = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: "red" } }, this.props.validationErrorMessage),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: function (e) { return _this.props.savePersonChanges(_this.props.person); } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group row" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "hidden", name: "id", value: this.props.person.id })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group row" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: " control-label col-md-12", htmlFor: "firstName" }, "First Name"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-4" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: "form-control", type: "text", name: "firstName", defaultValue: this.props.person.firstName, onChange: function (e) { return _this.onFirstNameChange(e); }, required: true, maxLength: 100 }))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group row" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "control-label col-md-12", htmlFor: "lastName" }, "Last Name"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-4" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: "form-control", type: "text", name: "lastName", defaultValue: this.props.person.lastName, onChange: function (e) { return _this.onLastNameChange(e); }, maxLength: 100 }))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group row" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "control-label col-md-12", htmlFor: "phoneNumber" }, "Phone Number"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-4" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: "form-control", type: "text", name: "phoneNumber", defaultValue: this.props.person.phoneNumber, onChange: function (e) { return _this.onPhoneNumberChange(e); }, required: true, maxLength: 20, pattern: "^[\+]?([0-9]+ ?)+$" }))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "submit", className: "btn btn-default" }, "Save"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn", onClick: function (e) { return _this.props.cancelManagePerson(); } }, "Cancel"))));
    };
    return ManagePerson;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) { return state.person; }, __WEBPACK_IMPORTED_MODULE_2__store_Person__["a" /* actionCreators */])(ManagePerson));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var NavMenu = (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavMenu.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'main-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'navbar navbar-inverse' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'navbar-header' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: 'button', className: 'navbar-toggle', "data-toggle": 'collapse', "data-target": '.navbar-collapse' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'sr-only' }, "Toggle navigation"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'icon-bar' }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'icon-bar' }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'icon-bar' })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: 'navbar-brand', to: '/' }, "CodingChallenge")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'clearfix' }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: 'navbar-collapse collapse' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: 'nav navbar-nav' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"], { exact: true, to: '/', activeClassName: 'active' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'glyphicon glyphicon-home' }),
                                " Home")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"], { to: '/fetchpeople', activeClassName: 'active' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: 'glyphicon glyphicon-th-list' }),
                                " Fetch people"))))));
    };
    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__People__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Person__ = __webpack_require__(6);


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    people: __WEBPACK_IMPORTED_MODULE_0__People__["b" /* reducer */],
    person: __WEBPACK_IMPORTED_MODULE_1__Person__["b" /* reducer */]
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(143);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(70);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTAwZjcxZTkzNGM4ZDQ1N2IzODgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1Blb3BsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvUGVyc29uLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZG9tYWluLXRhc2svaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0ZldGNoUGVvcGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL01hbmFnZVBlcnNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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UyxFQUFDLGVBQWUsaUJBQWEsVUFBVSxpQkFBYSxrQkFBa0I7d0JBQ2pHLCtEQUFNLFNBQVMsRUFBQyxTQUFTLHdCQUF5Qjt3QkFDbEQsK0RBQU0sU0FBUyxFQUFDLFVBQVUsR0FBUTt3QkFDbEMsK0RBQU0sU0FBUyxFQUFDLFVBQVUsR0FBUTt3QkFDbEMsK0RBQU0sU0FBUyxFQUFDLFVBQVUsR0FBUSxDQUM3QjtvQkFDVCxxREFBQyxzREFBSSxJQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsRUFBRSxFQUFHLEdBQUcsc0JBQXlCLENBQzlEO2dCQUNOLDhEQUFLLFNBQVMsRUFBQyxVQUFVLEdBQU87Z0JBQ2hDLDhEQUFLLFNBQVMsRUFBQywwQkFBMEI7b0JBQ3JDLDZEQUFJLFNBQVMsRUFBQyxnQkFBZ0I7d0JBQzFCOzRCQUNJLHFEQUFDLHlEQUFPLElBQUMsS0FBSyxRQUFDLEVBQUUsRUFBRyxHQUFHLEVBQUcsZUFBZSxFQUFDLFFBQVE7Z0NBQzlDLCtEQUFNLFNBQVMsRUFBQywwQkFBMEIsR0FBUTt3Q0FDNUMsQ0FDVDt3QkFDdkI7NEJBQ0MscURBQUMseURBQU8sSUFBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBQyxRQUFRO2dDQUNwRCwrREFBTSxTQUFTLEVBQUMsNkJBQTZCLEdBQVE7Z0RBQ3ZCLENBQzNCLENBQ2MsQ0FDSCxDQUNKLENBQ0osQ0FBQztJQUNYLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQS9CNEIsZ0RBQWUsR0ErQjNDOzs7Ozs7Ozs7Ozs7QUNsQ2tDO0FBQ0E7QUFRbkMsc0dBQXNHO0FBQ3RHLHdHQUF3RztBQUN4Ryw0REFBNEQ7QUFDckQsSUFBTSxRQUFRLEdBQUc7SUFDdkIsTUFBTSxFQUFFLHdEQUFjO0lBQ3RCLE1BQU0sRUFBRSx3REFBYztDQUN0QixDQUFDOzs7Ozs7O0FDZkYsK0M7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMDBmNzFlOTM0YzhkNDU3YjM4OCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiLi92ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcImRvbWFpbi10YXNrXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiwgcHVzaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tIFwiQ2xpZW50QXBwL3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tICdDbGllbnRBcHAvc3RvcmUvUGVyc29uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVvcGxlU3RhdGUge1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG5cdHBlb3BsZTogUGVyc29uW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0UGVvcGxlQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRVFVRVNUX1BFT1BMRSc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBFZGl0UGVyc29uQWN0aW9uIHtcclxuXHR0eXBlOiBSb3V0ZXJBY3Rpb247XHJcbn1cclxuXHJcbmludGVyZmFjZSBEZWxldGVQZXJzb25BY3Rpb24ge1xyXG5cdHR5cGU6ICdERUxFVEVfUEVSU09OJztcclxuXHRwZXJzb25JZD86IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVQZW9wbGVBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFQ0VJVkVfUEVPUExFJztcclxuICAgIHBlb3BsZTogUGVyc29uW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZWNlaXZlR2VuZXJpY1Jlc3VsdEFjdGlvbiB7XHJcblx0dHlwZTogJ1JFQ0VJVkVfR0VORVJJQ19SRVNVTFQnO1xyXG59XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gUmVxdWVzdFBlb3BsZUFjdGlvbiB8IERlbGV0ZVBlcnNvbkFjdGlvbiB8IFJlY2VpdmVQZW9wbGVBY3Rpb24gfCBSZWNlaXZlR2VuZXJpY1Jlc3VsdEFjdGlvbjtcclxudHlwZSBJbXBvcnRlZEFjdGlvbiA9IFJvdXRlckFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHJlcXVlc3RQZW9wbGU6ICgpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cdFx0bGV0IGZldGNoVGFzayA9IGZldGNoKCdhcGkvUGVyc29uL0luZGV4Jywge1xyXG5cdFx0XHRcdG1ldGhvZDogJ2dldCdcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8UGVyc29uW10+KVxyXG5cdFx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX1BFT1BMRScsIHBlb3BsZTogZGF0YSB9KTtcclxuXHRcdFx0fSk7XHJcblxyXG4gICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUX1BFT1BMRScgfSk7XHJcblx0fSxcclxuXHRhZGRQZXJzb246ICgpOiBBcHBUaHVua0FjdGlvbjxJbXBvcnRlZEFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2gocHVzaChgL3BlcnNvbi9hZGRgKSk7XHJcblx0fSxcclxuXHRlZGl0UGVyc29uOiAocGVyc29uOiBQZXJzb24pOiBBcHBUaHVua0FjdGlvbjxJbXBvcnRlZEFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2gocHVzaChgL3BlcnNvbi9lZGl0LyR7IHBlcnNvbi5pZCB9YCkpO1xyXG5cdH0sXHJcblx0ZGVsZXRlUGVyc29uOiAocGVyc29uSWQ/OiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cdFx0bGV0IGZldGNoVGFzayA9IGZldGNoKGBhcGkvUGVyc29uL0RlbGV0ZT9wZXJzb25JZD0keyBwZXJzb25JZCB9YCwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ2RlbGV0ZSdcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnUkVDRUlWRV9HRU5FUklDX1JFU1VMVCcgfSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHJcblx0XHRhZGRUYXNrKGZldGNoVGFzayk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfUEVSU09OJywgcGVyc29uSWQ6IHBlcnNvbklkIH0pO1xyXG5cdH0sXHJcbn07XHJcblxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBQZW9wbGVTdGF0ZSA9IHsgcGVvcGxlOiBbXSwgaXNMb2FkaW5nOiBmYWxzZSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8UGVvcGxlU3RhdGU+ID0gKHN0YXRlOiBQZW9wbGVTdGF0ZSwgaW5jb21pbmdBY3Rpb246IEFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uID0gaW5jb21pbmdBY3Rpb24gYXMgS25vd25BY3Rpb247XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9QRU9QTEUnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlOiBzdGF0ZS5wZW9wbGUsXHJcblx0XHRcdFx0aXNMb2FkaW5nOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdERUxFVEVfUEVSU09OJzpcclxuXHRcdFx0Y29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblx0XHRcdGNvbnN0IGluZGV4T2ZQZXJzb25Ub0RlbGV0ZSA9IHN0YXRlLnBlb3BsZS5maW5kSW5kZXgocGVyc29uID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcGVyc29uLmlkID09IGFjdGlvbi5wZXJzb25JZFxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0bmV3U3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0bmV3U3RhdGUucGVvcGxlLnNwbGljZShpbmRleE9mUGVyc29uVG9EZWxldGUsIDEpO1xyXG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XHJcblx0XHRjYXNlICdSRUNFSVZFX1BFT1BMRSc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGU6IGFjdGlvbi5wZW9wbGUsXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnUkVDRUlWRV9HRU5FUklDX1JFU1VMVCc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGVvcGxlOiBzdGF0ZS5wZW9wbGUsXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9QZW9wbGUudHMiLCJpbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcImRvbWFpbi10YXNrXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiwgcHVzaCwgcm91dGVyQWN0aW9ucyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tIFwiQ2xpZW50QXBwL3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJzb24ge1xyXG5cdGlkPzogbnVtYmVyO1xyXG5cdGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdGxhc3ROYW1lOiBzdHJpbmc7XHJcblx0cGhvbmVOdW1iZXI6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25TdGF0ZSB7XHJcblx0aXNMb2FkaW5nOiBib29sZWFuO1xyXG5cdHBlcnNvbjogUGVyc29uO1xyXG5cdHZhbGlkYXRpb25FcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0UGVyc29uQWN0aW9uIHtcclxuXHR0eXBlOiAnUkVRVUVTVF9QRVJTT04nO1xyXG5cdHBlcnNvbklkOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTYXZlUGVyc29uQWN0aW9uIHtcclxuXHR0eXBlOiAnU0FWRV9QRVJTT04nO1xyXG5cdHBlcnNvbjogUGVyc29uO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVjZWl2ZVBlcnNvbkFjdGlvbiB7XHJcblx0dHlwZTogJ1JFQ0VJVkVfUEVSU09OJztcclxuXHRwZXJzb246IFBlcnNvbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVHZW5lcmljUmVzdWx0QWN0aW9uIHtcclxuXHR0eXBlOiAnUkVDRUlWRV9HRU5FUklDX1JFU1VMVCc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYW5jZWxNYW5hZ2VBY3Rpb24ge1xyXG5cdHR5cGU6ICdDQU5DRUxfTUFOQUdFJztcclxufVxyXG5cclxuaW50ZXJmYWNlIFZhbGlkYXRpb25FcnJvckFjdGlvbiB7XHJcblx0dHlwZTogJ1ZBTElEQVRJT05fRVJST1InO1xyXG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gUmVxdWVzdFBlcnNvbkFjdGlvbiB8IFNhdmVQZXJzb25BY3Rpb24gfCBSZWNlaXZlUGVyc29uQWN0aW9uIHwgUmVjZWl2ZUdlbmVyaWNSZXN1bHRBY3Rpb24gfCBDYW5jZWxNYW5hZ2VBY3Rpb24gfCBWYWxpZGF0aW9uRXJyb3JBY3Rpb247XHJcbnR5cGUgSW1wb3J0ZWRBY3Rpb24gPSBSb3V0ZXJBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcblx0cmVxdWVzdFBlcnNvbjogKHBlcnNvbklkOiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cdFx0aWYgKHBlcnNvbklkKSB7XHJcblx0XHRcdGxldCBmZXRjaFRhc2sgPSBmZXRjaChgYXBpL1BlcnNvbi9EZXRhaWxzP3BlcnNvbklkPSR7cGVyc29uSWR9YCwge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnZ2V0J1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8UGVyc29uPilcclxuXHRcdFx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfUEVSU09OJywgcGVyc29uOiBkYXRhIH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0YWRkVGFzayhmZXRjaFRhc2spO1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUX1BFUlNPTicsIHBlcnNvbklkOiBwZXJzb25JZCB9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNhdmVQZXJzb25DaGFuZ2VzOiAocGVyc29uOiBQZXJzb24pOiBBcHBUaHVua0FjdGlvbjxhbnk+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHRcdHZhciBhcGlNZXRob2RVcmwgPSBgYXBpL1BlcnNvbi9BZGRgO1xyXG5cdFx0dmFyIGFwaU1ldGhvZFR5cGUgPSBgcG9zdGA7XHJcblx0XHRpZiAocGVyc29uLmlkICYmIHBlcnNvbi5pZCAhPSAtMSkge1xyXG5cdFx0XHRhcGlNZXRob2RVcmwgPSBgYXBpL1BlcnNvbi9VcGRhdGVgO1xyXG5cdFx0XHRhcGlNZXRob2RUeXBlID0gYHB1dGA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCBmZXRjaFRhc2sgPSBmZXRjaChhcGlNZXRob2RVcmwsIHtcclxuXHRcdFx0XHRtZXRob2Q6IGFwaU1ldGhvZFR5cGUsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGVyc29uKSxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8bnVtYmVyPilcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1ZBTElEQVRJT05fRVJST1InLCBlcnJvck1lc3NhZ2U6IGRhdGEgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnUkVDRUlWRV9HRU5FUklDX1JFU1VMVCcgfSk7XHJcblx0XHRcdFx0XHRkaXNwYXRjaChwdXNoKGAvZmV0Y2hwZW9wbGVgKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRhZGRUYXNrKGZldGNoVGFzayk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdTQVZFX1BFUlNPTicsIHBlcnNvbjogcGVyc29uIH0pO1xyXG5cdH0sXHJcblx0Y2FuY2VsTWFuYWdlUGVyc29uOiAoKTogQXBwVGh1bmtBY3Rpb248YW55PiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdDQU5DRUxfTUFOQUdFJyB9KTtcclxuXHRcdGRpc3BhdGNoKHB1c2goYC9mZXRjaHBlb3BsZWApKTtcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgZW1wdHlQZXJzb246IFBlcnNvbiA9IHsgZmlyc3ROYW1lOiAnJywgbGFzdE5hbWU6ICcnLCBwaG9uZU51bWJlcjogJycgfVxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBQZXJzb25TdGF0ZSA9IHsgaXNMb2FkaW5nOiBmYWxzZSwgcGVyc29uOiBlbXB0eVBlcnNvbiB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8UGVyc29uU3RhdGU+ID0gKHN0YXRlOiBQZXJzb25TdGF0ZSwgaW5jb21pbmdBY3Rpb246IEFjdGlvbikgPT4ge1xyXG5cdGNvbnN0IGFjdGlvbiA9IGluY29taW5nQWN0aW9uIGFzIEtub3duQWN0aW9uO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1JFUVVFU1RfUEVSU09OJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwZXJzb246IHN0YXRlLnBlcnNvbixcclxuXHRcdFx0XHRpc0xvYWRpbmc6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1JFQ0VJVkVfUEVSU09OJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwZXJzb246IGFjdGlvbi5wZXJzb24sXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnU0FWRV9QRVJTT04nOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBlcnNvbjogYWN0aW9uLnBlcnNvbixcclxuXHRcdFx0XHRpc0xvYWRpbmc6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1JFQ0VJVkVfR0VORVJJQ19SRVNVTFQnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBlcnNvbjogZW1wdHlQZXJzb24sXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR2YWxpZGF0aW9uRXJyb3JNZXNzYWdlOiB1bmRlZmluZWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0NBTkNFTF9NQU5BR0UnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBlcnNvbjogZW1wdHlQZXJzb24sXHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR2YWxpZGF0aW9uRXJyb3JNZXNzYWdlOiB1bmRlZmluZWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1ZBTElEQVRJT05fRVJST1InOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBlcnNvbjogc3RhdGUucGVyc29uLFxyXG5cdFx0XHRcdGlzTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0dmFsaWRhdGlvbkVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG5cdFx0XHR9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1BlcnNvbi50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi10YXNrL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSwgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciwgUmVkdWNlcnNNYXBPYmplY3QgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiA8Uz4obmV4dDogU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvcjxTPikgPT4gbmV4dFxyXG4gICAgKShjcmVhdGVTdG9yZSk7XHJcblxyXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxyXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKHJlZHVjZXJzKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcclxuXHJcbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgU3RvcmVNb2R1bGU+KCcuL3N0b3JlJyk7XHJcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzOiBSZWR1Y2Vyc01hcE9iamVjdCkge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBGZXRjaFBlb3BsZSBmcm9tICcuL2NvbXBvbmVudHMvRmV0Y2hQZW9wbGUnO1xyXG5pbXBvcnQgTWFuYWdlUGVyc29uIGZyb20gJy4vY29tcG9uZW50cy9NYW5hZ2VQZXJzb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IDxMYXlvdXQ+XHJcbiAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXsgSG9tZSB9IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2ZldGNocGVvcGxlJyBjb21wb25lbnQ9eyBGZXRjaFBlb3BsZSBhcyBhbnkgfSAvPlxyXG5cdDxSb3V0ZSBwYXRoPScvcGVyc29uL2FkZCcgY29tcG9uZW50PXsgTWFuYWdlUGVyc29uIGFzIGFueX0gLz5cclxuXHQ8Um91dGUgcGF0aD0nL3BlcnNvbi9lZGl0LzpwZXJzb25JZCcgY29tcG9uZW50PXsgTWFuYWdlUGVyc29uIGFzIGFueX0gLz5cclxuPC9MYXlvdXQ+O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTM5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBQcmVwYXJlIFJlZHV4IHN0b3JlIHdpdGggaW4tbWVtb3J5IGhpc3RvcnksIGFuZCBkaXNwYXRjaCBhIG5hdmlnYXRpb24gZXZlbnRcclxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBpbmNvbWluZyBVUkxcclxuICAgICAgICBjb25zdCBiYXNlbmFtZSA9IHBhcmFtcy5iYXNlVXJsLnN1YnN0cmluZygwLCBwYXJhbXMuYmFzZVVybC5sZW5ndGggLSAxKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoXHJcbiAgICAgICAgY29uc3QgdXJsQWZ0ZXJCYXNlbmFtZSA9IHBhcmFtcy51cmwuc3Vic3RyaW5nKGJhc2VuYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShjcmVhdGVNZW1vcnlIaXN0b3J5KCkpO1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlcGxhY2UodXJsQWZ0ZXJCYXNlbmFtZSkpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBiYXNlbmFtZT17IGJhc2VuYW1lIH0gY29udGV4dD17IHJvdXRlckNvbnRleHQgfSBsb2NhdGlvbj17IHBhcmFtcy5sb2NhdGlvbi5wYXRoIH0gY2hpbGRyZW49eyByb3V0ZXMgfSAvPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgaWYgKHJvdXRlckNvbnRleHQudXJsKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcm91dGVyQ29udGV4dC51cmwgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT25jZSBhbnkgYXN5bmMgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcclxuICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFBlb3BsZVN0YXRlIGZyb20gJy4uL3N0b3JlL1Blb3BsZSc7XHJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJ0NsaWVudEFwcC9zdG9yZS9QZXJzb24nO1xyXG5cclxudHlwZSBQZXJzb25Qcm9wcyA9XHJcblx0UGVvcGxlU3RhdGUuUGVvcGxlU3RhdGVcclxuXHQmIHR5cGVvZiBQZW9wbGVTdGF0ZS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmNsYXNzIEZldGNoUGVvcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBlcnNvblByb3BzLCB7fT4ge1xyXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuXHRcdHRoaXMucHJvcHMucmVxdWVzdFBlb3BsZSgpO1xyXG5cdH1cclxuXHJcblx0Ly9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUGVyc29uUHJvcHMpIHtcclxuXHQvL1x0dGhpcy5wcm9wcy5yZXF1ZXN0UGVvcGxlKCk7XHJcblx0Ly99XHJcblxyXG5cdHByaXZhdGUgY29uZmlybURlbGV0ZShwZXJzb246IFBlcnNvbikge1xyXG5cdFx0aWYgKGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHsgcGVyc29uLmZpcnN0TmFtZSB9ICR7IHBlcnNvbi5sYXN0TmFtZSB9P2ApKSB7XHJcblx0XHRcdHRoaXMucHJvcHMuZGVsZXRlUGVyc29uKHBlcnNvbi5pZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgY29udGVudHMgPSB0aGlzLnByb3BzLmlzTG9hZGluZ1xyXG5cdFx0XHQ/IDxwPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+ICBcclxuXHRcdFx0OiB0aGlzLnJlbmRlclBlb3BsZVRhYmxlKClcclxuXHJcblx0XHRyZXR1cm4gPGRpdj5cclxuXHRcdFx0PGgxPlBlb3BsZTwvaDE+XHJcblx0XHRcdDxwPlRoaXMgY29tcG9uZW50IGlzIHBhcnQgb2YgdGhlIENvZGluZyBDaGFsbGVuZ2UgYnkgVXBzdGFjay48L3A+XHJcblx0XHRcdHtjb250ZW50c31cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyUGVvcGxlVGFibGUoKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5cclxuXHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5wcm9wcy5hZGRQZXJzb259PkFkZDwvYnV0dG9uPlxyXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD5GaXJzdCBOYW1lPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkxhc3QgTmFtZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QaG9uZSBOdW1iZXI8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+QWN0aW9uczwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e3RoaXMucHJvcHMucGVvcGxlLm1hcChwZXJzb24gPT5cclxuXHRcdFx0XHRcdFx0PHRyIGtleT17cGVyc29uLmlkfT5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3BlcnNvbi5maXJzdE5hbWV9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3BlcnNvbi5sYXN0TmFtZX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD57cGVyc29uLnBob25lTnVtYmVyfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5wcm9wcy5lZGl0UGVyc29uKHBlcnNvbil9PkVkaXQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KGUpID0+IHRoaXMuY29uZmlybURlbGV0ZShwZXJzb24pfT5EZWxldGU8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPiAgXHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUucGVvcGxlLFxyXG5cdFBlb3BsZVN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbikoRmV0Y2hQZW9wbGUpIGFzIHR5cGVvZiBGZXRjaFBlb3BsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hQZW9wbGUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJvdXRlQ29tcG9uZW50UHJvcHM8e30+LCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxyXG4gICAgICAgICAgICA8cD5XZWxjb21lIHRvIHlvdXIgbmV3IHNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uLCBidWlsdCB3aXRoOjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvJz5SZWFjdDwvYT4sIDxhIGhyZWY9J2h0dHA6Ly9yZWR1eC5qcy5vcmcnPlJlZHV4PC9hPiwgYW5kIDxhIGhyZWY9J2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLyc+VHlwZVNjcmlwdDwvYT4gZm9yIGNsaWVudC1zaWRlIGNvZGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cDovL2dldGJvb3RzdHJhcC5jb20vJz5Cb290c3RyYXA8L2E+IGZvciBsYXlvdXQgYW5kIHN0eWxpbmc8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5DbGllbnQtc2lkZSBuYXZpZ2F0aW9uPC9zdHJvbmc+LiBGb3IgZXhhbXBsZSwgY2xpY2sgPGVtPkNvdW50ZXI8L2VtPiB0aGVuIDxlbT5CYWNrPC9lbT4gdG8gcmV0dXJuIGhlcmUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPldlYnBhY2sgZGV2IG1pZGRsZXdhcmU8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHRoZXJlJ3Mgbm8gbmVlZCB0byBydW4gdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wuIFlvdXIgY2xpZW50LXNpZGUgcmVzb3VyY2VzIGFyZSBkeW5hbWljYWxseSBidWlsdCBvbiBkZW1hbmQuIFVwZGF0ZXMgYXJlIGF2YWlsYWJsZSBhcyBzb29uIGFzIHlvdSBtb2RpZnkgYW55IGZpbGUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkhvdCBtb2R1bGUgcmVwbGFjZW1lbnQ8L3N0cm9uZz4uIEluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBkb24ndCBldmVuIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGFmdGVyIG1ha2luZyBtb3N0IGNoYW5nZXMuIFdpdGhpbiBzZWNvbmRzIG9mIHNhdmluZyBjaGFuZ2VzIHRvIGZpbGVzLCByZWJ1aWx0IFJlYWN0IGNvbXBvbmVudHMgd2lsbCBiZSBpbmplY3RlZCBkaXJlY3RseSBpbnRvIHlvdXIgcnVubmluZyBhcHBsaWNhdGlvbiwgcHJlc2VydmluZyBpdHMgbGl2ZSBzdGF0ZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RWZmaWNpZW50IHByb2R1Y3Rpb24gYnVpbGRzPC9zdHJvbmc+LiBJbiBwcm9kdWN0aW9uIG1vZGUsIGRldmVsb3BtZW50LXRpbWUgZmVhdHVyZXMgYXJlIGRpc2FibGVkLCBhbmQgdGhlIDxjb2RlPndlYnBhY2s8L2NvZGU+IGJ1aWxkIHRvb2wgcHJvZHVjZXMgbWluaWZpZWQgc3RhdGljIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+U2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nPC9zdHJvbmc+LiBUbyBvcHRpbWl6ZSBzdGFydHVwIHRpbWUsIHlvdXIgUmVhY3QgYXBwbGljYXRpb24gaXMgZmlyc3QgcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIGluaXRpYWwgSFRNTCBhbmQgc3RhdGUgaXMgdGhlbiB0cmFuc2ZlcnJlZCB0byB0aGUgYnJvd3Nlciwgd2hlcmUgY2xpZW50LXNpZGUgY29kZSBwaWNrcyB1cCB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmLjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZNZW51IH0gZnJvbSAnLi9OYXZNZW51JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgUGVyc29uU3RhdGUgZnJvbSAnLi4vc3RvcmUvUGVyc29uJztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1FdmVudCwgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFBlcnNvblByb3BzID1cclxuXHRQZXJzb25TdGF0ZS5QZXJzb25TdGF0ZVxyXG5cdCYgdHlwZW9mIFBlcnNvblN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcblx0JiBSb3V0ZUNvbXBvbmVudFByb3BzPHsgcGVyc29uSWQ6IHN0cmluZyB9PjtcclxuXHJcbmNsYXNzIE1hbmFnZVBlcnNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQZXJzb25Qcm9wcywge30+IHtcclxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblx0XHRsZXQgcGVyc29uSWQgPSBwYXJzZUludCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5wZXJzb25JZCk7XHJcblx0XHRpZiAocGVyc29uSWQpIHtcclxuXHRcdFx0dGhpcy5wcm9wcy5yZXF1ZXN0UGVyc29uKHBlcnNvbklkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25GaXJzdE5hbWVDaGFuZ2UoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuXHRcdHRoaXMucHJvcHMucGVyc29uLmZpcnN0TmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkxhc3ROYW1lQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblx0XHR0aGlzLnByb3BzLnBlcnNvbi5sYXN0TmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblBob25lTnVtYmVyQ2hhbmdlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblx0XHR0aGlzLnByb3BzLnBlcnNvbi5waG9uZU51bWJlciA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGNvbnRlbnRzID0gdGhpcy5wcm9wcy5pc0xvYWRpbmdcclxuXHRcdFx0PyA8cD48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxyXG5cdFx0XHQ6IHRoaXMucmVuZGVyUGVyc29uRm9ybSgpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0XHQ8aDE+UGVyc29uPC9oMT5cclxuXHRcdFx0PHA+VGhpcyBjb21wb25lbnQgaXMgcGFydCBvZiB0aGUgQ29kaW5nIENoYWxsZW5nZSBieSBVcHN0YWNrLjwvcD5cclxuXHRcdFx0e2NvbnRlbnRzfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJQZXJzb25Gb3JtKCkge1xyXG5cdFx0cmV0dXJuIDxkaXY+XHJcblx0XHRcdDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Pnt0aGlzLnByb3BzLnZhbGlkYXRpb25FcnJvck1lc3NhZ2V9PC9zcGFuPlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMucHJvcHMuc2F2ZVBlcnNvbkNoYW5nZXModGhpcy5wcm9wcy5wZXJzb24pfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIHZhbHVlPXt0aGlzLnByb3BzLnBlcnNvbi5pZH0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiIGNvbnRyb2wtbGFiZWwgY29sLW1kLTEyXCIgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBlcnNvbi5maXJzdE5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkZpcnN0TmFtZUNoYW5nZShlKX0gcmVxdWlyZWQgbWF4TGVuZ3RoPXsxMDB9IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtbWQtMTJcIiBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdE5hbWVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGVyc29uLmxhc3ROYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25MYXN0TmFtZUNoYW5nZShlKX0gbWF4TGVuZ3RoPXsxMDB9IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtbWQtMTJcIiBodG1sRm9yPVwicGhvbmVOdW1iZXJcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGVyc29uLnBob25lTnVtYmVyfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25QaG9uZU51bWJlckNoYW5nZShlKX0gcmVxdWlyZWQgbWF4TGVuZ3RoPXsyMH0gcGF0dGVybj1cIl5bXFwrXT8oWzAtOV0rID8pKyRcIiAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5TYXZlPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLmNhbmNlbE1hbmFnZVBlcnNvbigpfT5DYW5jZWw8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG5cdChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUucGVyc29uLFxyXG5cdFBlcnNvblN0YXRlLmFjdGlvbkNyZWF0b3JzXHJcbikoTWFuYWdlUGVyc29uKSBhcyB0eXBlb2YgTWFuYWdlUGVyc29uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9NYW5hZ2VQZXJzb24udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdtYWluLW5hdic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdmJhci1icmFuZCcgdG89eyAnLycgfT5Db2RpbmdDaGFsbGVuZ2U8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGVhcmZpeCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGV4YWN0IHRvPXsgJy8nIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHRvPXsnL2ZldGNocGVvcGxlJ30gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggcGVvcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBQZW9wbGUgZnJvbSAnLi9QZW9wbGUnO1xyXG5pbXBvcnQgKiBhcyBQZXJzb24gZnJvbSAnLi9QZXJzb24nO1xyXG5cclxuLy8gVGhlIHRvcC1sZXZlbCBzdGF0ZSBvYmplY3RcclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuXHRwZW9wbGU6IFBlb3BsZS5QZW9wbGVTdGF0ZTtcclxuXHRwZXJzb246IFBlcnNvbi5QZXJzb25TdGF0ZTtcclxufVxyXG5cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcblx0cGVvcGxlOiBQZW9wbGUucmVkdWNlcixcclxuXHRwZXJzb246IFBlcnNvbi5yZWR1Y2VyXHJcbn07XHJcblxyXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcclxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNzApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9