import { IAluno } from './../../models/aluno';
import { IAtividade } from './../../models/atividade';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { AlunoService } from './../../services/aluno.service';
import { AtividadeService } from './../../services/atividade.service';
import { AtividadeAlunoService } from './../../services/atividade-aluno.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { IAtividadeAluno } from 'src/app/models/atividade-aluno';

@Component({
  selector: 'app-aluno-atividade-codigo',
  templateUrl: './aluno-atividade-codigo.page.html',
  styleUrls: ['./aluno-atividade-codigo.page.scss'],
})
export class AlunoAtividadeCodigoPage implements OnInit {

  atividadeAluno: IAtividadeAluno = {
    atividade: '',
    aluno: '',
    alunoVotou: false,
    alunoPontuacao: 0
  }

  codigoAtividade = null;
  usuarioCorrente = null;

  constructor(private nav: NavController, private loadingController: LoadingController, 
    private toastController: ToastController, private atividadeAlunoService: AtividadeAlunoService,
    private atividadeService: AtividadeService, private alunoService: AlunoService,
    private autenticacaoService: AutenticacaoService) { }

  ngOnInit() { }

  async entrarNaAtividade(){
    const loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await loading.present();

    if (this.codigoAtividade) {
      this.usuarioCorrente = this.autenticacaoService.getID();
      this.atividadeService.getByCodigo(this.codigoAtividade).then((atividade) => {
        this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) =>{
          this.atividadeAlunoService.getByAtividadeAluno(atividade[0].id, aluno[0].id)
          .subscribe((resultado) => {
            //arrumar
            if(resultado.length <= 0) {
              this.atividadeAluno.atividade = atividade[0].id;
              this.atividadeAluno.aluno = aluno[0].id;
              
              this.atividadeAlunoService.add(this.atividadeAluno).then(() => {
                loading.dismiss();
                //this.nav.navigateForward('/tabs-aluno/aluno-atividade');
              });
           } //else {
            //   loading.dismiss();
            //   this.presentToast('Você já está adicionado nesta atividade.');
            // }
          });
        });
       });
    }
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
