import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Comando } from '../../pages/comando/comando';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  save(info: any) {
      this.db.list('dados')
        .push(info)
        .then(r => console.log(r));
  }
  
  levantar() {
    this.db.database.ref('the_bridge').update({"comando": "true"});
  }

  abaixar() {
    this.db.database.ref('the_bridge').update({"comando": "false"});
  }

}
