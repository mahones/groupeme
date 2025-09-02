import {Groupement} from "./Groupement";
export type Image = {
    id: number;
    image_url: string;
    groupement_id?: number;
    groupement?: Groupement;
};