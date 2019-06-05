import { TurmaAlunoService } from './../../services/turma-aluno.service';
import { ITurmaAluno } from './../../models/turma-aluno';
import { IAluno } from './../../models/aluno';
import { IAtividade } from './../../models/atividade';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { AlunoService } from './../../services/aluno.service';
import { AtividadeService } from './../../services/atividade.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-aluno-atividade-codigo',
  templateUrl: './aluno-atividade-codigo.page.html',
  styleUrls: ['./aluno-atividade-codigo.page.scss'],
})
export class AlunoAtividadeCodigoPage implements OnInit {
  
  turmaAluno: ITurmaAluno = {
    turma: '',
    aluno: '',
    alunoPontuacao: 0
  }
  
  tokenAtividade = null;
  usuarioCorrente = null;
  
  constructor(private nav: NavController, private loadingController: LoadingController, 
    private toastController: ToastController, 
    private turmaAlunoService: TurmaAlunoService, private turmaService: TurmaService,
    private atividadeService: AtividadeService, private alunoService: AlunoService,
    private autenticacaoService: AutenticacaoService) { }
    
    ngOnInit() { }
    
    async entrarNaAtividade(){
      const loading = await this.loadingController.create({
        message: 'Carregando'
      });
      await loading.present();
      
      if (this.tokenAtividade) {
        this.usuarioCorrente = this.autenticacaoService.getID();
        
        this.turmaService.getByToken(this.tokenAtividade).subscribe((turma) => {
          if (turma.length > 0) {
            this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) => {
              this.turmaAlunoService.getByTurmaAluno(turma[0].id, aluno[0].id)
              .subscribe((resultado) => {
                
                if (resultado.length <= 0) {
                  this.turmaAluno.turma = turma[0].id;
                  this.turmaAluno.aluno = aluno[0].id;
                  
                  this.turmaAlunoService.add(this.turmaAluno).then(() => {
                    loading.dismiss();
                    this.tokenAtividade = null;
                    this.nav.navigateForward('/aluno-atividade-abrir/turma/' + turma[0].id);
                  });
                }
              });
            });
          }
          else {
            loading.dismiss();
            this.presentToast("Código inválido");
          }
        });
      }
      else {
        loading.dismiss();
        this.presentToast('É necessário digitar o token para entrar na atividade.');
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
  