import { AutenticacaoService } from './../../services/autenticacao.service';
import { ProfessorService } from './../../services/professor.service';
import { AtividadeService } from './../../services/atividade.service';
import { IAtividade } from './../../models/atividade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-atividade',
  templateUrl: './professor-atividade.page.html',
  styleUrls: ['./professor-atividade.page.scss'],
})
export class ProfessorAtividadePage implements OnInit {

  atividades: IAtividade[];
  usuarioCorrente = null;

  constructor(private atividadeService: AtividadeService, 
    private professorService: ProfessorService,
    private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
    this.usuarioCorrente = this.autenticacaoService.getID();
    this.professorService.getByUsuario(this.usuarioCorrente).then((professor) => {
      this.atividadeService.getByProfessor(professor[0].id).subscribe((resultado) => {
        this.atividades = resultado;
      });
    });
  }

  onRemove(id: string) {
    this.atividadeService.remove(id);
  }
}
