import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Save, Trash } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter un groupement',
        href: '/groupements',
    },
];

export default function Create() {
    const { data, setData, post } = useForm({
        designation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('groupements.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter un groupement" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Ajouter un groupement</h1>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold"></h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex w-full flex-col gap-4 p-4 md:w-[70%]">
                            <div className="flex justify-between">
                                <Input
                                    value={data.designation}
                                    onChange={(e) => setData('designation', e.target.value)}
                                    placeholder="Titre de la catégorie"
                                    className="w-[49%]"
                                />
                                <Select>
                                    <SelectTrigger className="w-[49%]">
                                        <SelectValue placeholder="Catégorie parente" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Aucune catégorie disponible" disabled>
                                            Aucune catégorie disponible
                                        </SelectItem>
                                        <SelectItem value="Aucune catégorie disponible" disabled>
                                            Aucune catégorie disponible
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Textarea value="Description de la catégorie" onChange={() => {}} placeholder="Description de la catégorie" />
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
