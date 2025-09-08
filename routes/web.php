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
    Route::get('categories/create', [CategorieController::class, 'create'])->name('categories.create');
    Route::post('categories/store', [CategorieController::class, 'store'])->name('categories.store');
    Route::get('categories/edit/{categorie}', [CategorieController::class, 'edit'])->name('categories.edit');
    Route::get('categories/show/{categorie}', [CategorieController::class, 'show'])->name('categories.show');
    Route::delete('categories/{categorie}', [CategorieController::class, 'destroy'])->name('categories.destroy');
    

    /*************  ✨ Etat Groupement ✨   *************/
    /*******  Toutes les routes d'état de groupement *******/
    Route::get('etatgroupement', [EtatGroupementController::class, 'index'])->name('etatgroupements.index');
    Route::get('etatgroupement/create', [EtatGroupementController::class, 'create'])->name('etatgroupements.create');
    Route::post('etatgroupement/store', [EtatGroupementController::class, 'store'])->name('etatgroupements.store');
    Route::get('etatgroupement/edit/{etatgroupement}', [EtatGroupementController::class, 'edit'])->name('etatgroupements.edit');
    Route::get('etatgroupement/show/{etatgroupement}', [EtatGroupementController::class, 'show'])->name('etatgroupements.show');
    Route::delete('etatgroupement/{etatgroupement}', [EtatGroupementController::class, 'destroy'])->name('etatgroupements.destroy');
    

    /*************  ✨ Groupement ✨   *************/
    /*******  Toutes les routes de groupement *******/
    Route::get('groupements', [GroupementController::class, 'index'])->name('groupements.index');
    Route::get('groupements/create', [GroupementController::class, 'create'])->name('groupements.create');
    Route::post('groupements/store', [GroupementController::class, 'store'])->name('groupements.store');
    Route::get('groupements/edit/{groupement}', [GroupementController::class, 'edit'])->name('groupements.edit');
    Route::get('groupements/show/{groupement}', [GroupementController::class, 'show'])->name('groupements.show');
    Route::delete('groupements/{groupement}', [GroupementController::class, 'destroy'])->name('groupements.destroy');
    

    /*************  ✨ Images ✨   *************/
    /*******  Toutes les routes d'images *******/
    Route::get('images_groupement', [ImageController::class, 'index'])->name('images_groupement.index');
    Route::get('images_groupement/create', [ImageController::class, 'create'])->name('images_groupement.create');
    Route::post('images_groupement/store', [ImageController::class, 'store'])->name('images_groupement.store');
    Route::get('images_groupement/edit/{image}', [ImageController::class, 'edit'])->name('images_groupement.edit');
    Route::get('images_groupement/show/{image}', [ImageController::class, 'show'])->name('images_groupement.show');
    Route::delete('images_groupement/{image}', [ImageController::class, 'destroy'])->name('images_groupement.destroy');

    /*************  ✨ Logistique ✨   *************/
    /*******  Toutes les routes de logistique *******/
    Route::get('logistiques', [LogistiqueController::class, 'index'])->name('logistiques.index');
    Route::get('logistiques/create', [LogistiqueController::class, 'create'])->name('logistiques.create');
    Route::post('logistiques/store', [LogistiqueController::class, 'store'])->name('logistiques.store');
    Route::get('logistiques/edit/{logistique}', [LogistiqueController::class, 'edit'])->name('logistiques.edit');
    Route::get('logistiques/show/{logistique}', [LogistiqueController::class, 'show'])->name('logistiques.show');
    Route::delete('logistiques/{logistique}', [LogistiqueController::class, 'destroy'])->name('logistiques.destroy');

    /*************  ✨ Pays ✨   *************/
    /*******  Toutes les routes de pays *******/
    Route::get('pays', [PaysController::class, 'index'])->name('pays.index');
    Route::get('pays/create', [PaysController::class, 'create'])->name('pays.create');
    Route::post('pays/store', [PaysController::class, 'store'])->name('pays.store');
    Route::get('pays/edit/{pays}', [PaysController::class, 'edit'])->name('pays.edit');
    Route::get('pays/show/{pays}', [PaysController::class, 'show'])->name('pays.show');
    Route::delete('pays/{pays}', [PaysController::class, 'destroy'])->name('pays.destroy');
    

    /*************  ✨ Participants ✨   *************/
    /*******  Toutes les routes de participants *******/
    Route::get('participants', [ParticiperGroupementController::class, 'index'])->name('participants.index');
    Route::get('participants/create', [ParticiperGroupementController::class, 'create'])->name('participants.create');
    Route::post('participants/store', [ParticiperGroupementController::class, 'store'])->name('participants.store');
    Route::get('participants/edit/{participant}', [ParticiperGroupementController::class, 'edit'])->name('participants.edit');
    Route::get('participants/show/{participant}', [ParticiperGroupementController::class, 'show'])->name('participants.show');
    Route::delete('participants/{participant}', [ParticiperGroupementController::class, 'destroy'])->name('participants.destroy');
    

    /*************  ✨ Propositions ✨   *************/
    /*******  Toutes les routes de propositions *******/
    Route::get('propositions', [PropositionController::class, 'index'])->name('propositions.index');
    Route::get('propositions/create', [PropositionController::class, 'create'])->name('propositions.create');
    Route::post('propositions/store', [PropositionController::class, 'store'])->name('propositions.store');
    Route::get('propositions/edit/{proposition}', [PropositionController::class, 'edit'])->name('propositions.edit');
    Route::get('propositions/show/{proposition}', [PropositionController::class, 'show'])->name('propositions.show');
    Route::delete('propositions/{proposition}', [PropositionController::class, 'destroy'])->name('propositions.destroy');
    

    /*************  ✨ Roles ✨   *************/
    /*******  Toutes les routes de rôles *******/
    Route::get('roles', [RoleController::class, 'index'])->name('roles.index');
    Route::get('roles/create', [RoleController::class, 'create'])->name('roles.create');
    Route::post('roles/store', [RoleController::class, 'store'])->name('roles.store');
    Route::get('roles/edit/{role}', [RoleController::class, 'edit'])->name('roles.edit');
    Route::get('roles/show/{role}', [RoleController::class, 'show'])->name('roles.show');
    Route::delete('roles/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
    

    /*************  ✨ Users ✨   *************/
    /*******  Toutes les routes d'utilisateurs *******/
    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('users/store', [UserController::class, 'store'])->name('users.store');
    Route::get('users/edit/{user}', [UserController::class, 'edit'])->name('users.edit');
    Route::get('users/show/{user}', [UserController::class, 'show'])->name('users.show');
    Route::delete('users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

    // ################################ End Dashboard Routes ################################


});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';