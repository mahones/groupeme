import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import {router as Inertia} from '@inertiajs/react';
import { Proposition } from '@/types/Proposition';
import { Head, Link, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';

type ShowProps = {
    proposition: Proposition;
};
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Propositions',
        href: '/propositions',
    },
];

const Show: React.FC = () => {
    const { proposition } = usePage<ShowProps>().props;
    const handleDelete = (proposition: Proposition) => {
            if (confirm('Supprimer cette proposition ?')) {
                Inertia.delete(route('propositions.destroy', proposition.id), {
                    preserveScroll: true,
                });
            }
        };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Proposition" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Détail de la proposition</h1>
                <Button>Ajouter une proposition</Button>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{proposition.titre}</h2>
                <p>
                    <strong>ID :</strong> {proposition.id}
                </p>
                <p>
                    <strong>Titre :</strong> {proposition.titre}
                </p>
                <p>
                    <strong>Lien Alibaba :</strong> {proposition.lien_url_alibaba}
                </p>
                <p>
                    <strong>Nom de la personne qui propose :</strong> {proposition.user?.name}
                </p>
                <div className="flex justify-end gap-2">
                    <Link href={route('propositions.edit', proposition.id)}>
                    <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                        <Pencil /> Modifier
                    </Button>
                    </Link>
                    
                    <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(proposition)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
};

export default Show;
