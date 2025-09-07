import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Categorie } from '@/types/Categorie';
import { EtatGroupement } from '@/types/EtatGroupement';
import { Logistique } from '@/types/Logistique';
import { Pays } from '@/types/Pays';
import { Head, useForm, usePage } from '@inertiajs/react';
import { ChevronDownIcon, Save, Trash } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter un groupement',
        href: '/groupements',
    },
];

type PageProps = {
    categories: Categorie[];
    logistiques: Logistique[];
    pays: Pays[];
    etats: EtatGroupement[];
};

export default function Create() {
    const { categories, logistiques, pays, etats, auth } = usePage<PageProps & { auth: { user: { id: number } } }>().props;
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const { data, setData, post } = useForm({
        titre: '',
        description: '',
        prix: '',
        minimum_participant: '',
        categorie_id: '',
        logistique_id: '',
        pays_id: '',
        etat_groupement_id: '',
        date_cloture: '',
        user_id: auth.user.id, // Ajoute l'ID de l'utilisateur authentifié
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
                                    value={data.titre}
                                    onChange={(e) => setData('titre', e.target.value)}
                                    placeholder="Titre de la catégorie"
                                    className="w-[49%]"
                                />
                                <Input
                                    value={data.prix}
                                    onChange={(e) => setData('prix', e.target.value)}
                                    placeholder="Prix du groupement"
                                    className="w-[49%]"
                                />
                            </div>
                            <div className="flex justify-between">
                                <Input
                                    value={data.minimum_participant}
                                    onChange={(e) => setData('minimum_participant', e.target.value)}
                                    placeholder="Minimum de participants"
                                    className="w-[32%]"
                                />

                                <Select value={data.categorie_id} onValueChange={(value) => setData('categorie_id', value)} >
                                    <SelectTrigger className="w-[32%]">
                                        <SelectValue placeholder="Catégorie" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories && categories.length > 0 ? (
                                            categories.map((categorie) => (
                                                <SelectItem key={categorie.id} value={String(categorie.id)}>
                                                    {categorie.titre}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="Aucune catégorie disponible" disabled>
                                                Aucune catégorie disponible
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                                <Select value={data.logistique_id} onValueChange={(value) => setData('logistique_id', value)}>
                                    <SelectTrigger className="w-[32%]">
                                        <SelectValue placeholder="Moyen de transport" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {logistiques && logistiques.length > 0 ? (
                                            logistiques.map((logistique) => (
                                                <SelectItem key={logistique.id} value={String(logistique.id)}>
                                                    {logistique.titre}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="Aucun moyen de transport disponible" disabled>
                                                Aucun moyen de transport disponible
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex justify-between">
                                <Select value={data.pays_id} onValueChange={(value) => setData('pays_id', value)}>
                                    <SelectTrigger className="w-[32%]">
                                        <SelectValue placeholder="Pays" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {pays && pays.length > 0 ? (
                                            pays.map((pays) => (
                                                <SelectItem key={pays.id} value={String(pays.id)}>
                                                    {pays.nom}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="Aucun pays disponible" disabled>
                                                Aucun pays disponible
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                                <Select value={data.etat_groupement_id} onValueChange={(value) => setData('etat_groupement_id', value)}>
                                    <SelectTrigger className="w-[32%]">
                                        <SelectValue placeholder="Etat de groupement" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {etats && etats.length > 0 ? (
                                            etats.map((etat) => (
                                                <SelectItem key={etat.id} value={String(etat.id)}>
                                                    {etat.titre}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="Aucun etat disponible" disabled>
                                                Aucun etat disponible
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>

                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" id="date" className="w-[32%] justify-between font-normal">
                                            {date ? date.toLocaleDateString() : 'Select date'}
                                            <ChevronDownIcon />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            captionLayout="dropdown"
                                            onSelect={(date) => {
                                                setDate(date);
                                                setOpen(false);
                                            }}
                                            className="w-72"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            
                            <Input id="picture" type="file" />
                            <Textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Description de la catégorie"
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
