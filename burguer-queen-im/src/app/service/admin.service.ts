import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
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

  addUser(email: string, password: string, role: string) {
    return this.http.post<any>(`${this.apiUrl}`, { email, password, role }, { headers: this.headers });
  }

  getUser(uid: string) {
    const url = `${this.apiUrl}/${uid}`; // Construye la URL completa con el ID del usuario
    return this.http.get<any>(url);
  }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  addProduct(name: string, price: number, image: string, type: string) {
    return this.http.post<any>('http://localhost:8080/products', { name, price, image, type }, { headers: this.headers });
  }
}
