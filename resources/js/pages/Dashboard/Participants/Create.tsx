import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Groupement } from '@/types/Groupement';
import { User } from '@/types/User';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Save, Trash } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une participation',
        href: '/participants',
    },
];

type PageProps = {
    groupements: Groupement[];
    users: User[];
};
export default function Create() {
    const { groupements, users } = usePage<PageProps>().props;
    const { data, setData, post } = useForm({
        groupement_id: '',
        user_id: '',
        montant: '',
        statut: 'En attente',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('participants.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter une participation" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Ajouter une participation</h1>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold"></h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex w-full flex-col gap-4 p-4 md:w-[70%]">
                            <div className="flex justify-between">
                                <Select>
                                    <SelectTrigger className="w-[49%]">
                                        <SelectValue placeholder="Goupements" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {groupements && groupements.length > 0 ? (
                                            groupements.map((groupement) => (
                                                <SelectItem key={groupement.id} value={String(groupement.id)}>
                                                    {groupement.titre}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="Aucun groupement disponible" disabled>
                                                Aucun groupement disponible
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-[49%]">
                                        <SelectValue placeholder="Utilistateur" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {users && users.length > 0 ? (
                                            users.map((user) => (
                                                <SelectItem key={user.id} value={String(user.id)}>
                                                    {user.name}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="Aucun utilisateur disponible" disabled>
                                                Aucun utilisateur disponible
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-between">
                                <Input
                                    className="w-[49%]"
                                    value={data.montant}
                                    onChange={(e) => setData('montant', e.target.value)}
                                    placeholder="Montant"
                                />
                                {/* <Input
                                    className="w-[49%]"
                                    value={data.montant}
                                    onChange={(e) => setData('montant', e.target.value)}
                                    placeholder="Montant"
                                /> */}
                            </div>
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
