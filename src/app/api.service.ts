import { Component, Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, delay } from 'rxjs';
import { about } from './about.data';
import {  throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  API_URL = '';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  public getTasks(): Observable<about[]> {
    return this.http.get<any>(`${this.API_URL}`).pipe(delay(1000));

  }
  
  public postcall(data:any,url:string):Observable<any> {
   return this.http.post<any>(url, data,this.httpHeader)
   .pipe();
   }

}
