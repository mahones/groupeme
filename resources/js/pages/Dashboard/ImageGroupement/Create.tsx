import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Groupement } from '@/types/Groupement';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Save, Trash } from 'lucide-react';
import React from 'react';

//définir le type pour les props de la page
type PageProps = {
    groupements: Groupement[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une image de groupement',
        href: '/images_groupement',
    },
];

export default function Create() {
    const { groupements } = usePage<PageProps>().props;
    const { data, setData, post } = useForm({
        designation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('images_groupement.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter une image de groupement" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Ajouter une image de groupement</h1>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold"></h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex w-full flex-col gap-4 p-4 md:w-[70%]">
                            <div className="flex justify-between">
                                <Select>
                                    <SelectTrigger className="w-[49%]">
                                        <SelectValue placeholder="Groupement" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {groupements && groupements.length > 0 ? (
                                            groupements.map((groupement) => (
                                                <SelectItem key={groupement.id} value={String(groupement.id)}>
                                                    {groupement.titre}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="Aucun pays disponible" disabled>
                                                Aucun pays disponible
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                                <Input
                                    id="picture"
                                    type="file"
                                    className="w-[49%]"
                                    value={data.designation}
                                    onChange={(e) => setData('designation', e.target.value)}
                                    placeholder="Titre de l'état de groupement"
                                />
                            </div>
                            <div className="flex flex-wrap justify-between gap-2">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <Card key={i} className="w-[30%]">
                                        <img src="/images/pays/icons8-benin-100.png" alt={`Preview ${i + 1}`} className="h-32 w-full object-cover" />
                                    </Card>
                                ))}
                            </div>

                            <div className="flex justify-between"></div>
                        </div>
                        <div className="w-full p-4 md:w-[30%]">
                            <div className="flex justify-end gap-2">
                                <Button type="submit" size="sm" className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-300">
                                    <Save /> Enregistrer
                                </Button>
                                <Button type="button" size="sm" className="bg-red-500 text-white hover:bg-red-700 hover:text-gray-300">
                                    <Trash /> Annuler
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
