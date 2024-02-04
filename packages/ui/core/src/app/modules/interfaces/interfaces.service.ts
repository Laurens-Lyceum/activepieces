import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterfacesService {
  constructor(private http: HttpClient) {}

  submitInterface(webhookUrl: string, request: any): Observable<any> {
    return this.http.post(webhookUrl, request);
  }
}
