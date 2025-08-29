<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logistique extends Model
{
    use HasFactory;
    protected $fillable = [
        'designation'
    ];
    public function groupements()
    {
        return $this->hasMany(Groupement::class, 'logistique_id');
    }
}
