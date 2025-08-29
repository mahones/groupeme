<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EtatGroupement extends Model
{
    use HasFactory;
    protected $fillable = [
        'designation'
    ];

    public function groupements()
    {
        return $this->hasMany(Groupement::class, 'etat_id');
    }
}
