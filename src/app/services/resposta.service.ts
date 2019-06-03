import { IAtividade } from './../models/atividade';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { IResposta } from '../models/resposta';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {
  
  private collectionRespostas: AngularFirestoreCollection<IResposta>;
  private listRespostas: Observable<IResposta[]>;
  
  constructor(private db: AngularFirestore) { 
    this.collectionRespostas = db.collection<IResposta>('respostas');
    this.listRespostas = this.collectionRespostas.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }));
    }
    
    getAll() {
      return this.listRespostas;
    }
    
    getByAtividade(atividade: string) {

      //Tentando buscar as respostas por referecia
      // this.collectionRespostas.doc<IResposta>('atividades/' + atividade)
      // .valueChanges().subscribe( r => console.log('resp', r));

      // return this.db.collection<IResposta>('respostas/atividades/' + atividade).
      // snapshotChanges().pipe(
      //   map(actions => {
      //     return actions.map(a => {
      //       const data = a.payload.doc.data();
      //       const id = a.payload.doc.id;
      //       return {id, ...data};
      //     });
      //   })
      // );
      
      return this.db.collection<IResposta>('respostas', ref => ref.where('atividade', '==', atividade)).
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
      
    get(id: string) {
      return this.collectionRespostas.doc<IResposta>(id).valueChanges();
    }
      
    add(resposta: IResposta, atividade: string) {
      //Adicionada resposta com atividade por referecia (mas nao deu pra buscar)
      //resposta.atividade = this.db.doc('atividades/' + atividade).ref;
      resposta.atividade = atividade;
      return this.collectionRespostas.add(resposta);
    }
      
    update(id: string, resposta: IResposta) {
      return this.collectionRespostas.doc(id).update(resposta);
    }
      
    remove(id: string) {
      return this.collectionRespostas.doc(id).delete();
    }
}
    
    