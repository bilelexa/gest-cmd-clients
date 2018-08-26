import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../model/client.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })
export class ClientService {
    private resourceUrl = 'http://localhost:3000/clients';

    constructor(private http: HttpClient) {}

    create(client: Client): Observable<Client> {
        return this.http.post<Client>(this.resourceUrl, client, httpOptions);
    }

    update(client: Client): Observable<Client> {
        return this.http.put<Client>(this.resourceUrl, client, httpOptions);
    }

    find(id: number): Observable<Client> {
        return this.http.get<Client>(`${this.resourceUrl}/${id}`);
    }

    query(): Observable<Client[]> {
        return this.http.get<Client[]>(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`);
    }
}
