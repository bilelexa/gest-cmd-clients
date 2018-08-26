import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../shared/model/article.model';
import { ArticleService } from '../../shared/service/article.service';

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit {
    article: Article;
    id: number;

    constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {
        this.id = activatedRoute.snapshot.params.id;
    }

    ngOnInit() {
        this.articleService.find(this.id).subscribe(article => {
            this.article = article;
        });
    }

    previousState() {
        window.history.back();
    }
}
