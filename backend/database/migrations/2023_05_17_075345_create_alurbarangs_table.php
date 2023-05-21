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
        Schema::create('alurbarangs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_user');
            $table->foreign('id_user')->references('id')->on('users');
            $table->unsignedBigInteger('id_barang');
            $table->foreign('id_barang')->references('id')->on('inventories');
            $table->string('nama_user')->nullable();
            $table->string('nama_barang')->nullable();
            $table->string('keterangan_pinjam')->nullable();
            $table->string('status')->nullable();
            $table->dateTime('waktupinjam')->nullable();
            $table->dateTime('waktukembali')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alurbarangs');
    }
};
