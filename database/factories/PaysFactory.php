<?php
namespace Database\Factories;

use App\Models\Pays;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaysFactory extends Factory
{
    protected $model = Pays::class;

    public function definition()
    {
        return [
            'nom' => $this->faker->country,
            'lien_icon' => $this->faker->imageUrl(),
        ];
    }
}
