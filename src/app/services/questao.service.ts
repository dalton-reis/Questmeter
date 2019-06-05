import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { IQuestao } from '../models/questao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  private collectionQuestoes: AngularFirestoreCollection<IQuestao>;
  private listQuestoes: Observable<IQuestao[]>;

  constructor(private db: AngularFirestore) { 
    this.collectionQuestoes = db.collection<IQuestao>('questoes');
    this.listQuestoes = this.collectionQuestoes.snapshotChanges().pipe(
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
    return this.listQuestoes;
  }

  get(id: string) {
    return this.collectionQuestoes.doc<IQuestao>(id).valueChanges();
  }

  getByAtividade(atividade: string) {
    return this.db.collection<IQuestao>
    ('questoes', ref => ref.where('atividade', '==', atividade).orderBy("dataCriacao", "desc")).
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

  getByAtividadeAsc(atividade: string) {
    return this.db.collection<IQuestao>
    ('questoes', ref => ref.where('atividade', '==', atividade).orderBy("dataCriacao")).
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

  add(questao: IQuestao, atividade: string) {
    questao.atividade = atividade;
    return this.collectionQuestoes.add(questao);
  }

  update(id: string, questao: IQuestao) {
    return this.collectionQuestoes.doc(id).update(questao);
  }

  remove(id: string) {
    return this.collectionQuestoes.doc(id).delete();
  }
}

