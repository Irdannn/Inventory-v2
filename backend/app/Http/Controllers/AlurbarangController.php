<?php

namespace App\Http\Controllers;

use App\Models\alurbarang;
use Illuminate\Http\Request;

class AlurbarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $alurbarang = alurbarang::all()->toArray();
       return $alurbarang;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $alurbarang = alurbarang::create([
            'id_user' => $request->id_user,
            'id_barang' => $request->id_barang,
            'nama_user' => $request->nama_user,
            'nama_barang' => $request->nama_barang,
            'keterangan_pinjam' => $request->keterangan_pinjam,
            'waktupinjam' => $request->waktupinjam,
            'waktukembali' => $request->waktukembali,
            'status' => $request->status
        ]);
        return $alurbarang;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return alurbarang::find($id);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'id_user' => 'required',
            'id_barang' => 'required',
            'nama_user' => 'required',
            'nama_barang' => 'required',
            'keterangan_pinjam' => 'required',
            'waktupinjam' => 'required',
            'waktukembali' => 'required',
            'status' => 'required'
        ]);

        $alurbarang = alurbarang::find($id);
        if (!$alurbarang) {
            return response()->json(['message' => 'Alurbarang not found'], 404);
        }

        $alurbarang->id_user = $request->input('id_user');
        $alurbarang->id_barang = $request->input('id_barang');
        $alurbarang->nama_user = $request->input('nama_user');
        $alurbarang->nama_barang = $request->input('nama_barang');
        $alurbarang->keterangan_pinjam = $request->input('keterangan_pinjam');
        $alurbarang->waktupinjam = $request->input('waktupinjam');
        $alurbarang->waktukembali = $request->input('waktukembali');
        $alurbarang->status = $request->input('status');
        $alurbarang->save();

        return $alurbarang;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $alurbarang = alurbarang::find($id);
        if (!$alurbarang) {
            return response()->json(['message' => 'Alur Dihapus'], 404);
        }

        $alurbarang->delete();

        return response()->json(['message' => 'Alur Dihapus']);
    }
}
