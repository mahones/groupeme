<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParticiperGroupement extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'groupement_id',
        'statut',
        'montant',
        'date_participation'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function groupement()
    {
        return $this->belongsTo(Groupement::class, 'groupement_id');
    }
}
