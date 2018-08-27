import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { Commande } from '../model/commande.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })
export class CommandeService {
    private resourceUrl = 'http://localhost:8080/commandes';

    constructor(private http: HttpClient) {}

    create(commande: Commande): Observable<Commande> {
        return this.http.post<Commande>(this.resourceUrl, commande, httpOptions);
    }

    update(commande: Commande): Observable<Commande> {
        return this.http.put<Commande>(this.resourceUrl, commande, httpOptions);
    }

    find(id: number): Observable<Commande> {
        return this.http.get<Commande>(`${this.resourceUrl}/${id}`)
    }

    query(): Observable<Commande[]> {
        return this.http.get<Commande[]>(this.resourceUrl);
    }

    delete(id: number): Observable<Commande> {
        return this.http.delete<Commande>(`${this.resourceUrl}/${id}`);
    }
}
