import { ActivatedRoute } from '@angular/router';
import { Usuario } from './../../models/usuario';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})
export class AutenticacaoPage implements OnInit {
  
  usuario: Usuario = new Usuario();
  @ViewChild('form') form: NgForm;
  
  tipoUsuario = null;
  
  constructor(private route: ActivatedRoute,
    public nav: NavController,
    private toastController: ToastController,
    private autenticacaoService: AutenticacaoService) {
    }
    
    ngOnInit(){ 
      this.tipoUsuario = this.route.snapshot.params['tipo'];
    }
    
    resetPassword() {
      this.nav.navigateForward('/autenticacao-resetar-senha');
    }
    
    async signIn() {
      if (this.form.form.valid) {
        let toastMessage = '';
        
        this.autenticacaoService.signIn(this.usuario)
        .then(() => {
          if (this.tipoUsuario == 'aluno') {
            this.nav.navigateForward('/aluno-inicio');
          } else if (this.tipoUsuario == 'professor') {
            this.nav.navigateForward('/professor-inicio');
          }
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            toastMessage = 'O e-mail digitado não é valido.';
          } else if (error.code == 'auth/user-disabled') {
            toastMessage = 'O usuário está desativado.';
          } else if (error.code == 'auth/user-not-found') {
            toastMessage = 'O usuário não foi encontrado.';
          } else if (error.code == 'auth/wrong-password') {
            toastMessage = 'A senha digitada não é valida.';
          }
          
          this.presentToast(toastMessage);
        });
      }
    }
    
    createAccount() {
      this.nav.navigateForward('/autenticacao-criar-conta/' + this.tipoUsuario);
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