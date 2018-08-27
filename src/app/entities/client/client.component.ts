import { Component, OnInit } from '@angular/core';

import { Client } from '../../shared/model/client.model';
import { ClientService } from '../../shared/service/client.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
    clients: Client[];
    
    constructor( private clientService: ClientService ) {}

    loadAll() {
        this.clientService.query().subscribe( clients => this.clients = clients);
    }

    ngOnInit() {
        this.loadAll();
    }

    trackId(index: number, item: Client) {
        return item.id;
    }

    delete(id: number): void {
        this.clients = this.clients.filter(h => h.id !== id);
        this.clientService.delete(id).subscribe();
    }
}
