<?php
namespace Database\Factories;

use App\Models\Categorie;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategorieFactory extends Factory
{
    protected $model = Categorie::class;

    public function definition()
    {
        $parentId = null;
        if (Categorie::count() > 0 && $this->faker->boolean()) {
            $parentId = Categorie::inRandomOrder()->first()->id;
        }
        return [
            'designation' => $this->faker->word,
            'parent_id' => $parentId,
        ];
    }
}
