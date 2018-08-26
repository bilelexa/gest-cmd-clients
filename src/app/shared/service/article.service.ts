import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Article } from '../model/article.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })
export class ArticleService {

    private resourceUrl = 'http://localhost:3100/articles';

    constructor(private http: HttpClient) {}

    create(article: Article): Observable<Article> {
        return this.http.post<Article>(this.resourceUrl, article, httpOptions);
    }

    update(article: Article): Observable<any> {
        return this.http.put<Article>(this.resourceUrl, article, httpOptions);
    }

    find(id: number): Observable<Article> {
        return this.http.get<Article>(`${this.resourceUrl}/${id}`);
    }

    query(): Observable<Article[]> {
        return this.http.get<Article[]>(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`);
    }
}
