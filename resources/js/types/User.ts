import {Role} from "./Role"
export type User = {
    id: number;
    telephone: string;
    email: string;
    name: string;
    role_id: number;
    role?: Role;

};