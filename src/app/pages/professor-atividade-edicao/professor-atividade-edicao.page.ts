import { TurmaService } from 'src/app/services/turma.service';
import { QuestaoService } from './../../services/questao.service';
import { AtividadeService } from './../../services/atividade.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { IAtividade } from './../../models/atividade';
import { Component, OnInit } from '@angular/core';
import { IQuestao } from 'src/app/models/questao';
import { ITurma } from 'src/app/models/turma';

@Component({
  selector: 'app-professor-atividade-edicao',
  templateUrl: './professor-atividade-edicao.page.html',
  styleUrls: ['./professor-atividade-edicao.page.scss'],
})
export class ProfessorAtividadeEdicaoPage implements OnInit {
  
  atividade: IAtividade = {
    professor: '', //FK
    disciplina: '',
    nome: '',
    dataTermino: new Date(),
    dataCriacao: new Date()
  }

  idAtividade= null;
  questoes: IQuestao[];
  turmas: ITurma[];
  segmentAtividade = 'edicao';
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController,
    private atividadeService: AtividadeService, private questaoService: QuestaoService,
    private turmaService: TurmaService) { }
    
    ngOnInit() {
      this.idAtividade = this.route.snapshot.params['id'];
      
      if(this.idAtividade) {
        this.load();
        
        this.questaoService.getByAtividade(this.idAtividade).subscribe((resultado) => {
          this.questoes = resultado;
        });

        this.turmaService.getByAtividade(this.idAtividade).subscribe((resultado) => {
          this.turmas = resultado;
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
    
    async onRemoveQuestao(id: string) {
      this.questaoService.remove(id);
    }

    async onRemoveTurma(id: string) {
      this.turmaService.remove(id);
    }
    
    async gerarCodigoTurma() {
      if (this.idAtividade) {
        this.nav.navigateForward('/professor-turma/atividade/' + this.idAtividade);  
      }
    }

    apresentar() {
      if (this.idAtividade) {
        this.nav.navigateForward('/professor-atividade-apresentacao-turma/atividade/' + this.idAtividade);
      }
    }
  }

  