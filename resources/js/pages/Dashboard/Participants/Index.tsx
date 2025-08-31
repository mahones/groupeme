import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

type Participant = {
    id: number;
    user_id: number;
    groupement_id: number;
    montant: number;
    statut: string;
    groupement?: Groupement;
    user?: User;
};

type User = {
    id: number;
    name: string;
};
type Groupement = {
    id: number;
    titre: string;
};

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
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Participants" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Participants</h1>
            </div>
            <Table>
                <TableCaption>Liste de tous les participants.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Nom du participant</TableHead>
                        <TableHead>Montant de participation</TableHead>
                        <TableHead>Groupement</TableHead>
                        <TableHead>Etat</TableHead>
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
                                <TableCell>{participant.statut}</TableCell>
                                <TableCell className="flex justify-end text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button size="sm" className="bg-green-500 hover:bg-green-700">
                                            <Lightbulb />
                                        </Button>
                                        <Button size="sm" className="bg-red-500 hover:bg-red-700">
                                            <Trash />
                                        </Button>
                                        <Button size="sm" className="bg-blue-500 hover:bg-blue-700">
                                            <Pencil />
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
