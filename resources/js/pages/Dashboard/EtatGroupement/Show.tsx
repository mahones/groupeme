import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import {router as Inertia} from '@inertiajs/react';
import { EtatGroupement } from '@/types/EtatGroupement';
import { Head, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';

type ShowProps = {
    etatgroupement: EtatGroupement;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Etat Groupement',
        href: '/etatgroupement',
    },
];

const Show: React.FC = () => {
    const { etatgroupement } = usePage<ShowProps>().props;

    const handleDelete = (etatgroupement: EtatGroupement) => {
        if (confirm('Supprimer cet état ?')) {
            Inertia.delete(route('etatgroupements.destroy', etatgroupement.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Etat Groupement" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Détails de l'état</h1>
                <Button>Ajouter un état</Button>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{etatgroupement.titre}</h2>

                <p>
                    <strong>ID :</strong> {etatgroupement.id}
                </p>
                <p>
                    <strong>Titre :</strong> {etatgroupement.titre}
                </p>
                <p>
                    <strong>Description de l'état :</strong> {etatgroupement.description}
                </p>

                <div className="flex justify-end gap-2">
                    <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                        <Pencil /> Modifier
                    </Button>
                    <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(etatgroupement)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
};

export default Show;
