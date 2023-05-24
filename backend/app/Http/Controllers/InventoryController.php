<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use App\Models\sop;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventory = inventory::all()->toArray();
        return $inventory;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $inventory = inventory::create([
            'nama_barang' => $request->nama_barang,
            'fasilitas' => $request->fasilitas,
            'tempat' => $request->tempat,
            'jenis' => $request->jenis,
            'tahun' => $request->tahun,
            'dana' => $request->dana,
            'sifat' => $request->sifat,
            'kondisi' => $request->kondisi,
            'jumlah' => $request->jumlah,
            'harga' => $request->harga,
            'aksesoris' => $request-> aksesoris,
            'unit' => $request->unit,
            'status' => $request->status 
        ]);

        return $inventory;
    }

    public function tempat(Request $request, $tempat)
    {
        // Retrieve inventory by tempat
        $inventory = inventory::where('tempat', $tempat)->get();

        return $inventory;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return inventory::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'nama_barang' => 'required',
            'fasilitas' => 'required',
            'tempat' => 'required',
            'jenis',
            'tahun',
            'dana',
            'sifat',
            'kondisi',
            'jumlah',
            'harga',
            'aksesoris',
            'unit',
            'status'
        ]);

        $inventory = inventory::find($id);
        if (!$inventory) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        $inventory->nama_barang = $request->input('nama_barang');
        $inventory->fasilitas = $request->input('fasilitas');
        $inventory->tempat = $request->input('tempat');
        $inventory->jenis = $request->input('jenis');
        $inventory->tahun = $request->input('tahun');
        $inventory->dana = $request->input('dana');
        $inventory->sifat = $request->input('sifat');
        $inventory->kondisi = $request->input('kondisi');
        $inventory->jumlah = $request->input('jumlah');
        $inventory->harga = $request->input('harga');
        $inventory->aksesoris = $request->input('aksesoris');
        $inventory->unit = $request->input('unit');
        $inventory->status = $request->input('status');
        $inventory->save();

        return $inventory;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $inventory = inventory::find($id);
        if (!$inventory) {
            return response()->json(['message' => 'Barang Tidak ditemukan'], 404);
        }

        $inventory->delete();

        return response()->json(['message' => 'Barang dihapus Dihapus']);
    }
}
