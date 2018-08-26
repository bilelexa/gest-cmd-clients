import { Moment } from 'moment';
import { Client } from './client.model';
import { Detail_commande } from './detail-commande.model';

export class Commande {
    id?: number;
    datcom?: Moment;
    total?: number;
    client?: Client;
    detail_commandes?: Detail_commande[];
}