<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PictureInv extends Model
{
    use HasFactory;
    protected $fillable=[
        'id_user',
        'id_barang',
        'nama_user',
        'nama_barang',
        'picture'
    ];
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function inventory()
    {
        return $this->belongsTo(inventory::class);
    }
}
