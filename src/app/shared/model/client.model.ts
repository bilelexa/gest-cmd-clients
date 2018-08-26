import { Commande } from './commande.model';

export class Client {
    id?: number;
    nom?: string;
    prenom?: string;
    societe?: string;
    adresse?: string;
    tel?: string;
    commandes?: Commande[];
}
