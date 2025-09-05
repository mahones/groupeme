<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use App\Models\Groupement;
use Inertia\Inertia;
class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $images = Image::with(['groupement'])->get();
        return Inertia::render('Dashboard/ImageGroupement/Index', [
            'images' => $images
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $groupements = Groupement::all();
        return Inertia::render('Dashboard/ImageGroupement/Create', [
            'groupements' => $groupements
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
    public function show(Image $image)
    {
        $image_find = Image::find($image->id);
        return Inertia::render('Dashboard/ImageGroupement/Show', [
            'image' => $image_find
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Image $image)
    {
        return Inertia::render('Dashboard/ImageGroupement/Edit', [
            'image' => $image
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $image)
    {
        $image->delete();
        return redirect()->route('images_groupement.index')->with('success', 'Image supprimée avec succès.');
    }
}
