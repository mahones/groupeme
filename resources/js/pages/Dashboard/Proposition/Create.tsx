import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {  Trash, Save  } from 'lucide-react';
import React from 'react';



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une proposistion',
        href: '/propositions',
    },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter une proposition" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Ajouter une proposition</h1>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold"></h2>

                <div className="flex justify-end gap-2">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-300">
                        <Save  /> Enregistrer 
                    </Button>
                    <Button size="sm" className="bg-red-500 hover:bg-red-700 text-white hover:text-gray-300" >
                        <Trash /> Annuler
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
};

