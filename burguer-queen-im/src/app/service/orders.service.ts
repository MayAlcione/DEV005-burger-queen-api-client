import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private refresh = new Subject<void>()
  private apiUrl = 'https://bqac-4.onrender.com';

  constructor(private http: HttpClient) { }

  get refresh$(): Observable<void> {
    return this.refresh.asObservable();
  }

  getOrders(): Observable<any>{
    const url = `${this.apiUrl}/orders`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any>(url, { headers })

  }

  changeStatus(id:any, status:string): Observable<any>{
    const url = `${this.apiUrl}/orders/${id}`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.patch<any>(url, { status: status, dateProcessed: new Date(), served:false }, { headers })
  }

  changeServed(id:any, served:boolean): Observable<any>{
    const url = `${this.apiUrl}/orders/${id}`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.patch<any>(url, { served:served }, { headers })
  }

  emitRefreshEvent(): void {
    this.refresh.next();
  }
}
