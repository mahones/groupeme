<?php
namespace Database\Factories;

use App\Models\Categorie;
use App\Models\EtatGroupement;
use App\Models\Groupement;
use App\Models\Logistique;
use App\Models\Pays;
use Illuminate\Database\Eloquent\Factories\Factory;

class GroupementFactory extends Factory
{
    protected $model = Groupement::class;

    public function definition()
    {
        return [
            'titre' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'prix' => $this->faker->numberBetween(1000, 10000),
            'minimum_participant' => $this->faker->numberBetween(1, 100),
            'categorie_id' => Categorie::inRandomOrder()->first()->id,
            'logistique_id' => Logistique::inRandomOrder()->first()->id,
            'pays_id' => Pays::inRandomOrder()->first()->id,
            'etat_groupement_id' => EtatGroupement::inRandomOrder()->first()->id,
            'date_cloture' => $this->faker->date(),
        ];
    }
}
