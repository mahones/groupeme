<?php

namespace Database\Seeders;

use App\Models\User;
use \App\Models\Role;
use \App\Models\Proposition;
use \App\Models\Pays;
use \App\Models\Logistique;
use \App\Models\EtatGroupement;
use \App\Models\Categorie;
use \App\Models\Groupement;
use \App\Models\Image;
use \App\Models\ParticiperGroupement;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Pays::factory(10)->create();
        Logistique::factory(10)->create();
        Categorie::factory(10)->create();
        Role::factory(10)->create();
        Proposition::factory(10)->create();
        EtatGroupement::factory(10)->create();
        Groupement::factory(20)->create();
        Image::factory(30)->create();
        ParticiperGroupement::factory(10)->create();
    }
}
