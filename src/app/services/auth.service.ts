import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL = environment.api + '/users';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '' });
  options = { headers: this.headers };



  constructor(private http: HttpClient) { }

  signUp(user){
    return this.http.post(this.URL, user, this.options);
  }
}
