import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { Commande } from '../model/commande.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
const DATE_FORMAT = 'YYYY-MM-DD';


@Injectable({ providedIn: 'root' })
export class CommandeService {
    private resourceUrl = 'api/commandes';

    constructor(private http: HttpClient) {}

    create(commande: Commande): Observable<Commande> {
        const copy = this.convertDateFromClient(commande);
        return this.http
            .post<Commande>(this.resourceUrl, copy, httpOptions)
            .pipe(map((res: Commande) => this.convertDateFromServer(res)));
    }

    update(commande: Commande): Observable<Commande> {
        const copy = this.convertDateFromClient(commande);
        return this.http
            .put<Commande>(this.resourceUrl, copy, httpOptions)
            .pipe(map((res: Commande) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<Commande> {
        return this.http
            .get<Commande>(`${this.resourceUrl}/${id}`)
            .pipe(map((res: Commande) => this.convertDateFromServer(res)));
    }

    query(): Observable<Commande[]> {
        return this.http
            .get<Commande[]>(this.resourceUrl)
            .pipe(map((res: Commande[]) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<Commande> {
        return this.http.delete<Commande>(`${this.resourceUrl}/${id}`);
    }

    private convertDateFromClient(commande: Commande): Commande {
        const copy: Commande = Object.assign({}, commande, {
            datcom: commande.datcom != null && commande.datcom.isValid() ? commande.datcom.format(DATE_FORMAT) : null
        });
        return copy;
    }

    private convertDateFromServer(res: Commande): Commande {
        res.datcom = res.datcom != null ? moment(res.datcom) : null;
        return res;
    }

    private convertDateArrayFromServer(res: Commande[]): Commande[] {
        res.forEach((commande: Commande) => {
            commande.datcom = commande.datcom != null ? moment(commande.datcom) : null;
        });
        return res;
    }
}
