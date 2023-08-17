import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
}) 
export class ClientService {

  private apiServerUrl = '';
  constructor(private http: HttpClient) { }
  
  public getClients(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/client/all`)
  }

  public addClient(client: Client):Observable<Client>{
    return this.http.post<Client>(`${this.apiServerUrl}/client/add`,client);
  }

  
  public updateClient(client: Client):Observable<Client>{
    return this.http.post<Client>(`${this.apiServerUrl}/client/update`,client);
  }
  
  public deleteClient(clientId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/client/delete/${clientId}`);
  }
}
