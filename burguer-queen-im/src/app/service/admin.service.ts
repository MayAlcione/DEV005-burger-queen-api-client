import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    // Configurar el encabezado de autorización
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
  }

  agregarUsuario(correo: string, contraseña: string, rol: string) {
    return this.http.post<any>('http://localhost:8080/users', { correo, contraseña, rol }, { headers: this.headers });
  }

  obtenerUsuarios() {
    return this.http.get<any[]>('http://localhost:8080/users', { headers: this.headers });
  }
}
