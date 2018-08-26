import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    ClientComponent,
    ClientDetailComponent,
    ClientUpdateComponent,
    clientRoute,
} from './';

const ENTITY_STATES = [...clientRoute];
@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ENTITY_STATES), FormsModule],
    declarations: [ClientComponent, ClientDetailComponent, ClientUpdateComponent],
    entryComponents: [ClientComponent,  ClientUpdateComponent]
})
export class GestCmdClientsClientModule {}
