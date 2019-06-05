import { ITurmaAlunoResposta } from './../../models/turma-aluno-resposta';
import { ITurma } from './../../models/turma';
import { QuestaoService } from 'src/app/services/questao.service';
import { IQuestao } from 'src/app/models/questao';
import { AlunoService } from './../../services/aluno.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { IAtividade } from './../../models/atividade';
import { IResposta } from './../../models/resposta';
import { AtividadeService } from './../../services/atividade.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RespostaService } from 'src/app/services/resposta.service';
import { TurmaAlunoService } from 'src/app/services/turma-aluno.service';
import { TurmaService } from 'src/app/services/turma.service';
import { TurmaAlunoRespostaService } from 'src/app/services/turma-aluno-resposta.service';

@Component({
  selector: 'app-aluno-atividade-abrir',
  templateUrl: './aluno-atividade-abrir.page.html',
  styleUrls: ['./aluno-atividade-abrir.page.scss'],
})
export class AlunoAtividadeAbrirPage implements OnInit {
  
  atividade: IAtividade = {
    id: '',
    professor: '', //FK
    disciplina: '',
    nome: '',
    dataTermino: new Date(),
    dataCriacao: new Date()
  }
  
  questaoCorrente: IQuestao = {
    id: '',
    atividade: null, //FK
    apelido: '',
    problema: '',
    dataCriacao: new Date(),
  }
  
  turma: ITurma = {
    id: '',
    atividade: '', //FK
    nome: '',
    token: '',
    dataCriacao: new Date(),
    atividadeIniciada: false,
    atividadeFinalizada: false,
    questaoAtual: ''
  }
  
  turmaAlunoResp: ITurmaAlunoResposta = {
    turma: '', //FK
    turmaAluno: '', //FK
    resposta: '' //FK
  }
  
  usuarioCorrente = null;
  idTurma = null;
  questoesFinalizadas: Questao[] = [];
  respostas: IResposta[] = [];
  segmentAtividade = 'edicao';
  alunoVotou: boolean = false;
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController, private autenticacaoService: AutenticacaoService, 
    private atividadeService: AtividadeService, private turmaService: TurmaService,
    private turmaAlunoService: TurmaAlunoService, private alunoService: AlunoService,
    private questaoService: QuestaoService, private respostaService: RespostaService,
    private turmaAlunoRespostaService: TurmaAlunoRespostaService) { }
    
    ngOnInit() {
      this.idTurma = this.route.snapshot.params['turma'];
      
      if (this.idTurma) {
        this.alunoVotou = false;
        this.load();
      }
    }
    
    async load() {
      const loading = await this.loadingController.create({
        message: 'Carregando'
      });
      await loading.present();
      
      this.turmaService.get(this.idTurma).subscribe((turma) => {
        this.atividadeService.get(turma.atividade).subscribe(atividade => {
          loading.dismiss();
          
          this.atividade = atividade;
          this.turma = turma;
          this.usuarioCorrente = this.autenticacaoService.getID();
          
          if (turma.questaoAtual) {
            document.getElementById('div_aguarde').style.display = "none";
            document.getElementById('div_apresentacao').style.visibility = "visible";
            
            this.questaoService.get(turma.questaoAtual).subscribe((questao) => {
              this.questaoCorrente = questao;
              this.respostaService.getByQuestao(turma.questaoAtual).subscribe((respostas) => {
                this.respostas = respostas;
                
                this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) =>{
                  this.turmaAlunoService.getByTurmaAluno(this.idTurma, aluno[0].id)
                  .subscribe((turmaAluno) => {
                    this.alunoVotou = false;
                    respostas.forEach(f => {
                      this.turmaAlunoRespostaService.getByTurmaAlunoResposta(turmaAluno[0].id, f.id)
                      .subscribe((resultado) => {
                        //se já respondeu deixa o botão 'Votar' bloqueado
                        if (!this.alunoVotou) {
                          this.alunoVotou = (resultado.length > 0);
                        }
                      });
                    });
                  });
                });
              });
            });
          } 
          else if (turma.atividadeFinalizada) {
            document.getElementById('div_aguarde').style.display = "none";
            document.getElementById('div_apresentacao').style.display = "none";
            document.getElementById('div_atividadeFinalizada').style.visibility = "visible";
            
            this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) =>{
              this.turmaAlunoService.getByTurmaAluno(this.idTurma, aluno[0].id)
              .subscribe((turmaAluno) => {
                this.questaoService.getByAtividadeAsc(turma.atividade).subscribe((questoes) => {
                  questoes.forEach(f => {
                    if (this.questoesFinalizadas.findIndex(c => c.id == f.id) < 0) {
                      let quest = new Questao();
                      quest.id = f.id;
                      quest.apelido = f.apelido;
                      quest.problema = f.problema;
                      
                      this.respostaService.getByQuestao(f.id).subscribe((respostas) => {
                        respostas.forEach(fr => {
                          
                          if (quest.respostas.findIndex(c => c.id == fr.id) < 0) {
                            let resp = new Resposta();
                            resp.id = fr.id;
                            resp.correta = fr.correta;
                            resp.conteudo = fr.conteudo;
                            resp.pontuacao = fr.pontuacao;
                            resp.escolhida = false;
                            
                            this.turmaAlunoRespostaService.getByTurmaAlunoRespostaPromise(turmaAluno[0].id, fr.id).then((resultado) => {
                              if (resultado[0]) {
                                resp.escolhida = true;
                              }
                            });
                            quest.respostas.push(resp);
                          }
                        });
                      });
                      
                      this.questoesFinalizadas.push(quest);
                    }
                  });
                });
              });
            });
          }
        });
      });
    }
    
    async votar(idResposta: string, resposta: IResposta) {
      //criar um registro na tabela turma-aluno-respostas
      //guardar a pontuação na tabela turma-aluno
      const loading = await this.loadingController.create({
        message: 'Enviando'
      });
      await loading.present();

      this.usuarioCorrente = this.autenticacaoService.getID();
      this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) =>{
        this.turmaAlunoService.getByTurmaAluno(this.idTurma, aluno[0].id)
        .subscribe((turmaAluno) => {
          this.turmaAlunoRespostaService.getByTurmaAlunoResposta(turmaAluno[0].id, idResposta)
          .subscribe((turmaResposta) => {
            if (turmaResposta.length <= 0) {
              
              this.turmaAlunoResp.resposta = idResposta;
              this.turmaAlunoResp.turmaAluno = turmaAluno[0].id;
              this.turmaAlunoResp.turma = turmaAluno[0].turma;
              this.turmaAlunoRespostaService.add(this.turmaAlunoResp).then(() => {
                
                turmaAluno[0].alunoPontuacao += resposta.pontuacao;
                this.turmaAlunoService.update(turmaAluno[0].id, turmaAluno[0]).then(() =>{
                  
                  aluno[0].pontuacao += resposta.pontuacao;
                  aluno[0].nivel = Math.floor(aluno[0].pontuacao / 100);
                  
                  this.alunoService.update(aluno[0].id, aluno[0]).then(() => {
                    loading.dismiss();
                  });
                });
              });
            }
          });
        });
      });
    }
  }
  
  export class Questao {
    id: string;
    apelido: string;
    problema: string;
    respostas: Resposta[] = [];
    
    public Questao() {
      this.id = '';
      this.apelido = '';
      this.problema = '';
      this.respostas = [];
    }
  }
  
  export class Resposta {
    id: string;
    correta: boolean;
    conteudo: string;
    pontuacao: number;
    escolhida: boolean;
    
    public Resposta() {
      this.id = '';
      this.correta = false;
      this.conteudo = '';
      this.pontuacao = 0;
      this.escolhida = false;
    }
  }