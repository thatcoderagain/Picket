<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->string('id');
            $table->string('intent');
            $table->string('state');
            $table->string('cart');
            // method
            $table->string('payment_method');
            $table->string('payer_id');
            $table->string('status');
            $table->string('country_code');
            $table->string('email');
            $table->string('first_name');
            $table->string('last_name');
            // transaction
            $table->string('invoice_number')->uniqid();
            $table->decimal('amount', 8, 2);
            $table->char('currency', 6);
            $table->string('merchant_id');
            $table->string('description');
            $table->timestamps();

            $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
