import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Register } from '../models/register';

const headerOptions ={headers:new HttpHeaders({'Content-type':'application/json'}),};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='/api/users/';

  constructor(private httpClient: HttpClient) { }

  registerUser(register:Register): Observable<any>{
    return this.httpClient.post(this.url+'register', register)
  }

  loginUser(login:any): Observable<any>{
    return this.httpClient.post(this.url+'login', login)
  }
}
