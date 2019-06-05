(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-turma-edicao-professor-turma-edicao-module"],{

/***/ "./src/app/pages/professor-turma-edicao/professor-turma-edicao.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/professor-turma-edicao/professor-turma-edicao.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfessorTurmaEdicaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorTurmaEdicaoPageModule", function() { return ProfessorTurmaEdicaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_turma_edicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-turma-edicao.page */ "./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.ts");







var routes = [
    {
        path: '',
        component: _professor_turma_edicao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorTurmaEdicaoPage"]
    }
];
var ProfessorTurmaEdicaoPageModule = /** @class */ (function () {
    function ProfessorTurmaEdicaoPageModule() {
    }
    ProfessorTurmaEdicaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_turma_edicao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorTurmaEdicaoPage"]]
        })
    ], ProfessorTurmaEdicaoPageModule);
    return ProfessorTurmaEdicaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"['/professor-atividade-edicao/', turma.atividade]\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Turma</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n    <ion-item *ngIf=\"turma\">\n      <ion-label position=\"stacked\">Nome</ion-label>\n      <ion-input disabled=\"true\" type=\"text\" max-length=\"10\" [(ngModel)]=\"turma.nome\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"turma\">\n      <ion-label position=\"stacked\">Token</ion-label>\n      <ion-input disabled=\"true\" type=\"text\" max-length=\"10\" [(ngModel)]=\"turma.token\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"turma\">\n      <ion-label>Turma já fez a atividade</ion-label>\n      <ion-checkbox disabled=\"true\" type=\"text\" [(ngModel)]=\"turma.atividadeFinalizada\"></ion-checkbox>\n    </ion-item>\n    \n    <ion-list>\n      <ion-list-header>\n        <ion-label color=\"primary\">Aluno | Pontuação</ion-label>\n      </ion-list-header>\n      <ion-item-sliding *ngFor=\"let aluno of alunos\">\n        <ion-item>\n          <ion-label>{{ aluno.nomeCompleto }}</ion-label>\n          <ion-badge color=\"secondary\" slot=\"end\">{{ aluno.pontuacao }}</ion-badge>\n        </ion-item>\n      </ion-item-sliding>    \n    </ion-list>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci10dXJtYS1lZGljYW8vcHJvZmVzc29yLXR1cm1hLWVkaWNhby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfessorTurmaEdicaoPage, Aluno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorTurmaEdicaoPage", function() { return ProfessorTurmaEdicaoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aluno", function() { return Aluno; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var src_app_services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/turma-aluno.service */ "./src/app/services/turma-aluno.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/turma.service */ "./src/app/services/turma.service.ts");







var ProfessorTurmaEdicaoPage = /** @class */ (function () {
    function ProfessorTurmaEdicaoPage(route, nav, loadingController, turmaService, turmaAlunoService, alunoService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.turmaService = turmaService;
        this.turmaAlunoService = turmaAlunoService;
        this.alunoService = alunoService;
        this.turma = {
            atividade: '',
            nome: '',
            token: '',
            dataCriacao: new Date(),
            atividadeIniciada: false,
            atividadeFinalizada: false,
            questaoAtual: null
        };
        this.idTurma = null;
        this.alunos = [];
    }
    ProfessorTurmaEdicaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idTurma = this.route.snapshot.params['id'];
        if (this.idTurma) {
            this.load();
            this.turmaAlunoService.getByTurma(this.idTurma)
                .subscribe(function (resultado) {
                resultado.forEach(function (f) {
                    return _this.alunoService.get(f.aluno).subscribe(function (resAluno) {
                        if (_this.alunos.findIndex(function (v) { return v.id == f.id; }) < 0) {
                            var aluno = new Aluno();
                            aluno.id = f.id;
                            aluno.nomeCompleto = resAluno.nomeCompleto;
                            aluno.pontuacao = f.alunoPontuacao;
                            _this.alunos.push(aluno);
                        }
                    });
                });
            });
        }
    };
    ProfessorTurmaEdicaoPage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.turmaService.get(this.idTurma).subscribe(function (resultado) {
                            loading.dismiss();
                            _this.turma = resultado;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorTurmaEdicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-professor-turma-edicao',
            template: __webpack_require__(/*! ./professor-turma-edicao.page.html */ "./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.html"),
            styles: [__webpack_require__(/*! ./professor-turma-edicao.page.scss */ "./src/app/pages/professor-turma-edicao/professor-turma-edicao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_6__["TurmaService"],
            src_app_services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_2__["TurmaAlunoService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_1__["AlunoService"]])
    ], ProfessorTurmaEdicaoPage);
    return ProfessorTurmaEdicaoPage;
}());

var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    Aluno.prototype.Aluno = function () {
        this.id = '';
        this.nomeCompleto = '';
        this.pontuacao = 0;
    };
    return Aluno;
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
//# sourceMappingURL=pages-professor-turma-edicao-professor-turma-edicao-module.js.map