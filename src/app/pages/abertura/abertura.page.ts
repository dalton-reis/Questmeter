import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abertura',
  templateUrl: './abertura.page.html',
  styleUrls: ['./abertura.page.scss'],
})
export class AberturaPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  autenticar(tipoUsuario: string) {
    this.nav.navigateForward('/autenticacao/' + tipoUsuario);
  }
}
