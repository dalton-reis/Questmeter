import { AutenticacaoService } from './../../services/autenticacao.service';
import { NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-autenticacao-resetar-senha',
  templateUrl: './autenticacao-resetar-senha.page.html',
  styleUrls: ['./autenticacao-resetar-senha.page.scss'],
})
export class AutenticacaoResetarSenhaPage implements OnInit {

  userEmail: string = '';
  @ViewChild('form') form: NgForm;

  constructor(
    public nav: NavController,
    private toastController: ToastController,
    private autenticacaoService: AutenticacaoService) {
  }

  ngOnInit() {
  }

  resetPassword() {
    if (this.form.form.valid) {
      let toastMessage = '';

      this.autenticacaoService.resetPassword(this.userEmail)
        .then(() => {
          this.nav.navigateForward('/autenticacao/professor');
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            toastMessage = 'O e-mail digitado não é valido.';
          } else if (error.code == 'auth/user-not-found') {
            toastMessage = 'O usuário não foi encontrado.';
          }

          this.presentToast(toastMessage);
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
