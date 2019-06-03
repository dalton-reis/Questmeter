import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { IAluno } from './../../models/aluno';
import { IProfessor } from 'src/app/models/professor';
import { AlunoService } from './../../services/aluno.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-autenticacao-criar-conta',
  templateUrl: './autenticacao-criar-conta.page.html',
  styleUrls: ['./autenticacao-criar-conta.page.scss'],
})
export class AutenticacaoCriarContaPage implements OnInit {

  usuario: Usuario = new Usuario();
  @ViewChild('form') form: NgForm;
  
  aluno: IAluno = {
    usuario: '',
    nomeCompleto: '',
    imagem: 'capivara.jpg',
    nivel: 0,
    pontuacao: 0,
  }

  professor: IProfessor = {
    usuario: '',
    nomeCompleto: '',
    imagem: '',
  }
  
  tipoUsuario = null;
  nomeCompleto = null;

  constructor(private route: ActivatedRoute,
    public nav: NavController,
    private toastController: ToastController,
    private autenticacaoService: AutenticacaoService,
    private alunoService: AlunoService,
    private professorService: ProfessorService) {
    }

  ngOnInit() {
    this.tipoUsuario = this.route.snapshot.params['tipo'];
  }

  createAccount() {
    if (this.form.form.valid) {
      let toastMessage = '';
      
      this.autenticacaoService.createUser(this.usuario)
      .then((usuario: any) => {
        //usuario.sendEmailVerification();
        
        //Após criar o usuário, cria o aluno/professor e faz ligação com o usuário
        if (this.tipoUsuario == 'aluno') {
          this.aluno.usuario = this.autenticacaoService.getID();
          this.aluno.nomeCompleto = this.nomeCompleto;
          this.aluno.imagem = this.getRandomInt(1, 40) + '.jpg';
          this.alunoService.add(this.aluno).then(() => {
            this.nav.navigateForward('/aluno-inicio');
          });
        } else if (this.tipoUsuario == 'professor') {
          this.professor.usuario = this.autenticacaoService.getID();
          this.professor.nomeCompleto = this.nomeCompleto;
          this.professorService.add(this.professor).then(() => {
            this.nav.navigateForward('/professor-inicio');
          });
        }
      })
      .catch((error: any) => {
        if (error.code  == 'auth/email-already-in-use') {
          toastMessage = 'O e-mail digitado já existe.';
        } else if (error.code  == 'auth/invalid-email') {
          toastMessage = 'O e-mail digitado não é valido.';
        } else if (error.code  == 'auth/operation-not-allowed') {
          toastMessage = 'Não está habilitado criar usuários.';
        } else if (error.code  == 'auth/weak-password') {
          toastMessage = 'A senha digitada é muito fraca.';
        } else {
          toastMessage = error.message;
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

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
