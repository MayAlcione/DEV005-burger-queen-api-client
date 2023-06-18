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
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    // Configurar el encabezado de autorización
    this.headers = new HttpHeaders();
  }

  agregarUsuario(correo: string, contraseña: string, rol: string) {
    return this.http.post<any>('http://localhost:8080/users', { correo, contraseña, rol }, { headers: this.headers });
  }
  
  addProduct(name: string, price: number, image: string, type: string) {
    return this.http.post<any>('http://localhost:8080/products', { name, price, image, type }, { headers: this.headers });
  }
}
