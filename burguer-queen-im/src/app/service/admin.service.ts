import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/users`;
    const token = localStorage.getItem('Token'); // Obtener el token guardado

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<User[]>(url, { headers });
  }

  addUser(email: string, password: string, role: string): Observable<any> {
    const url = `${this.apiUrl}/users`;
    const token = localStorage.getItem('Token'); // Obtener el token guardado

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post<any>(url, { email, password, role }, { headers });
  }

  eliminate(userId: number): Observable<any> {
    const url = `${this.apiUrl}/users/${userId}`;
    const token = localStorage.getItem('Token'); // Obtener el token guardado
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.delete<any>(url, { headers });
  }
  
  addProduct(name: string, price: number, image: string, type: string): Observable<any> {
    const url = `${this.apiUrl}/products`;
    const token = localStorage.getItem('token'); // Obtener el token guardado

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post<any>(url, { name, price, image, type }, { headers });
  }
}

interface User {
  id: number;
  email: string;
  role: string;
}
