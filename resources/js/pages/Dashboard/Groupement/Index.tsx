import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Groupement } from '@/types/Groupement';
import { Head, router as Inertia, Link, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

type PageProps = {
    groupements: Groupement[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Groupements',
        href: '/groupements',
    },
];

export default function Groupements() {
    const { groupements } = usePage<PageProps>().props;
    const handleDelete = (groupement: Groupement) => {
        if (confirm('Supprimer ce groupement ?')) {
            Inertia.delete(route('groupements.destroy', groupement.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Groupements" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Groupements</h1>
                <Link href={route('groupements.create')}>
                    <Button>Ajouter un groupement</Button>
                </Link>
            </div>
            <Table>
                <TableCaption>Liste des Groupements.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Titre</TableHead>
                        <TableHead>Prix</TableHead>
                        <TableHead>Participants</TableHead>
                        <TableHead>Pays</TableHead>
                        <TableHead>Catégorie</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {groupements && groupements.length > 0 ? (
                        groupements.map((groupement) => (
                            <TableRow key={groupement.id}>
                                <TableCell className="font-medium">{groupement.id}</TableCell>
                                <TableCell>{groupement.titre}</TableCell>
                                <TableCell>{groupement.prix}</TableCell>
                                <TableCell>{groupement.minimum_participant}</TableCell>
                                <TableCell>{groupement.pays?.nom}</TableCell>
                                <TableCell>{groupement.categorie?.titre}</TableCell>
                                <TableCell className="flex justify-end text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link href={route('groupements.show', { id: groupement.id })}>
                                            <Button size="sm" className="bg-green-500 text-white hover:bg-green-700 hover:text-gray-300">
                                                <Lightbulb />
                                            </Button>
                                        </Link>
                                        <Link href={route('groupements.edit', { id: groupement.id })}>
                                            <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                                                <Pencil />
                                            </Button>
                                        </Link>
                                        <Button
                                            size="sm"
                                            className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300"
                                            onClick={() => handleDelete(groupement)}
                                        >
                                            <Trash />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">
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
