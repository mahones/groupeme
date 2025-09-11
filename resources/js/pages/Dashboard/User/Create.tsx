import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Role } from '@/types/Role';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Save, Trash } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter un utilisateur',
        href: '/users',
    },
];

type PageProps = {
    roles: Role[];
};

export default function Create() {
    const { roles } = usePage<PageProps>().props;
    const { data, setData, post } = useForm({
        name: '',
        telephone: '',
        email: '',
        password: '',
        password_confirmation: '',
        role_id: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('users.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter un utilisateur" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Ajouter un utilisateur</h1>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold"></h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex w-full flex-col gap-4 p-4 md:w-[70%]">
                            <div className="flex justify-between">
                                <Input className="w-[49%]" value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="Nom" />
                                <Input
                                    className="w-[49%]"
                                    value={data.telephone}
                                    onChange={(e) => setData('telephone', e.target.value)}
                                    placeholder="Téléphone"
                                />
                            </div>
                            <div className="flex justify-between">
                                <Input
                                    className="w-[49%]"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Email"
                                />
                                <Select value={data.role_id} onValueChange={(value) => setData('role_id', value)}>
                                    <SelectTrigger className="w-[49%]">
                                        <SelectValue placeholder="Role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {roles && roles.length > 0 ? (
                                            roles.map((role) => (
                                                <SelectItem key={role.id} value={String(role.id)}>
                                                    {role.titre}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="Aucune catégorie disponible" disabled>
                                                Aucune catégorie disponible
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-between">
                                <Input
                                    className="w-[49%]"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Mot de passe"
                                />

                                <Input
                                    className="w-[49%]"
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Mot de passe"
                                />
                                
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
