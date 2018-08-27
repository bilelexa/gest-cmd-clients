import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    CommandeComponent,
    CommandeDetailComponent,
    CommandeUpdateComponent,
    commandeRoute,
} from './';

const ENTITY_STATES = [...commandeRoute];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ENTITY_STATES), FormsModule],
    declarations: [CommandeComponent, CommandeDetailComponent, CommandeUpdateComponent],
    entryComponents: [CommandeComponent,  CommandeUpdateComponent]
})
export class GestCmdClientsCommandeModule {}
