<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class alurbarang extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user',
        'id_barang',
        'nama_user',
        'nama_barang',
        'keterangan_pinjam',
        'waktupinjam',
        'waktukembali'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function inventory()
    {
        return $this->belongsTo(inventory::class);
    }
}
