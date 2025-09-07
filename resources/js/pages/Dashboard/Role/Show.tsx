import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import {router as Inertia} from '@inertiajs/react'; 
import { type BreadcrumbItem } from '@/types';
import { Role } from '@/types/Role';
import { Head, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';

type PageProps = {
    role: Role;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Roles',
        href: '/roles',
    },
];
const Show: React.FC = () => {
    const { role } = usePage<PageProps>().props;
    const handleDelete = (role: Role) => {
            if (confirm('Supprimer ce rôle ?')) {
                Inertia.delete(route('roles.destroy', role.id), {
                    preserveScroll: true,
                });
            }
        };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Roles" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Détail du rôle</h1>
                <Button>Ajouter un rôle</Button>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{role.titre}</h2>
                <p>
                    <strong>ID :</strong> {role.id}
                </p>
                <p>
                    <strong>Titre :</strong> {role.titre}
                </p>
                <div className="flex justify-end gap-2">
                    <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                        <Pencil /> Modifier
                    </Button>
                    <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(role)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
};
export default Show;
