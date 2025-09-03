import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import {router as Inertia} from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Link, Head, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';
import { Logistique } from '@/types/Logistique';

type PageProps = {
    logistiques: Logistique[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Logistiques',
        href: '/logistiques',
    },
];

export default function Logistiques() {
    const { logistiques } = usePage<PageProps>().props;
    const handleDelete = (logistique: Logistique) => {
        if (confirm('Supprimer cette logistique ?')) {
            Inertia.delete(route('logistiques.destroy', logistique.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Logistiques" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Logistique</h1>
                <Link href={route('logistiques.create')}>
                    <Button>Ajouter une logistique</Button>
                </Link>
            </div>
            <Table>
                <TableCaption>Liste des Logistiques.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Titre</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {logistiques && logistiques.length > 0 ? (
                        logistiques.map((logistique) => (
                            <TableRow key={logistique.id}>
                                <TableCell className="font-medium">{logistique.id}</TableCell>
                                <TableCell>{logistique.designation}</TableCell>
                                <TableCell className="flex justify-end text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link href={route('logistiques.show', logistique.id)}>
                                            <Button size="sm" className="bg-green-500 hover:bg-green-700 text-white hover:text-gray-300">
                                                <Lightbulb />
                                            </Button>
                                        </Link>
                                        <Button size="sm" className="bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-300">
                                            <Pencil />
                                        </Button>
                                        <Button size="sm" className="bg-red-500 hover:bg-red-700 text-white hover:text-gray-300" onClick={() => handleDelete(logistique)}>
                                            <Trash />
                                        </Button>
                                        
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center">
                                Aucun moyen de transport trouvé
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
