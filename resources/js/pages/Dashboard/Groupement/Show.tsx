import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import AppLayout from '@/layouts/app-layout';
import {router as Inertia} from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Groupement } from '@/types/Groupement';
import { Head, usePage } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';

type ShowProps = {
    groupement: Groupement;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Groupements',
        href: '/groupements',
    },
];

const Show: React.FC = () => {
    const { groupement } = usePage<ShowProps>().props;
    const images = groupement.images ?? [];
    const handleDelete = (groupement: Groupement) =>{
            if(confirm('Supprimer ce groupement ?')){
                Inertia.delete(route('groupements.destroy', groupement.id), {
                    preserveScroll: true,
                });
            }
        }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Groupements" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Groupements</h1>
                <Button>Ajouter un groupement</Button>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold">{groupement.titre}</h2>

                <div className="m-10">
                    <Carousel>
                        <CarouselContent>
                            {images.length > 0 &&
                                images.map((image) => (
                                    <CarouselItem key={image.id}>
                                        <img src={image.image_url} alt={image.image_url} className="h-32 w-full object-cover" />
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <p>
                    <strong>ID :</strong> {groupement.id}
                </p>
                <p>
                    <strong>Catégorie :</strong> {groupement.categorie?.designation}
                </p>
                <p>
                    <strong>Transport :</strong> {groupement.logistique?.designation}
                </p>
                <p>
                    <strong>Pays :</strong> {groupement.pays?.nom} {groupement.pays?.lien_icon}
                </p>
                <p>
                    <strong>Etat de groupement :</strong> {groupement.etat_groupement?.designation}
                </p>
                <div className="flex justify-end gap-2">
                    <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                        <Pencil /> Modifier
                    </Button>
                    <Button size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300" onClick={() => handleDelete(groupement)}>
                        <Trash /> Supprimer
                    </Button>
                </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"></div>
        </AppLayout>
    );
};

export default Show;
