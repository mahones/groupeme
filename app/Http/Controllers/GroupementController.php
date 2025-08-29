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
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
