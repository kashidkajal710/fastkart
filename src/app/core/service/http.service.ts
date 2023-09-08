import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getDataFormServer(endPoint: string) {
    const url = this.baseUrl + endPoint;
    return this.http.get(url)
  }
}
