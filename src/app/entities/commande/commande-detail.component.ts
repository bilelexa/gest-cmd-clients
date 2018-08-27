import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Commande } from '../../shared/model/commande.model';
import { CommandeService } from '../../shared/service/commande.service';

@Component({
    selector: 'app-commande-detail',
    templateUrl: './commande-detail.component.html'
})
export class CommandeDetailComponent implements OnInit {
    commande: Commande;
    id: number;

    constructor(private commandeService: CommandeService, private activatedRoute: ActivatedRoute) {
        this.id = activatedRoute.snapshot.params.id;
    }

    ngOnInit() {
        this.commandeService.find(this.id).subscribe(commande => {
            this.commande = commande;
        });
    }

    previousState() {
        window.history.back();
    }
}
