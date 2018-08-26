import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../../shared/model/client.model';
import { ClientService } from '../../shared/service/client.service';

@Component({
    selector: 'app-client-update',
    templateUrl: './client-update.component.html'
})
export class ClientUpdateComponent implements OnInit {
    @Input() client = new Client();
    isSaving: boolean;

    constructor(private clientService: ClientService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.isSaving = false;
        if (id){
        this.clientService.find(id).subscribe(client => 
            this.client = client
        );
    }
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.client.id !== undefined) {
            this.subscribeToSaveResponse(this.clientService.update(this.client));
        } else {
            this.subscribeToSaveResponse(this.clientService.create(this.client));
        }
    }

    private subscribeToSaveResponse(result: Observable<Client>) {
        result.subscribe((res: Client) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    
}
