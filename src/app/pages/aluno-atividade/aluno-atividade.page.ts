import { TurmaService } from 'src/app/services/turma.service';
import { ITurmaAluno } from '../../models/turma-aluno';
import { AtividadeService } from './../../services/atividade.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { IAtividade } from 'src/app/models/atividade';
import { TurmaAlunoService } from 'src/app/services/turma-aluno.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aluno-atividade',
  templateUrl: './aluno-atividade.page.html',
  styleUrls: ['./aluno-atividade.page.scss'],
})
export class AlunoAtividadePage implements OnInit {
  
  usuarioCorrente = null;
  atividades: Atividade[] = [];
  
  constructor(private nav: NavController,
    private atividadeService: AtividadeService, private alunoService: AlunoService, 
    private turmaAlunoService: TurmaAlunoService, private turmaService: TurmaService,
    private autenticacaoService: AutenticacaoService) { }
    
    ngOnInit() { 
      this.atividades = [];
      this.usuarioCorrente = this.autenticacaoService.getID();
      this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) => {
        this.turmaAlunoService.getByAluno(aluno[0].id)
        .subscribe((turmaAluno) => {
          turmaAluno.forEach(f => 
            this.turmaService.get(f.turma).subscribe((turma) => {
              this.atividadeService.get(turma.atividade).subscribe((atividade) => { 
                //verifica se a atividade já existe no array
                if (this.atividades.findIndex(c => c.turma == f.turma) < 0) {
                  let ativ = new Atividade();
                  ativ.id = turma.atividade;
                  ativ.nome = atividade.disciplina + ' | ' + atividade.nome;
                  ativ.turma = turma.nome;
                  this.atividades.push(ativ);
                }
              });
            }));
          });
        });
      }
      
      goTelaAluno(atividade: IAtividade) {
        this.turmaService.getByAtividade(atividade.id).subscribe((turma) => { 
          this.usuarioCorrente = this.autenticacaoService.getID();
          this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) => {
            this.turmaAlunoService.getByTurmaAluno(turma[0].id, aluno[0].id).subscribe((turmaAluno) => {
              if (turmaAluno.length > 0) {
                this.nav.navigateForward('/aluno-atividade-abrir/turma/' + turmaAluno[0].turma);
              }
            });
          });
        });
      }
    }

    export class Atividade {
      id: string;
      nome: string;  
      turma: string;  
      
      public Atividade() {
        this.id = '';
        this.nome = '';
        this.turma = '';
      }
    }