<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable = [
        'image_url',
        'groupement_id'
    ];

    public function groupement()
    {
        return $this->belongsTo(Groupement::class, 'groupement_id');
    }
}
