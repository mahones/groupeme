<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pays extends Model
{

    use HasFactory;
    protected $fillable = [
        'nom',
        'lien_icon'
    ];

    public function groupements()
    {
        return $this->hasMany(Groupement::class, 'pays_id');
    }
}
