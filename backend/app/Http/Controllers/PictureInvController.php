<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use App\Models\PictureInv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class PictureInvController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $picture = PictureInv::all()->toArray();
        return $picture;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'id_user'  => 'required',
            'id_barang' => 'required',
            'nama_user' => 'required',
            'nama_barang'  => 'required',
            'picture' => 'required|mimes:jpeg,png|max:5000'
        ]);
        $picture = new PictureInv();
        $picture->id_user = $validateData['id_user'];
        $picture->id_barang = $validateData['id_barang'];
        $picture->nama_user = $validateData['nama_user'];
        $picture->nama_barang = $validateData['nama_barang'];

        if ($request->hasFile('picture')){
            $picturePath = $request->file('picture')->store('pubic/pictures');
            $picture->picture = Storage::url($picturePath);
        }
        $picture->save();

        return $picture;
    }

    // public function store(Request $request)
    // {
    //     $picture = PictureInv::create([
    //         'id_user' => $request->id_user,
    //         'id_barang' => $request->id_barang,
    //         'nama_user' => $request->nama_user,
    //         'nama_barang' => $request->nama_barang,
    //         'picture' => $request->picture
    //     ]);
    //     if ($request->hasFile('picture')){
    //             $picturePath = $request->file('picture')->store('pubic/pictures');
    //             $picture->picture = Storage::url($picturePath);
    //         }
    //     if ($request->has('id_barang')) {
    //         $inventory = inventory::find($request->input('id_barang'));
    //         $inventory->update(['picture' => $request->input('picture')]);
    //     }
    //     return $picture;
    // }

    // public function getPicture($id)
    // {
    //     $inventory = inventory::findOrFail($id);

    //     if ($inventory->picture) {
    //         $storagePath = str_replace('storage/', '', $inventory->picture);
    //         $filePath = storage_path('app/' . $storagePath);

    //         if (file_exists($filePath)) {
    //             return response()->file($filePath);
    //         }
    //     }

    //     return response()->json(['error' => 'Picture not found'], 404);
    // }
    public function show($id)
    {
        $picture = PictureInv::findOrFail($id);

    if ($picture->picture) {
        $storagePath = str_replace('storage/', '', $picture->picture);
        $filePath = storage_path('app/' . $storagePath);

        if (file_exists($filePath)) {
            return response()->file($filePath);
        }
    }

    return response()->json(['error' => 'Picture not found'], 404);
    }
}
