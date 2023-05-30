<?php

namespace App\Models;

use App\Models\PictureInv;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class inventory extends Model
{
    use HasFactory;
    protected $fillable = [
        'nama_barang',
        'fasilitas',
        'tempat',
        'jenis',
        'tahun',
        'dana',
        'sifat',
        'kondisi',
        'jumlah',
        'harga',
        'aksesoris',
        'unit',
        'status',
        'picture'
    ];
    public function lihatinventory()
    {
        return $this->hasMany(inventory::class);
    }
    // public function pictures()
    // {
    //     return $this->hasMany(PictureInv::class);
    // }
}
