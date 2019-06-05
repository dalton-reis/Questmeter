import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { IProfessor } from '../models/professor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private collectionProfessores: AngularFirestoreCollection<IProfessor>;
  private listProfessores: Observable<IProfessor[]>;

  constructor(private db: AngularFirestore) { 
    this.collectionProfessores = db.collection<IProfessor>('professores');
    this.listProfessores = this.collectionProfessores.snapshotChanges().pipe(
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
    return this.listProfessores;
  }

  get(id: string) {
    return this.collectionProfessores.doc<IProfessor>(id).valueChanges();
  }

  getByUsuario(usuario: string) {
    return new Promise(resolve => {
    this.db.collection<IProfessor>('professores', ref => ref.where('usuario', '==', usuario)).
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

  add(professor: IProfessor) {
    return this.collectionProfessores.add(professor);
  }

  update(id: string, professor: IProfessor) {
    return this.collectionProfessores.doc(id).update(professor);
  }

  remove(id: string) {
    return this.collectionProfessores.doc(id).delete();
  }
}
