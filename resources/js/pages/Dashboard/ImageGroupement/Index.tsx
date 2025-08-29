import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Lightbulb, Pencil, Trash } from 'lucide-react';

type Image = {
    id: number;
    image_url: string;
    groupement_id?: number;
    groupement?: Groupement;
};
type Groupement = {
    id: number;
    titre: string;
};

type PageProps = {
    images: Image[];
};
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Images',
        href: '/images_groupement',
    },
];

export default function Images() {
    const { images } = usePage<PageProps>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Images" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Image</h1>
                <Button>Ajouter une image</Button>
            </div>
            <Table>
                <TableCaption>Liste des Images.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N°</TableHead>
                        <TableHead>Images</TableHead>
                        <TableHead>Groupement</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {images && images.length > 0 ? (
                        images.map((image) => (
                            <TableRow key={image.id}>
                                <TableCell className="font-medium">{image.id}</TableCell>
                                <TableCell>{image.image_url}</TableCell>
                                <TableCell>{image.groupement?.titre}</TableCell>
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
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center">
                                Aucune image trouvée
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
}
