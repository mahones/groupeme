<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pays;
use Inertia\Inertia;     

class PaysController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pays = Pays::all();
        return Inertia::render('Dashboard/Pays/Index', [
            'pays' => $pays
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show(Pays $pays)
    {
        $pays_find = Pays::find($pays->id);
        return Inertia::render('Dashboard/Pays/Show', [
            'pays' => $pays_find
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pays $pays)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pays $pays)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pays $pays)
    {
        $pays->delete();
        return redirect()->route('pays.index')->with('success', 'Pays supprimé avec succès.');
    }
}
