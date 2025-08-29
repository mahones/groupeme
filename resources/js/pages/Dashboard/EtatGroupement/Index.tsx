import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head , usePage} from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';


type EtatGroupement = {
    id: number;
    designation: string;
};

type PageProps = {
    etatGroupements: EtatGroupement[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Etat Groupement',
        href: '/etatgroupement',
    },
];

export default function EtatGroupement() {
    const { etatGroupements } = usePage<PageProps>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Etat Groupement" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">
                    Etat 
                </h1>
                <Button>Ajouter un état</Button>
            </div>
            <Table>
                <TableCaption>Liste des Etat Groupement.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Titre</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                {etatGroupements && etatGroupements.length > 0 ? (
                    etatGroupements.map((etatGroupement) => (
                        <TableRow key={etatGroupement.id}>
                            <TableCell className="font-medium">{etatGroupement.id}</TableCell>
                            <TableCell>{etatGroupement.designation}</TableCell>
                            <TableCell className="flex justify-end">
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
                            Aucune état de groupement disponible.
                        </TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}