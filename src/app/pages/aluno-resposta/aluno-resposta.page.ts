import { TurmaAlunoService } from './../../services/turma-aluno.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { AlunoService } from './../../services/aluno.service';
import { IResposta } from './../../models/resposta';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RespostaService } from 'src/app/services/resposta.service';

@Component({
  selector: 'app-aluno-resposta',
  templateUrl: './aluno-resposta.page.html',
  styleUrls: ['./aluno-resposta.page.scss'],
})
export class AlunoRespostaPage implements OnInit {
  
  resposta: IResposta = {
    questao: '', //FK
    conteudo: '',
    correta: false,
    pontuacao: 0
  }
  
  idResposta = null;
  usuarioCorrente = null;
  desabilitaBotaoVotar: boolean = false;
  
  constructor(private route: ActivatedRoute, private nav: NavController, private toastController: ToastController,
    private loadingController: LoadingController, private respostaService: RespostaService,
    private turmaAlunoService: TurmaAlunoService, private alunoService: AlunoService,
    private autenticacaoService: AutenticacaoService) { }
    
    ngOnInit() {
      this.idResposta = this.route.snapshot.params['id'];
      
      if(this.idResposta) {
        this.load();
      }
    }
    
    async load() {
      const loading = await this.loadingController.create({
        message: 'Carregando'
      });
      await loading.present();
      
      this.respostaService.get(this.idResposta).subscribe(resultado => {
        loading.dismiss();
        
        this.resposta = resultado;
        
        this.usuarioCorrente = this.autenticacaoService.getID();
        this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) =>{
          // this.turmaAlunoService.getByTurmaAlunoVoto(this.resposta.questao, aluno[0].id)
          // .subscribe((resultado) => {
          //   //se já respondeu deixa o botão 'Votar' bloqueado
          //   this.desabilitaBotaoVotar = (resultado.length <= 0)
          // });
        });
      });
    }
    
    async votar() {
      this.usuarioCorrente = this.autenticacaoService.getID();
      this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) =>{
        // this.turmaAlunoService.getByTurmaAlunoVoto(this.resposta.questao, aluno[0].id)
        // .subscribe((resultado) => {
        //   if (resultado.length > 0) {
        //     this.resposta.votos++;

        //     this.respostaService.update(this.idResposta, this.resposta).then(() => {
        //       resultado[0].alunoVotou = true;
        //       resultado[0].alunoPontuacao = this.resposta.pontuacao;

        //       this.atividadeAlunoService.update(resultado[0].id, resultado[0]).then(() =>{
        //         this.nav.navigateForward('/aluno-atividade-abrir/' + this.resposta.atividade.substring(0, 7).toUpperCase());
        //       });
        //     });
        //   }
        // });
      });
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
  