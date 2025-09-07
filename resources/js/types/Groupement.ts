import {Categorie} from "./Categorie";
import { EtatGroupement } from "./EtatGroupement";
import { Image } from "./Image";
import {Pays} from "./Pays";
import {Logistique} from "./Logistique";
import { User } from "./User";
export type Groupement = {
    id: number;
    titre: string;
    description: string;
    prix: number;
    minimum_participant: number;
    categorie_id: number;
    logistique_id: number;
    pays_id: number;
    user_id: number;
    etat_groupement_id: number;
    date_cloture: string;
    categorie?: Categorie;
    logistique?: Logistique;
    pays?: Pays;
    user?: User;
    etat_groupement?: EtatGroupement;
    images?: Image[];

};