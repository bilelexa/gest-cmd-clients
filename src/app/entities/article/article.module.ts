import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    ArticleComponent,
    ArticleDetailComponent,
    ArticleUpdateComponent,
    articleRoute,
} from './';

const ENTITY_STATES = [...articleRoute];
@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ENTITY_STATES), FormsModule],
    declarations: [ArticleComponent, ArticleDetailComponent, ArticleUpdateComponent],
    entryComponents: [ArticleComponent,  ArticleUpdateComponent]
})
export class GestCmdClientsArticleModule {}
