import { Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { CommandeDetailComponent } from './commande-detail.component';
import { CommandeUpdateComponent } from './commande-update.component';

export const commandeRoute: Routes = [
    { path: 'commande', component: CommandeComponent },
    { path: 'commande/:id/view', component: CommandeDetailComponent },
    { path: 'commande/new', component: CommandeUpdateComponent},
    { path: 'commande/:id/edit', component: CommandeUpdateComponent}
];
