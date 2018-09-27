import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tutorial } from '../tutorial/slide';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      this.navCtrl.push(Tutorial);
    }, 5000);
  }

}
