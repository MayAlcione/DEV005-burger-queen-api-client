import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient) { }

  admin(email: string, password: string, role: string): void {
    const credentials = {
      email: email,
      password: password,
      role: role
    };

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

    this.http.post<any>('http://localhost:8080/users', credentials, { headers: headers }).subscribe(
      response => {
        // Almacenar el token de autenticación en la propiedad "token" del servicio
        this.token = response.token;
      },
      error => {
        // Manejar el error de autenticación
        console.error('Error de autenticación:', error);
      }
    );
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
