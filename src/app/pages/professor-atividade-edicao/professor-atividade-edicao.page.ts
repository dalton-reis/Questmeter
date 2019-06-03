import { AlunoService } from './../../services/aluno.service';
import { AtividadeAlunoService } from './../../services/atividade-aluno.service';
import { AtividadeService } from './../../services/atividade.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { IResposta } from './../../models/resposta';
import { IAtividade } from './../../models/atividade';
import { Component, OnInit } from '@angular/core';
import { RespostaService } from 'src/app/services/resposta.service';

@Component({
  selector: 'app-professor-atividade-edicao',
  templateUrl: './professor-atividade-edicao.page.html',
  styleUrls: ['./professor-atividade-edicao.page.scss'],
})
export class ProfessorAtividadeEdicaoPage implements OnInit {
  
  atividade: IAtividade = {
    nome: '',
    professor: '', //FK
    problema: '',
    tipo: '',
    dataTermino: new Date(),
    iniciada: false,
    codigo: ''
  }

  idAtividade= null;
  respostas: IResposta[];
  alunos: Aluno[] = [];
  segmentAtividade = 'edicao';
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController,
    private atividadeService: AtividadeService, private respostaService: RespostaService,
    private atividadeAlunoService: AtividadeAlunoService, private alunoService: AlunoService) { }
    
    ngOnInit() {
      this.idAtividade = this.route.snapshot.params['id'];
      if(this.idAtividade) {
        this.load();
        
        this.respostaService.getByAtividade(this.idAtividade).subscribe((resultado) => {
          this.respostas = resultado;
        });
        
        this.atividadeAlunoService.getByAtividade(this.idAtividade)
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
      
      this.atividadeService.get(this.idAtividade).subscribe(resultado => {
        loading.dismiss();
        
        this.atividade = resultado;
      });
    }
    
    async save() {
      const loading = await this.loadingController.create({
        message: 'Salvando'
      });
      await loading.present();
      
      if (this.idAtividade){
        this.atividadeService.update(this.idAtividade, this.atividade).then(() => {
          loading.dismiss();
          
          this.nav.navigateForward('/professor-inicio');
        });
      } else {
        this.atividadeService.add(this.atividade).then(() => {
          loading.dismiss();
          
          this.nav.navigateForward('/professor-inicio');
        });
      }
    }
    
    async onRemoveAtividade(id: string) {
      this.atividadeService.remove(id);
    }
    
    async onRemoveResposta(id: string) {
      this.atividadeService.remove(id);
    }
    
    async gerarCodigoTurma() {
      if (this.idAtividade) {
        const loading = await this.loadingController.create({
          message: 'Salvando'
        });
        await loading.present();
        
        let codigo = this.idAtividade.substring(0, 7);
        this.atividade.codigo = codigo.toString().toUpperCase();
        
        this.atividadeService.update(this.idAtividade, this.atividade).then(() => {
          loading.dismiss();
        });
      }
    }

    apresentar() {
      this.nav.navigateForward('/professor-atividade-apresentacao/' + this.idAtividade);
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
  