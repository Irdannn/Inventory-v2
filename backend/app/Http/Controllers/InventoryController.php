<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use App\Models\sop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class InventoryController extends Controller
{
    public function index()
    {
        $inventory = inventory::all()->toArray();
        return $inventory;
    }

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
        ]);

        $inventory = new inventory();

        if ($request->hasFile('picture')) {
            $picturePath = $request->file('picture')->store('pubic/pictures');
            $inventory->picture = Storage::url($picturePath);
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
            $inventory->picture = Storage::url($picturePath); // Save the path starting with 'storage/'
            $inventory->save();

            return response()->json(['message' => 'Picture uploaded successfully']);
        }


        return $inventory;

    }

    public function updatePict(Request $request, $id)
    {
        $request->validate([
            'picture' => 'required|image|max:2048',
            //'name' => 'required|string|max:255'
        ]);
    
        $inventory = Inventory::find($id);
    
        if (!$inventory) {
            return response()->json(['message' => 'Inventory not found'], 404);
        }
    
        // Update the inventory name
        //$inventory->name = $request->input('name');
    
        // Check if a new picture is provided
        if ($request->hasFile('picture')) {
            // Delete the old picture if it exists
            $oldPicturePath = str_replace('storage/', 'public/', $inventory->picture);
            Storage::delete($oldPicturePath);
    
            // Store and update the new picture
            $newPicturePath = $request->file('picture')->store('public/pictures');
            $inventory->picture = $newPicturePath;
        }
    
        $inventory->save();
    
        return response()->json(['message' => 'Inventory updated successfully']);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
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
        ]);

        $inventory=inventory::findOrFail($id);
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

    public function tempat(Request $request, $tempat)
    {
        $inventory = inventory::where('tempat', $tempat)->get();

        return $inventory;
    }

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
    
    public function view($id)
    {
        $picture = inventory::find($id);

        if (!$picture) {
            return response()->json(['message' => 'Picture not found'], 404);
        }

        return response()->json(['picture' => $picture]);
    }

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