(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aluno-inicio-aluno-inicio-module"],{

/***/ "./src/app/pages/aluno-inicio/aluno-inicio-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/aluno-inicio/aluno-inicio-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AlunoInicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoInicioRoutingModule", function() { return AlunoInicioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', redirectTo: 'tabs-aluno', pathMatch: 'full' },
    // { path: 'tabs-aluno', loadChildren: './tabs-aluno/tabs-aluno.module#TabsAlunoPageModule' },
    { path: 'tabs-aluno', loadChildren: 'src/app/tabs-aluno/tabs-aluno.module#TabsAlunoPageModule' },
    { path: 'aluno-atividade-codigo', loadChildren: 'src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.module#AlunoAtividadeCodigoPageModule' },
    { path: 'aluno-atividade', loadChildren: 'src/app/pages/aluno-atividade/aluno-atividade.module#AlunoAtividadePageModule' },
    { path: 'aluno-perfil', loadChildren: 'src/app/pages/aluno-perfil/aluno-perfil.module#AlunoPerfilPageModule' },
    { path: 'aluno-atividade-abrir/:codigo', loadChildren: 'src/app/pages/aluno-atividade-abrir/aluno-atividade-abrir.module#AlunoAtividadeAbrirPageModule' }
    // { path: 'aluno-atividade-codigo', loadChildren: './pages/aluno-atividade-codigo/aluno-atividade-codigo.module#AlunoAtividadeCodigoPageModule' },
    // { path: 'aluno-atividade', loadChildren: './pages/aluno-atividade/aluno-atividade.module#AlunoAtividadePageModule' },
    // { path: 'aluno-perfil', loadChildren: './pages/aluno-perfil/aluno-perfil.module#AlunoPerfilPageModule' },
    // { path: 'aluno-atividade-abrir/:codigo', loadChildren: './pages/aluno-atividade-abrir/aluno-atividade-abrir.module#AlunoAtividadeAbrirPageModule' }
];
var AlunoInicioRoutingModule = /** @class */ (function () {
    function AlunoInicioRoutingModule() {
    }
    AlunoInicioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AlunoInicioRoutingModule);
    return AlunoInicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/aluno-inicio/aluno-inicio.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/aluno-inicio/aluno-inicio.module.ts ***!
  \***********************************************************/
/*! exports provided: AlunoInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoInicioPageModule", function() { return AlunoInicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aluno_inicio_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aluno-inicio-routing.module */ "./src/app/pages/aluno-inicio/aluno-inicio-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aluno_inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno-inicio.page */ "./src/app/pages/aluno-inicio/aluno-inicio.page.ts");







var AlunoInicioPageModule = /** @class */ (function () {
    function AlunoInicioPageModule() {
    }
    AlunoInicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _aluno_inicio_routing_module__WEBPACK_IMPORTED_MODULE_1__["AlunoInicioRoutingModule"]
            ],
            declarations: [_aluno_inicio_page__WEBPACK_IMPORTED_MODULE_6__["AlunoInicioPage"]]
        })
    ], AlunoInicioPageModule);
    return AlunoInicioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aluno-inicio/aluno-inicio.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/aluno-inicio/aluno-inicio.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/pages/aluno-inicio/aluno-inicio.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/aluno-inicio/aluno-inicio.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsdW5vLWluaWNpby9hbHVuby1pbmljaW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/aluno-inicio/aluno-inicio.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/aluno-inicio/aluno-inicio.page.ts ***!
  \*********************************************************/
/*! exports provided: AlunoInicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoInicioPage", function() { return AlunoInicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlunoInicioPage = /** @class */ (function () {
    function AlunoInicioPage() {
    }
    AlunoInicioPage.prototype.ngOnInit = function () {
    };
    AlunoInicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aluno-inicio',
            template: __webpack_require__(/*! ./aluno-inicio.page.html */ "./src/app/pages/aluno-inicio/aluno-inicio.page.html"),
            styles: [__webpack_require__(/*! ./aluno-inicio.page.scss */ "./src/app/pages/aluno-inicio/aluno-inicio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlunoInicioPage);
    return AlunoInicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aluno-inicio-aluno-inicio-module.js.map