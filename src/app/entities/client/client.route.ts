import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientDetailComponent } from './client-detail.component';
import { ClientUpdateComponent } from './client-update.component';

export const clientRoute: Routes = [
    { path: 'client', component: ClientComponent },
    { path: 'client/:id/view', component: ClientDetailComponent },
    { path: 'client/new', component: ClientUpdateComponent},
    { path: 'client/:id/edit', component: ClientUpdateComponent}
];
