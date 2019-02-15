<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotographersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photographers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->index();
            $table->date('dob')->nullable();
            $table->string('phone')->unique()->nullable();
            $table->enum('sex', ['male', 'female', 'unisex'])->nullable();
            $table->string('specialization');
            $table->string('location');
            $table->money('charges');
            $table->timestamps();

            // $table->foreign('root')->references('root')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('photographers');
    }
}
