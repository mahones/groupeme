import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Save, Trash } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter un moyen de transport',
        href: '/logistiques',
    },
];

export default function Create() {
    const { data, setData, post } = useForm({
        titre: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('logistiques.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter un moyen de transport" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Ajouter un moyen de transport</h1>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold"></h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex w-full flex-col gap-4 p-4 md:w-[70%]">
                            <div className="flex justify-between">
                                <Input
                                    value={data.titre}
                                    onChange={(e) => setData('titre', e.target.value)}
                                    placeholder="Titre de la logistique"
                                />
                            </div>
                            <Textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Description de la logistique"
                            />

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
