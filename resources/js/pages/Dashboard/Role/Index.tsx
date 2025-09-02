import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

import { Role } from '@/types/Role';

type PageProps = {
    roles: Role[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Roles',
        href: '/roles',
    },
];

export default function Roles() {
    const { roles } = usePage<PageProps>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Roles" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Rôles</h1>
                <Button>Ajouter un rôle</Button>
            </div>
            <Table>
                <TableCaption>Liste des rôles.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {roles && roles.length > 0 ? (
                        roles.map((role) => (
                            <TableRow key={role.id}>
                                <TableCell className="font-medium">{role.id}</TableCell>
                                <TableCell>{role.designation}</TableCell>
                                <TableCell className="flex justify-end text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button size="sm" className="bg-green-500 hover:bg-green-700 text-white hover:text-gray-300">
                                            <Lightbulb />
                                        </Button>
                                        <Button size="sm" className="bg-red-500 hover:bg-red-700 text-white hover:text-gray-300">
                                            <Trash />
                                        </Button>
                                        <Button size="sm" className="bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-300">
                                            <Pencil />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">
                                Aucune donnée disponible
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
