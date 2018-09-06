import { Detail_commande } from './detail-commande.model';

export class Commande {
    id?: number;
    datcom?: string;
    total?: number;
    client_id?: number;
    detail_commandes?: Detail_commande[];
}