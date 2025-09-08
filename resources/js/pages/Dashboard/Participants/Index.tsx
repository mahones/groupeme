import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Participant } from '@/types/Participant';
import { Head, router as Inertia, Link, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

type PageProps = {
    participants: Participant[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Participants',
        href: '/participants',
    },
];

export default function Participants() {
    const { participants } = usePage<PageProps>().props;
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
                <h1 className="text-2xl font-bold">Participants</h1>
                <Link href={route('participants.create')}>
                    <Button>Ajouter un participant</Button>
                </Link>
            </div>
            <Table>
                <TableCaption>Liste de tous les participants.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Nom du participant</TableHead>
                        <TableHead>Montant de participation</TableHead>
                        <TableHead>Groupement</TableHead>
                        <TableHead>Etat du groupement</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {participants && participants.length > 0 ? (
                        participants.map((participant) => (
                            <TableRow key={participant.id}>
                                <TableCell className="font-medium">{participant.id}</TableCell>
                                <TableCell>{participant.user?.name}</TableCell>
                                <TableCell>{participant.montant}</TableCell>
                                <TableCell>{participant.groupement?.titre}</TableCell>
                                <TableCell>{participant.groupement?.etat_groupement?.titre}</TableCell>
                                <TableCell className="flex justify-end text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link href={route('participants.show', participant.id)}>
                                            <Button size="sm" className="bg-green-500 text-white hover:bg-green-700 hover:text-gray-300">
                                                <Lightbulb />
                                            </Button>
                                        </Link>
                                        <Link href={route('participants.edit', { id: participant.id })}>
                                            <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                                                <Pencil />
                                            </Button>
                                        </Link>
                                        <Button
                                            size="sm"
                                            className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300"
                                            onClick={() => handleDelete(participant)}
                                        >
                                            <Trash />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} className="text-center">
                                Aucuns participants trouvés.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
