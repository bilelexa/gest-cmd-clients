import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Commande } from '../../shared/model/commande.model';
import { CommandeService } from '../../shared/service/commande.service';
import { Client } from '../../shared/model/client.model';
import { ClientService } from '../../shared/service/client.service';

@Component({
    selector: 'app-commande-update',
    templateUrl: './commande-update.component.html'
})
export class CommandeUpdateComponent implements OnInit {
    @Input() commande = new Commande();
    isSaving: boolean;
    clients: Client[];
    
    constructor(
        private commandeService: CommandeService,
        private clientService: ClientService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.isSaving = false;
        if (id){
        this.commandeService.find(id).subscribe(commande => 
            this.commande = commande
        );
        }
        this.clientService.query().subscribe( clients => this.clients = clients);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.commande.id !== undefined) {
            this.subscribeToSaveResponse(this.commandeService.update(this.commande));
        } else {
            this.subscribeToSaveResponse(this.commandeService.create(this.commande));
        }
    }

    private subscribeToSaveResponse(result: Observable<Commande>) {
        result.subscribe((res: Commande) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    trackClientById(index: number, item: Client) {
        return item.id;
    }
    
}
