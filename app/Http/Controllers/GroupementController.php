<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\StoreGroupementRequest;
use Illuminate\Http\Request;
use App\Models\Groupement;
use App\Models\Categorie;
use App\Models\Logistique;
use App\Models\Pays;
use App\Models\EtatGroupement;

class GroupementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $groupements = Groupement::with(['categorie', 'logistique', 'pays', 'etatGroupement', 'images', 'user'])->get();
        return inertia('Dashboard/Groupement/Index', [
            'groupements' => $groupements
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Categorie::all();
        $logistiques = Logistique::all();
        $pays = Pays::all();
        $etats = EtatGroupement::all();
        return inertia('Dashboard/Groupement/Create', [
            'categories' => $categories,
            'logistiques' => $logistiques,
            'pays' => $pays,
            'etats' => $etats,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGroupementRequest $request)
    {

        // je dois revoir cette partie
        $validated = $request->validated();
        $validated['user_id'] = auth()->id();
        $groupement = Groupement::create($validated);
        

        if ($request->hasFile('image_url')) {
            foreach ($request->file('image_url') as $image) {
                $path = $image->store('images', 'public');
                $groupement->images()->create([
                    'image_url' => $path,
                    'groupement_id' => $groupement->id,
                ]);
            }
        }

        return redirect()->route('groupements.index')->with('success', 'Groupement créé avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Groupement $groupement)
    {
        $groupement_find = Groupement::with(['categorie', 'logistique', 'pays', 'etatGroupement', 'images', 'user'])->find($groupement->id);
        return inertia('Dashboard/Groupement/Show', [
            'groupement' => $groupement_find
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Groupement $groupement)
    {
        return inertia('Dashboard/Groupement/Edit', [
            'groupement' => $groupement
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Groupement $groupement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Groupement $groupement)
    {
        $groupement->delete();
        return redirect()->route('groupements.index')->with('success', 'Groupement supprimé avec succès.');
    }
}
