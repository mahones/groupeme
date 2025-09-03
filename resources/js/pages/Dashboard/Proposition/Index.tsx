import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import {router as Inertia} from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Proposition } from '@/types/Proposition';
import { Head, Link, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

type PageProps = {
    propositions: Proposition[];
};
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Propositions',
        href: '/propositions',
    },
];

export default function Propositions() {
    const { propositions } = usePage<PageProps>().props;

    const handleDelete = (proposition: Proposition) => {
        if (confirm('Supprimer cette proposition ?')) {
            Inertia.delete(route('propositions.destroy', proposition.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Proposition" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Proposition</h1>
                <Button>Ajouter une proposition</Button>
            </div>
            <Table>
                <TableCaption>Liste de tous les pays.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Titre</TableHead>
                        <TableHead>Lien du produit alibaba</TableHead>
                        <TableHead>Utilisateur</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {propositions && propositions.length > 0 ? (
                        propositions.map((proposition) => (
                            <TableRow key={proposition.id}>
                                <TableCell className="font-medium">{proposition.id}</TableCell>
                                <TableCell>{proposition.titre}</TableCell>
                                <TableCell>{proposition.lien_url_alibaba}</TableCell>
                                <TableCell>{proposition.user?.name}</TableCell>
                                <TableCell className="flex justify-end text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link href={route('propositions.show', proposition.id)}>
                                            <Button size="sm" className="bg-green-500 text-white hover:bg-green-700 hover:text-gray-300">
                                                <Lightbulb />
                                            </Button>
                                        </Link>
                                        <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                                            <Pencil />
                                        </Button>
                                        <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(proposition)}>
                                            <Trash />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">
                                Aucune proposition trouvée.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
