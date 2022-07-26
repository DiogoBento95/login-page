import { Component } from '@angular/core';
import { Credentials } from './credentials.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*loginUser() {
    if(this.email === "admin@gmail.com" && this.password === "123456"){
      console.log('Welcome!')
    } else {
      console.log('User Unauthorized')
      alert('User Unauthorized')
    }
  }*/
  
  logUser(credentials: Credentials) {
    console.log(credentials);
  }
}
