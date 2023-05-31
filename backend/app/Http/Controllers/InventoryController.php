<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use App\Models\sop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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
        $this->validate($request, [
            'nama_barang' => 'required',
            'fasilitas' => 'required',
            'tempat' => 'required',
            'jenis' => 'required',
            'tahun',
            'dana',
            'sifat' => 'required',
            'kondisi' => 'required',
            'jumlah' => 'required',
            'harga',
            'aksesoris',
            'unit' => 'required',
            'status',
            'picture' => 'nullable|mimes:jpeg,png|max:5000'
            //'picture' => 'required|mimes:jpeg,png|max:5000'
        ]);

        $inventory = new inventory();
        $inventory -> nama_barang = $request['nama_barang'];
        $inventory -> fasilitas = $request['fasilitas'];
        $inventory -> tempat = $request['tempat'];
        $inventory -> jenis = $request['jenis'];
        $inventory -> tahun = $request['tahun'];
        $inventory -> dana = $request['dana'];
        $inventory -> sifat = $request['sifat'];
        $inventory -> kondisi = $request['kondisi'];
        $inventory -> jumlah= $request['jumlah'];
        $inventory -> harga = $request['harga'];
        $inventory -> aksesoris = $request['aksesoris'];
        $inventory -> unit = $request['unit'];
        $inventory -> status = $request['status']; 

        if ($request->hasFile('picture')) {
            $image = $request->file('picture');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $inventory->picture = $imageName;
        }

        $inventory->save();


        return $inventory;

    }

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
            'status',
            //'picture'
            'picture' => 'required|mimes:png,jpg|max:5000'
        ]);

        $inventory = inventory::find($id);
        if (!$inventory) {
            return response()->json(['message' => 'inventory not found'], 404);
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
        $inventory->picture = $request->input('picture');

        if ($request->hasFile('picture')) {
            $image = $request->file('picture');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $inventory->picture = $imageName;
        }
        $inventory->save();

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

    public function showpict($id)
    {
        $picture = inventory::findOrFail($id);

    if ($picture->picture) {
        $storagePath = str_replace('storage/', '', $picture->picture);
        $filePath = storage_path('app/' . $storagePath);

        if (file_exists($filePath)) {
            return response()->file($filePath);
        }
    }

    return response()->json(['error' => 'Picture not found'], 404);
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
