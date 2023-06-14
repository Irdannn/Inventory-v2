<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;

class PictureController extends Controller
{
    public function index()
    {
        $pictures = Picture::all();
        return $pictures;
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_barang' => 'required',
            'nama_barang' => 'required',
            'image' => 'required|mimes:jpeg,png|max:5000',
        ]);
    
        // Get the uploaded image file
        $image = $request->file('image');
    
        // Generate a unique name for the image
        $imageName = time() . '_' . $image->getClientOriginalName();
    
        // Define the storage path for the image
        $storagePath = 'images/';
    
        // Move the uploaded image to the storage path
        $image->move(public_path($storagePath), $imageName);
    
        // Create the picture record in the database
        $picture = Picture::create([
            'id_barang' => $request->input('id_barang'),
            'nama_barang' => $request->input('nama_barang'),
            'image_path' => $storagePath . $imageName,
        ]);
    
        return $picture;
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'id_barang' => 'required',
            'nama_barang' => 'required',
            'image' => 'required|mimes:jpeg,png|max:5000',
        ]);

        $picture = Picture::findOrFail($id);

        // Update the fields
        $picture->id_barang = $request->input('id_barang');
        $picture->nama_barang = $request->input('nama_barang');

        // Check if a new image was uploaded
        if ($request->hasFile('image')) {
            // Get the uploaded image file
            $image = $request->file('image');

            // Generate a unique name for the image
            $imageName = time() . '_' . $image->getClientOriginalName();

            // Define the storage path for the image
            $storagePath = 'images/';

            // Move the uploaded image to the storage path
            $image->move(public_path($storagePath), $imageName);

            // Delete the previous image file, if it exists
            if ($picture->image_path) {
                unlink(public_path($picture->image_path));
            }

            // Set the new image path
            $picture->image_path = $storagePath . $imageName;
        }

        $picture->save();

        return response()->json($picture, 200);
    }

    public function getImage($id)
    {
        $picture = Picture::findOrFail($id);
        $imagePath = $picture->image_path;
        $imageFullPath = public_path($imagePath);
        if (file_exists($imageFullPath)) {
            return response()->file($imageFullPath);
        }

        return response()->json(['error' => 'Image not found.'], 404);
    }


    public function destroy($id)
    {
        $picture = Picture::findOrFail($id);
        $picture->delete();
        return response()->json(null, 204);
    }
}
