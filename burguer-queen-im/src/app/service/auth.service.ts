import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  admin(email: string, password: string, role: string): void {
    const credentials = {
      email: email,
      password: password,
      role: role
    };

    this.http.post<any>('https://bqac-4.onrender.com/users', credentials).subscribe(
      response => {
        console.log('Usuario agregado:', response);
      },
      error => {
        console.error('Error al agregar usuario:', error);
      }
    );
  }
}
