import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ITurma } from 'src/app/models/turma';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-professor-atividade-apresentacao-turma',
  templateUrl: './professor-atividade-apresentacao-turma.page.html',
  styleUrls: ['./professor-atividade-apresentacao-turma.page.scss'],
})
export class ProfessorAtividadeApresentacaoTurmaPage implements OnInit {

  idAtividade= null;
  turmas: ITurma[];

  constructor(private route: ActivatedRoute, private nav: NavController,
    private turmaService: TurmaService) { }

  ngOnInit() {
    this.idAtividade = this.route.snapshot.params['atividade'];

    this.turmaService.getByAtividadeNaoFinalizadas(this.idAtividade).subscribe((resultado) => {
      this.turmas = resultado;
    });
  }

  apresentar(id: string) {
    this.nav.navigateForward("/professor-atividade-apresentacao/turma/" + id);
  }
}
