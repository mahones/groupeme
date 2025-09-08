<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreGroupementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'prix' => 'required|numeric|min:0',
            'minimum_participant' => 'required|integer|min:1',
            'categorie_id' =>  'required|exists:categories,id',
            'logistique_id' => 'required|exists:logistiques,id',
            'pays_id' => 'required|exists:pays,id',
            'etat_groupement_id' => 'required|exists:etat_groupements,id',
            'user_id' => 'required|exists:users,id',
            'date_cloture' => 'required|date|after:today',      // --- IGNORE ---
        ];
    }
}
