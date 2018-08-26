import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Client } from '../../shared/model/client.model';
import { ClientService } from '../../shared/service/client.service';

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html'
})
export class ClientDetailComponent implements OnInit {
    client: Client;
    id: number;
    
    constructor(private clientService: ClientService, private activatedRoute: ActivatedRoute) {
        this.id = activatedRoute.snapshot.params.id;
    }
    
    ngOnInit() {
        this.clientService.find(this.id).subscribe(client => {
                this.client = client;
            });
    }

    previousState() {
        window.history.back();
    }
}
