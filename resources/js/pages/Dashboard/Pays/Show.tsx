import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Pays } from '@/types/Pays';
import { Head, router as Inertia, Link, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';
import React from 'react';

type ShowProps = {
    pays: Pays;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pays',
        href: '/pays',
    },
];

const Show: React.FC = () => {
    const { pays } = usePage<ShowProps>().props;
    const handleDelete = (pays: Pays) => {
        if (confirm('Supprimer ce pays ?')) {
            Inertia.delete(route('pays.destroy', pays.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pays" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Détail du pays</h1>
                <Button>Ajouter un pays</Button>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{pays.nom}</h2>
                <p>
                    <strong>ID :</strong> {pays.id}
                </p>
                <p>
                    <strong>Nom :</strong> {pays.nom}
                </p>
                <p>
                    <strong>Icon :</strong> {pays.lien_icon}
                </p>
                <div className="flex justify-end gap-2">
                    <Link href={route('pays.edit', pays.id)}>
                        <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                            <Pencil /> Modifier
                        </Button>
                    </Link>

                    <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(pays)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
};

export default Show;
