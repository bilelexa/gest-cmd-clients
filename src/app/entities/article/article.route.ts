import { Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleUpdateComponent } from './article-update.component';

export const articleRoute: Routes = [
    { path: 'article', component: ArticleComponent },
    { path: 'article/:id/view', component: ArticleDetailComponent },
    { path: 'article/new', component: ArticleUpdateComponent},
    { path: 'article/:id/edit', component: ArticleUpdateComponent}
];
