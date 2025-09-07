<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('groupements', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->text('description')->nullable();
            $table->decimal('prix', 10, 2);
            $table->integer('minimum_participant');
            $table->foreignId('categorie_id')->constrained()->onDelete('cascade');
            $table->foreignId('logistique_id')->constrained()->onDelete('cascade');
            $table->foreignId('pays_id')->constrained()->onDelete('cascade');
            $table->foreignId('etat_groupement_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->date('date_cloture');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('groupements');
    }
};
