import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comando } from '../comando/comando';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class Tutorial {

  constructor(public navCtrl: NavController) {
    
  }

  continueToComands() {
    this.navCtrl.push(Comando);
  }

}