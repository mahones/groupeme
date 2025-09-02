export type Categorie = {
    id: number;
    designation: string;
    parent_id?: number;
    parent?: Categorie;
};