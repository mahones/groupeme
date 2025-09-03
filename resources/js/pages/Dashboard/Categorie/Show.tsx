import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import {router as Inertia} from '@inertiajs/react';
import { Head, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';
import React from 'react';
import { Categorie } from '@/types/Categorie';
//définir le type pour les props de la page
type ShowProps = {
    categorie: Categorie;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

const Show: React.FC = () => {
    const { categorie } = usePage<ShowProps>().props;
    const handleDelete = (categorie: Categorie) => {
            if (confirm('Supprimer cette catégorie ?')) {
                Inertia.delete(route('categorie.destroy', categorie.id), {
                    preserveScroll: true,
                });
            }
        };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={categorie.designation || 'Catégorie'} />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Détails de la catégorie</h1>
                <Button>Ajouter une catégorie</Button>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{categorie.designation}</h2>

                <p>
                    <strong>ID :</strong> {categorie.id}
                </p>
                <p>
                    <strong>Nom de la catégorie :</strong> {categorie.designation}
                </p>
                <p>
                    <strong>Catégorie parent :</strong> {categorie.parent ? categorie.parent.designation : 'Aucune'}
                </p>

                <div className="flex justify-end gap-2">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-300">
                        <Pencil /> Modifier
                    </Button>
                    <Button size="sm" className="bg-red-500 hover:bg-red-700 text-white hover:text-gray-300" onClick={() => handleDelete(categorie)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
};

export default Show;
