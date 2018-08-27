import { Component, OnInit } from '@angular/core';

import { Commande } from '../../shared/model/commande.model';
import { CommandeService } from '../../shared/service/commande.service';

@Component({
    selector: 'app-commande',
    templateUrl: './commande.component.html'
})
export class CommandeComponent implements OnInit{
    commandes: Commande[];

    constructor( private commandeService: CommandeService ) {}

    loadAll() {
        this.commandeService.query().subscribe( commandes => this.commandes = commandes);
    }

    ngOnInit() {
        this.loadAll();
    }

    trackId(index: number, item: Commande) {
        return item.id;
    }

    delete(id: number): void {
        this.commandes = this.commandes.filter(h => h.id !== id);
        this.commandeService.delete(id).subscribe();
    }
}
