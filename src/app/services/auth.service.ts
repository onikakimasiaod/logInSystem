import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL = environment.api + '/users'
  constructor(private http: HttpClient) { }

  signUp(user){
    return this.http.post(this.URL,user);
  }
}
