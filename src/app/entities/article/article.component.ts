import { Component, OnInit} from '@angular/core';

import { Article } from '../../shared/model/article.model';
import { ArticleService } from '../../shared/service/article.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
    articles: Article[];

    constructor( private articleService: ArticleService ) {}

    loadAll() {
        this.articleService.query().subscribe( articles => this.articles = articles);
    }

    ngOnInit() {
        this.loadAll();
    }

    trackId(index: number, item: Article) {
        return item.id;
    }

    delete(id: number): void {
        this.articles = this.articles.filter(h => h.id !== id);
        this.articleService.delete(id).subscribe();
      }
}
