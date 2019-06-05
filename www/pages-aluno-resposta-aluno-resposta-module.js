(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aluno-resposta-aluno-resposta-module"],{

/***/ "./src/app/pages/aluno-resposta/aluno-resposta.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/aluno-resposta/aluno-resposta.module.ts ***!
  \***************************************************************/
/*! exports provided: AlunoRespostaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoRespostaPageModule", function() { return AlunoRespostaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aluno_resposta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno-resposta.page */ "./src/app/pages/aluno-resposta/aluno-resposta.page.ts");







var routes = [
    {
        path: '',
        component: _aluno_resposta_page__WEBPACK_IMPORTED_MODULE_6__["AlunoRespostaPage"]
    }
];
var AlunoRespostaPageModule = /** @class */ (function () {
    function AlunoRespostaPageModule() {
    }
    AlunoRespostaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aluno_resposta_page__WEBPACK_IMPORTED_MODULE_6__["AlunoRespostaPage"]]
        })
    ], AlunoRespostaPageModule);
    return AlunoRespostaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aluno-resposta/aluno-resposta.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/aluno-resposta/aluno-resposta.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/aluno-atividade-abrir/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resposta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n    <ion-item *ngIf=\"resposta\">\n      <ion-label position=\"stacked\">Conteúdo  </ion-label>\n      <ion-textarea disabled=\"true\" rows=\"3\" [(ngModel)]=\"resposta.conteudo\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"full\" (click)=\"votar()\" [disabled]=\"desabilitaBotaoVotar\">Votar</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/aluno-resposta/aluno-resposta.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/aluno-resposta/aluno-resposta.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsdW5vLXJlc3Bvc3RhL2FsdW5vLXJlc3Bvc3RhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/aluno-resposta/aluno-resposta.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/aluno-resposta/aluno-resposta.page.ts ***!
  \*************************************************************/
/*! exports provided: AlunoRespostaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoRespostaPage", function() { return AlunoRespostaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/turma-aluno.service */ "./src/app/services/turma-aluno.service.ts");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");








var AlunoRespostaPage = /** @class */ (function () {
    function AlunoRespostaPage(route, nav, toastController, loadingController, respostaService, turmaAlunoService, alunoService, autenticacaoService) {
        this.route = route;
        this.nav = nav;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.respostaService = respostaService;
        this.turmaAlunoService = turmaAlunoService;
        this.alunoService = alunoService;
        this.autenticacaoService = autenticacaoService;
        this.resposta = {
            questao: '',
            conteudo: '',
            correta: false,
            pontuacao: 0
        };
        this.idResposta = null;
        this.usuarioCorrente = null;
        this.desabilitaBotaoVotar = false;
    }
    AlunoRespostaPage.prototype.ngOnInit = function () {
        this.idResposta = this.route.snapshot.params['id'];
        if (this.idResposta) {
            this.load();
        }
    };
    AlunoRespostaPage.prototype.load = function () {
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
                        this.respostaService.get(this.idResposta).subscribe(function (resultado) {
                            loading.dismiss();
                            _this.resposta = resultado;
                            _this.usuarioCorrente = _this.autenticacaoService.getID();
                            _this.alunoService.getByUsuario(_this.usuarioCorrente).then(function (aluno) {
                                // this.turmaAlunoService.getByTurmaAlunoVoto(this.resposta.questao, aluno[0].id)
                                // .subscribe((resultado) => {
                                //   //se já respondeu deixa o botão 'Votar' bloqueado
                                //   this.desabilitaBotaoVotar = (resultado.length <= 0)
                                // });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AlunoRespostaPage.prototype.votar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.usuarioCorrente = this.autenticacaoService.getID();
                this.alunoService.getByUsuario(this.usuarioCorrente).then(function (aluno) {
                    // this.turmaAlunoService.getByTurmaAlunoVoto(this.resposta.questao, aluno[0].id)
                    // .subscribe((resultado) => {
                    //   if (resultado.length > 0) {
                    //     this.resposta.votos++;
                    //     this.respostaService.update(this.idResposta, this.resposta).then(() => {
                    //       resultado[0].alunoVotou = true;
                    //       resultado[0].alunoPontuacao = this.resposta.pontuacao;
                    //       this.atividadeAlunoService.update(resultado[0].id, resultado[0]).then(() =>{
                    //         this.nav.navigateForward('/aluno-atividade-abrir/' + this.resposta.atividade.substring(0, 7).toUpperCase());
                    //       });
                    //     });
                    //   }
                    // });
                });
                return [2 /*return*/];
            });
        });
    };
    AlunoRespostaPage.prototype.presentToast = function (message) {
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
    AlunoRespostaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-aluno-resposta',
            template: __webpack_require__(/*! ./aluno-resposta.page.html */ "./src/app/pages/aluno-resposta/aluno-resposta.page.html"),
            styles: [__webpack_require__(/*! ./aluno-resposta.page.scss */ "./src/app/pages/aluno-resposta/aluno-resposta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_7__["RespostaService"],
            _services_turma_aluno_service__WEBPACK_IMPORTED_MODULE_1__["TurmaAlunoService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_3__["AlunoService"],
            _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"]])
    ], AlunoRespostaPage);
    return AlunoRespostaPage;
}());



/***/ }),

/***/ "./src/app/services/resposta.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/resposta.service.ts ***!
  \**********************************************/
/*! exports provided: RespostaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespostaService", function() { return RespostaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var RespostaService = /** @class */ (function () {
    function RespostaService(db) {
        this.db = db;
        this.collectionRespostas = db.collection('respostas');
        this.listRespostas = this.collectionRespostas.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    RespostaService.prototype.getAll = function () {
        return this.listRespostas;
    };
    // getByAtividade(atividade: string) {
    //   //Tentando buscar as respostas por referecia
    //   // this.collectionRespostas.doc<IResposta>('atividades/' + atividade)
    //   // .valueChanges().subscribe( r => console.log('resp', r));
    //   // return this.db.collection<IResposta>('respostas/atividades/' + atividade).
    //   // snapshotChanges().pipe(
    //   //   map(actions => {
    //   //     return actions.map(a => {
    //   //       const data = a.payload.doc.data();
    //   //       const id = a.payload.doc.id;
    //   //       return {id, ...data};
    //   //     });
    //   //   })
    //   // );
    //   return this.db.collection<IResposta>('respostas', ref => ref.where('atividade', '==', atividade)).
    //   snapshotChanges().pipe(
    //     map(actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return {id, ...data};
    //       });
    //     })
    //   );
    // }
    RespostaService.prototype.getByQuestao = function (questao) {
        return this.db.collection('respostas', function (ref) { return ref.where('questao', '==', questao); }).
            snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    RespostaService.prototype.getByQuestaoComID = function (questao) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.collection('respostas', function (ref) { return ref.where('questao', '==', questao); }).
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
    RespostaService.prototype.get = function (id) {
        return this.collectionRespostas.doc(id).valueChanges();
    };
    RespostaService.prototype.add = function (resposta, questao) {
        //Adicionada resposta com atividade por referecia (mas nao deu pra buscar)
        //resposta.atividade = this.db.doc('atividades/' + atividade).ref;
        resposta.questao = questao;
        return this.collectionRespostas.add(resposta);
    };
    RespostaService.prototype.update = function (id, resposta) {
        return this.collectionRespostas.doc(id).update(resposta);
    };
    RespostaService.prototype.remove = function (id) {
        return this.collectionRespostas.doc(id).delete();
    };
    RespostaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], RespostaService);
    return RespostaService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aluno-resposta-aluno-resposta-module.js.map