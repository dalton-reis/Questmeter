import { ProfessorService } from './../../services/professor.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { AtividadeService } from './../../services/atividade.service';
import { IAtividade } from './../../models/atividade';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-professor-atividade-criacao',
  templateUrl: './professor-atividade-criacao.page.html',
  styleUrls: ['./professor-atividade-criacao.page.scss'],
})
export class ProfessorAtividadeCriacaoPage implements OnInit {
  
  atividade: IAtividade = {
    professor: '', //FK
    disciplina: '',
    nome: '',
    dataTermino: new Date(),
    dataCriacao: new Date()
  }
  usuarioCorrente = null;
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController, private professorService: ProfessorService,
    private atividadeService: AtividadeService, private autenticacaoService: AutenticacaoService) { }
    
    ngOnInit() { }
    
    async save() {
      const loading = await this.loadingController.create({
        message: 'Salvando'
      });
      await loading.present();
      
      this.usuarioCorrente = this.autenticacaoService.getID();
      
      this.professorService.getByUsuario(this.usuarioCorrente).then((professor) => {
        
        this.atividade.professor = professor[0].id;
        this.atividade.dataCriacao = new Date(Date.now());
        
        this.atividadeService.add(this.atividade).then(() => {
          loading.dismiss();
          
          this.atividadeService.getByProfessorOrdenaPorData(this.atividade.professor).subscribe((resultado) => {
            this.nav.navigateBack('/professor-atividade-edicao/' + resultado[0].id);
          });
        });
      });
    }
  }
  