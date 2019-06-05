import { QuestaoService } from './../../services/questao.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IQuestao } from 'src/app/models/questao';

@Component({
  selector: 'app-professor-questao',
  templateUrl: './professor-questao.page.html',
  styleUrls: ['./professor-questao.page.scss'],
})
export class ProfessorQuestaoPage implements OnInit {
  
  questao: IQuestao = {
    atividade: null, //FK
    apelido: '',
    problema: '',
    dataCriacao: new Date()
  }
  
  idAtividade = null;
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController, private questaoService: QuestaoService) { }
    
    ngOnInit() {
      this.idAtividade = this.route.snapshot.params['atividade'];
    }
    
    async save() {
      const loading = await this.loadingController.create({
        message: 'Salvando'
      });
      await loading.present();
      
      this.questao.dataCriacao = new Date(Date.now());
      this.questaoService.add(this.questao, this.idAtividade).then(() => {
        loading.dismiss();
        
        this.questaoService.getByAtividade(this.idAtividade).subscribe((resultado) => {
          this.nav.navigateBack('/professor-questao-edicao/' + resultado[0].id);
        });
      });
    }
    
    async onRemove(id: string) {
      this.questaoService.remove(id);
    }
  }
  
  