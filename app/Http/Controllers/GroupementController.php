<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Groupement;

class GroupementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $groupements = Groupement::with(['categorie', 'logistique', 'pays', 'etatGroupement', 'images'])->get();
        return inertia('Dashboard/Groupement/Index', [
            'groupements' => $groupements
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Dashboard/Groupement/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Groupement $groupement)
    {
        $groupement_find = Groupement::with(['categorie', 'logistique', 'pays', 'etatGroupement', 'images'])->find($groupement->id);
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
