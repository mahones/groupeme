<?php
namespace Database\Factories;

use App\Models\ParticiperGroupement;
use App\Models\User;
use App\Models\Groupement;
use Illuminate\Database\Eloquent\Factories\Factory;

class ParticiperGroupementFactory extends Factory
{
    protected $model = ParticiperGroupement::class;

    public function definition()
    {
        static $used = [];
            do {
                $user_id = User::inRandomOrder()->first()->id;
                $groupement_id = Groupement::inRandomOrder()->first()->id;
                $key = $user_id . '-' . $groupement_id;
            } while (in_array($key, $used));
            $used[] = $key;
        return [
            'user_id' => $user_id,
            'groupement_id' => $groupement_id,
            'montant' => $this->faker->numberBetween(1, 10),
        ];
    }
}
