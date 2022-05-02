import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    username: '',
    password: '',
    email: '',
    avatar: '',
  };
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    this._authService.signUp(this.user).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    })
  }

}
