<?php
namespace Database\Factories;

use App\Models\EtatGroupement;
use Illuminate\Database\Eloquent\Factories\Factory;

class EtatGroupementFactory extends Factory
{
    protected $model = EtatGroupement::class;
    public function definition()
    {
        return [
            'titre' => $this->faker->word,
            'description' => $this->faker->word,
        ];
    }
}
