<?php
namespace Database\Factories;

use App\Models\Image;
use App\Models\Groupement;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImageFactory extends Factory
{
    protected $model = Image::class;

    public function definition()
    {
        
        return [
            'image_url' => $this->faker->imageUrl(),
            'groupement_id' => Groupement::inRandomOrder()->first()->id ?? null,
        ];
    }
}
