(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _cw_todolist_cw_todolist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cw-todolist/cw-todolist.component */ "./src/app/cw-todolist/cw-todolist.component.ts");
/* harmony import */ var _demo_htmlcss_demo_htmlcss_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-htmlcss/demo-htmlcss.component */ "./src/app/demo-htmlcss/demo-htmlcss.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_httpclient_demo_httpclient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-httpclient/demo-httpclient.component */ "./src/app/demo-httpclient/demo-httpclient.component.ts");
/* harmony import */ var _demo_rxjs_demo_rxjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-rxjs/demo-rxjs.component */ "./src/app/demo-rxjs/demo-rxjs.component.ts");
/* harmony import */ var _demo_form_model_demo_form_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-form-model/demo-form-model.component */ "./src/app/demo-form-model/demo-form-model.component.ts");
/* harmony import */ var _demo_form_template_demo_form_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo-form-template/demo-form-template.component */ "./src/app/demo-form-template/demo-form-template.component.ts");
/* harmony import */ var _demo_databind_demo_databind_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo-databind/demo-databind.component */ "./src/app/demo-databind/demo-databind.component.ts");
/* harmony import */ var _demo_typescript_demo_typescript_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo-typescript/demo-typescript.component */ "./src/app/demo-typescript/demo-typescript.component.ts");
/* harmony import */ var _demo_datashare_demo_datashare_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo-datashare/demo-datashare.component */ "./src/app/demo-datashare/demo-datashare.component.ts");
/* harmony import */ var _demo_pipe_demo_pipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo-pipe/demo-pipe.component */ "./src/app/demo-pipe/demo-pipe.component.ts");
/* harmony import */ var _demo_directive_buildin_demo_directive_buildin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo-directive-buildin/demo-directive-buildin.component */ "./src/app/demo-directive-buildin/demo-directive-buildin.component.ts");
/* harmony import */ var _demo_directive_attribute_demo_directive_attribute_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./demo-directive-attribute/demo-directive-attribute.component */ "./src/app/demo-directive-attribute/demo-directive-attribute.component.ts");
/* harmony import */ var _demo_directive_structural_demo_directive_structural_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./demo-directive-structural/demo-directive-structural.component */ "./src/app/demo-directive-structural/demo-directive-structural.component.ts");
/* harmony import */ var _demo_routing_parameters_demo_routing_parameters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./demo-routing-parameters/demo-routing-parameters.component */ "./src/app/demo-routing-parameters/demo-routing-parameters.component.ts");
/* harmony import */ var _cw_financial_tool_cw_financial_tool_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cw-financial-tool/cw-financial-tool.component */ "./src/app/cw-financial-tool/cw-financial-tool.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'HtmlCss', component: _demo_htmlcss_demo_htmlcss_component__WEBPACK_IMPORTED_MODULE_1__["DemoHtmlcssComponent"] },
    { path: 'Typescript', component: _demo_typescript_demo_typescript_component__WEBPACK_IMPORTED_MODULE_9__["DemoTypescriptComponent"] },
    { path: 'RxJS', component: _demo_rxjs_demo_rxjs_component__WEBPACK_IMPORTED_MODULE_5__["DemoRxjsComponent"] },
    { path: 'DataBind', component: _demo_databind_demo_databind_component__WEBPACK_IMPORTED_MODULE_8__["DemoDatabindComponent"] },
    { path: 'DataShare', component: _demo_datashare_demo_datashare_component__WEBPACK_IMPORTED_MODULE_10__["DemoDatashareComponent"] },
    { path: 'Pipe', component: _demo_pipe_demo_pipe_component__WEBPACK_IMPORTED_MODULE_11__["DemoPipeComponent"] },
    { path: 'RoutingParameter/:productType/:productId', component: _demo_routing_parameters_demo_routing_parameters_component__WEBPACK_IMPORTED_MODULE_15__["DemoRoutingParametersComponent"] },
    {
        path: 'Directive', children: [
            { path: 'DirectiveBuildin', component: _demo_directive_buildin_demo_directive_buildin_component__WEBPACK_IMPORTED_MODULE_12__["DemoDirectiveBuildinComponent"] },
            { path: 'DirectiveStructural', component: _demo_directive_structural_demo_directive_structural_component__WEBPACK_IMPORTED_MODULE_14__["DemoDirectiveStructuralComponent"] },
            { path: 'DirectiveAttribute', component: _demo_directive_attribute_demo_directive_attribute_component__WEBPACK_IMPORTED_MODULE_13__["DemoDirectiveAttributeComponent"] }
        ]
    },
    {
        path: 'Form', children: [
            { path: 'FormTemplate', component: _demo_form_template_demo_form_template_component__WEBPACK_IMPORTED_MODULE_7__["DemoFormTemplateComponent"] },
            { path: 'FormModel', component: _demo_form_model_demo_form_model_component__WEBPACK_IMPORTED_MODULE_6__["DemoFormModelComponent"] }
        ]
    },
    { path: 'HttpClient', component: _demo_httpclient_demo_httpclient_component__WEBPACK_IMPORTED_MODULE_4__["DemoHttpclientComponent"] },
    {
        path: 'CourseWork', children: [
            { path: 'FinancialTool', component: _cw_financial_tool_cw_financial_tool_component__WEBPACK_IMPORTED_MODULE_16__["CwFinancialToolComponent"] },
            { path: 'TodoList', component: _cw_todolist_cw_todolist_component__WEBPACK_IMPORTED_MODULE_0__["CwTodolistComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg  navbar navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"\">Welcome</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['HtmlCss']\">HTML & CSS</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          href=\"#\">\n          Angular\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['Typescript']\">Typescript</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['DataBind']\">DataBind</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['DataShare']\">DataShare</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['DataBind']\">DataBind</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['Pipe']\">Pipe</a>\n        </div>\n      </li>\n\n      <!-- Routing-->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          href=\"#\">\n          Route\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"RoutingParameter/gaming/1\">Game Product</a>\n          <a class=\"dropdown-item\" [routerLink]=\"[ 'RoutingParameterRoutingParameter', 'home', '2', {option1:'o1', option2:'o2'}]\">Home Product</a>\n        </div>\n      </li>\n\n      <!-- Directive -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          href=\"#\">\n          Directive\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['Directive','DirectiveBuildin']\">Buildin Directive</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['Directive','DirectiveStructural']\">Structural Directive</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['Directive','DirectiveAttribute']\">Attribute Directive</a>\n        </div>\n      </li>\n\n      <!-- Form -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          href=\"#\">\n          Form\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['Form','FormTemplate']\">Template</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['Form','FormModel']\">Model</a>\n        </div>\n      </li>\n\n      <!-- HttpClient -->\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['HttpClient']\">HttpClient</a>\n      </li>\n\n\n      <!-- Form -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          href=\"#\">\n          Coursework\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['CourseWork','FinancialTool']\">Financial Tool</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['CourseWork','TodoList']\">Todo List</a>\n        </div>\n      </li>\n\n    </ul>\n\n  </div>\n</nav>\n<div class=\"container\">\n\n\n  <br/>\n  <router-outlet></router-outlet>\n  <br/>\n</div>\n\n\n<!-- <button routerLink=\"\">Welcome Page</button>\n<button [routerLink]=\"['HtmlCss']\">HTML & CSS</button>\n<button [routerLink]=\"['Typescript']\">Typescript</button>\n<button [routerLink]=\"['DataBind']\">DataBind</button>\n<button [routerLink]=\"['DataShare']\">DataShare</button>\n<button [routerLink]=\"['Pipe']\">Pipe</button>\n\n<button routerLink=\"RoutingParameter/gaming/1\">Gaming Product</button>\n<button [routerLink]=\"[ 'RoutingParameter', 'home', '2', {option1:'o1', option2:'o2'}]\">Home Product</button>\n\n<button [routerLink]=\"['Directive','DirectiveBuildin']\">Buildin Directive</button>\n<button [routerLink]=\"['Directive','DirectiveStructural']\">Structural Directive </button>\n<button [routerLink]=\"['Directive','DirectiveAttribute']\">Attribute Directive </button>\n\n<button [routerLink]=\"['Form','FormTemplate']\">Form Template</button>\n<button [routerLink]=\"['Form','FormModel']\">Form Model</button>\n\n<button [routerLink]=\"['HttpClient']\">HttpClient</button> -->\n\n\n\n<!-- <br style=\"clear: both;\" />\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_typescript_demo_typescript_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-typescript/demo-typescript.component */ "./src/app/demo-typescript/demo-typescript.component.ts");
/* harmony import */ var _demo_datashare_demo_datashare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-datashare/demo-datashare.component */ "./src/app/demo-datashare/demo-datashare.component.ts");
/* harmony import */ var _demo_datashare_input_demo_datashare_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-datashare-input/demo-datashare-input.component */ "./src/app/demo-datashare-input/demo-datashare-input.component.ts");
/* harmony import */ var _demo_datashare_output_demo_datashare_output_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-datashare-output/demo-datashare-output.component */ "./src/app/demo-datashare-output/demo-datashare-output.component.ts");
/* harmony import */ var _demo_datashare_viewchild_demo_datashare_viewchild_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo-datashare-viewchild/demo-datashare-viewchild.component */ "./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.ts");
/* harmony import */ var _capitalize_capitalize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./capitalize/capitalize.pipe */ "./src/app/capitalize/capitalize.pipe.ts");
/* harmony import */ var _demo_pipe_demo_pipe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo-pipe/demo-pipe.component */ "./src/app/demo-pipe/demo-pipe.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _demo_routing_parameters_demo_routing_parameters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo-routing-parameters/demo-routing-parameters.component */ "./src/app/demo-routing-parameters/demo-routing-parameters.component.ts");
/* harmony import */ var _demo_directive_buildin_demo_directive_buildin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo-directive-buildin/demo-directive-buildin.component */ "./src/app/demo-directive-buildin/demo-directive-buildin.component.ts");
/* harmony import */ var _directive_unless_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directive/unless.directive */ "./src/app/directive/unless.directive.ts");
/* harmony import */ var _demo_directive_structural_demo_directive_structural_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./demo-directive-structural/demo-directive-structural.component */ "./src/app/demo-directive-structural/demo-directive-structural.component.ts");
/* harmony import */ var _directive_highlight_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directive/highlight.directive */ "./src/app/directive/highlight.directive.ts");
/* harmony import */ var _demo_directive_attribute_demo_directive_attribute_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./demo-directive-attribute/demo-directive-attribute.component */ "./src/app/demo-directive-attribute/demo-directive-attribute.component.ts");
/* harmony import */ var _demo_form_template_demo_form_template_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./demo-form-template/demo-form-template.component */ "./src/app/demo-form-template/demo-form-template.component.ts");
/* harmony import */ var _demo_databind_demo_databind_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./demo-databind/demo-databind.component */ "./src/app/demo-databind/demo-databind.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _demo_form_model_demo_form_model_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./demo-form-model/demo-form-model.component */ "./src/app/demo-form-model/demo-form-model.component.ts");
/* harmony import */ var _service_datashare_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/datashare.service */ "./src/app/service/datashare.service.ts");
/* harmony import */ var _demo_datashare_service_demo_datashare_service_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./demo-datashare-service/demo-datashare-service.component */ "./src/app/demo-datashare-service/demo-datashare-service.component.ts");
/* harmony import */ var _demo_datashare_sibling_demo_datashare_sibling_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./demo-datashare-sibling/demo-datashare-sibling.component */ "./src/app/demo-datashare-sibling/demo-datashare-sibling.component.ts");
/* harmony import */ var _demo_rxjs_demo_rxjs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./demo-rxjs/demo-rxjs.component */ "./src/app/demo-rxjs/demo-rxjs.component.ts");
/* harmony import */ var _demo_httpclient_demo_httpclient_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./demo-httpclient/demo-httpclient.component */ "./src/app/demo-httpclient/demo-httpclient.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _demo_htmlcss_demo_htmlcss_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./demo-htmlcss/demo-htmlcss.component */ "./src/app/demo-htmlcss/demo-htmlcss.component.ts");
/* harmony import */ var _test_jasmine_mock_spy_test_jasmine_mock_spy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./test-jasmine-mock-spy/test-jasmine-mock-spy.component */ "./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.ts");
/* harmony import */ var _service_test_auth_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./service/test-auth.service */ "./src/app/service/test-auth.service.ts");
/* harmony import */ var _test_angularbed_test_angularbed_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./test-angularbed/test-angularbed.component */ "./src/app/test-angularbed/test-angularbed.component.ts");
/* harmony import */ var _test_async_test_async_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./test-async/test-async.component */ "./src/app/test-async/test-async.component.ts");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/test-component/test-component.component.ts");
/* harmony import */ var _test_form_model_test_form_model_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./test-form-model/test-form-model.component */ "./src/app/test-form-model/test-form-model.component.ts");
/* harmony import */ var _cw_financial_tool_cw_financial_tool_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cw-financial-tool/cw-financial-tool.component */ "./src/app/cw-financial-tool/cw-financial-tool.component.ts");
/* harmony import */ var _cw_todolist_cw_todolist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cw-todolist/cw-todolist.component */ "./src/app/cw-todolist/cw-todolist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// DataShare




// Pipe


// Routing


// Directive







// Form



// Service




// HttpClient



// Test






// CourseWork


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // a list of the component in this module
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                // Basic
                _demo_typescript_demo_typescript_component__WEBPACK_IMPORTED_MODULE_3__["DemoTypescriptComponent"],
                _demo_databind_demo_databind_component__WEBPACK_IMPORTED_MODULE_18__["DemoDatabindComponent"],
                // DataShare
                _demo_datashare_input_demo_datashare_input_component__WEBPACK_IMPORTED_MODULE_5__["DemoDataShareInputComponent"],
                _demo_datashare_output_demo_datashare_output_component__WEBPACK_IMPORTED_MODULE_6__["DemoDataShareOutputComponent"],
                _demo_datashare_viewchild_demo_datashare_viewchild_component__WEBPACK_IMPORTED_MODULE_7__["DemoDataShareViewchildComponent"],
                _demo_datashare_demo_datashare_component__WEBPACK_IMPORTED_MODULE_4__["DemoDatashareComponent"],
                // Pipe
                _capitalize_capitalize_pipe__WEBPACK_IMPORTED_MODULE_8__["CapitalizePipe"],
                _demo_pipe_demo_pipe_component__WEBPACK_IMPORTED_MODULE_9__["DemoPipeComponent"],
                // Directive
                _demo_directive_buildin_demo_directive_buildin_component__WEBPACK_IMPORTED_MODULE_12__["DemoDirectiveBuildinComponent"],
                _directive_unless_directive__WEBPACK_IMPORTED_MODULE_13__["UnlessDirective"],
                _demo_directive_structural_demo_directive_structural_component__WEBPACK_IMPORTED_MODULE_14__["DemoDirectiveStructuralComponent"],
                _directive_highlight_directive__WEBPACK_IMPORTED_MODULE_15__["HighlightDirective"],
                _demo_directive_attribute_demo_directive_attribute_component__WEBPACK_IMPORTED_MODULE_16__["DemoDirectiveAttributeComponent"],
                _demo_routing_parameters_demo_routing_parameters_component__WEBPACK_IMPORTED_MODULE_11__["DemoRoutingParametersComponent"],
                _demo_form_template_demo_form_template_component__WEBPACK_IMPORTED_MODULE_17__["DemoFormTemplateComponent"],
                _demo_form_model_demo_form_model_component__WEBPACK_IMPORTED_MODULE_20__["DemoFormModelComponent"],
                // DataShare Service
                _demo_datashare_service_demo_datashare_service_component__WEBPACK_IMPORTED_MODULE_22__["DemoDatashareServiceComponent"],
                _demo_datashare_sibling_demo_datashare_sibling_component__WEBPACK_IMPORTED_MODULE_23__["DemoDatashareSiblingComponent"],
                _demo_rxjs_demo_rxjs_component__WEBPACK_IMPORTED_MODULE_24__["DemoRxjsComponent"],
                // HttpClient
                _demo_httpclient_demo_httpclient_component__WEBPACK_IMPORTED_MODULE_25__["DemoHttpclientComponent"],
                _demo_htmlcss_demo_htmlcss_component__WEBPACK_IMPORTED_MODULE_27__["DemoHtmlcssComponent"],
                // Test
                _test_jasmine_mock_spy_test_jasmine_mock_spy_component__WEBPACK_IMPORTED_MODULE_28__["TestJasmineMockSpyComponent"],
                _test_angularbed_test_angularbed_component__WEBPACK_IMPORTED_MODULE_30__["TestAngularbedComponent"],
                _test_async_test_async_component__WEBPACK_IMPORTED_MODULE_31__["TestAsyncComponent"],
                _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_32__["TestComponentComponent"],
                _test_form_model_test_form_model_component__WEBPACK_IMPORTED_MODULE_33__["TestFormModelComponent"],
                // Coursework
                _cw_financial_tool_cw_financial_tool_component__WEBPACK_IMPORTED_MODULE_34__["CwFinancialToolComponent"],
                _cw_todolist_cw_todolist_component__WEBPACK_IMPORTED_MODULE_35__["CwTodolistComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ],
            // exported and use in another module
            exports: [],
            // imported from other modules
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"]
            ],
            // define service for injector
            providers: [_service_datashare_service__WEBPACK_IMPORTED_MODULE_21__["DatashareService"], _service_test_auth_service__WEBPACK_IMPORTED_MODULE_29__["TestAuthService"]],
            // root component to load into browser
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/capitalize/capitalize.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/capitalize/capitalize.pipe.ts ***!
  \***********************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        // Transfor Logic
        // return value;
        // let result = 'CA$';
        // result = result + value;
        // return result;
        if (!value) {
            return value;
        }
        else {
            return value.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/cw-financial-tool/cw-financial-tool.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/cw-financial-tool/cw-financial-tool.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cw-financial-tool/cw-financial-tool.component.html":
/*!********************************************************************!*\
  !*** ./src/app/cw-financial-tool/cw-financial-tool.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  You deposits\n  <input type=\"text\" value=\"\" id=\"location\" [(ngModel)]=\"annuity\" /> at the beginning of the year and at the end of each month in an account that pays\n  <input type=\"text\" value=\"\" id=\"location\" [(ngModel)]=\"interestRate\" /> compounded monthly for\n  <input type=\"text\" value=\"\" id=\"location\" [(ngModel)]=\"period\" /> year(s). What is the amount in the account at the end?\n  <button class=\"btn btn-outline\" type=\"button\" (click)=\"onAdd()\">Calculate</button>\n</div>\n\n<hr/>\n<div>\n  <input type=\"text\" value=\"\" id=\"location\" [(ngModel)]=\"ammount\" /> is the amount in the account at the end.\n</div>\n\n<!-- <form class=\"form-group\">\n  <div class=\"form-group\">\n    <label>Job Description:</label>\n    <textarea placeholder=\"\" class=\"form-control\" [(ngModel)]=\"inComingItem\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Requirement:</label>\n    <textarea placeholder=\"\" class=\"form-control\" [(ngModel)]=\"inComingItem\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label>Location:</label>\n    <input type=\"text\" value=\"\" class=\"form-control\" id=\"location\" [(ngModel)]=\"inComingItem\" />\n\n  </div>\n  <div class=\"form-group\">\n    <label>Salary:</label>\n    <input type=\"text\" value=\"\" class=\"form-control\" id=\"salary\" [(ngModel)]=\"inComingItem\" />\n  </div>\n\n  <button class=\"btn btn-outline\" type=\"button\" (click)=\"onAdd()\">Add</button>\n\n</form> -->"

/***/ }),

/***/ "./src/app/cw-financial-tool/cw-financial-tool.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cw-financial-tool/cw-financial-tool.component.ts ***!
  \******************************************************************/
/*! exports provided: CwFinancialToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CwFinancialToolComponent", function() { return CwFinancialToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CwFinancialToolComponent = /** @class */ (function () {
    function CwFinancialToolComponent() {
    }
    CwFinancialToolComponent.prototype.ngOnInit = function () { };
    CwFinancialToolComponent.prototype.onAdd = function () {
        this.ammount = this.annuity
            * ((Math.pow((1 + (this.interestRate / 12)), (12 * this.period))) - 1)
            / (this.interestRate / 12)
            * (1 + (this.interestRate / 12));
    };
    CwFinancialToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-financial-tool',
            template: __webpack_require__(/*! ./cw-financial-tool.component.html */ "./src/app/cw-financial-tool/cw-financial-tool.component.html"),
            styles: [__webpack_require__(/*! ./cw-financial-tool.component.css */ "./src/app/cw-financial-tool/cw-financial-tool.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CwFinancialToolComponent);
    return CwFinancialToolComponent;
}());



/***/ }),

/***/ "./src/app/cw-todolist/cw-todolist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cw-todolist/cw-todolist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cw-todolist/cw-todolist.component.html":
/*!********************************************************!*\
  !*** ./src/app/cw-todolist/cw-todolist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group mb-3\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"What you are going to do?\" [(ngModel)]=\"inComingItem\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-outline\" type=\"button\" (click)=\"onAdd()\">Add</button>\n  </div>\n</div>\n\n<ul class=\"list-group\" *ngFor=\"let item of todoList; let i = index\">\n  <li class=\"list-group-item\">{{i}}: {{item}}\n    <button class=\"btn btn-outline float-right\" type=\"button\" (click)=\"onRemove(i)\">Remove</button>\n  </li>\n</ul>\n\n<!-- {{todoList|json}} -->"

/***/ }),

/***/ "./src/app/cw-todolist/cw-todolist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cw-todolist/cw-todolist.component.ts ***!
  \******************************************************/
/*! exports provided: CwTodolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CwTodolistComponent", function() { return CwTodolistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CwTodolistComponent = /** @class */ (function () {
    function CwTodolistComponent() {
        this.todoList = [];
    }
    CwTodolistComponent.prototype.ngOnInit = function () { };
    CwTodolistComponent.prototype.onAdd = function () {
        // console.log('test');
        this.todoList.push(this.inComingItem);
        this.inComingItem = '';
        // console.log(this.todoList);
    };
    CwTodolistComponent.prototype.onRemove = function (index) {
        this.todoList.splice(index, 1);
        // console.log(index);
    };
    CwTodolistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cw-todolist',
            template: __webpack_require__(/*! ./cw-todolist.component.html */ "./src/app/cw-todolist/cw-todolist.component.html"),
            styles: [__webpack_require__(/*! ./cw-todolist.component.css */ "./src/app/cw-todolist/cw-todolist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CwTodolistComponent);
    return CwTodolistComponent;
}());



/***/ }),

/***/ "./src/app/demo-databind/demo-databind.component.css":
/*!***********************************************************!*\
  !*** ./src/app/demo-databind/demo-databind.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-databind/demo-databind.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo-databind/demo-databind.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>One Way Bind: Interpolation: {{messageValue}}! </p>\n\n  <label>One Way Bind: Property: </label>\n  <input [ngModel]=\"messageValue\" placeholder=\"One Way Bind\" style=\"width: 250px\" />\n  <br/>\n\n  <label>One Way Bind: Event: </label>\n  <button type=\"submit\" (click)=\"processString('From Template')\">Change</button>\n  <br/>\n\n\n  <label>Tow Way Bind: </label>\n  <input [(ngModel)]=\"messageValue\" placeholder=\"Tow Way Bind\" style=\"width: 250px\" />\n  <br/>\n</div>\n\n<!-- <div>\n  <p> {{messageValue}}! </p>\n  <input [ngModel]=\"messageValue\"/>\n  <button (click)=\"processString('From Template')\">\n  <input [(ngModel)]=\"messageValue\"/>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/demo-databind/demo-databind.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo-databind/demo-databind.component.ts ***!
  \**********************************************************/
/*! exports provided: DemoDatabindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDatabindComponent", function() { return DemoDatabindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoDatabindComponent = /** @class */ (function () {
    function DemoDatabindComponent() {
        this.messageValue = 'From Component';
    }
    DemoDatabindComponent.prototype.ngOnInit = function () { };
    DemoDatabindComponent.prototype.processString = function (event) {
        this.messageValue = event + ' then From Component';
        console.log(this.messageValue);
    };
    DemoDatabindComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-databind',
            template: __webpack_require__(/*! ./demo-databind.component.html */ "./src/app/demo-databind/demo-databind.component.html"),
            styles: [__webpack_require__(/*! ./demo-databind.component.css */ "./src/app/demo-databind/demo-databind.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoDatabindComponent);
    return DemoDatabindComponent;
}());



/***/ }),

/***/ "./src/app/demo-datashare-input/demo-datashare-input.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/demo-datashare-input/demo-datashare-input.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-datashare-input/demo-datashare-input.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/demo-datashare-input/demo-datashare-input.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"child\">\n  <p>Child: {{inputContent}}</p>\n</div>"

/***/ }),

/***/ "./src/app/demo-datashare-input/demo-datashare-input.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo-datashare-input/demo-datashare-input.component.ts ***!
  \************************************************************************/
/*! exports provided: DemoDataShareInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDataShareInputComponent", function() { return DemoDataShareInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoDataShareInputComponent = /** @class */ (function () {
    function DemoDataShareInputComponent() {
    }
    DemoDataShareInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('inputContent'),
        __metadata("design:type", String)
    ], DemoDataShareInputComponent.prototype, "inputContent", void 0);
    DemoDataShareInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-datashare-input',
            template: __webpack_require__(/*! ./demo-datashare-input.component.html */ "./src/app/demo-datashare-input/demo-datashare-input.component.html"),
            styles: [__webpack_require__(/*! ./demo-datashare-input.component.css */ "./src/app/demo-datashare-input/demo-datashare-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoDataShareInputComponent);
    return DemoDataShareInputComponent;
}());



/***/ }),

/***/ "./src/app/demo-datashare-output/demo-datashare-output.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/demo-datashare-output/demo-datashare-output.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-datashare-output/demo-datashare-output.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/demo-datashare-output/demo-datashare-output.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"child\">\n    Child:\n    <button type=\"submit\" (click)=\"triggerOutput()\">Trigger</button>\n</div>"

/***/ }),

/***/ "./src/app/demo-datashare-output/demo-datashare-output.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo-datashare-output/demo-datashare-output.component.ts ***!
  \**************************************************************************/
/*! exports provided: DemoDataShareOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDataShareOutputComponent", function() { return DemoDataShareOutputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoDataShareOutputComponent = /** @class */ (function () {
    function DemoDataShareOutputComponent() {
        this.outputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outputConent = 'something to output.';
    }
    DemoDataShareOutputComponent.prototype.ngOnInit = function () { };
    DemoDataShareOutputComponent.prototype.triggerOutput = function () {
        this.outputEvent.emit(this.outputConent);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DemoDataShareOutputComponent.prototype, "outputEvent", void 0);
    DemoDataShareOutputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-datashare-output',
            template: __webpack_require__(/*! ./demo-datashare-output.component.html */ "./src/app/demo-datashare-output/demo-datashare-output.component.html"),
            styles: [__webpack_require__(/*! ./demo-datashare-output.component.css */ "./src/app/demo-datashare-output/demo-datashare-output.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoDataShareOutputComponent);
    return DemoDataShareOutputComponent;
}());



/***/ }),

/***/ "./src/app/demo-datashare-service/demo-datashare-service.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/demo-datashare-service/demo-datashare-service.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-datashare-service/demo-datashare-service.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/demo-datashare-service/demo-datashare-service.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"child\">\n  <p>Child msg: {{message}}</p>\n  <p>another msg: {{anotherMessage}}</p>\n</div>"

/***/ }),

/***/ "./src/app/demo-datashare-service/demo-datashare-service.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo-datashare-service/demo-datashare-service.component.ts ***!
  \****************************************************************************/
/*! exports provided: DemoDatashareServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDatashareServiceComponent", function() { return DemoDatashareServiceComponent; });
/* harmony import */ var _service_datashare_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/datashare.service */ "./src/app/service/datashare.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoDatashareServiceComponent = /** @class */ (function () {
    function DemoDatashareServiceComponent(dService) {
        this.dService = dService;
    }
    DemoDatashareServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dService.messageSource.subscribe(function (data) { return _this.message = data; });
        this.anotherMessage = this.dService.anotherMessage;
    };
    DemoDatashareServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-datashare-service',
            template: __webpack_require__(/*! ./demo-datashare-service.component.html */ "./src/app/demo-datashare-service/demo-datashare-service.component.html"),
            styles: [__webpack_require__(/*! ./demo-datashare-service.component.css */ "./src/app/demo-datashare-service/demo-datashare-service.component.css")]
        }),
        __metadata("design:paramtypes", [_service_datashare_service__WEBPACK_IMPORTED_MODULE_0__["DatashareService"]])
    ], DemoDatashareServiceComponent);
    return DemoDatashareServiceComponent;
}());



/***/ }),

/***/ "./src/app/demo-datashare-sibling/demo-datashare-sibling.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/demo-datashare-sibling/demo-datashare-sibling.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-datashare-sibling/demo-datashare-sibling.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/demo-datashare-sibling/demo-datashare-sibling.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sibling\">\n  <p>Sibling msg: {{message}}</p>\n  <p>another msg: {{anotherMessage}}</p>\n  <button type=\"submit\" (click)=\"triggerChange()\">Trigger</button>\n</div>"

/***/ }),

/***/ "./src/app/demo-datashare-sibling/demo-datashare-sibling.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo-datashare-sibling/demo-datashare-sibling.component.ts ***!
  \****************************************************************************/
/*! exports provided: DemoDatashareSiblingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDatashareSiblingComponent", function() { return DemoDatashareSiblingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_datashare_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/datashare.service */ "./src/app/service/datashare.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoDatashareSiblingComponent = /** @class */ (function () {
    function DemoDatashareSiblingComponent(dService) {
        this.dService = dService;
    }
    DemoDatashareSiblingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dService.messageSource.subscribe(function (data) { return _this.message = data; });
        this.anotherMessage = this.dService.anotherMessage;
    };
    DemoDatashareSiblingComponent.prototype.triggerChange = function () {
        // (1) sync by observer
        this.dService.changeMessage('changed by sibling');
        // (2) doesn't sync with others
        this.anotherMessage = 'change';
        this.dService.anotherMessage = 'change';
    };
    DemoDatashareSiblingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-datashare-sibling',
            template: __webpack_require__(/*! ./demo-datashare-sibling.component.html */ "./src/app/demo-datashare-sibling/demo-datashare-sibling.component.html"),
            styles: [__webpack_require__(/*! ./demo-datashare-sibling.component.css */ "./src/app/demo-datashare-sibling/demo-datashare-sibling.component.css")]
        }),
        __metadata("design:paramtypes", [_service_datashare_service__WEBPACK_IMPORTED_MODULE_1__["DatashareService"]])
    ], DemoDatashareSiblingComponent);
    return DemoDatashareSiblingComponent;
}());



/***/ }),

/***/ "./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"child\">\n    Child:{{childV}}\n    <button type=\"submit\" (click)=\"changeMessage()\">Change</button>\n\n</div>"

/***/ }),

/***/ "./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.ts ***!
  \********************************************************************************/
/*! exports provided: DemoDataShareViewchildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDataShareViewchildComponent", function() { return DemoDataShareViewchildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoDataShareViewchildComponent = /** @class */ (function () {
    function DemoDataShareViewchildComponent() {
        this.childV = 'fromChild';
    }
    DemoDataShareViewchildComponent.prototype.ngOnInit = function () {
    };
    DemoDataShareViewchildComponent.prototype.changeMessage = function () {
        this.childV += ' changed';
    };
    DemoDataShareViewchildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-datashare-viewchild',
            template: __webpack_require__(/*! ./demo-datashare-viewchild.component.html */ "./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.html"),
            styles: [__webpack_require__(/*! ./demo-datashare-viewchild.component.css */ "./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoDataShareViewchildComponent);
    return DemoDataShareViewchildComponent;
}());



/***/ }),

/***/ "./src/app/demo-datashare/demo-datashare.component.css":
/*!*************************************************************!*\
  !*** ./src/app/demo-datashare/demo-datashare.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-datashare/demo-datashare.component.html":
/*!**************************************************************!*\
  !*** ./src/app/demo-datashare/demo-datashare.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Input, Output, ViewChild.-->\n<h2>Input</h2>\n<div class=\"parent\">\n  <p>Parent msg:</p>\n  <app-demo-datashare-input [inputContent]=\"'something, something'\"></app-demo-datashare-input>\n</div>\n\n<h2 class=\"nextBlock\">Output</h2>\n<div class=\"parent\">\n  <p>Parent msg: {{theOutput}}</p>\n  <app-demo-datashare-output (outputEvent)=\"outputReceiver($event)\"></app-demo-datashare-output>\n</div>\n\n<h2 class=\"nextBlock\">ViewChild</h2>\n<div class=\"parent\">\n  Parent msg: {{parentV}}\n  <button type=\"submit\" (click)=\"getFromChild()\">getFromChild</button>\n  <button type=\"submit\" (click)=\"sendToChild()\">sendToChild</button>\n  <app-demo-datashare-viewchild></app-demo-datashare-viewchild>\n</div>\n\n<h2 class=\"nextBlock\">Service</h2>\n<div class=\"parent\">\n  <p>Parent msg: {{message}}: </p>\n  <p>another msg: {{anotherMessage}}</p>\n  <app-demo-datashare-service></app-demo-datashare-service>\n  <app-demo-datashare-sibling></app-demo-datashare-sibling>\n</div>"

/***/ }),

/***/ "./src/app/demo-datashare/demo-datashare.component.ts":
/*!************************************************************!*\
  !*** ./src/app/demo-datashare/demo-datashare.component.ts ***!
  \************************************************************/
/*! exports provided: DemoDatashareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDatashareComponent", function() { return DemoDatashareComponent; });
/* harmony import */ var _service_datashare_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/datashare.service */ "./src/app/service/datashare.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _demo_datashare_viewchild_demo_datashare_viewchild_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../demo-datashare-viewchild/demo-datashare-viewchild.component */ "./src/app/demo-datashare-viewchild/demo-datashare-viewchild.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoDatashareComponent = /** @class */ (function () {
    function DemoDatashareComponent(dService) {
        this.dService = dService;
        this.parentV = 'from Parent';
    }
    DemoDatashareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dService.messageSource.subscribe(function (data) { return _this.message = data; });
        this.anotherMessage = this.dService.anotherMessage;
    };
    // output
    // child->parent via output
    DemoDatashareComponent.prototype.outputReceiver = function (receivedContent) {
        this.theOutput = receivedContent;
        console.log(receivedContent);
    };
    // child->parent via viewChild
    DemoDatashareComponent.prototype.getFromChild = function () {
        this.parentV = this.child.childV;
    };
    // parent->child via viewChild
    DemoDatashareComponent.prototype.sendToChild = function () {
        this.child.childV = this.parentV;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_demo_datashare_viewchild_demo_datashare_viewchild_component__WEBPACK_IMPORTED_MODULE_2__["DemoDataShareViewchildComponent"]),
        __metadata("design:type", Object)
    ], DemoDatashareComponent.prototype, "child", void 0);
    DemoDatashareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-datashare',
            template: __webpack_require__(/*! ./demo-datashare.component.html */ "./src/app/demo-datashare/demo-datashare.component.html"),
            styles: [__webpack_require__(/*! ./demo-datashare.component.css */ "./src/app/demo-datashare/demo-datashare.component.css")]
        }),
        __metadata("design:paramtypes", [_service_datashare_service__WEBPACK_IMPORTED_MODULE_0__["DatashareService"]])
    ], DemoDatashareComponent);
    return DemoDatashareComponent;
}());



/***/ }),

/***/ "./src/app/demo-directive-attribute/demo-directive-attribute.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/demo-directive-attribute/demo-directive-attribute.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-directive-attribute/demo-directive-attribute.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/demo-directive-attribute/demo-directive-attribute.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Attribute Directive</h1>\n\n<h4>Pick a highlight color</h4>\n<div>\n  <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n  <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n  <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n</div>\n<p [appHightlightColor]=\"color\">Highlight me!</p>\n\n<p [appHightlightColor]=\"color\" [defaultColor]=\"violet\">\n  Highlight me too!\n</p>"

/***/ }),

/***/ "./src/app/demo-directive-attribute/demo-directive-attribute.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo-directive-attribute/demo-directive-attribute.component.ts ***!
  \********************************************************************************/
/*! exports provided: DemoDirectiveAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDirectiveAttributeComponent", function() { return DemoDirectiveAttributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoDirectiveAttributeComponent = /** @class */ (function () {
    function DemoDirectiveAttributeComponent() {
    }
    DemoDirectiveAttributeComponent.prototype.ngOnInit = function () {
    };
    DemoDirectiveAttributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-directive-attribute',
            template: __webpack_require__(/*! ./demo-directive-attribute.component.html */ "./src/app/demo-directive-attribute/demo-directive-attribute.component.html"),
            styles: [__webpack_require__(/*! ./demo-directive-attribute.component.css */ "./src/app/demo-directive-attribute/demo-directive-attribute.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoDirectiveAttributeComponent);
    return DemoDirectiveAttributeComponent;
}());



/***/ }),

/***/ "./src/app/demo-directive-buildin/demo-directive-buildin.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/demo-directive-buildin/demo-directive-buildin.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-directive-buildin/demo-directive-buildin.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/demo-directive-buildin/demo-directive-buildin.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Attribute directives:</h1>\n<div [hidden]=\"!conditionExp\">NotHidden</div>\n<div [ngClass]=\"{'yellow': conditionExp}\">Yellow</div>\n<div [style.font-size.em]=\"'3'\">size 3</div>\n<div [ngStyle]=\"blueStyle\">Blue</div>\n<div [ngStyle]=\"setRedStyle()\">Red</div>\n\n<hr/>\n\n<h1>Structural directives:</h1>\n<!--Condition-->\n<ng-template [ngIf]=\"conditionExp\">NotHidden</ng-template>\n<div *ngIf=\"conditionExp\">NotHidden</div>\n\n<!--Condition-->\n<div [ngSwitch]=\"selectionExp\">\n  <ng-template [ngSwitchCase]=\"1\">1</ng-template>\n  <ng-template ngSwitchCase=\"2\">2</ng-template>\n  <ng-template ngSwitchDefault>999</ng-template>\n</div>\n\n<!--Loop-->\n<ul>\n  <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"list\">\n    <li>\n      {{i}}: {{item}}\n    </li>\n  </ng-template>\n</ul>\n\n<ul>\n  <li *ngFor=\"let item of list; let i = index\">{{i}}:{{item}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/demo-directive-buildin/demo-directive-buildin.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo-directive-buildin/demo-directive-buildin.component.ts ***!
  \****************************************************************************/
/*! exports provided: DemoDirectiveBuildinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDirectiveBuildinComponent", function() { return DemoDirectiveBuildinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoDirectiveBuildinComponent = /** @class */ (function () {
    function DemoDirectiveBuildinComponent() {
        this.conditionExp = true;
        this.selectionExp = 1;
        this.list = ['a', 'b', 'c'];
        this.blueStyle = {
            'background-color': 'blue'
        };
        this.redStyle = {
            'background-color': 'red'
        };
    }
    DemoDirectiveBuildinComponent.prototype.setRedStyle = function () {
        return this.redStyle;
    };
    DemoDirectiveBuildinComponent.prototype.ngOnInit = function () {
    };
    DemoDirectiveBuildinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-directive-buildin',
            template: __webpack_require__(/*! ./demo-directive-buildin.component.html */ "./src/app/demo-directive-buildin/demo-directive-buildin.component.html"),
            styles: [__webpack_require__(/*! ./demo-directive-buildin.component.css */ "./src/app/demo-directive-buildin/demo-directive-buildin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoDirectiveBuildinComponent);
    return DemoDirectiveBuildinComponent;
}());



/***/ }),

/***/ "./src/app/demo-directive-structural/demo-directive-structural.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/demo-directive-structural/demo-directive-structural.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-directive-structural/demo-directive-structural.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/demo-directive-structural/demo-directive-structural.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"appUnless\">UnlessDirective</h2>\n<p>\n  The condition is currently\n  <span [ngClass]=\"{ 'a': !condition, 'b': condition, 'unless': true }\">{{condition}}</span>.\n  <button (click)=\"condition = !condition\" [ngClass]=\"{ 'a': condition, 'b': !condition }\">\n    Toggle condition to {{condition ? 'false' : 'true'}}\n  </button>\n</p>\n<p *appUnless=\"condition\">\n  (A) This paragraph is displayed because the condition is false.\n</p>\n\n<p *appUnless=\"!condition\">\n  (B) Although the condition is true, this paragraph is displayed because appUnless is set to false.\n</p>\n\n\n<h4>UnlessDirective with template</h4>\n\n<p *appUnless=\"condition\">Show this sentence unless the condition is true.</p>\n\n<p *appUnless=\"condition\">\n  (A) &lt;p *appUnless=\"condition\"&gt;\n</p>\n\n<ng-template [appUnless]=\"condition\">\n  <p>\n    (A) &lt;ng-template [appUnless]=\"condition\"&gt;\n  </p>\n</ng-template>"

/***/ }),

/***/ "./src/app/demo-directive-structural/demo-directive-structural.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demo-directive-structural/demo-directive-structural.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DemoDirectiveStructuralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDirectiveStructuralComponent", function() { return DemoDirectiveStructuralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoDirectiveStructuralComponent = /** @class */ (function () {
    function DemoDirectiveStructuralComponent() {
        this.condition = false;
        this.logs = [];
        this.showSad = true;
        this.status = 'ready';
    }
    DemoDirectiveStructuralComponent.prototype.ngOnInit = function () {
    };
    DemoDirectiveStructuralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-directive-structural',
            template: __webpack_require__(/*! ./demo-directive-structural.component.html */ "./src/app/demo-directive-structural/demo-directive-structural.component.html"),
            styles: [__webpack_require__(/*! ./demo-directive-structural.component.css */ "./src/app/demo-directive-structural/demo-directive-structural.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoDirectiveStructuralComponent);
    return DemoDirectiveStructuralComponent;
}());



/***/ }),

/***/ "./src/app/demo-form-model/demo-form-model.component.css":
/*!***************************************************************!*\
  !*** ./src/app/demo-form-model/demo-form-model.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-form-model/demo-form-model.component.html":
/*!****************************************************************!*\
  !*** ./src/app/demo-form-model/demo-form-model.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myform\" (ngSubmit)=\"onSubmit(myform)\">\n\n  <fieldset formGroupName=\"name\">\n    <div>\n      <label>First Name</label>\n      <input type=\"text\" formControlName=\"firstName\">\n    </div>\n    <div>\n      <label>Last Name</label>\n      <input type=\"text\" formControlName=\"lastName\">\n    </div>\n  </fieldset>\n\n\n  <label>Email</label>\n  <input type=\"email\" formControlName=\"email\">\n\n  <div>\n    <label>Password</label>\n    <input type=\"password\" formControlName=\"password\">\n  </div>\n\n  <div>\n    <label>Language</label>\n    <select formControlName=\"language\">\n      <option value=\"\">Please select a language</option>\n      <option *ngFor=\"let lang of langs\" [value]=\"lang\">{{lang}}\n      </option>\n    </select>\n  </div>\n  <button type=\"submit\" [disabled]=\"!myform.valid\" >Submit</button>\n\n  <pre>form: {{myform.value | json}}</pre>\n  <pre>status: {{myform.status |json }}</pre>\n  <pre>pristine: {{myform.pristine |json }}</pre>\n  <pre>untouched: {{myform.untouched |json }}</pre>\n</form>\n\n\n<!-- <form [formGroup]=\"myform\">\n  <fieldset formGroupName=\"name\">\n    <input type=\"text\" formControlName=\"firstName\">\n    <input type=\"text\" formControlName=\"lastName\">\n  </fieldset>\n  <input type=\"email\" formControlName=\"email\">\n  <input type=\"password\" formControlName=\"password\">\n  <select formControlName=\"language\">\n    <option *ngFor=\"let lang of langs\" [value]=\"lang\">{{lang}}</option>\n  </select>\n</form> -->"

/***/ }),

/***/ "./src/app/demo-form-model/demo-form-model.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo-form-model/demo-form-model.component.ts ***!
  \**************************************************************/
/*! exports provided: DemoFormModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFormModelComponent", function() { return DemoFormModelComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoFormModelComponent = /** @class */ (function () {
    function DemoFormModelComponent(fb) {
        this.fb = fb;
        this.langs = [
            'English',
            'French',
            'German',
        ];
    }
    DemoFormModelComponent.prototype.ngOnInit = function () {
        // choose one of them to bind form
        // (1)
        // this.bindForm();
        // (2)
        this.createForm();
    };
    DemoFormModelComponent.prototype.bindForm = function () {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]()
        });
    };
    DemoFormModelComponent.prototype.createForm = function () {
        this.myform = this.fb.group({
            name: this.fb.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
            password: '',
            language: ''
        });
    };
    DemoFormModelComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        if (f.valid) {
            console.log('This form is good to go.');
        }
    };
    DemoFormModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-form-model',
            template: __webpack_require__(/*! ./demo-form-model.component.html */ "./src/app/demo-form-model/demo-form-model.component.html"),
            styles: [__webpack_require__(/*! ./demo-form-model.component.css */ "./src/app/demo-form-model/demo-form-model.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], DemoFormModelComponent);
    return DemoFormModelComponent;
}());



/***/ }),

/***/ "./src/app/demo-form-template/demo-form-template.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/demo-form-template/demo-form-template.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-form-template/demo-form-template.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo-form-template/demo-form-template.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Data submit</h2>\n\n<form #movieForm=\"ngForm\" (ngSubmit)=\"onSubmit(movieForm)\">\n  <ul>\n    <li>\n      <label for=\"movieName\">Name</label>\n      <input type=\"text\" id=\"movieName\" name=\"movieName\" ngModel>\n    </li>\n    <li>\n      <label for=\"type\">Type</label>\n      <input type=\"radio\" name=\"type\" value=\"movie\" checked ngModel> Movie\n      <input type=\"radio\" name=\"type\" value=\"series\" ngModel> Series\n      <input type=\"radio\" name=\"type\" value=\"other\" ngModel> Other\n    </li>\n    <li>\n      <label for=\"category\">Category</label>\n      <select id=\"category\" name=\"category\" multiple ngModel>\n        <option value=\"Action\">Action</option>\n        <option value=\"Science Fiction\">Science Fiction</option>\n        <option value=\"Comedy\">Comedy</option>\n        <option value=\"Drama\">Drama</option>\n        <option value=\"Horror\">Horror</option>\n        <option value=\"Romance\">Romance</option>\n      </select>\n    </li>\n    <li>\n      <label for=\"year\">Year</label>\n      <input type=\"number\" id=\"year\" name=\"year\" maxlength=\"4\" ngModel>\n    </li>\n  </ul>\n  <button type=\"submit\">Submit</button>\n</form>\n\n<h2>Validation</h2>\n\n<form #validationForm=\"ngForm\" (ngSubmit)=\"onSubmit(validationForm)\">\n\n  <input type=\"text\" name=\"someName\" #someName=\"ngModel\" ngModel minlength=\"2\" required/>\n\n  <span [hidden]=\"someName.pristine || someName.valid\" style=\"color: red\">\n    Warming Msg\n  </span>\n  <br/>\n  <div>status: {{someName.pristine}}, {{someName.valid}} , {{validationForm.form.valid}}</div>\n  <button type=\"submit\" [disabled]=\"!validationForm.valid\">Submit</button>\n</form>\n\n<h2>Show Css</h2>\n\n<form #showCssForm=\"ngForm\" (ngSubmit)=\"onSubmit(showCssForm)\">\n  <input type=\"text\" name=\"showCss\" [(ngModel)]=\"modelForShowCss.showCss\" #showCss required/>\n  <div>css:{{showCss.className}}</div>\n</form>\n\n<h2>Pattern Validation</h2>\n<form #patternForm=\"ngForm\" (ngSubmit)=\"onSubmit(showCssForm)\">\n  <input name=\"username\" [ngModel]=\"modelForPattern.username\" [pattern]=\"unamePattern\" #uname=\"ngModel\">\n  <button type=\"submit\" [disabled]=\"!patternForm.form.valid\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/demo-form-template/demo-form-template.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo-form-template/demo-form-template.component.ts ***!
  \********************************************************************/
/*! exports provided: DemoFormTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFormTemplateComponent", function() { return DemoFormTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoFormTemplateComponent = /** @class */ (function () {
    function DemoFormTemplateComponent() {
        this.modelForShowCss = {};
        this.modelForPattern = {};
        this.unamePattern = '^[a-z0-9_-]{8,15}$';
    }
    DemoFormTemplateComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        if (f.valid) {
            console.log('This form is good to go.');
        }
    };
    DemoFormTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-form-template',
            template: __webpack_require__(/*! ./demo-form-template.component.html */ "./src/app/demo-form-template/demo-form-template.component.html"),
            styles: [__webpack_require__(/*! ./demo-form-template.component.css */ "./src/app/demo-form-template/demo-form-template.component.css")]
        })
    ], DemoFormTemplateComponent);
    return DemoFormTemplateComponent;
}());



/***/ }),

/***/ "./src/app/demo-htmlcss/demo-htmlcss.component.css":
/*!*********************************************************!*\
  !*** ./src/app/demo-htmlcss/demo-htmlcss.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    color: green;\r\n}\r\n#byID{\r\n    color: red;\r\n}\r\n.byClass{\r\n    color: blue;\r\n}\r\np, #byID, .byClass{\r\n    background-color: black;\r\n}\r\na:not(:hover){\r\n    color: green;\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/demo-htmlcss/demo-htmlcss.component.html":
/*!**********************************************************!*\
  !*** ./src/app/demo-htmlcss/demo-htmlcss.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"a.html\">link</a>\n<a href=\"x.xml\">link</a>\n<a href=\"c.html\">link</a>\n<a href=\"h\">link</a>\n<p s=\"a\"> Your content </p>\n<p id=\"byID\"> Your content </p>\n<p class=\"byClass\"> Your content </p>\n\n<!-- inline elements -->\n<span> inline tags </span>\n<img src=\"../../assets/img-example.png\" width=\"100px\" />\n<span> inline tags </span>\n\n<hr/>\n\n<!-- block elements -->\n<div>block tags</div>\n<div>block tags</div>\n\n<!-- nested tags -->\n<div>\n  <h1> Your header </h1>\n  <div> Your Content </div>\n</div>\n\n<!-- lists -->\n<ul style=\"list-style: none\">\n  <li>List item</li>\n  <li>List item</li>\n  <li>List item</li>\n</ul>\n\n<ol>\n  <li>List item</li>\n  <li>List item</li>\n  <li>List item</li>\n</ol>\n\n<hr/>\n<!-- form -->\n<form name=\"\" action=\"default_itself.html\" method=\"get\" target=\"_blank\">\n  <fieldset disabled>\n    <input type=\"\" name=\"\" disabled readonly autofocus>\n  </fieldset>\n\n  <!--text-->\n  <fieldset>\n    <label for=\"forText\">Name:</label>\n    <input type=\"text\" maxlength=\"\" size=\"\" value=\"\" placeholder=\"\" id=\"forText\" />\n    <label>Textarea:</label>\n    <textarea cols=\"\" rows=\"\" wrap=\"hard/soft\" placeholder=\"abc\"></textarea>\n  </fieldset>\n\n  <!--tick-->\n  <fieldset>\n    <legend>radio button:</legend>\n    <input type=\"radio\" value=\"1\" name=\"the_same_name\" checked/>\n    <label>op1</label>\n    <input type=\"radio\" value=\"2\" name=\"the_same_name\" checked/>\n    <label>op2</label>\n    <input type=\"radio\" value=\"3\" name=\"the_same_name\" checked/>\n    <label>op3</label>\n  </fieldset>\n\n  <!--tick-->\n  <fieldset>\n    <legend>check box:</legend>\n    <input type=\"checkbox\" value=\"1\" name=\"different_name\" checked/>\n    <label>op1</label>\n    <input type=\"checkbox\" value=\"2\" name=\"different_name\" checked/>\n    <label>op2</label>\n    <input type=\"checkbox\" value=\"3\" name=\"different_name\" checked/>\n    <label>op3</label>\n  </fieldset>\n\n  <!--list-->\n  <fieldset>\n    <select size=\"10\" multiple>\n      <optgroup label=\"Car\">\n        <option value=\"1\" selected>Volvo</option>\n        <option value=\"2\">Ford</option>\n      </optgroup>\n      <optgroup label=\"Cell Phone\">\n        <option value=\"1\" selected>Apple</option>\n        <option value=\"2\">Samsung</option>\n      </optgroup>\n    </select>\n  </fieldset>\n</form>\n\n<hr/>\n\n<!--file-->\n<form enctype=\"multipart/form-data\">\n  <input type=\"file\" accept=\"*/*, image/jpeg\">\n</form>\n\n<hr/>\n<!--<form novalidate>-->\n<form>\n  <!--validation-->\n  <fieldset>\n    <label>Javascipt:</label>\n    <input type=\"text\" autocomplete=\"on\" required oninvalid=\"this.setCustomValidity('MSG')\">\n    <label>Pattern:</label>\n    <input pattern=\"[A-Za-z]{3}\" required title=\"Move over text: Three letter country code\">\n  </fieldset>\n\n  <!--datalist-->\n  <fieldset>\n    <legend>datalist</legend>\n    <input list=\"browsers\" name=\"browser\">\n    <datalist id=\"browsers\">\n      <option value=\"Internet Explorer\"></option>\n      <option value=\"Firefox\"></option>\n      <option value=\"Firefox\"></option>\n    </datalist>\n  </fieldset>\n\n  <!--4 buttons element or block-->\n  <fieldset>\n    <input type=\"submit\" />\n    <input type=\"reset\" />\n    <input type=\"button\" value=\"Button name\" />\n    <input type=\"image\" src=\"../../assets/img-example.png\" alt=\"\" width=\"50px\" />\n    <button type=\"\">Button name</button>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/demo-htmlcss/demo-htmlcss.component.ts":
/*!********************************************************!*\
  !*** ./src/app/demo-htmlcss/demo-htmlcss.component.ts ***!
  \********************************************************/
/*! exports provided: DemoHtmlcssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoHtmlcssComponent", function() { return DemoHtmlcssComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoHtmlcssComponent = /** @class */ (function () {
    function DemoHtmlcssComponent() {
    }
    DemoHtmlcssComponent.prototype.ngOnInit = function () {
    };
    DemoHtmlcssComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-htmlcss',
            template: __webpack_require__(/*! ./demo-htmlcss.component.html */ "./src/app/demo-htmlcss/demo-htmlcss.component.html"),
            styles: [__webpack_require__(/*! ./demo-htmlcss.component.css */ "./src/app/demo-htmlcss/demo-htmlcss.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoHtmlcssComponent);
    return DemoHtmlcssComponent;
}());



/***/ }),

/***/ "./src/app/demo-httpclient/demo-httpclient.component.css":
/*!***************************************************************!*\
  !*** ./src/app/demo-httpclient/demo-httpclient.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-httpclient/demo-httpclient.component.html":
/*!****************************************************************!*\
  !*** ./src/app/demo-httpclient/demo-httpclient.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  HttpClient\n</h2>\n<button type=\"submit\" (click)=\"getData()\">Get</button>\n<button type=\"submit\" (click)=\"postData()\">Post</button>\n\n<div>{{results|json}}</div>"

/***/ }),

/***/ "./src/app/demo-httpclient/demo-httpclient.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo-httpclient/demo-httpclient.component.ts ***!
  \**************************************************************/
/*! exports provided: DemoHttpclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoHttpclientComponent", function() { return DemoHttpclientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pojo_jsonexample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pojo-jsonexample */ "./src/app/demo-httpclient/pojo-jsonexample.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DemoHttpclientComponent = /** @class */ (function () {
    function DemoHttpclientComponent(http) {
        this.http = http;
    }
    DemoHttpclientComponent.prototype.ngOnInit = function () { };
    DemoHttpclientComponent.prototype.getData = function () {
        var _this = this;
        // Make the HTTP request:
        this.http
            .get('https://jsonplaceholder.typicode.com/posts/2')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError))
            .subscribe(function (data) {
            // this.results = (JsonExample)data;
            _this.results = data;
            console.log(_this.results);
        }, function (err) {
            console.log('Something went wrong!');
        });
    };
    DemoHttpclientComponent.prototype.postData = function () {
        var _this = this;
        var postExample = new _pojo_jsonexample__WEBPACK_IMPORTED_MODULE_1__["JsonExample"](10, 1000, 'testTitle', 'testBody');
        // Post
        this.http
            .post('https://jsonplaceholder.typicode.com/posts', postExample)
            .subscribe(function (data) {
            _this.results = data;
            console.log(_this.results);
        }, function (err) {
            console.log('Something went wrong!');
        });
    };
    DemoHttpclientComponent.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    DemoHttpclientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-httpclient',
            template: __webpack_require__(/*! ./demo-httpclient.component.html */ "./src/app/demo-httpclient/demo-httpclient.component.html"),
            styles: [__webpack_require__(/*! ./demo-httpclient.component.css */ "./src/app/demo-httpclient/demo-httpclient.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DemoHttpclientComponent);
    return DemoHttpclientComponent;
}());



/***/ }),

/***/ "./src/app/demo-httpclient/pojo-jsonexample.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo-httpclient/pojo-jsonexample.ts ***!
  \*****************************************************/
/*! exports provided: JsonExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonExample", function() { return JsonExample; });
var JsonExample = /** @class */ (function () {
    function JsonExample(userID, id, title, body) {
        this.userID = userID;
        this.id = id;
        this.title = title;
        this.body = body;
    }
    return JsonExample;
}());



/***/ }),

/***/ "./src/app/demo-pipe/demo-pipe.component.css":
/*!***************************************************!*\
  !*** ./src/app/demo-pipe/demo-pipe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-pipe/demo-pipe.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo-pipe/demo-pipe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Pipe Test -->\n<h1>Pipe Test</h1>\n<p>My name is\n  <strong>{{ 'jAMES hUNt' | capitalize }}</strong>.\n  <strong>{{ '2.5' |  currency:'CAD' }}</strong>.\n\n</p>"

/***/ }),

/***/ "./src/app/demo-pipe/demo-pipe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo-pipe/demo-pipe.component.ts ***!
  \**************************************************/
/*! exports provided: DemoPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPipeComponent", function() { return DemoPipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoPipeComponent = /** @class */ (function () {
    function DemoPipeComponent() {
    }
    DemoPipeComponent.prototype.ngOnInit = function () {
    };
    DemoPipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-pipe',
            template: __webpack_require__(/*! ./demo-pipe.component.html */ "./src/app/demo-pipe/demo-pipe.component.html"),
            styles: [__webpack_require__(/*! ./demo-pipe.component.css */ "./src/app/demo-pipe/demo-pipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoPipeComponent);
    return DemoPipeComponent;
}());



/***/ }),

/***/ "./src/app/demo-routing-parameters/demo-routing-parameters.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/demo-routing-parameters/demo-routing-parameters.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-routing-parameters/demo-routing-parameters.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/demo-routing-parameters/demo-routing-parameters.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Showing product details for product: {{type}} - {{id}} - {{o1}} -{{o2}}\n</div>"

/***/ }),

/***/ "./src/app/demo-routing-parameters/demo-routing-parameters.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo-routing-parameters/demo-routing-parameters.component.ts ***!
  \******************************************************************************/
/*! exports provided: DemoRoutingParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutingParametersComponent", function() { return DemoRoutingParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoRoutingParametersComponent = /** @class */ (function () {
    function DemoRoutingParametersComponent(route) {
        this.route = route;
        this.o1 = '';
        this.o2 = '';
    }
    DemoRoutingParametersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id = params['productId']; // (+) converts string 'id' to a number
            _this.type = params['productType'];
            _this.o1 = params['option1'];
            _this.o2 = params['option2'];
            // In a real app: dispatch action to load the details here.
        });
    };
    DemoRoutingParametersComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DemoRoutingParametersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-routing-parameters',
            template: __webpack_require__(/*! ./demo-routing-parameters.component.html */ "./src/app/demo-routing-parameters/demo-routing-parameters.component.html"),
            styles: [__webpack_require__(/*! ./demo-routing-parameters.component.css */ "./src/app/demo-routing-parameters/demo-routing-parameters.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DemoRoutingParametersComponent);
    return DemoRoutingParametersComponent;
}());



/***/ }),

/***/ "./src/app/demo-rxjs/demo-rxjs.component.css":
/*!***************************************************!*\
  !*** ./src/app/demo-rxjs/demo-rxjs.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-rxjs/demo-rxjs.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo-rxjs/demo-rxjs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  demo-rxjs works!\n</p>\n"

/***/ }),

/***/ "./src/app/demo-rxjs/demo-rxjs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo-rxjs/demo-rxjs.component.ts ***!
  \**************************************************/
/*! exports provided: DemoRxjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRxjsComponent", function() { return DemoRxjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoRxjsComponent = /** @class */ (function () {
    function DemoRxjsComponent() {
    }
    DemoRxjsComponent.prototype.ngOnInit = function () {
        this.testSubject();
    };
    DemoRxjsComponent.prototype.testBehaviorSubject = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0); // 0 is the initial value
        subject.subscribe({
            next: function (v) { return console.log('observerA: ' + v); } // output initial value, then new values on `next` triggers
        });
        subject.next(1); // output new value 1 for 'observer A'
        subject.next(2); // output new value 2 for 'observer A', current value 2 for 'Observer B' on subscription
        subject.subscribe({
            next: function (v) { return console.log('observerB: ' + v); } // output current value 2, then new values on `next` triggers
        });
        subject.next(3);
    };
    DemoRxjsComponent.prototype.testSubject = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        subject.next(1); // Subjects will not output this value
        subject.subscribe({
            next: function (v) { return console.log('observerA: ' + v); }
        });
        subject.subscribe({
            next: function (v) { return console.log('observerB: ' + v); }
        });
        subject.next(2);
        subject.next(3);
    };
    DemoRxjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-rxjs',
            template: __webpack_require__(/*! ./demo-rxjs.component.html */ "./src/app/demo-rxjs/demo-rxjs.component.html"),
            styles: [__webpack_require__(/*! ./demo-rxjs.component.css */ "./src/app/demo-rxjs/demo-rxjs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoRxjsComponent);
    return DemoRxjsComponent;
}());



/***/ }),

/***/ "./src/app/demo-typescript/demo-typescript.component.css":
/*!***************************************************************!*\
  !*** ./src/app/demo-typescript/demo-typescript.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-typescript/demo-typescript.component.html":
/*!****************************************************************!*\
  !*** ./src/app/demo-typescript/demo-typescript.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<button type=\"submit\" (click)=\"demoLoop()\">Loop</button>\n<button type=\"submit\" (click)=\"demoClass()\">Class & Interface</button>\n\n\n"

/***/ }),

/***/ "./src/app/demo-typescript/demo-typescript.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo-typescript/demo-typescript.component.ts ***!
  \**************************************************************/
/*! exports provided: DemoTypescriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTypescriptComponent", function() { return DemoTypescriptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoTypescriptComponent = /** @class */ (function () {
    function DemoTypescriptComponent() {
    }
    DemoTypescriptComponent.prototype.ngOnInit = function () {
    };
    // Type Annotation
    DemoTypescriptComponent.prototype.demoFunction = function (inputValue) {
        // Number
        var decimal = 6;
        var hex = 0xf00d;
        var binary = 10;
        var octal = 484;
        // Stirng
        var person = 'Mike';
        var age = 37;
        var sentence = "Oh, " + person + " is " + age + " years old.";
        // Array
        var list = [1, 2, 3];
        // Tuple
        var x;
        x = ['hello', 10];
        // x = [10, 'hello'];
        // x[3] = true;
    };
    DemoTypescriptComponent.prototype.demoLoop = function () {
        var list = [4, 5, 6];
        for (var i in list) {
            console.log(i);
        }
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var i = list_1[_i];
            console.log(i);
        }
    };
    DemoTypescriptComponent.prototype.demoClass = function () {
        console.log((new Circle(2)).area());
    };
    DemoTypescriptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-typescript',
            template: __webpack_require__(/*! ./demo-typescript.component.html */ "./src/app/demo-typescript/demo-typescript.component.html"),
            styles: [__webpack_require__(/*! ./demo-typescript.component.css */ "./src/app/demo-typescript/demo-typescript.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoTypescriptComponent);
    return DemoTypescriptComponent;
}());

var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.pow(this.radius, 2) * Circle.pi;
    };
    Circle.pi = 3.1415;
    return Circle;
}());


/***/ }),

/***/ "./src/app/directive/highlight.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directive/highlight.directive.ts ***!
  \**************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:member-ordering */

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.defaultColor = 'red';
        // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight(this.appHightlightColor);
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appHightlightColor'),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "appHightlightColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('defaultColor'),
        __metadata("design:type", Object)
    ], HighlightDirective.prototype, "defaultColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[appHightlightColor]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/directive/unless.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directive/unless.directive.ts ***!
  \***********************************************/
/*! exports provided: UnlessDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlessDirective", function() { return UnlessDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Add the template content to the DOM unless the condition is true.
 *
 * If the expression assigned to `appUnless` evaluates to a truthy value
 * then the templated elements are removed removed from the DOM,
 * the templated elements are (re)inserted into the DOM.
 *
 * <div *ngUnless="errorCount" class="success">
 *   Congrats! Everything is great!
 * </div>
 *
 * ### Syntax
 *
 * - `<div *appUnless="condition">...</div>`
 * - `<ng-template [appUnless]="condition"><div>...</div></ng-template>`
 *
 */

var UnlessDirective = /** @class */ (function () {
    function UnlessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(UnlessDirective.prototype, "appUnless", {
        set: function (condition) {
            // console.log(condition);
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], UnlessDirective.prototype, "appUnless", null);
    UnlessDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[appUnless]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], UnlessDirective);
    return UnlessDirective;
}());



/***/ }),

/***/ "./src/app/service/datashare.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/datashare.service.ts ***!
  \**********************************************/
/*! exports provided: DatashareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatashareService", function() { return DatashareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatashareService = /** @class */ (function () {
    function DatashareService() {
        // (1) Subject doesnot return the current value on Subscription. It triggers only on .next(value) call and return/output the value
        this.anotherMessage = 'default message';
        // (2) BehaviourSubject will return the initial value or the current value on Subscription
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
    }
    // (3) encapsolate messsageSource, and reveal by asObservable
    // private messageSource = new BehaviorSubject<string>('default message');
    // currentMessage = this.messageSource.asObservable();
    DatashareService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DatashareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatashareService);
    return DatashareService;
}());



/***/ }),

/***/ "./src/app/service/test-auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/test-auth.service.ts ***!
  \**********************************************/
/*! exports provided: TestAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAuthService", function() { return TestAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestAuthService = /** @class */ (function () {
    function TestAuthService() {
    }
    TestAuthService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem('token');
    };
    TestAuthService.prototype.isAuthenticatedAsync = function () {
        return Promise.resolve(!!localStorage.getItem('token')); // flip it every time once it read
    };
    TestAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TestAuthService);
    return TestAuthService;
}());



/***/ }),

/***/ "./src/app/test-angularbed/test-angularbed.component.css":
/*!***************************************************************!*\
  !*** ./src/app/test-angularbed/test-angularbed.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-angularbed/test-angularbed.component.html":
/*!****************************************************************!*\
  !*** ./src/app/test-angularbed/test-angularbed.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test-angularbed works!\n</p>\n"

/***/ }),

/***/ "./src/app/test-angularbed/test-angularbed.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/test-angularbed/test-angularbed.component.ts ***!
  \**************************************************************/
/*! exports provided: TestAngularbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAngularbedComponent", function() { return TestAngularbedComponent; });
/* harmony import */ var _service_test_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/test-auth.service */ "./src/app/service/test-auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestAngularbedComponent = /** @class */ (function () {
    function TestAngularbedComponent(auth) {
        this.auth = auth;
    }
    TestAngularbedComponent.prototype.ngOnInit = function () {
    };
    TestAngularbedComponent.prototype.needsLogin = function () {
        return !this.auth.isAuthenticated();
    };
    TestAngularbedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-angularbed',
            template: __webpack_require__(/*! ./test-angularbed.component.html */ "./src/app/test-angularbed/test-angularbed.component.html"),
            styles: [__webpack_require__(/*! ./test-angularbed.component.css */ "./src/app/test-angularbed/test-angularbed.component.css")]
        }),
        __metadata("design:paramtypes", [_service_test_auth_service__WEBPACK_IMPORTED_MODULE_0__["TestAuthService"]])
    ], TestAngularbedComponent);
    return TestAngularbedComponent;
}());



/***/ }),

/***/ "./src/app/test-async/test-async.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-async/test-async.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-async/test-async.component.html":
/*!******************************************************!*\
  !*** ./src/app/test-async/test-async.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a>\n  <span *ngIf=\"needsLogin\">Login</span>\n  <span *ngIf=\"!needsLogin\">Logout</span>\n</a>"

/***/ }),

/***/ "./src/app/test-async/test-async.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-async/test-async.component.ts ***!
  \****************************************************/
/*! exports provided: TestAsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAsyncComponent", function() { return TestAsyncComponent; });
/* harmony import */ var _service_test_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/test-auth.service */ "./src/app/service/test-auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestAsyncComponent = /** @class */ (function () {
    function TestAsyncComponent(auth) {
        this.auth = auth;
        this.needsLogin = true;
    }
    TestAsyncComponent.prototype.ngOnInit = function () {
        this.checkLoginStatus();
    };
    TestAsyncComponent.prototype.checkLoginStatus = function () {
        var _this = this;
        this.auth.isAuthenticatedAsync().then(function (authenticated) {
            _this.needsLogin = !authenticated;
        });
    };
    TestAsyncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-async',
            template: __webpack_require__(/*! ./test-async.component.html */ "./src/app/test-async/test-async.component.html"),
            styles: [__webpack_require__(/*! ./test-async.component.css */ "./src/app/test-async/test-async.component.css")]
        }),
        __metadata("design:paramtypes", [_service_test_auth_service__WEBPACK_IMPORTED_MODULE_0__["TestAuthService"]])
    ], TestAsyncComponent);
    return TestAsyncComponent;
}());



/***/ }),

/***/ "./src/app/test-component/test-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/test-component/test-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-component/test-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/test-component/test-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <label>Email</label>\n  <input type=\"email\" #email>\n  <label>Password</label>\n  <input type=\"password\" #password>\n  <button type=\"button\" (click)=\"login(email.value, password.value)\" [disabled]=\"!enabled\" #submitButton>Login\n  </button>\n</form>"

/***/ }),

/***/ "./src/app/test-component/test-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/test-component/test-component.component.ts ***!
  \************************************************************/
/*! exports provided: TestComponentComponent, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentComponent", function() { return TestComponentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponentComponent = /** @class */ (function () {
    function TestComponentComponent() {
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enabled = true;
    }
    TestComponentComponent.prototype.ngOnInit = function () {
    };
    TestComponentComponent.prototype.login = function (email, password) {
        console.log('Login ${email} ${password}');
        if (email && password) {
            console.log('Emitting');
            this.loggedIn.emit(new User(email, password));
            this.submitButton.nativeElement.style.backgroundColor = 'green';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TestComponentComponent.prototype, "loggedIn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TestComponentComponent.prototype, "submitButton", void 0);
    TestComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-component',
            template: __webpack_require__(/*! ./test-component.component.html */ "./src/app/test-component/test-component.component.html"),
            styles: [__webpack_require__(/*! ./test-component.component.css */ "./src/app/test-component/test-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponentComponent);
    return TestComponentComponent;
}());

var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/test-form-model/test-form-model.component.css":
/*!***************************************************************!*\
  !*** ./src/app/test-form-model/test-form-model.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-form-model/test-form-model.component.html":
/*!****************************************************************!*\
  !*** ./src/app/test-form-model/test-form-model.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"login()\" [formGroup]=\"form\">\n  <label>Email</label>\n  <input type=\"email\" formControlName=\"email\">\n  <label>Password</label>\n  <input type=\"password\" formControlName=\"password\">\n  <button type=\"submit\">Login</button>\n</form>"

/***/ }),

/***/ "./src/app/test-form-model/test-form-model.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/test-form-model/test-form-model.component.ts ***!
  \**************************************************************/
/*! exports provided: TestFormModelComponent, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFormModelComponent", function() { return TestFormModelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestFormModelComponent = /** @class */ (function () {
    function TestFormModelComponent(fb) {
        this.fb = fb;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TestFormModelComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ @]*@[^ @]*')
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)
                ]],
        });
    };
    TestFormModelComponent.prototype.login = function () {
        console.log("Login " + this.form.value);
        if (this.form.valid) {
            this.loggedIn.emit(new User(this.form.value.email, this.form.value.password));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TestFormModelComponent.prototype, "loggedIn", void 0);
    TestFormModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-form-model',
            template: __webpack_require__(/*! ./test-form-model.component.html */ "./src/app/test-form-model/test-form-model.component.html"),
            styles: [__webpack_require__(/*! ./test-form-model.component.css */ "./src/app/test-form-model/test-form-model.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TestFormModelComponent);
    return TestFormModelComponent;
}());

var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test-jasmine-mock-spy works!\n</p>\n"

/***/ }),

/***/ "./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.ts ***!
  \**************************************************************************/
/*! exports provided: TestJasmineMockSpyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestJasmineMockSpyComponent", function() { return TestJasmineMockSpyComponent; });
/* harmony import */ var _service_test_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/test-auth.service */ "./src/app/service/test-auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestJasmineMockSpyComponent = /** @class */ (function () {
    function TestJasmineMockSpyComponent(auth) {
        this.auth = auth;
    }
    TestJasmineMockSpyComponent.prototype.needsLogin = function () {
        return !this.auth.isAuthenticated();
    };
    TestJasmineMockSpyComponent.prototype.ngOnInit = function () {
    };
    TestJasmineMockSpyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-jasmine-mock-spy',
            template: __webpack_require__(/*! ./test-jasmine-mock-spy.component.html */ "./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.html"),
            styles: [__webpack_require__(/*! ./test-jasmine-mock-spy.component.css */ "./src/app/test-jasmine-mock-spy/test-jasmine-mock-spy.component.css")]
        }),
        __metadata("design:paramtypes", [_service_test_auth_service__WEBPACK_IMPORTED_MODULE_0__["TestAuthService"]])
    ], TestJasmineMockSpyComponent);
    return TestJasmineMockSpyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\D_WKS_BUSYQA\crm\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map