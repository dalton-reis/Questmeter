(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professor-atividade-edicao-professor-atividade-edicao-module"],{

/***/ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfessorAtividadeEdicaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeEdicaoPageModule", function() { return ProfessorAtividadeEdicaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professor_atividade_edicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professor-atividade-edicao.page */ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.ts");







var routes = [
    {
        path: '',
        component: _professor_atividade_edicao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeEdicaoPage"]
    }
];
var ProfessorAtividadeEdicaoPageModule = /** @class */ (function () {
    function ProfessorAtividadeEdicaoPageModule() {
    }
    ProfessorAtividadeEdicaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professor_atividade_edicao_page__WEBPACK_IMPORTED_MODULE_6__["ProfessorAtividadeEdicaoPage"]]
        })
    ], ProfessorAtividadeEdicaoPageModule);
    return ProfessorAtividadeEdicaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/professor-atividade/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Atividade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding>\n    <!-- <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"dogs\" mode=\"ios\"> -->\n      <ion-segment [(ngModel)]=\"segmentAtividade\" mode=\"ios\">\n        <ion-segment-button value=\"edicao\">\n          <ion-label>Informações</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"respostas\">\n          <ion-label>Respostas</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"alunos\">\n          <ion-label>Alunos</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    \n    <div [ngSwitch]=\"segmentAtividade\">\n      \n      <div *ngSwitchCase=\"'edicao'\">\n        <ion-list lines=\"full\">\n          <ion-item *ngIf=\"atividade\">\n            <ion-label position=\"stacked\">Nome</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"atividade.nome\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"atividade\">\n            <ion-label position=\"stacked\">Problema/Desafio</ion-label>\n            <ion-textarea required rows=\"4\" [(ngModel)]=\"atividade.problema\"></ion-textarea>\n          </ion-item>\n          <!-- <ion-item *ngIf=\"atividade\">\n            <ion-select required placeholder=\"Tipo\" [(ngModel)]=\"atividade.tipo\">\n              <ion-select-option value=\"M\">Multipla escolha</ion-select-option>\n              <ion-select-option value=\"D\">Descritiva</ion-select-option>\n            </ion-select>\n          </ion-item> -->\n          <ion-item *ngIf=\"atividade\">\n            <ion-label position=\"stacked\">Termina em</ion-label>\n            <ion-datetime required displayFormat=\"DD/MM/YYYY hh:mm\" [(ngModel)]=\"atividade.dataTermino\"></ion-datetime>\n          </ion-item>\n          <ion-item *ngIf=\"atividade\">\n            <ion-label position=\"stacked\">Código</ion-label>\n            <ion-input type=\"text\" disabled=\"true\" [(ngModel)]=\"atividade.codigo\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-button expand=\"full\" (click)=\"save()\">Salvar</ion-button>\n        <ion-button expand=\"full\" (click)=\"gerarCodigoTurma()\">Gerar código turma</ion-button>\n        <ion-button expand=\"full\" (click)=\"apresentar()\">Apresentar</ion-button>\n        <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" color=\"danger\">\n          <ion-fab-button color=\"danger\" (click)=\"onRemoveAtividade(idAtividade)\" routerLink=\"/\" \n          routerDirection=\"forward\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab> -->\n    </div>\n    \n    <div *ngSwitchCase=\"'respostas'\">\n      <ion-list>\n        <ion-list-header>\n          <ion-label color=\"primary\">Respostas/Votos</ion-label>\n        </ion-list-header>\n        <ion-item-sliding *ngFor=\"let resposta of respostas\">\n          <ion-item lines=\"inset\" button [routerLink]=\"['/professor-resposta', resposta.id]\">\n            <ion-label>{{ resposta.conteudo }}</ion-label>\n            <ion-badge color=\"secondary\" slot=\"end\">{{ resposta.votos }}</ion-badge>\n          </ion-item>\n          \n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"onRemoveResposta(resposta.id)\" color=\"danger\">\n              <ion-label>Apagar</ion-label>\n              <!-- <ion-icon name=\"trash\" slot=\"end\"></ion-icon> -->\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [routerLink]=\"['/professor-resposta/atividade', idAtividade]\" routerDirection=\"forward\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </div>\n    \n    <div *ngSwitchCase=\"'alunos'\">\n      <ion-item-sliding *ngFor=\"let aluno of alunos\">\n        <ion-item>\n          <ion-label>{{ aluno.nomeCompleto }}</ion-label>\n          <ion-badge color=\"secondary\" slot=\"end\">{{ aluno.pontuacao }}</ion-badge>\n        </ion-item>\n      </ion-item-sliding>\n    </div>\n    \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Nvci1hdGl2aWRhZGUtZWRpY2FvL3Byb2Zlc3Nvci1hdGl2aWRhZGUtZWRpY2FvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfessorAtividadeEdicaoPage, Aluno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorAtividadeEdicaoPage", function() { return ProfessorAtividadeEdicaoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aluno", function() { return Aluno; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/atividade-aluno.service */ "./src/app/services/atividade-aluno.service.ts");
/* harmony import */ var _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/atividade.service */ "./src/app/services/atividade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/resposta.service */ "./src/app/services/resposta.service.ts");








var ProfessorAtividadeEdicaoPage = /** @class */ (function () {
    function ProfessorAtividadeEdicaoPage(route, nav, loadingController, atividadeService, respostaService, atividadeAlunoService, alunoService) {
        this.route = route;
        this.nav = nav;
        this.loadingController = loadingController;
        this.atividadeService = atividadeService;
        this.respostaService = respostaService;
        this.atividadeAlunoService = atividadeAlunoService;
        this.alunoService = alunoService;
        this.atividade = {
            nome: '',
            professor: '',
            problema: '',
            tipo: '',
            dataTermino: new Date(),
            iniciada: false,
            codigo: ''
        };
        this.idAtividade = null;
        this.alunos = [];
        this.segmentAtividade = 'edicao';
    }
    ProfessorAtividadeEdicaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idAtividade = this.route.snapshot.params['id'];
        if (this.idAtividade) {
            this.load();
            this.respostaService.getByAtividade(this.idAtividade).subscribe(function (resultado) {
                _this.respostas = resultado;
            });
            this.atividadeAlunoService.getByAtividade(this.idAtividade)
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
    ProfessorAtividadeEdicaoPage.prototype.load = function () {
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
                        this.atividadeService.get(this.idAtividade).subscribe(function (resultado) {
                            loading.dismiss();
                            _this.atividade = resultado;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.idAtividade) {
                            this.atividadeService.update(this.idAtividade, this.atividade).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/professor-inicio');
                            });
                        }
                        else {
                            this.atividadeService.add(this.atividade).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/professor-inicio');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.onRemoveAtividade = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.atividadeService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.onRemoveResposta = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.atividadeService.remove(id);
                return [2 /*return*/];
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.gerarCodigoTurma = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_1, codigo;
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
                        codigo = this.idAtividade.substring(0, 7);
                        this.atividade.codigo = codigo.toString().toUpperCase();
                        this.atividadeService.update(this.idAtividade, this.atividade).then(function () {
                            loading_1.dismiss();
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfessorAtividadeEdicaoPage.prototype.apresentar = function () {
        this.nav.navigateForward('/professor-atividade-apresentacao/' + this.idAtividade);
    };
    ProfessorAtividadeEdicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-professor-atividade-edicao',
            template: __webpack_require__(/*! ./professor-atividade-edicao.page.html */ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.html"),
            styles: [__webpack_require__(/*! ./professor-atividade-edicao.page.scss */ "./src/app/pages/professor-atividade-edicao/professor-atividade-edicao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_atividade_service__WEBPACK_IMPORTED_MODULE_3__["AtividadeService"], src_app_services_resposta_service__WEBPACK_IMPORTED_MODULE_7__["RespostaService"],
            _services_atividade_aluno_service__WEBPACK_IMPORTED_MODULE_2__["AtividadeAlunoService"], _services_aluno_service__WEBPACK_IMPORTED_MODULE_1__["AlunoService"]])
    ], ProfessorAtividadeEdicaoPage);
    return ProfessorAtividadeEdicaoPage;
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



/***/ })

}]);
//# sourceMappingURL=pages-professor-atividade-edicao-professor-atividade-edicao-module.js.map