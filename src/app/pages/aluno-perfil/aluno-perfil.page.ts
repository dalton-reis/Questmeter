import { AutenticacaoService } from './../../services/autenticacao.service';
import { LoadingController, NavController } from '@ionic/angular';
import { AlunoService } from './../../services/aluno.service';
import { IAluno } from './../../models/aluno';
import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-aluno-perfil',
  templateUrl: './aluno-perfil.page.html',
  styleUrls: ['./aluno-perfil.page.scss'],
})
export class AlunoPerfilPage implements OnInit {
  
  aluno: IAluno = {
    usuario: '',
    nomeCompleto: '',
    imagem: '',
    nivel: 0,
    pontuacao: 0,
  }
  
  emailUsuarioCorrente = null;
  usuarioCorrente = null;
  pontuacao = 0;
  pontuacaoMaxima = 0;
  urlImagem = null;
  
  constructor(private loadingController: LoadingController, private fb: FirebaseApp,
    private alunoService: AlunoService, private autenticacaoService: AutenticacaoService) { }
    
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
      this.alunoService.getByUsuarioA(this.usuarioCorrente).subscribe((aluno) => {
        loading.dismiss();

        this.getImage(aluno[0].imagem);
        this.aluno = aluno[0];
        this.pontuacao = (aluno[0].pontuacao / 100) - Math.floor(aluno[0].pontuacao / 100);
        this.pontuacaoMaxima = (Math.floor(aluno[0].pontuacao / 100) + 1) * 100;
      });
    }
    
    getImage(nomeImagem: string) {
      var storage = firebase.app().storage();
      var pathRef = storage.ref();
      var storageRef = pathRef.child(nomeImagem);
      
      storageRef.getDownloadURL().then((url) => {
        
        this.urlImagem = url;
      }).catch(function(error) {
        console.log('erro', error.message);
        switch (error.code) {
          case 'storage/object-not-found':
          // File doesn't exist
          break;
          
          case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
          
          case 'storage/canceled':
          // User canceled the upload
          break;
          case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
        }
      });
    }
  }