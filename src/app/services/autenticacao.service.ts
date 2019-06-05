import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  createUser(usuario: Usuario) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
  }

  updateUserPassword(novaSenha: string) {
    return this.angularFireAuth.auth.currentUser.updatePassword(novaSenha);
  }

  signIn(usuario: Usuario) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
  }

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  getID() {
    return this.angularFireAuth.auth.currentUser.uid;
  }

  getEmail() {
    return this.angularFireAuth.auth.currentUser.email;
  }
}
