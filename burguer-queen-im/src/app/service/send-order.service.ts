import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateOrder } from '../shared/interfaces/createOrder';

@Injectable({
  providedIn: 'root'
})
export class SendOrderService {
  private apiUrl = 'https://bqac-4.onrender.com';

  constructor(private http: HttpClient) { }

  sendOrder(order:CreateOrder): Observable<any>{
    const url = `${this.apiUrl}/orders`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post<CreateOrder>(url, order, { headers });
  }
}
