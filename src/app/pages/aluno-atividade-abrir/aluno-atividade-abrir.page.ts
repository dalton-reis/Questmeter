import { AlunoService } from './../../services/aluno.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { AtividadeAlunoService } from './../../services/atividade-aluno.service';
import { IAtividade } from './../../models/atividade';
import { IResposta } from './../../models/resposta';
import { AtividadeService } from './../../services/atividade.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RespostaService } from 'src/app/services/resposta.service';

@Component({
  selector: 'app-aluno-atividade-abrir',
  templateUrl: './aluno-atividade-abrir.page.html',
  styleUrls: ['./aluno-atividade-abrir.page.scss'],
})
export class AlunoAtividadeAbrirPage implements OnInit {
  
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
  idAtividade= null;
  respostas: IResposta[];
  segmentAtividade = 'edicao';
  mostraBotaoVotar: boolean = false;
  
  constructor(private route: ActivatedRoute, private nav: NavController, 
    private loadingController: LoadingController,
    private atividadeService: AtividadeService, private respostaService: RespostaService,
    private atividadeAlunoService: AtividadeAlunoService, private alunoService: AlunoService,
    private autenticacaoService: AutenticacaoService) { }
    
    ngOnInit() {
      let codigo = this.route.snapshot.params['codigo'];
      
      if(codigo) {
        this.atividadeService.getByCodigo(codigo).then((resultado) => {
          this.idAtividade = resultado[0].id;
          
          if(this.idAtividade) {
            this.load();
            
            this.respostaService.getByAtividade(this.idAtividade).subscribe((resultado) => {
              this.respostas = resultado;
            });
          }
        });
      }
    }
    
    async load() {
      const loading = await this.loadingController.create({
        message: 'Carregando'
      });
      await loading.present();
      
      this.atividadeService.get(this.idAtividade).subscribe(resultado => {
        loading.dismiss();
        
        this.atividade = resultado;
        
        this.usuarioCorrente = this.autenticacaoService.getID();
        this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) =>{
          this.atividadeAlunoService.getByAtividadeAlunoVoto(this.idAtividade, aluno[0].id)
          .subscribe((resultado) => {
            //se já respondeu deixa o botão 'Votar' bloqueado
            this.mostraBotaoVotar = (resultado.length > 0);
          });
        });
      });
    }
    
    async votar(idResposta: string, resposta: IResposta) {
      this.usuarioCorrente = this.autenticacaoService.getID();
      this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) =>{
        this.atividadeAlunoService.getByAtividadeAlunoVoto(resposta.atividade, aluno[0].id)
        .subscribe((resultado) => {
          if (resultado.length > 0) {
            resposta.votos++;
            
            this.respostaService.update(idResposta, resposta).then(() => {
              resultado[0].alunoVotou = true;
              resultado[0].alunoPontuacao = resposta.pontuacao;
              
              this.atividadeAlunoService.update(resultado[0].id, resultado[0]).then(() =>{

                //VER COM O DALTON
                // if (resposta.correta)
                //   resposta.pontuacao += 10;

                aluno[0].pontuacao += resposta.pontuacao;
                aluno[0].nivel = Math.floor(aluno[0].pontuacao / 100);

                console.log('pontuacao', aluno[0].pontuacao);
                console.log('nivel', aluno[0].nivel);
                
                this.alunoService.update(aluno[0].id, aluno[0]).then(()=> {
                  this.nav.navigateForward('/aluno-atividade-abrir/' + resposta.atividade.substring(0, 7).toUpperCase());
                });
              });
            });
          }
        });
      });
    }
  }
  