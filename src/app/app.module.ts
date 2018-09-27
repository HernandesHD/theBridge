import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Tutorial } from '../pages/tutorial/slide';
import { Comando } from '../pages/comando/comando';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tutorial,
    Comando
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCUtIi4kQqKstbEqkhzn1m2RbOiVAq8TX4",
      authDomain: "thebridge-afca5.firebaseapp.com",
      databaseURL: "https://thebridge-afca5.firebaseio.com",
      projectId: "thebridge-afca5",
      storageBucket: "thebridge-afca5.appspot.com",
      messagingSenderId: "402851854174"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tutorial,
    Comando
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
