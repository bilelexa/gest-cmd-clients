import { Component, OnInit } from '@angular/core';

import { Detail_commande } from '../../shared/model/detail-commande.model';
import { Detail_commandeService } from '../../shared/service/detail-commande.service';

@Component({
    selector: 'app-detail-commande',
    templateUrl: './detail-commande.component.html'
})
export class Detail_commandeComponent implements OnInit {
    detail_commandes: Detail_commande[];

    constructor( private detail_commandeService: Detail_commandeService ) {}

    loadAll() {
        this.detail_commandeService.query().subscribe( detail_commandes => this.detail_commandes = detail_commandes);
    }

    ngOnInit() {
        this.loadAll();
    }

    trackId(index: number, item: Detail_commande) {
        return item.id;
    }

    delete(id: number): void {
        this.detail_commandes = this.detail_commandes.filter(h => h.id !== id);
        this.detail_commandeService.delete(id).subscribe();
    }
}
