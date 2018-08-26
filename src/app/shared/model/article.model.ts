import { Detail_commande } from './detail-commande.model';

export class Article {
    id?: number;
    reference?: string;
    designation?: string;
    prix?: number;
    detail_commandes?: Detail_commande[];
}