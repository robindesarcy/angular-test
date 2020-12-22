import { Component } from '@angular/core';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
//import '@firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBmDFnfbTketOMkDhX5Hz2e7Hk9Y9cRO-o",
      authDomain: "book-shelves-c80ba.firebaseapp.com",
      projectId: "book-shelves-c80ba",
      storageBucket: "book-shelves-c80ba.appspot.com",
      messagingSenderId: "675511625653",
      appId: "1:675511625653:web:3e6808633a213088dc5bfc"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
