import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

import { User } from '@/types/User';

type PageProps = {
    users: User[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

export default function Users() {
    const { users } = usePage<PageProps>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Utilisateurs</h1>
                <Button>Ajouter un utilisateur</Button>
            </div>
            <Table>
                <TableCaption>Liste de tous les utilisateurs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Téléphone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users && users.length > 0 ? (
                        users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.telephone}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role?.designation}</TableCell>
                                <TableCell className="flex justify-end text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link href={route('users.show', user.id)}>
                                            <Button size="sm" className="bg-green-500 text-white hover:bg-green-700 hover:text-gray-300">
                                                <Lightbulb />
                                            </Button>
                                        </Link>

                                        <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300">
                                            <Trash />
                                        </Button>
                                        <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                                            <Pencil />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} className="text-center">
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
