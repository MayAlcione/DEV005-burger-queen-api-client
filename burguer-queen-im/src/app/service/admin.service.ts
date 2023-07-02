import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces/product';
import { User } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/users`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<User[]>(url, { headers });
  }

  editUser(user: User): Observable<any> {
    const url = `${this.apiUrl}/users/${user.id}`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.patch(url, user, { headers });
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/users/${userId}`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.delete(url, { headers });
  }

  getProduct(): Observable<Product[]> {
    const url = `${this.apiUrl}/products`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Product[]>(url, { headers });
  }
  
  editProduct(product: Product): Observable<any> {
    const url = `${this.apiUrl}/products/${product.id}`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.patch(url, product, { headers });
  }

  deleteProduct(product: Product): Observable<any> {
    const url = `${this.apiUrl}/products/${product.id}`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.delete(url, { headers });
  }
}
