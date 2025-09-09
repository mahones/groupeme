<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\StoreLogistiqueRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Logistique;

class LogistiqueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $logistiques = Logistique::all();
        return Inertia::render('Dashboard/Logistique/Index', [
            'logistiques' => $logistiques
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Logistique/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLogistiqueRequest $request)
    {
        $validate = $request->validated();
        Logistique::create($validate);
        return redirect()->route('logistiques.index')->with('success','logistique créer avec success');
    }

    /**
     * Display the specified resource.
     */
    public function show(Logistique $logistique)
    {
        $logistique_find = Logistique::find($logistique->id);
        return Inertia::render('Dashboard/Logistique/Show', [
            'logistique' => $logistique_find
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Logistique $logistique)
    {
        return Inertia::render('Dashboard/Logistique/Edit', [
            'logistique' => $logistique
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Logistique $logistique)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Logistique $logistique)
    {
        $logistique->delete();
        return redirect()->route('logistiques.index')->with('success', 'Logistique supprimée avec succès.');
    }
}
