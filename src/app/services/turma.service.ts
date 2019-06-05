import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { ITurma } from '../models/turma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private collectionTurmas: AngularFirestoreCollection<ITurma>;
  private listTurmas: Observable<ITurma[]>;

  constructor(private db: AngularFirestore) { 
    this.collectionTurmas = db.collection<ITurma>('turmas');
    this.listTurmas = this.collectionTurmas.snapshotChanges().pipe(
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
    return this.listTurmas;
  }

  get(id: string) {
    return this.collectionTurmas.doc<ITurma>(id).valueChanges();
  }

  getByAtividade(atividade: string) {
    return this.db.collection<ITurma>
    ('turmas', ref => ref.where('atividade', '==', atividade).orderBy("dataCriacao", "desc")).
    snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getByAtividadePromise(atividade: string) {
    return new Promise(resolve => {
    this.db.collection<ITurma>
    ('turmas', ref => ref.where('atividade', '==', atividade).orderBy("dataCriacao", "desc")).
    snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    ).subscribe((data:any) => {
      resolve(data);
    });
  });
  }

  getByAtividadeNaoFinalizadas(atividade: string) {
    return this.db.collection<ITurma>
    ('turmas', ref => ref.where('atividade', '==', atividade).
    where('atividadeFinalizada', '==', false).
    orderBy("dataCriacao", "desc")).
    snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getByToken(token: string) {
    return this.db.collection<ITurma>
    ('turmas', ref => ref.where('token', '==', token)).
    snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  add(turma: ITurma, atividade: string) {
    turma.atividade = atividade;
    return this.collectionTurmas.add(turma);
  }

  update(id: string, turma: ITurma) {
    return this.collectionTurmas.doc(id).update(turma);
  }

  remove(id: string) {
    return this.collectionTurmas.doc(id).delete();
  }
}
