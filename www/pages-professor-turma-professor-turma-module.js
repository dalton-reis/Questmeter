(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-turma-professor-turma-module"],{

/***/ "./src/app/pages/professor-turma/professor-turma.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/professor-turma/professor-turma.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfessorTurmaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorTurmaPageModule", function() { return ProfessorTurmaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_turma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-turma.page */ "./src/app/pages/professor-turma/professor-turma.page.ts");







var routes = [
    {
        path: '',
        component: _professor_turma_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorTurmaPage"]
    }
];
var ProfessorTurmaPageModule = /** @class */ (function () {
    function ProfessorTurmaPageModule() {
    }
    ProfessorTurmaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_turma_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorTurmaPage"]]
        })
    ], ProfessorTurmaPageModule);
    return ProfessorTurmaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-turma/professor-turma.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/professor-turma/professor-turma.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n    <ion-title>Criando turma</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n    <ion-item *ngIf=\"turma\">\n      <ion-label position=\"stacked\">Nome</ion-label>\n      <ion-input required type=\"text\" max-length=\"10\" [(ngModel)]=\"turma.nome\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"full\" (click)=\"gerarTurma()\">Gerar</ion-button>\n  <ion-button expand=\"full\" (click)=\"cancelar()\">Cancelar</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-turma/professor-turma.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/professor-turma/professor-turma.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci10dXJtYS9wcm9mZXNzb3ItdHVybWEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/professor-turma/professor-turma.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/professor-turma/professor-turma.page.ts ***!
  \***************************************************************/
/*! exports provided: ProfessorTurmaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorTurmaPage", function() { return ProfessorTurmaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/turma.service */ "./src/app/services/turma.service.ts");





var ProfessorTurmaPage = /** @class */ (function () {
    function ProfessorTurmaPage(route, nav, loadingController, turmaService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.turmaService = turmaService;
        this.turma = {
            atividade: '',
            nome: '',
            token: '',
            dataCriacao: new Date(),
            atividadeIniciada: false,
            atividadeFinalizada: false,
            questaoAtual: null
        };
        this.idAtividade = null;
    }
    ProfessorTurmaPage.prototype.ngOnInit = function () {
        this.idAtividade = this.route.snapshot.params['atividade'];
    };
    ProfessorTurmaPage.prototype.gerarTurma = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.idAtividade) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Salvando'
                            })];
                    case 1:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 2:
                        _a.sent();
                        this.turma.dataCriacao = new Date(Date.now());
                        this.turmaService.add(this.turma, this.idAtividade).then(function () {
                            _this.turmaService.getByAtividadePromise(_this.idAtividade).then(function (resultado) {
                                var token = resultado[0].id.substring(0, 7);
                                _this.turma.token = token.toUpperCase();
                                _this.turmaService.update(resultado[0].id, _this.turma).then(function () {
                                    loading_1.dismiss();
                                    _this.nav.navigateForward('/professor-atividade-edicao/' + _this.idAtividade);
                                });
                            });
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfessorTurmaPage.prototype.cancelar = function () {
        this.nav.navigateForward('/professor-atividade-edicao/' + this.idAtividade);
    };
    ProfessorTurmaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-professor-turma',
            template: __webpack_require__(/*! ./professor-turma.page.html */ "./src/app/pages/professor-turma/professor-turma.page.html"),
            styles: [__webpack_require__(/*! ./professor-turma.page.scss */ "./src/app/pages/professor-turma/professor-turma.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_4__["TurmaService"]])
    ], ProfessorTurmaPage);
    return ProfessorTurmaPage;
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
//# sourceMappingURL=pages-professor-turma-professor-turma-module.js.map