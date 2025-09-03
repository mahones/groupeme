<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categorie;
use Laravel\Pail\ValueObjects\Origin\Console;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() 
    {
        $categories = Categorie::with('parent')->get();
        
        return Inertia::render('Dashboard/Categorie/Index', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Categorie/Create');
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
    public function show(Categorie $categorie)
    {
        $categorie_show = Categorie::with('parent')->find($categorie->id);
        return Inertia::render('Dashboard/Categorie/Show', [
            'categorie' => $categorie_show,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categorie $categorie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categorie $categorie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categorie $categorie)
    {
        $categorie->delete();
        return redirect()->route('categories.index')->with('success', 'Catégorie supprimée avec succès.');
    }
}
