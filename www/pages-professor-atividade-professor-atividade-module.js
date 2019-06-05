(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-atividade-professor-atividade-module"],{

/***/ "./src/app/pages/professor-atividade/professor-atividade.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/professor-atividade/professor-atividade.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfessorAtividadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadePageModule", function() { return ProfessorAtividadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_atividade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-atividade.page */ "./src/app/pages/professor-atividade/professor-atividade.page.ts");







var ProfessorAtividadePageModule = /** @class */ (function () {
    function ProfessorAtividadePageModule() {
    }
    ProfessorAtividadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _professor_atividade_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadePage"] }])
            ],
            declarations: [_professor_atividade_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadePage"]]
        })
    ], ProfessorAtividadePageModule);
    return ProfessorAtividadePageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-atividade/professor-atividade.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/professor-atividade/professor-atividade.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Atividades</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n     <ion-label color=\"primary\">Disciplina | Atividade</ion-label> \n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let atividade of atividades\">\n      <ion-item lines=\"inset\" button [routerLink]=\"['/professor-atividade-edicao', atividade.id]\">\n        <ion-label>{{ atividade.disciplina }} | {{ atividade.nome }}</ion-label>\n      </ion-item>\n      \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"onRemove(atividade.id)\" color=\"danger\">\n          <ion-label>Apagar</ion-label>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/professor-atividade-criacao\" routerDirection=\"forward\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/professor-atividade/professor-atividade.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/professor-atividade/professor-atividade.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1hdGl2aWRhZGUvcHJvZmVzc29yLWF0aXZpZGFkZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/professor-atividade/professor-atividade.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/professor-atividade/professor-atividade.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProfessorAtividadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadePage", function() { return ProfessorAtividadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_professor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/professor.service */ "./src/app/services/professor.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var ProfessorAtividadePage = /** @class */ (function () {
    function ProfessorAtividadePage(atividadeService, professorService, autenticacaoService) {
        this.atividadeService = atividadeService;
        this.professorService = professorService;
        this.autenticacaoService = autenticacaoService;
        this.usuarioCorrente = null;
    }
    ProfessorAtividadePage.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioCorrente = this.autenticacaoService.getID();
        this.professorService.getByUsuario(this.usuarioCorrente).then(function (professor) {
            _this.atividadeService.getByProfessor(professor[0].id).subscribe(function (resultado) {
                _this.atividades = resultado;
            });
        });
    };
    ProfessorAtividadePage.prototype.onRemove = function (id) {
        this.atividadeService.remove(id);
    };
    ProfessorAtividadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-professor-atividade',
            template: __webpack_require__(/*! ./professor-atividade.page.html */ "./src/app/pages/professor-atividade/professor-atividade.page.html"),
            styles: [__webpack_require__(/*! ./professor-atividade.page.scss */ "./src/app/pages/professor-atividade/professor-atividade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_atividade_service__WEBPACK_IMPORTED_MODULE_3__["AtividadeService"],
            _services_professor_service__WEBPACK_IMPORTED_MODULE_2__["ProfessorService"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"]])
    ], ProfessorAtividadePage);
    return ProfessorAtividadePage;
}());



/***/ }),

/***/ "./src/app/services/atividade.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/atividade.service.ts ***!
  \***********************************************/
/*! exports provided: AtividadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtividadeService", function() { return AtividadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AtividadeService = /** @class */ (function () {
    function AtividadeService(db) {
        this.db = db;
        this.collectionAtividades = db.collection('atividades');
        this.listAtividades = this.collectionAtividades.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    AtividadeService.prototype.getAll = function () {
        return this.listAtividades;
    };
    AtividadeService.prototype.get = function (id) {
        return this.collectionAtividades.doc(id).valueChanges();
    };
    //modificar: pegar a atividade que o aluno pertence
    AtividadeService.prototype.getByCodigo = function (codigo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.collection('atividades', function (ref) { return ref.where('codigo', '==', codigo); }).
                snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
                });
            })).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    AtividadeService.prototype.getByProfessor = function (professor) {
        return this.db.collection('atividades', function (ref) { return ref.where('professor', '==', professor).orderBy("disciplina").orderBy("nome"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    AtividadeService.prototype.getByProfessorOrdenaPorData = function (professor) {
        return this.db.collection('atividades', function (ref) { return ref.where('professor', '==', professor).orderBy("dataCriacao", "desc"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    AtividadeService.prototype.add = function (atividade) {
        return this.collectionAtividades.add(atividade);
    };
    AtividadeService.prototype.update = function (id, atividade) {
        return this.collectionAtividades.doc(id).update(atividade);
    };
    AtividadeService.prototype.remove = function (id) {
        return this.collectionAtividades.doc(id).delete();
    };
    AtividadeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AtividadeService);
    return AtividadeService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-atividade-professor-atividade-module.js.map