import { map } from 'rxjs/operators';
import { ITurmaAluno } from './../models/turma-aluno';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaAlunoService {

  private collectionTurmaAlunos: AngularFirestoreCollection<ITurmaAluno>;
  private listTurmaAlunos: Observable<ITurmaAluno[]>;

  constructor(private db: AngularFirestore) { 
    this.collectionTurmaAlunos = db.collection<ITurmaAluno>('turma-aluno');
    this.listTurmaAlunos = this.collectionTurmaAlunos.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getAll() {
    return this.listTurmaAlunos;
  }

  get(id: string) {
    return this.collectionTurmaAlunos.doc<ITurmaAluno>(id).valueChanges();
  }

  getByTurmaAluno(turma: string, aluno: string) {
    return this.db.collection<ITurmaAluno>('turma-aluno', 
    ref => ref.where('turma', '==', turma).where('aluno', '==', aluno)).
    snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
    }));
  }

  getByAluno(aluno: string) {
    return this.db.collection<ITurmaAluno>('turma-aluno', 
      ref => ref.where('aluno', '==', aluno)).
      snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
    }));
  }

  getByTurma(turma: string) {
    return this.db.collection<ITurmaAluno>('turma-aluno', 
      ref => ref.where('turma', '==', turma)).
      snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
    }));
  }

  add(turmaAluno: ITurmaAluno) {
    return this.collectionTurmaAlunos.add(turmaAluno);
  }

  update(id: string, turmaAluno: ITurmaAluno) {
    return this.collectionTurmaAlunos.doc(id).update(turmaAluno);
  }

  remove(id: string) {
    return this.collectionTurmaAlunos.doc(id).delete();
  }
}


