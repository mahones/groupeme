import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Participants',
        href: '/participants',
    },
];

export default function Participants() {
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
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Montant</TableCell>
                        <TableCell>Groupement</TableCell>
                        <TableCell>Etat</TableCell>
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
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
