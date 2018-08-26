import { Article } from './article.model';
import { Commande } from './commande.model';

export class Detail_commande {
    id?: number;
    qtcom?: number;
    article?: Article;
    commande?: Commande;
}