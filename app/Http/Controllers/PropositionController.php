<?php

namespace App\Http\Controllers;

use App\Http\Requests\Admin\StorePropositionRequest;
use Illuminate\Http\Request;
use App\Models\Proposition;
use Inertia\Inertia;

class PropositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $propositions = Proposition::with('user')->get();
        return Inertia::render('Dashboard/Proposition/Index', [
            'propositions' => $propositions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */

    public function create()
    {
        return Inertia::render('Dashboard/Proposition/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropositionRequest $request)
    {
        $validate = $request->validated();
        $validate['user_id'] = auth()->id();
        Proposition::create($validate);
        return redirect()->route('propositions.index')->with('success','Proposition créer avec success');
    }
    /**
     * Display the specified resource.
     */
    public function show(Proposition $proposition)
    {
        $proposition_find = Proposition::with('user')->find($proposition->id)   ;
        return Inertia::render('Dashboard/Proposition/Show', [
            'proposition' => $proposition_find
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Proposition $proposition)
    {
        return Inertia::render('Dashboard/Proposition/Edit', [
            'proposition' => $proposition
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Proposition $proposition)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Proposition $proposition)
    {
        $proposition->delete();
        return redirect()->route('propositions.index')->with('success', 'Proposition supprimée avec succès.');
    }
}
