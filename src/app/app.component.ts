import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email!: string;
  password!: string;

  loginUser() {
    if(this.email === "admin@gmail.com" && this.password === "123456"){
      console.log('Welcome!')
    } else {
      console.log('User Unauthorized')
      alert('User Unauthorized')
    }
  }
}
