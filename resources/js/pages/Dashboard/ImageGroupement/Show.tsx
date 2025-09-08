import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Image } from '@/types/Image';
import { Head, router as Inertia, Link, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';

type ShowProps = {
    image: Image;
};
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Images',
        href: '/images_groupement',
    },
];

const Show: React.FC = () => {
    const { image } = usePage<ShowProps>().props;
    const handleDelete = (image: Image) => {
        if (confirm('Supprimer cette image ?')) {
            Inertia.delete(route('images_groupement.destroy', image.id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Images" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Image</h1>
                <Button>Ajouter une image</Button>
            </div>
            <div className="p-4 shadow">
                <div className="m-10">
                    <img src={image.image_url} alt={image.image_url} className="h-32 w-full object-cover" />
                </div>

                <div className="flex justify-end gap-2">
                    <Link href={route('images_groupement.edit', image.id)}>
                        <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                            <Pencil /> Modifier
                        </Button>
                    </Link>

                    <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(image)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
};

export default Show;
