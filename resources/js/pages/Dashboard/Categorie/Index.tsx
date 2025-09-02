import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Categorie } from '@/types/Categorie';
import { Head, Link, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

//définir le type pour les props de la page
type PageProps = {
    categories: Categorie[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

export default function Categories() {
    const { categories } = usePage<PageProps>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Categories</h1>
                <Button>Ajouter une catégorie</Button>
            </div>
            <Table>
                <TableCaption>Liste des Catégorie.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Titre</TableHead>
                        <TableHead>Catégorie parent</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories && categories.length > 0 ? (
                        categories.map((categorie) => (
                            <TableRow key={categorie.id}>
                                <TableCell className="font-medium">{categorie.id}</TableCell>
                                <TableCell>{categorie.designation}</TableCell>
                                <TableCell>{categorie.parent ? categorie.parent.designation : 'N/A'}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link href={route('categories.show', { id: categorie.id })}>
                                            <Button size="sm" className="bg-green-500 hover:bg-green-700 text-white hover:text-gray-300">
                                                <Lightbulb />
                                            </Button>
                                        </Link>

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
                                Aucune catégorie disponible.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
