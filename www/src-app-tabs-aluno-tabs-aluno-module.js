(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-tabs-aluno-tabs-aluno-module"],{

/***/ "./src/app/tabs-aluno/tabs-aluno.module.ts":
/*!*************************************************!*\
  !*** ./src/app/tabs-aluno/tabs-aluno.module.ts ***!
  \*************************************************/
/*! exports provided: TabsAlunoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsAlunoPageModule", function() { return TabsAlunoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_aluno_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-aluno.page */ "./src/app/tabs-aluno/tabs-aluno.page.ts");
/* harmony import */ var _tabs_aluno_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-aluno.router.module */ "./src/app/tabs-aluno/tabs-aluno.router.module.ts");







var TabsAlunoPageModule = /** @class */ (function () {
    function TabsAlunoPageModule() {
    }
    TabsAlunoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tabs_aluno_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsAlunoPageRoutingModule"]
            ],
            declarations: [_tabs_aluno_page__WEBPACK_IMPORTED_MODULE_5__["TabsAlunoPage"]]
        })
    ], TabsAlunoPageModule);
    return TabsAlunoPageModule;
}());



/***/ }),

/***/ "./src/app/tabs-aluno/tabs-aluno.page.html":
/*!*************************************************!*\
  !*** ./src/app/tabs-aluno/tabs-aluno.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"aluno-atividade-codigo\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Início</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"aluno-atividade\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Atividades</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"aluno-perfil\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs-aluno/tabs-aluno.page.scss":
/*!*************************************************!*\
  !*** ./src/app/tabs-aluno/tabs-aluno.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMtYWx1bm8vdGFicy1hbHVuby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs-aluno/tabs-aluno.page.ts":
/*!***********************************************!*\
  !*** ./src/app/tabs-aluno/tabs-aluno.page.ts ***!
  \***********************************************/
/*! exports provided: TabsAlunoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsAlunoPage", function() { return TabsAlunoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsAlunoPage = /** @class */ (function () {
    function TabsAlunoPage() {
    }
    TabsAlunoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aluno-inicio-tabs-aluno',
            template: __webpack_require__(/*! ./tabs-aluno.page.html */ "./src/app/tabs-aluno/tabs-aluno.page.html"),
            styles: [__webpack_require__(/*! ./tabs-aluno.page.scss */ "./src/app/tabs-aluno/tabs-aluno.page.scss")]
        })
    ], TabsAlunoPage);
    return TabsAlunoPage;
}());



/***/ }),

/***/ "./src/app/tabs-aluno/tabs-aluno.router.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tabs-aluno/tabs-aluno.router.module.ts ***!
  \********************************************************/
/*! exports provided: TabsAlunoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsAlunoPageRoutingModule", function() { return TabsAlunoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_aluno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-aluno.page */ "./src/app/tabs-aluno/tabs-aluno.page.ts");




var routes = [
    {
        path: 'tabs-aluno',
        component: _tabs_aluno_page__WEBPACK_IMPORTED_MODULE_3__["TabsAlunoPage"],
        children: [
            {
                path: 'aluno-atividade-codigo',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/aluno-atividade-codigo/aluno-atividade-codigo.module#AlunoAtividadeCodigoPageModule'
                    }
                ]
            },
            {
                path: 'aluno-atividade',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/aluno-atividade/aluno-atividade.module#AlunoAtividadePageModule'
                    }
                ]
            },
            {
                path: 'aluno-perfil',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/aluno-perfil/aluno-perfil.module#AlunoPerfilPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabs-aluno/aluno-atividade-codigo',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs-aluno/aluno-atividade-codigo',
        pathMatch: 'full'
    }
];
var TabsAlunoPageRoutingModule = /** @class */ (function () {
    function TabsAlunoPageRoutingModule() {
    }
    TabsAlunoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsAlunoPageRoutingModule);
    return TabsAlunoPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-tabs-aluno-tabs-aluno-module.js.map