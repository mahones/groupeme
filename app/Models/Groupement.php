<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groupement extends Model
{
    use HasFactory;
    protected $fillable = [
        'titre',
        'description',
        'prix',
        'minimum_participant',
        'categorie_id',
        'logistique_id',
        'pays_id',
        'etat_groupement_id',
        'user_id',
        'date_cloture'
    ];

    public function logistique()
    {
        return $this->belongsTo(Logistique::class, 'logistique_id');
    }
    public function pays()
    {
        return $this->belongsTo(Pays::class, 'pays_id');
    }
    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }
    public function etatGroupement()
    {
        return $this->belongsTo(EtatGroupement::class, 'etat_groupement_id');
    }
    public function images()
    {
        return $this->hasMany(Image::class, 'groupement_id');
    }
    public function participants()
    {
        return $this->hasMany(ParticiperGroupement::class);
        
    }
}
