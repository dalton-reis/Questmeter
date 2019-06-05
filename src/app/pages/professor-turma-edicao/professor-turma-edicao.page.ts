import { AlunoService } from './../../services/aluno.service';
import { TurmaAlunoService } from 'src/app/services/turma-aluno.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ITurma } from './../../models/turma';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-professor-turma-edicao',
  templateUrl: './professor-turma-edicao.page.html',
  styleUrls: ['./professor-turma-edicao.page.scss'],
})
export class ProfessorTurmaEdicaoPage implements OnInit {
  
  turma: ITurma = {
    atividade: '', //FK
    nome: '',
    token: '',
    dataCriacao: new Date(),
    atividadeIniciada: false,
    atividadeFinalizada: false,
    questaoAtual: null
  }
  
  idTurma = null;
  alunos: Aluno[] = [];
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController, private turmaService: TurmaService,
    private turmaAlunoService: TurmaAlunoService, private alunoService: AlunoService) { }
    
    ngOnInit() {
      this.idTurma = this.route.snapshot.params['id'];
      
      if(this.idTurma) {
        this.load();

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
    
    async load() {
      const loading = await this.loadingController.create({
        message: 'Carregando'
      });
      await loading.present();
      
      this.turmaService.get(this.idTurma).subscribe(resultado => {
        loading.dismiss();
        
        this.turma = resultado;
      });
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
  