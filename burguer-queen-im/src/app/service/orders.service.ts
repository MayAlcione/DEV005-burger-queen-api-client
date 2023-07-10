import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private refresh = new Subject<void>()
  private apiUrl = 'http://localhost:8080';

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
    /* .pipe(
      tap(() => {
        this.refresh.next();
      })
    ); */
  }

  changeStatus(id:any, status:string): Observable<any>{
    const url = `${this.apiUrl}/orders/${id}`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.patch<any>(url, { status: status, dateProcessed: new Date() }, { headers })
  }

  emitRefreshEvent(): void {
    this.refresh.next();
  }
}
