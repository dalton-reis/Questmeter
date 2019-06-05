import { AutenticacaoService } from './../../services/autenticacao.service';
import { ProfessorService } from './../../services/professor.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { IProfessor } from 'src/app/models/professor';

@Component({
  selector: 'app-professor-perfil',
  templateUrl: './professor-perfil.page.html',
  styleUrls: ['./professor-perfil.page.scss'],
})
export class ProfessorPerfilPage implements OnInit {
  
  professor: IProfessor = {
    usuario: '',
    nomeCompleto: '',
    imagem: ''
  }

  emailUsuarioCorrente = null;
  usuarioCorrente = null;
  
  constructor(private loadingController: LoadingController, private nav: NavController,
    private professorService: ProfessorService, private autenticacaoService: AutenticacaoService) { }
  
    ngOnInit() {
      this.load();
    }
    
    async load() {
      const loading = await this.loadingController.create({
        message: 'Carregando'
      });
      await loading.present();
      
      this.emailUsuarioCorrente = this.autenticacaoService.getEmail();
      
      this.usuarioCorrente = this.autenticacaoService.getID();
      this.professorService.getByUsuario(this.usuarioCorrente).then((professor) => {
        loading.dismiss();
        this.professor = professor[0];
      });
    }

    sair() {
      this.autenticacaoService.signOut().then(() => {
        this.nav.navigateForward('/abertura');
      });
    }
}
