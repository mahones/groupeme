<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EtatGroupement;
use Inertia\Inertia;

class EtatGroupementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $etatGroupements = EtatGroupement::all();
        return Inertia::render('Dashboard/EtatGroupement/Index', [
            'etatGroupements' => $etatGroupements,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/EtatGroupement/Create');
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
    public function show(EtatGroupement $etatgroupement)
    {
        $etatgroupement_find = EtatGroupement::findOrFail($etatgroupement->id);
        return Inertia::render('Dashboard/EtatGroupement/Show', [
            'etatgroupement' => $etatgroupement_find,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EtatGroupement $etatgroupement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EtatGroupement $etatgroupement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EtatGroupement $etatgroupement)
    {
        $etatgroupement->delete();
        return redirect()->route('etatgroupements.index')->with('success', 'État de groupement supprimé avec succès.');
    }
}
