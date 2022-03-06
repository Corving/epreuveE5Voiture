<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->string("immatriculation",7);
            $table->String("marque",30);
            $table->String("modele",30);
            $table->String("couleur",30);
            $table->foreignId("car_options_id")->constrained();
            $table->timestamps();

            $table->primary(['immatriculation','modele']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
        Schema::drop('cars');
    }
};
