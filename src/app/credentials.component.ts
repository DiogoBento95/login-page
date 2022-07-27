import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";

export class Credentials {
    constructor( public email: string, public password: string) {}
};

@Component({
    selector: 'app-credentials',
    template: `
      <form>
  <div class="form-group">
    <label for="inputEmail">Email address</label>
    <input type="email" class="form-control" #emailInput>
  </div>

  <div class="form-group">
    <label for="inputPassword">Password</label>
    <input type="password" class="form-control"  name="pass" #passwordInput>
  </div>

  <button type="submit" class="btn btn-primary" [disabled]="" (click)="submit()">Submit</button>
</form>
    `,
    styleUrls: ['./app.component.css']
  })
  export class CredentialsComponent implements OnInit {
    @ViewChild('emailInput', {static:true}) emailInputRef!: ElementRef;
    @ViewChild('passwordInput', {static:true}) passwordInputRef!: ElementRef;
    @Output() credentials = new EventEmitter<Credentials>();
  
    constructor() {}
    ngOnInit() {}
    
    submit() {
        const formEmail = this.emailInputRef.nativeElement.value;
        const formPassword = this.passwordInputRef.nativeElement.value;
        const newCredentials = new Credentials(formEmail,formPassword);
        this.credentials.emit(newCredentials);
    }
  }