import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Categorie } from '@/types/Categorie';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Save, Trash } from 'lucide-react';

type PageProps = {
    categories: Categorie[];
};
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ajouter une catégorie',
        href: '/categories',
    },
];

export default function Create() {
    const { categories } = usePage<PageProps>().props;

    const { data, setData, post } = useForm<{ titre: string; description: string; parent_id: number | null }>({
        titre: '',
        description: '',
        parent_id: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('categories.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajouter une catégorie" />
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl font-bold">Ajouter une catégorie</h1>
            </div>
            <div className="p-4 shadow">
                <h2 className="mb-2 text-xl font-semibold"></h2>
                <form onSubmit={handleSubmit} className="m-4">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex w-full flex-col gap-4 p-4 md:w-[70%]">
                            <div className="flex justify-between">
                                <Input value={data.titre} onChange={(e) => setData('titre', e.target.value)} placeholder="Titre de la catégorie" className="w-[49%]" />
                                <Select value={data.parent_id ? String(data.parent_id) : ''} onValueChange={(value) => setData('parent_id', value ? Number(value) : null)}>
                                    <SelectTrigger className="w-[49%]">
                                        <SelectValue placeholder="Catégorie parente" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories && categories.length > 0 ? (
                                            categories.map((category) => (
                                                <SelectItem key={category.id} value={category.id ? String(category.id) : ''}>
                                                    {category.titre}
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

                            <Textarea value={data.description} onChange={(e) => setData('description', e.target.value)} placeholder="Description de la catégorie" />
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
