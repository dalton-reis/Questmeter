import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private collectionAlunos: AngularFirestoreCollection<IAluno>;
  private listAlunos: Observable<IAluno[]>;

  constructor(private db: AngularFirestore) { 
    this.collectionAlunos = db.collection<IAluno>('alunos');
    this.listAlunos = this.collectionAlunos.snapshotChanges().pipe(
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
    return this.listAlunos;
  }

  get(id: string) {
    return this.collectionAlunos.doc<IAluno>(id).valueChanges();
  }

  getByUsuario(usuario: string) {
    return new Promise(resolve => {
    this.db.collection<IAluno>('alunos', ref => ref.where('usuario', '==', usuario)).
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

  getByUsuarioA(usuario: string) {
    return this.db.collection<IAluno>('alunos', ref => ref.where('usuario', '==', usuario)).
    snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }));
  }

  add(aluno: IAluno) {
    return this.collectionAlunos.add(aluno);
  }

  update(id: string, aluno: IAluno) {
    return this.collectionAlunos.doc(id).update(aluno);
  }

  remove(id: string) {
    return this.collectionAlunos.doc(id).delete();
  }
}
