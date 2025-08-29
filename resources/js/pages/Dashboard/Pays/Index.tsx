import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

type Pays = {
    id: string;
    nom: string;
    lien_icon: string;
};

type PageProps = {
    pays: Pays[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pays',
        href: '/pays',
    },
];

export default function Pays() {
    const { pays } = usePage<PageProps>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pays" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Pays</h1>
                <Button>Ajouter un pays</Button>
            </div>
            <Table>
                <TableCaption>Liste de tous les pays.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Icon</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        pays && pays.length > 0? (
                            pays.map((pays) => (
                               
                                <TableRow key={pays.id}>
                        <TableCell className="font-medium">{pays.id}</TableCell>
                        <TableCell>{pays.nom}</TableCell>
                        <TableCell>{pays.lien_icon}</TableCell>
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
                        ):(

                            <TableRow>
                                <TableCell colSpan={3} className="text-center">
                                    Aucun pays trouvé
                                </TableCell>
                            </TableRow>
                        )
                    }
                    
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
