import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@Component({
  selector: 'page-comando',
  templateUrl: 'comando.html'
})
export class Comando {

  info = {
    'nome': '',
    'sobre': '',
    'idade': ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comando')
  }

  save(info) {
    this.dbService.save(info);
  }

  levantar() {
    this.dbService.levantar();
  }

}
