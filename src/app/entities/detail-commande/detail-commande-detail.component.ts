import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Detail_commande } from '../../shared/model/detail-commande.model';
import { Detail_commandeService } from '../../shared/service/detail-commande.service';

@Component({
    selector: 'app-detail-commande-detail',
    templateUrl: './detail-commande-detail.component.html'
})
export class Detail_commandeDetailComponent implements OnInit {
    detail_commande: Detail_commande;
    id: number;

    constructor(private detail_commandeService: Detail_commandeService, private activatedRoute: ActivatedRoute) {
        this.id = activatedRoute.snapshot.params.id;
    }

    ngOnInit() {
        this.detail_commandeService.find(this.id).subscribe(detail_commande => {
            this.detail_commande = detail_commande;
        });
    }

    previousState() {
        window.history.back();
    }
}
