import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Logistique } from '@/types/Logistique';
import { Head, router as Inertia, Link, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';

type ShowProps = {
    logistique: Logistique;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Logistiques',
        href: '/logistiques',
    },
];

export default function Logistiques() {
    const { logistique } = usePage<ShowProps>().props;
    const handleDelete = (logistique: Logistique) => {
        if (confirm('Supprimer cette logistique ?')) {
            Inertia.delete(route('logistiques.destroy', logistique.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Logistiques" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Détails de la logistique</h1>
                <Button>Ajouter une logistique</Button>
            </div>

            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{logistique.titre}</h2>
                <p>
                    <strong>ID :</strong> {logistique.id}
                </p>
                <p>
                    <strong>Moyen de transport :</strong> {logistique.titre}
                </p>
                <p>
                    <strong>Moyen de transport :</strong> {logistique.description}
                </p>

                <div className="flex justify-end gap-2">
                    <Link href={route('logistiques.edit', logistique.id)}>
                        <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                            <Pencil /> Modifier
                        </Button>
                    </Link>

                    <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(logistique)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
