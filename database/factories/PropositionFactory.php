<?php
namespace Database\Factories;

use App\Models\Proposition;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropositionFactory extends Factory
{
    protected $model = Proposition::class;

    public function definition()
    {
        return [
            'titre' => $this->faker->sentence,
            'lien_url_alibaba' => $this->faker->url,
            'user_id' => User::inRandomOrder()->first()->id ?? null,
        ];
    }
}
