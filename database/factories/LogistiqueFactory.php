<?php
namespace Database\Factories;

use App\Models\Logistique;
use Illuminate\Database\Eloquent\Factories\Factory;

class LogistiqueFactory extends Factory
{
    protected $model = Logistique::class;

    public function definition()
    {
        return [
            'designation' => $this->faker->word,
        ];
    }
}
