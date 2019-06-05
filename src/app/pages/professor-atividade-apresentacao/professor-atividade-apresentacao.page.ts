import { TurmaAlunoRespostaService } from './../../services/turma-aluno-resposta.service';
import { AtividadeService } from './../../services/atividade.service';
import { ITurma } from './../../models/turma';
import { IResposta } from './../../models/resposta';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RespostaService } from 'src/app/services/resposta.service';
import { TurmaService } from 'src/app/services/turma.service';
import { QuestaoService } from 'src/app/services/questao.service';
import { IQuestao } from 'src/app/models/questao';
import { NavController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-professor-atividade-apresentacao',
  templateUrl: './professor-atividade-apresentacao.page.html',
  styleUrls: ['./professor-atividade-apresentacao.page.scss'],
})
export class ProfessorAtividadeApresentacaoPage implements OnInit {
  
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
  
  questaoCorrente: Questao = new Questao();
  
  idTurma = null;
  tokenTurma = null;
  mostrarFinal = false;
  questoes: Questao[] = [];
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private turmaService: TurmaService, private atividadeService: AtividadeService,
    private questaoService: QuestaoService, private respostaService: RespostaService,
    private turmaAlunoRespostaService: TurmaAlunoRespostaService) { }
    
    ngOnInit() {
      this.idTurma = this.route.snapshot.params['turma'];
      
      this.turmaService.get(this.idTurma).subscribe((turma) => {
        this.tokenTurma = turma.token;
        this.turma = turma;
        
        this.questaoService.getByAtividadeAsc(turma.atividade).subscribe((resultado) => {
          resultado.forEach(f => {
            if (this.questoes.findIndex(c => c.id == f.id) < 0) {
              this.questoes.push(this.preencherQuestaoClasse(f.id, f, f.id == turma.questaoAtual));
            }
          });
        });
        
        if (!turma.atividadeFinalizada) {
          if (turma.questaoAtual) {
            document.getElementById('div_questoes').style.visibility = "visible";
            document.getElementById('div_iniciar').style.display = "none";
            
            this.questaoService.get(turma.questaoAtual).subscribe((questao) => {
              this.questaoCorrente = this.preencherQuestaoClasse(turma.questaoAtual, questao, true);
              this.apresentarGrafico(this.idTurma, turma.questaoAtual);
            });
          }
        } 
        
        if (this.mostrarFinal) {
          document.getElementById('btn_ranking').style.visibility = "visible";
          document.getElementById('btn_finalizar').style.visibility = "visible";
          document.getElementById('div_questoes').style.display = "none";
          document.getElementById('div_iniciar').style.display = "none";
        }
      });
    }
    
    iniciarAtividade() {
      //Deixa a tela do gráfico visível e inicia a primeira questão
      document.getElementById('div_questoes').style.visibility = "visible";
      document.getElementById('div_iniciar').style.display = "none";
      
      this.questaoService.getByAtividadeAsc(this.turma.atividade).subscribe((questao) => {
        this.turma.questaoAtual = questao[0].id;
        this.turma.atividadeIniciada = true;
        this.turmaService.update(this.idTurma, this.turma).then(() => {
          this.questaoCorrente = this.preencherQuestaoClasse(questao[0].id, questao[0], true);
        });
      });
    }
    
    proximaQuestao() {
      //pega a ultima questao que ainda não foi iniciada
      //se não tiver mais questões, apresentar mensagem e ranking
      
      var index2 = 0;
      var qtdQuestoes = this.questoes.length; 
      var index = this.questoes.findIndex(c => c.id == this.questaoCorrente.id);
      index2 = index ==  qtdQuestoes ? qtdQuestoes : (index+1);
      this.questaoCorrente = this.questoes[index2];

      // console.log('questoes', this.questoes);
      // console.log('questao atual', this.questaoCorrente);
      // console.log('index', index2);
      // console.log('qtd', qtdQuestoes);
      
      if (index2 >= qtdQuestoes) {
        this.mostrarFinal = true;
        this.turma.atividadeIniciada = false;
        this.turma.atividadeFinalizada = true;
        this.turma.questaoAtual = null;
        this.turmaService.update(this.idTurma, this.turma);
      } 
      else {
        this.turma.questaoAtual = this.questaoCorrente.id;
        this.turmaService.update(this.idTurma, this.turma);
      }
    }
    
    mostrarRanking() {
      if (this.turma.atividadeFinalizada)
      this.nav.navigateForward('/professor-atividade-apresentacao-ranking/turma/' + this.idTurma);  
    }
    
    finalizar() {
      if (this.turma.atividadeFinalizada)
      this.nav.navigateForward('/professor-atividade-edicao/' + this.turma.atividade);  
    }
    
    apresentarGrafico(idTurma, idQuestao) {
      this.respostaService.getByQuestao(idQuestao).subscribe((respostas) => {
        this.turmaAlunoRespostaService.getByTurma(idTurma).subscribe((resultado) => {
          
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Topping');
          data.addColumn('number', 'Slices');
          
          var chave = [];
          var valor = [];
          for (var i = 0; i < respostas.length; i++) {
            var votos = 0;
            resultado.forEach(f => {
              if (f.resposta == respostas[i].id) {
                votos += 1;
              }
            });

            chave[i] = respostas[i].conteudo;
            valor[i] = votos;
          }
          
          data.addRows(respostas.length);
          for (var i = 0; i < chave.length; i++) {
            data.setCell(i, 0, chave[i]);
            data.setCell(i, 1, valor[i]);
          }
          
          var options = {
            'width':'80%',
            'height':'80%',
            pieHole: 0.4};
            
            var chart = new google.visualization.PieChart(document.getElementById('div_chart'));
            chart.draw(data, options);
          });
        });
      }
      
      // apresentarGrafico(idQuestao) {
      //   this.respostaService.getByQuestao(idQuestao).subscribe((respostas) => {
      
      //     var data = new google.visualization.DataTable();
      //     data.addColumn('string', 'Topping');
      //     data.addColumn('number', 'Slices');
      
      //     var chave = [];
      //     var valor = [];
      //     for (var i = 0; i < respostas.length; i++) {
      //       chave[i] = respostas[i].conteudo;
      
      //       this.turmaAlunoRespostaService.getByResposta(respostas[i].id).subscribe((resultado) => {
      //         if (resultado[0]) {
      //           this.alunoRespostas[0] = resultado[0];
      //           console.log('resppp', resultado.length);
      //           valor[i] = resultado.length;
      //         }
      //       });
      //     }
      //     console.log('chave', chave);
      //     console.log('valor', valor);
      
      //     data.addRows(respostas.length);
      //     for (var i = 0; i < chave.length; i++) {
      //       data.setCell(i, 0, chave[i]);
      //       data.setCell(i, 1, valor[i]);
      //     }
      
      //     var options = {
      //       'width':'80%',
      //       'height':'80%',
      //       pieHole: 0.4};
      
      //       var chart = new google.visualization.PieChart(document.getElementById('div_chart'));
      //       chart.draw(data, options);
      //     });
      //   }
      
      preencherQuestaoClasse(id: string, questaoInterface: IQuestao, atual: boolean): Questao {
        let questao = new Questao();
        questao.id = id;
        questao.atividade = questaoInterface.atividade;
        questao.apelido = questaoInterface.apelido;
        questao.problema = questaoInterface.problema;
        questao.dataCriacao = questaoInterface.dataCriacao;
        questao.atual = atual;
        
        return questao;
      }
    }
    
    export class Questao {
      id: string;
      atividade: string;
      apelido: string;
      problema: string;
      dataCriacao: Date;
      atual: boolean;    
      
      public Questao() {
        this.id = '';
        this.atividade = '';
        this.apelido = '';
        this.problema = '';
        this.dataCriacao = new Date();
        this.atual = false;
      }
    }
    