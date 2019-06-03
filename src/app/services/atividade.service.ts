import { IAtividade } from './../models/atividade';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private collectionAtividades: AngularFirestoreCollection<IAtividade>;
  private listAtividades: Observable<IAtividade[]>;

  constructor(private db: AngularFirestore) { 
    this.collectionAtividades = db.collection<IAtividade>('atividades');
    this.listAtividades = this.collectionAtividades.snapshotChanges().pipe(
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
    return this.listAtividades;
  }

  get(id: string) {
    return this.collectionAtividades.doc<IAtividade>(id).valueChanges();
  }

  getByCodigo(codigo: string) {
    return new Promise(resolve => {
      this.db.collection<IAtividade>('atividades', ref => ref.where('codigo', '==', codigo)).
      snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })).subscribe((data:any) => {
          resolve(data);
      });
    });
  }

  getByProfessor(professor: string) {
    return this.db.collection<IAtividade>('atividades', ref => ref.where('professor', '==', professor)).
      snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
    }));
  }

  add(atividade: IAtividade) {
    return this.collectionAtividades.add(atividade);
  }

  update(id: string, atividade: IAtividade) {
    return this.collectionAtividades.doc(id).update(atividade);
  }

  remove(id: string) {
    return this.collectionAtividades.doc(id).delete();
  }
}
