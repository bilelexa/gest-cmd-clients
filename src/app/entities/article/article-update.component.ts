import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Article } from '../../shared/model/article.model';
import { ArticleService } from '../../shared/service/article.service';

@Component({
    selector: 'app-article-update',
    templateUrl: './article-update.component.html'
})
export class ArticleUpdateComponent implements OnInit {
    @Input() article = new Article();
    isSaving: boolean;

    constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.isSaving = false;
        if (id){
        this.articleService.find(id).subscribe(article => 
            this.article = article
        );
    }
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.article.id !== undefined) {
            this.subscribeToSaveResponse(this.articleService.update(this.article));
        } else {
            this.subscribeToSaveResponse(this.articleService.create(this.article));
        }
    }

    private subscribeToSaveResponse(result: Observable<Article>) {
        result.subscribe((res: Article) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    
}
