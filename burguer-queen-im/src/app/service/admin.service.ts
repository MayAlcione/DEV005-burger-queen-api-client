import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Usuario {
  id: number;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/users'; // URL base de la API
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  agregarUsuario(correo: string, contraseña: string, rol: string) {
    return this.http.post<any>(`${this.apiUrl}`, { correo, contraseña, rol }, { headers: this.headers });
  }

  obtenerUsuario(uid: string) {
    const url = `${this.apiUrl}/${uid}`; // Construye la URL completa con el ID del usuario
    return this.http.get<any>(url);
  }

  obtenerUsuarios() {
    return this.http.get<Usuario[]>(`${this.apiUrl}`);
  }

  addProduct(name: string, price: number, image: string, type: string) {
    return this.http.post<any>('http://localhost:8080/products', { name, price, image, type }, { headers: this.headers });
  }
}
