import {Groupement} from "./Groupement";
import {User} from "./User";
export type Participant = {
    id: number;
    user_id: number;
    groupement_id: number;
    montant: number;
    statut: string;
    groupement?: Groupement;
    user?: User;
};