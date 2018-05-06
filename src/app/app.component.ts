import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBcMDecBPoXPPf2ZPhbGovyRurO6It-shk',
      authDomain: 'ng-recipe-book-4a06b.firebaseapp.com'
    });
  }
}
