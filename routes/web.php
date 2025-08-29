<?php

use App\Http\Controllers\LogistiqueController;
use App\Http\Controllers\ParticiperGroupementController;
use App\Models\Image;
use App\Models\Logistique;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\EtatGroupementController;
use App\Http\Controllers\GroupementController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PaysController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    // ############################### Dashboard Routes ################################
    // Dashboard
    Route::get('dashboard', function () {
        return Inertia::render('Dashboard/dashboard');
    })->name('dashboard');

    // Categories
    Route::get('categories', [CategorieController::class, 'index'])->name('categories.index');

    // Etat Groupement
    Route::get('etatgroupement', [EtatGroupementController::class, 'index'])->name('etatgroupement.index');

    // Groupement
    Route::get('groupements', [GroupementController::class, 'index'])->name('groupements.index');

    // Images
    Route::get('images_groupement', [ImageController::class, 'index'])->name('images_groupement.index');

    // Logistiques
    Route::get('logistiques', [LogistiqueController::class, 'index'])->name('logistiques.index');

    Route::get('pays', [PaysController::class, 'index'])->name('pays.index');

    // Participants
    Route::get('participants', [ParticiperGroupementController::class, 'index'])->name('participants.index');

    // Roles
    Route::get('roles', [RoleController::class, 'index'])->name('roles.index');
    
    // Users
    Route::get('users', [UserController::class, 'index'])->name('users.index');

    // ################################ End Dashboard Routes ################################


});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';