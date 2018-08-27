import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Detail_commande } from '../../shared/model/detail-commande.model';
import { Detail_commandeService } from '../../shared/service/detail-commande.service';
import { Article } from '../../shared/model/article.model';
import { ArticleService } from '../../shared/service/article.service';
import { Commande } from '../../shared/model/commande.model';
import { CommandeService } from '../../shared/service/commande.service';

@Component({
    selector: 'app-detail-commande-update',
    templateUrl: './detail-commande-update.component.html'
})
export class Detail_commandeUpdateComponent implements OnInit {
    @Input() detail_commande = new Detail_commande();
    isSaving: boolean;
    articles: Article[];
    commandes: Commande[];

    constructor(
        private detail_commandeService: Detail_commandeService,
        private articleService: ArticleService,
        private commandeService: CommandeService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.isSaving = false;
        if (id){
        this.detail_commandeService.find(id).subscribe(detail_commande => 
            this.detail_commande = detail_commande
        );
        }

        this.articleService.query().subscribe( articles => this.articles = articles);
        this.commandeService.query().subscribe( commandes => this.commandes = commandes);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.detail_commande.id !== undefined) {
            this.subscribeToSaveResponse(this.detail_commandeService.update(this.detail_commande));
        } else {
            this.subscribeToSaveResponse(this.detail_commandeService.create(this.detail_commande));
        }
    }

    private subscribeToSaveResponse(result: Observable<Detail_commande>) {
        result.subscribe((res: Detail_commande) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    trackArticleById(index: number, item: Article) {
        return item.id;
    }

    trackCommandeById(index: number, item: Commande) {
        return item.id;
    }
    
}
