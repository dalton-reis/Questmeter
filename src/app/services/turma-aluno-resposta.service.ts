import { map } from 'rxjs/operators';
import { ITurmaAlunoResposta } from './../models/turma-aluno-resposta';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmaAlunoRespostaService {
  
  private collectionTurmaAlunoRespostas: AngularFirestoreCollection<ITurmaAlunoResposta>;
  private listTurmaAlunoRespostas: Observable<ITurmaAlunoResposta[]>;
  
  constructor(private db: AngularFirestore) { 
    this.collectionTurmaAlunoRespostas = db.collection<ITurmaAlunoResposta>('turma-aluno-respostas');
    this.listTurmaAlunoRespostas = this.collectionTurmaAlunoRespostas.snapshotChanges().pipe(
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
      return this.listTurmaAlunoRespostas;
    }
    
    get(id: string) {
      return this.collectionTurmaAlunoRespostas.doc<ITurmaAlunoResposta>(id).valueChanges();
    }
    
    getByTurma(turma: string) {
      return this.db.collection<ITurmaAlunoResposta>('turma-aluno-respostas', 
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
      
      getByTurmaAluno(turmaAluno: string) {
        return this.db.collection<ITurmaAlunoResposta>('turma-aluno-respostas', 
        ref => ref.where('turmaAluno', '==', turmaAluno)).
        snapshotChanges().pipe(
          map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return {id, ...data};
            });
          }));
        }
        
        getByTurmaAlunoResposta(turmaAluno: string, resposta: string) {
          return this.db.collection<ITurmaAlunoResposta>('turma-aluno-respostas', 
          ref => ref.where('turmaAluno', '==', turmaAluno).
          where('resposta', '==', resposta)).
          snapshotChanges().pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {id, ...data};
              });
            }));
          }
          
          getByTurmaAlunoRespostaPromise(turmaAluno: string, resposta: string) {
            return new Promise(resolve => {
              this.db.collection<ITurmaAlunoResposta>('turma-aluno-respostas', 
              ref => ref.where('turmaAluno', '==', turmaAluno).
              where('resposta', '==', resposta)).
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
            
            getByResposta(resposta: string) {
              return this.db.collection<ITurmaAlunoResposta>('turma-aluno-respostas', 
              ref => ref.where('resposta', '==', resposta)).
              snapshotChanges().pipe(
                map(actions => {
                  return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                  });
                }));
              }
              
              add(turmaAlunoResposta: ITurmaAlunoResposta) {
                return this.collectionTurmaAlunoRespostas.add(turmaAlunoResposta);
              }
              
              update(id: string, turmaAlunoResposta: ITurmaAlunoResposta) {
                return this.collectionTurmaAlunoRespostas.doc(id).update(turmaAlunoResposta);
              }
              
              remove(id: string) {
                return this.collectionTurmaAlunoRespostas.doc(id).delete();
              }
            }
            