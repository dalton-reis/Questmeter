import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { IQuestao } from 'src/app/models/questao';
import { Component, OnInit } from '@angular/core';
import { QuestaoService } from 'src/app/services/questao.service';
import { IResposta } from 'src/app/models/resposta';
import { RespostaService } from 'src/app/services/resposta.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-professor-questao-edicao',
  templateUrl: './professor-questao-edicao.page.html',
  styleUrls: ['./professor-questao-edicao.page.scss'],
})
export class ProfessorQuestaoEdicaoPage implements OnInit {

  questao: IQuestao = {
    atividade: null, //FK
    apelido: '',
    problema: '',
    dataCriacao: new Date()
  }

  idQuestao = null;
  respostas: IResposta[];
  segmentQuestao = 'edicao';

  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController, 
    private questaoService: QuestaoService, private respostaService: RespostaService) { }

    ngOnInit() {
      this.idQuestao = this.route.snapshot.params['id'];

      if(this.idQuestao) {
        this.load();

        this.respostaService.getByQuestao(this.idQuestao).subscribe((resultado) => {
          this.respostas = resultado;
        });
      }
    }

    async load() {
      const loading = await this.loadingController.create({
        message: 'Carregando'
      });
      await loading.present();

      this.questaoService.get(this.idQuestao).subscribe(resultado => {
        loading.dismiss();

        this.questao = resultado;
      });
    }

    async save() {
      const loading = await this.loadingController.create({
        message: 'Salvando'
      });
      await loading.present();

      if (this.idQuestao){
        this.questaoService.update(this.idQuestao, this.questao).then(() => {
          loading.dismiss();

          this.nav.navigateForward('/professor-atividade-edicao/' + this.questao.atividade);
        });
      }
    }

    async onRemove(id: string) {
      //Não funciona
      this.respostaService.getByQuestaoComID(id).then((resultado) => {
        console.log('resposta', resultado[0].id);
        this.respostaService.remove(resultado[0].id);
      });

      this.questaoService.remove(id);
    }

    async onRemoveResposta(id: string) {
      this.respostaService.remove(id);
    }
}
