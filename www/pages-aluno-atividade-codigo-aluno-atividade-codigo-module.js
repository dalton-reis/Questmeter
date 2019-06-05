(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aluno-atividade-codigo-aluno-atividade-codigo-module"],{

/***/ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AlunoAtividadeCodigoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadeCodigoPageModule", function() { return AlunoAtividadeCodigoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aluno_atividade_codigo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno-atividade-codigo.page */ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.ts");







var routes = [
    {
        path: '',
        component: _aluno_atividade_codigo_page__WEBPACK_IMPORTED_MODULE_6__["AlunoAtividadeCodigoPage"]
    }
];
var AlunoAtividadeCodigoPageModule = /** @class */ (function () {
    function AlunoAtividadeCodigoPageModule() {
    }
    AlunoAtividadeCodigoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aluno_atividade_codigo_page__WEBPACK_IMPORTED_MODULE_6__["AlunoAtividadeCodigoPage"]]
        })
    ], AlunoAtividadeCodigoPageModule);
    return AlunoAtividadeCodigoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-title>Entrar em uma atividade</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div padding>\n      \n      <ion-label>Insira aqui o token da atividade disponibilizado pelo professor</ion-label>\n  \n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Token da atividade\" [(ngModel)]=\"tokenAtividade\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"full\" (click)=\"entrarNaAtividade()\">Entrar</ion-button>\n      \n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsdW5vLWF0aXZpZGFkZS1jb2RpZ28vYWx1bm8tYXRpdmlkYWRlLWNvZGlnby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AlunoAtividadeCodigoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoAtividadeCodigoPage", function() { return AlunoAtividadeCodigoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/turma-aluno.service */ "./src/app/services/turma-aluno.service.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/turma.service */ "./src/app/services/turma.service.ts");








var AlunoAtividadeCodigoPage = /** @class */ (function () {
    function AlunoAtividadeCodigoPage(nav, loadingController, toastController, turmaAlunoService, turmaService, atividadeService, alunoService, autenticacaoService) {
        this.nav = nav;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.turmaAlunoService = turmaAlunoService;
        this.turmaService = turmaService;
        this.atividadeService = atividadeService;
        this.alunoService = alunoService;
        this.autenticacaoService = autenticacaoService;
        this.turmaAluno = {
            turma: '',
            aluno: '',
            alunoPontuacao: 0
        };
        this.tokenAtividade = null;
        this.usuarioCorrente = null;
    }
    AlunoAtividadeCodigoPage.prototype.ngOnInit = function () { };
    AlunoAtividadeCodigoPage.prototype.entrarNaAtividade = function () {
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
                        if (this.tokenAtividade) {
                            this.usuarioCorrente = this.autenticacaoService.getID();
                            this.turmaService.getByToken(this.tokenAtividade).subscribe(function (turma) {
                                if (turma.length > 0) {
                                    _this.alunoService.getByUsuario(_this.usuarioCorrente).then(function (aluno) {
                                        _this.turmaAlunoService.getByTurmaAluno(turma[0].id, aluno[0].id)
                                            .subscribe(function (resultado) {
                                            if (resultado.length <= 0) {
                                                _this.turmaAluno.turma = turma[0].id;
                                                _this.turmaAluno.aluno = aluno[0].id;
                                                _this.turmaAlunoService.add(_this.turmaAluno).then(function () {
                                                    loading.dismiss();
                                                    _this.tokenAtividade = null;
                                                    _this.nav.navigateForward('/aluno-atividade-abrir/turma/' + turma[0].id);
                                                });
                                            }
                                        });
                                    });
                                }
                                else {
                                    loading.dismiss();
                                    _this.presentToast("Código inválido");
                                }
                            });
                        }
                        else {
                            loading.dismiss();
                            this.presentToast('É necessário digitar o token para entrar na atividade.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoAtividadeCodigoPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoAtividadeCodigoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-aluno-atividade-codigo',
            template: __webpack_require__(/*! ./aluno-atividade-codigo.page.html */ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.html"),
            styles: [__webpack_require__(/*! ./aluno-atividade-codigo.page.scss */ "./src/app/pages/aluno-atividade-codigo/aluno-atividade-codigo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_1__["TurmaAlunoService"], src_app_services_turma_service__WEBPACK_IMPORTED_MODULE_7__["TurmaService"],
            _services_atividade_service__WEBPACK_IMPORTED_MODULE_4__["AtividadeService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_3__["AlunoService"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"]])
    ], AlunoAtividadeCodigoPage);
    return AlunoAtividadeCodigoPage;
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
//# sourceMappingURL=pages-aluno-atividade-codigo-aluno-atividade-codigo-module.js.map