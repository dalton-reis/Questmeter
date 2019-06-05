import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { IResposta } from './../../models/resposta';
import { Component, OnInit } from '@angular/core';
import { RespostaService } from 'src/app/services/resposta.service';

@Component({
  selector: 'app-professor-resposta',
  templateUrl: './professor-resposta.page.html',
  styleUrls: ['./professor-resposta.page.scss'],
})
export class ProfessorRespostaPage implements OnInit {

  resposta: IResposta = {
    conteudo: '',
    questao: null, //FK
    correta: false,
    pontuacao: 0
  }

  idResposta = null;
  idQuestao = null;

  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController, private respostaService: RespostaService) { }

    ngOnInit() {
      this.idQuestao = this.route.snapshot.params['questao'];
      this.idResposta = this.route.snapshot.params['id'];

      if(this.idResposta) {
        this.load();
      }
    }

    async load() {
      const loading = await this.loadingController.create({
        message: 'Carregando'
      });
      await loading.present();

      this.respostaService.get(this.idResposta).subscribe(resultado => {
        loading.dismiss();

        this.resposta = resultado;
      });
    }

    async save() {
      const loading = await this.loadingController.create({
        message: 'Salvando'
      });
      await loading.present();

      if (this.idResposta){
        this.respostaService.update(this.idResposta, this.resposta).then(() => {
          loading.dismiss();

          this.nav.navigateForward('/professor-questao-edicao/' + this.resposta.questao);
        });
      } else {
        this.respostaService.add(this.resposta, this.idQuestao).then(() => {
          loading.dismiss();

          this.nav.navigateForward('/professor-questao-edicao/' + this.idQuestao);
        });
      }
    }

    async onRemove(id: string) {
      this.respostaService.remove(id);
    }
}
