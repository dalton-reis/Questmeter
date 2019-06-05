import { AlunoService } from './../../services/aluno.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ITurma } from './../../models/turma';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';
import { TurmaAlunoService } from 'src/app/services/turma-aluno.service';

@Component({
  selector: 'app-professor-atividade-apresentacao-ranking',
  templateUrl: './professor-atividade-apresentacao-ranking.page.html',
  styleUrls: ['./professor-atividade-apresentacao-ranking.page.scss'],
})
export class ProfessorAtividadeApresentacaoRankingPage implements OnInit {
  
  idTurma = null;
  idAtividade = null;
  alunos: Aluno[] = [];
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private turmaService: TurmaService, private turmaAlunoService: TurmaAlunoService, 
    private alunoService: AlunoService) { }
    
    ngOnInit() {
      this.idTurma = this.route.snapshot.params['turma'];
      
      if(this.idTurma) {

        this.turmaService.get(this.idTurma).subscribe((turma) => {
          this.idAtividade = turma.atividade; 
        });

        this.turmaAlunoService.getByTurma(this.idTurma)
        .subscribe((resultado) => {
          resultado.forEach(f => 
            this.alunoService.get(f.aluno).subscribe((resAluno) => { 
              
              if (this.alunos.findIndex(v => v.id == f.id) < 0) {
                let aluno = new Aluno();
                aluno.id = f.id;
                aluno.nomeCompleto = resAluno.nomeCompleto;
                aluno.pontuacao = f.alunoPontuacao;
                this.alunos.push(aluno);
              }
            }));
          });
        }
      }
      
      finalizar() {
        if (this.idAtividade) {
          this.nav.navigateForward('/professor-atividade-edicao/' + this.idAtividade);  
        }
      }
    }
    
    export class Aluno {
      id: string;
      nomeCompleto: string;
      pontuacao: number;
      
      public Aluno() {
        this.id = '';
        this.nomeCompleto = '';
        this.pontuacao = 0;
      }
    }