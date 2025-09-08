import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Participant } from '@/types/Participant';
import { Head, router as Inertia, Link, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';

type PageProps = {
    participant: Participant;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Participants',
        href: '/participants',
    },
];

export default function Participants() {
    const { participant } = usePage<PageProps>().props;
    const handleDelete = (participant: Participant) => {
        if (confirm('Supprimer ce participant ?')) {
            Inertia.delete(route('participants.destroy', participant.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Participants" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Détails du participant</h1>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{participant.groupement?.titre}</h2>
                <p>
                    <strong>ID :</strong> {participant.id}
                </p>
                <p>
                    <strong>Titre :</strong> {participant.groupement?.titre}
                </p>
                <p>
                    <strong>Nom du participant :</strong> {participant.user?.name}
                </p>
                <p>
                    <strong>Téléphones du participant :</strong> {participant.user?.telephone}
                </p>
                <p>
                    <strong>Montant de participation :</strong> {participant.montant}
                </p>
                <p>
                    <strong>Statut :</strong> {participant.statut}
                </p>

                <div className="flex justify-end gap-2">
                    <Link href={route('participants.edit', participant.id)}>
                        <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                            <Pencil /> Modifier
                        </Button>
                    </Link>

                    <Button
                        size="sm"
                        className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300"
                        onClick={() => handleDelete(participant)}
                    >
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
