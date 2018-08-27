import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    Detail_commandeComponent,
    Detail_commandeDetailComponent,
    Detail_commandeUpdateComponent,
    detail_commandeRoute,
} from './';

const ENTITY_STATES = [...detail_commandeRoute];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ENTITY_STATES), FormsModule],
    declarations: [Detail_commandeComponent, Detail_commandeDetailComponent, Detail_commandeUpdateComponent],
    entryComponents: [Detail_commandeComponent,  Detail_commandeUpdateComponent]
})
export class GestCmdClientsDetail_commandeModule {}
