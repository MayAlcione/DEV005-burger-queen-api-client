import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  private apiUrl = 'https://bqac-4.onrender.com';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    const url = `${this.apiUrl}/products`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any>(url, { headers });
  }
}
