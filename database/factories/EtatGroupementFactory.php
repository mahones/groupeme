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
            'designation' => $this->faker->word,
        ];
    }
}
