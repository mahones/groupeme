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
use App\Http\Controllers\PropositionController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    // ############################### Dashboard Routes ################################
    // Dashboard
    Route::get('dashboard', function () {
        return Inertia::render('Dashboard/dashboard');
    })->name('dashboard');


    /*************  ✨ Categories ✨   *************/
    /*******  Toutes les routes de catégories *******/
    Route::get('categories', [CategorieController::class, 'index'])->name('categories.index');
    Route::get('categories/{categorie}', [CategorieController::class, 'show'])->name('categories.show');
    Route::delete('categories/{categorie}', [CategorieController::class, 'destroy'])->name('categorie.destroy');

    /*************  ✨ Etat Groupement ✨   *************/
    /*******  Toutes les routes d'état de groupement *******/
    Route::get('etatgroupement', [EtatGroupementController::class, 'index'])->name('etatgroupements.index');
    Route::get('etatgroupement/{etatgroupement}', [EtatGroupementController::class, 'show'])->name('etatgroupements.show');
    Route::delete('etatgroupement/{etatgroupement}', [EtatGroupementController::class, 'destroy'])->name('etatgroupements.destroy');
    /*************  ✨ Groupement ✨   *************/
    /*******  Toutes les routes de groupement *******/
    Route::get('groupements', [GroupementController::class, 'index'])->name('groupements.index');
    Route::get('groupements/{groupement}', [GroupementController::class, 'show'])->name('groupements.show');
    Route::delete('groupements/{groupement}', [GroupementController::class, 'destroy'])->name('groupements.destroy');

    /*************  ✨ Images ✨   *************/
    /*******  Toutes les routes d'images *******/
    Route::get('images_groupement', [ImageController::class, 'index'])->name('images_groupement.index');
    Route::get('images_groupement/{image}', [ImageController::class, 'show'])->name('images_groupement.show');
    Route::delete('images_groupement/{image}', [ImageController::class, 'destroy'])->name('images_groupement.destroy');

    /*************  ✨ Logistique ✨   *************/
    /*******  Toutes les routes de logistique *******/
    Route::get('logistiques', [LogistiqueController::class, 'index'])->name('logistiques.index');
    Route::get('logistiques/{logistique}', [LogistiqueController::class, 'show'])->name('logistiques.show');
    Route::delete('logistiques/{logistique}', [LogistiqueController::class, 'destroy'])->name('logistiques.destroy');

    /*************  ✨ Pays ✨   *************/
    /*******  Toutes les routes de pays *******/
    Route::get('pays', [PaysController::class, 'index'])->name('pays.index');
    Route::get('pays/{pays}', [PaysController::class, 'show'])->name('pays.show');
    Route::delete('pays/{pays}', [PaysController::class, 'destroy'])->name('pays.destroy');

    /*************  ✨ Participants ✨   *************/
    /*******  Toutes les routes de participants *******/
    Route::get('participants', [ParticiperGroupementController::class, 'index'])->name('participants.index');
    Route::get('participants/{participant}', [ParticiperGroupementController::class, 'show'])->name('participants.show');
    Route::delete('participants/{participant}', [ParticiperGroupementController::class, 'destroy'])->name('participants.destroy');

    /*************  ✨ Propositions ✨   *************/
    /*******  Toutes les routes de propositions *******/
    Route::get('propositions', [PropositionController::class, 'index'])->name('propositions.index');
    Route::get('propositions/{proposition}', [PropositionController::class, 'show'])->name('propositions.show');
    Route::delete('propositions/{proposition}', [PropositionController::class, 'destroy'])->name('propositions.destroy');

    /*************  ✨ Roles ✨   *************/
    /*******  Toutes les routes de rôles *******/
    Route::get('roles', [RoleController::class, 'index'])->name('roles.index');
    Route::get('roles/{role}', [RoleController::class, 'show'])->name('roles.show');
    Route::delete('roles/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');

    /*************  ✨ Users ✨   *************/
    /*******  Toutes les routes d'utilisateurs *******/
    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/{user}', [UserController::class, 'show'])->name('users.show');
    Route::delete('users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

    // ################################ End Dashboard Routes ################################


});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';