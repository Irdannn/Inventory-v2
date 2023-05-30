<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use App\Models\PictureInv;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $uploadedFile = $request->file('image');
        
        // Validate the uploaded file (optional)
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        
        // Generate a unique filename for the uploaded image
        $filename = time() . '.' . $uploadedFile->getClientOriginalExtension();

        // Save the image to the storage directory
        inventory::make($uploadedFile)
            ->resize(300, 300) // Resize the image if needed
            ->save(storage_path('app/public/images/' . $filename));

        // Return the filename or any other response as needed
        return response()->json(['filename' => $filename]);
    }
}
