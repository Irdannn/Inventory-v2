<?php

namespace App\Http\Controllers;

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

    /**
     * Display the specified resource.
     */
    public function show(PictureInv $pictureInv)
    {
        return Storage::response($pictureInv->picture);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PictureInv $pictureInv)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PictureInv $pictureInv)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PictureInv $pictureInv)
    {
        //
    }
}
