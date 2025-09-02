<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Proposition;

class PropositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $propositions = Proposition::with('user')->get();
        return inertia('Dashboard/Proposition/Index', [
            'propositions' => $propositions
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
    public function show(Proposition $proposition)
    {
        $proposition_find = Proposition::with('user')->find($proposition->id)   ;
        return inertia('Dashboard/Proposition/Show', [
            'proposition' => $proposition_find
        ]);
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
