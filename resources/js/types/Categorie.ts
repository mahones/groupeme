export type Categorie = {
    id: number;
    titre:string;
    description: string;
    parent_id?: number;
    parent?: Categorie;
};