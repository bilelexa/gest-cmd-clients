import { Routes } from '@angular/router';
import { Detail_commandeComponent } from './detail-commande.component';
import { Detail_commandeDetailComponent } from './detail-commande-detail.component';
import { Detail_commandeUpdateComponent } from './detail-commande-update.component';

export const detail_commandeRoute: Routes = [
    { path: 'detail-commande', component: Detail_commandeComponent },
    { path: 'detail-commande/:id/view', component: Detail_commandeDetailComponent },
    { path: 'detail-commande/new', component: Detail_commandeUpdateComponent},
    { path: 'detail-commande/:id/edit', component: Detail_commandeUpdateComponent}
];