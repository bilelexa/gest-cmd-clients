import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Detail_commande } from '../model/detail-commande.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })
export class Detail_commandeService {
    private resourceUrl = 'api/detail-commandes';

    constructor(private http: HttpClient) {}

    create(detail_commande: Detail_commande): Observable<Detail_commande> {
        return this.http.post<Detail_commande>(this.resourceUrl, detail_commande, httpOptions);
    }

    update(detail_commande: Detail_commande): Observable<Detail_commande> {
        return this.http.put<Detail_commande>(this.resourceUrl, detail_commande, httpOptions);
    }

    find(id: number): Observable<Detail_commande> {
        return this.http.get<Detail_commande>(`${this.resourceUrl}/${id}`);
    }

    query(): Observable<Detail_commande[]> {
        return this.http.get<Detail_commande[]>(this.resourceUrl);
    }

    delete(id: number): Observable<Detail_commande> {
        return this.http.delete<Detail_commande>(`${this.resourceUrl}/${id}`);
    }
}
