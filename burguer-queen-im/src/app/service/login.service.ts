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

    return this.http.post('https://bqac-4.onrender.com/login', body)
  }
}
