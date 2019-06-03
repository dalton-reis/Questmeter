import { ProfessorService } from './../../services/professor.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { AtividadeService } from './../../services/atividade.service';
import { IAtividade } from './../../models/atividade';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-atividade-criacao',
  templateUrl: './professor-atividade-criacao.page.html',
  styleUrls: ['./professor-atividade-criacao.page.scss'],
})
export class ProfessorAtividadeCriacaoPage implements OnInit {
  
  atividade: IAtividade = {
    nome: '',
    professor: '', //FK
    problema: '',
    tipo: '',
    dataTermino: new Date(),
    iniciada: false,
    codigo: ''
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
        this.atividadeService.add(this.atividade).then(() => {
          loading.dismiss();
          
          this.nav.navigateForward('/professor-atividade');
        });
      });
    }
  }
  