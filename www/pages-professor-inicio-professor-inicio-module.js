(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-inicio-professor-inicio-module"],{

/***/ "./src/app/pages/professor-inicio/professor-inicio-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/professor-inicio/professor-inicio-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProfessorInicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorInicioRoutingModule", function() { return ProfessorInicioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', redirectTo: 'tabs', pathMatch: 'full' },
    // { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    // { path: 'professor-atividade', loadChildren: './pages/professor-atividade/professor-atividade.module#ProfessorAtividadePageModule' },
    // { path: 'professor-atividade-criacao', loadChildren: './pages/professor-atividade-criacao/professor-atividade-criacao.module#ProfessorAtividadeCriacaoPageModule' },
    // { path: 'professor-atividade-edicao/:id', loadChildren: './pages/professor-atividade-edicao/professor-atividade-edicao.module#ProfessorAtividadeEdicaoPageModule' },
    // { path: 'professor-perfil', loadChildren: './pages/professor-perfil/professor-perfil.module#ProfessorPerfilPageModule' },
    // { path: 'professor-resposta', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
    // { path: 'professor-resposta/:id', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
    // { path: 'professor-resposta/atividade/:atividade', loadChildren: './pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' }
    { path: 'tabs', loadChildren: 'src/app/tabs/tabs.module#TabsPageModule' },
    { path: 'professor-atividade', loadChildren: 'src/app/pages/professor-atividade/professor-atividade.module#ProfessorAtividadePageModule' },
    { path: 'professor-atividade-criacao', loadChildren: 'src/app/pages/professor-atividade-criacao/professor-atividade-criacao.module#ProfessorAtividadeCriacaoPageModule' },
    { path: 'professor-atividade-edicao/:id', loadChildren: 'src/app/pages/professor-atividade-edicao/professor-atividade-edicao.module#ProfessorAtividadeEdicaoPageModule' },
    { path: 'professor-perfil', loadChildren: 'src/app/pages/professor-perfil/professor-perfil.module#ProfessorPerfilPageModule' },
    { path: 'professor-resposta', loadChildren: 'src/app/pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
    { path: 'professor-resposta/:id', loadChildren: 'src/app/pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' },
    { path: 'professor-resposta/atividade/:atividade', loadChildren: 'src/app/pages/professor-resposta/professor-resposta.module#ProfessorRespostaPageModule' }
];
var ProfessorInicioRoutingModule = /** @class */ (function () {
    function ProfessorInicioRoutingModule() {
    }
    ProfessorInicioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfessorInicioRoutingModule);
    return ProfessorInicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-inicio/professor-inicio.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/professor-inicio/professor-inicio.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfessorInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorInicioPageModule", function() { return ProfessorInicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _professor_inicio_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professor-inicio-routing.module */ "./src/app/pages/professor-inicio/professor-inicio-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-inicio.page */ "./src/app/pages/professor-inicio/professor-inicio.page.ts");







var ProfessorInicioPageModule = /** @class */ (function () {
    function ProfessorInicioPageModule() {
    }
    ProfessorInicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _professor_inicio_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfessorInicioRoutingModule"]
            ],
            declarations: [_professor_inicio_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorInicioPage"]]
        })
    ], ProfessorInicioPageModule);
    return ProfessorInicioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-inicio/professor-inicio.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/professor-inicio/professor-inicio.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/pages/professor-inicio/professor-inicio.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/professor-inicio/professor-inicio.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1pbmljaW8vcHJvZmVzc29yLWluaWNpby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/professor-inicio/professor-inicio.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/professor-inicio/professor-inicio.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProfessorInicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorInicioPage", function() { return ProfessorInicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfessorInicioPage = /** @class */ (function () {
    function ProfessorInicioPage() {
    }
    ProfessorInicioPage.prototype.ngOnInit = function () {
    };
    ProfessorInicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professor-inicio',
            template: __webpack_require__(/*! ./professor-inicio.page.html */ "./src/app/pages/professor-inicio/professor-inicio.page.html"),
            styles: [__webpack_require__(/*! ./professor-inicio.page.scss */ "./src/app/pages/professor-inicio/professor-inicio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfessorInicioPage);
    return ProfessorInicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-inicio-professor-inicio-module.js.map