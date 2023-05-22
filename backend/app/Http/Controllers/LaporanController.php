<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use App\Models\laporan;
use Illuminate\Http\Request;

class LaporanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $laporan = laporan::all()->toArray();
       return $laporan;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $laporan = laporan::create([
            'id_user' => $request->id_user,
            'id_barang' => $request->id_barang,
            'nama_user' => $request->nama_user,
            'nama_barang' => $request->nama_barang,
            'laporan' => $request->laporan
        ]);
        if ($request->has('id_barang')) {
            $inventory = inventory::find($request->input('id_barang'));
            $inventory->update(['kondisi' => $request->input('laporan')]);
        }
        return $laporan;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return laporan::find($id);
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
            'laporan' => 'required'
        ]);

        $laporan = laporan::find($id);
        if (!$laporan) {
            return response()->json(['message' => 'Laporan not found'], 404);
        }

        $laporan->id_user = $request->input('id_user');
        $laporan->id_barang = $request->input('id_barang');
        $laporan->nama_user = $request->input('nama_user');
        $laporan->nama_barang = $request->input('nama_barang');
        $laporan->laporan = $request->input('laporan');
        $laporan->save();
        if ($request->has('id_barang')) {
            $inventory = inventory::find($request->input('id_barang'));
            $inventory->update(['kondisi' => $request->input('laporan')]);
        }

        return $laporan;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $laporan = laporan::find($id);
        if (!$laporan) {
            return response()->json(['message' => 'Laporan Not Found'], 404);
        }

        $laporan->delete();

        return response()->json(['message' => 'Laporan Dihapus']);
    }
}
