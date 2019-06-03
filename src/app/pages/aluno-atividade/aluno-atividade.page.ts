import { IAtividadeAluno } from './../../models/atividade-aluno';
import { AtividadeService } from './../../services/atividade.service';
import { AtividadeAlunoService } from './../../services/atividade-aluno.service';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { IAtividade } from 'src/app/models/atividade';

@Component({
  selector: 'app-aluno-atividade',
  templateUrl: './aluno-atividade.page.html',
  styleUrls: ['./aluno-atividade.page.scss'],
})
export class AlunoAtividadePage implements OnInit {

  usuarioCorrente = null;
  atividades: IAtividade[] = [];

  constructor(private atividadeService: AtividadeService, private alunoService: AlunoService, 
    private atividadeAlunoService: AtividadeAlunoService, private autenticacaoService: AutenticacaoService) { }

  ngOnInit() { 
    this.atividades = [];
    this.usuarioCorrente = this.autenticacaoService.getID();
    this.alunoService.getByUsuario(this.usuarioCorrente).then((aluno) => {
      this.atividadeAlunoService.getByAluno(aluno[0].id)
        .subscribe((resultado) => {
          resultado.forEach(f => 
            this.atividadeService.get(f.atividade).subscribe((atividade) => { 
              //verifica se a atividade já existe no array
              if (this.atividades.findIndex(v => v.codigo == atividade.codigo) < 0) {
                this.atividades.push(atividade);
              }
            }));
        });
    });
  }
}
