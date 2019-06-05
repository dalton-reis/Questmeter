(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-atividade-apresentacao-turma-professor-atividade-apresentacao-turma-module"],{

/***/ "./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProfessorAtividadeApresentacaoTurmaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeApresentacaoTurmaPageModule", function() { return ProfessorAtividadeApresentacaoTurmaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_atividade_apresentacao_turma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-atividade-apresentacao-turma.page */ "./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.ts");







var routes = [
    {
        path: '',
        component: _professor_atividade_apresentacao_turma_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeApresentacaoTurmaPage"]
    }
];
var ProfessorAtividadeApresentacaoTurmaPageModule = /** @class */ (function () {
    function ProfessorAtividadeApresentacaoTurmaPageModule() {
    }
    ProfessorAtividadeApresentacaoTurmaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_atividade_apresentacao_turma_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeApresentacaoTurmaPage"]]
        })
    ], ProfessorAtividadeApresentacaoTurmaPageModule);
    return ProfessorAtividadeApresentacaoTurmaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Apresentar atividade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label>Clique na turma para apresentar</ion-label>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let turma of turmas\">\n      <ion-button expand=\"full\" (click)=\"apresentar(turma.id)\">{{ turma.nome }}</ion-button>\n    </ion-item-sliding>    \n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1hdGl2aWRhZGUtYXByZXNlbnRhY2FvLXR1cm1hL3Byb2Zlc3Nvci1hdGl2aWRhZGUtYXByZXNlbnRhY2FvLXR1cm1hLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProfessorAtividadeApresentacaoTurmaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeApresentacaoTurmaPage", function() { return ProfessorAtividadeApresentacaoTurmaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/turma.service */ "./src/app/services/turma.service.ts");





var ProfessorAtividadeApresentacaoTurmaPage = /** @class */ (function () {
    function ProfessorAtividadeApresentacaoTurmaPage(route, nav, turmaService) {
        this.route = route;
        this.nav = nav;
        this.turmaService = turmaService;
        this.idAtividade = null;
    }
    ProfessorAtividadeApresentacaoTurmaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idAtividade = this.route.snapshot.params['atividade'];
        this.turmaService.getByAtividadeNaoFinalizadas(this.idAtividade).subscribe(function (resultado) {
            _this.turmas = resultado;
        });
    };
    ProfessorAtividadeApresentacaoTurmaPage.prototype.apresentar = function (id) {
        this.nav.navigateForward("/professor-atividade-apresentacao/turma/" + id);
    };
    ProfessorAtividadeApresentacaoTurmaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-professor-atividade-apresentacao-turma',
            template: __webpack_require__(/*! ./professor-atividade-apresentacao-turma.page.html */ "./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.html"),
            styles: [__webpack_require__(/*! ./professor-atividade-apresentacao-turma.page.scss */ "./src/app/pages/professor-atividade-apresentacao-turma/professor-atividade-apresentacao-turma.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_4__["TurmaService"]])
    ], ProfessorAtividadeApresentacaoTurmaPage);
    return ProfessorAtividadeApresentacaoTurmaPage;
}());



/***/ }),

/***/ "./src/app/services/turma.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/turma.service.ts ***!
  \*******************************************/
/*! exports provided: TurmaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmaService", function() { return TurmaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var TurmaService = /** @class */ (function () {
    function TurmaService(db) {
        this.db = db;
        this.collectionTurmas = db.collection('turmas');
        this.listTurmas = this.collectionTurmas.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    TurmaService.prototype.getAll = function () {
        return this.listTurmas;
    };
    TurmaService.prototype.get = function (id) {
        return this.collectionTurmas.doc(id).valueChanges();
    };
    TurmaService.prototype.getByAtividade = function (atividade) {
        return this.db.collection('turmas', function (ref) { return ref.where('atividade', '==', atividade).orderBy("dataCriacao", "desc"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    TurmaService.prototype.getByAtividadePromise = function (atividade) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.collection('turmas', function (ref) { return ref.where('atividade', '==', atividade).orderBy("dataCriacao", "desc"); }).
                snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
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
    TurmaService.prototype.getByAtividadeNaoFinalizadas = function (atividade) {
        return this.db.collection('turmas', function (ref) { return ref.where('atividade', '==', atividade).
            where('atividadeFinalizada', '==', false).
            orderBy("dataCriacao", "desc"); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    TurmaService.prototype.getByToken = function (token) {
        return this.db.collection('turmas', function (ref) { return ref.where('token', '==', token); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    TurmaService.prototype.add = function (turma, atividade) {
        turma.atividade = atividade;
        return this.collectionTurmas.add(turma);
    };
    TurmaService.prototype.update = function (id, turma) {
        return this.collectionTurmas.doc(id).update(turma);
    };
    TurmaService.prototype.remove = function (id) {
        return this.collectionTurmas.doc(id).delete();
    };
    TurmaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], TurmaService);
    return TurmaService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professor-atividade-apresentacao-turma-professor-atividade-apresentacao-turma-module.js.map