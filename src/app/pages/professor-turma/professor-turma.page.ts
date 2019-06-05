import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ITurma } from 'src/app/models/turma';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-professor-turma',
  templateUrl: './professor-turma.page.html',
  styleUrls: ['./professor-turma.page.scss'],
})
export class ProfessorTurmaPage implements OnInit {
  
  turma: ITurma = {
    atividade: '', //FK
    nome: '',
    token: '',
    dataCriacao: new Date(),
    atividadeIniciada: false,
    atividadeFinalizada: false,
    questaoAtual: null
  }
  
  idAtividade = null;
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController, private turmaService: TurmaService) { }
    
    ngOnInit() {
      this.idAtividade = this.route.snapshot.params['atividade'];
    }
    
    async gerarTurma() {
      if (this.idAtividade) {
        const loading = await this.loadingController.create({
          message: 'Salvando'
        });
        await loading.present();
        
        this.turma.dataCriacao = new Date(Date.now());
        this.turmaService.add(this.turma, this.idAtividade).then(() => {
          this.turmaService.getByAtividadePromise(this.idAtividade).then((resultado) => {
            let token = resultado[0].id.substring(0, 7);
            this.turma.token = token.toUpperCase();
            
            this.turmaService.update(resultado[0].id, this.turma).then(() => {
              loading.dismiss();
              this.nav.navigateForward('/professor-atividade-edicao/' + this.idAtividade);
            });
          });
        });
      }
    }
    
    cancelar() {
      this.nav.navigateForward('/professor-atividade-edicao/' + this.idAtividade);
    }
  }
  