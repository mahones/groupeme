<?php

namespace App\Http\Controllers;

use App\Models\ParticiperGroupement;
use App\Models\Groupement;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ParticiperGroupementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $participants = ParticiperGroupement::with('user', 'groupement.etatGroupement')->get();
        return Inertia::render('Dashboard/Participants/Index', [
            'participants' => $participants
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $groupements = Groupement::all();
        $users = User::all();
        return Inertia::render('Dashboard/Participants/Create', [
            'groupements' => $groupements,
            'users' => $users   
        ]);
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
    public function show(ParticiperGroupement $participant)
    {
        $participant = ParticiperGroupement::with('user', 'groupement')->find($participant->id);
        return Inertia::render('Dashboard/Participants/Show', [
            'participant' => $participant
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ParticiperGroupement $participant)
    {
        return Inertia::render('Dashboard/Participants/Edit', [
            'participant' => $participant
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ParticiperGroupement $participant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ParticiperGroupement $participant)
    {
        $participant->delete();
        return redirect()->route('participants.index')->with('success', 'Participant supprimé avec succès.');
    }
}
