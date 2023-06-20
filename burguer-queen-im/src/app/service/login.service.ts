import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
// import { authUser } from '../shared/interfaces/auth';

@Injectable({
  providedIn: 'root' //elimina código que no necesitamos
})
export class LoginService {

  constructor(
    private http: HttpClient,
    ) {}

  getAuth(body:{}): Observable<any>{
    console.log('si entró');

    return this.http.post('http://localhost:8080/login', body)
  }
}
