import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { IAtividadeAluno } from './../models/atividade-aluno';
import { Injectable } from '@angular/core';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AtividadeAlunoService {

  private collectionAtividadesAlunos: AngularFirestoreCollection<IAtividadeAluno>;
  private listAtividadesAlunos: Observable<IAtividadeAluno[]>;

  constructor(private db: AngularFirestore) { 
    this.collectionAtividadesAlunos = db.collection<IAtividadeAluno>('atividades-alunos');
    this.listAtividadesAlunos = this.collectionAtividadesAlunos.snapshotChanges().pipe(
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
    return this.listAtividadesAlunos;
  }

  get(id: string) {
    return this.collectionAtividadesAlunos.doc<IAtividadeAluno>(id).valueChanges();
  }

  getByAtividadeAluno(atividade: string, aluno: string) {
    return this.db.collection<IAtividadeAluno>('atividades-alunos', 
    ref => ref.where('atividade', '==', atividade).where('aluno', '==', aluno)).
    snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
    }));
  }

  getByAtividadeAlunoVoto(atividade: string, aluno: string) {
    return this.db.collection<IAtividadeAluno>('atividades-alunos', 
    ref => ref.where('atividade', '==', atividade).where('aluno', '==', aluno)
    .where('alunoVotou', '==', false)).
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
    return this.db.collection<IAtividadeAluno>('atividades-alunos', 
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

  getByAtividade(atividade: string) {
    return this.db.collection<IAtividadeAluno>('atividades-alunos', 
      ref => ref.where('atividade', '==', atividade)).
      snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
    }));
  }

  add(atividadeAluno: IAtividadeAluno) {
    return this.collectionAtividadesAlunos.add(atividadeAluno);
  }

  update(id: string, atividadeAluno: IAtividadeAluno) {
    return this.collectionAtividadesAlunos.doc(id).update(atividadeAluno);
  }

  remove(id: string) {
    return this.collectionAtividadesAlunos.doc(id).delete();
  }
}
