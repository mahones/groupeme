import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router as Inertia, Link, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';

import { User } from '@/types/User';

type PageProps = {
    user: User;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

const Show: React.FC = () => {
    const { user } = usePage<PageProps>().props;
    const handleDelete = (user: User) => {
        if (confirm('Supprimer cet utilisateur ?')) {
            Inertia.delete(route('users.destroy', user.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Détail de l'utilisateur</h1>
                <Button>Ajouter un utilisateur</Button>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{user.name}</h2>
                <p>
                    <strong>ID :</strong> {user.id}
                </p>
                <p>
                    <strong>Nom :</strong> {user.name}
                </p>
                <p>
                    <strong>Rôle :</strong> {user.role?.titre}
                </p>
                <p>
                    <strong>Email :</strong> {user.email}
                </p>
                <p>
                    <strong>Téléphone :</strong> {user.telephone}
                </p>
                <div className="flex justify-end gap-2">
                    <Link href={route('users.edit', user.id)}>
                        <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                            <Pencil /> Modifier
                        </Button>
                    </Link>

                    <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(user)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
};

export default Show;
