import {User} from "./User";
export type Proposition = {
    id: number;
    titre: string;
    lien_url_alibaba: string;
    user_id: number;
    user?: User;
};