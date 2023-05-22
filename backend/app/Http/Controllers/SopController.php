<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use App\Models\sop;
use Illuminate\Http\Request;

class SopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sop = sop::all()->toArray();
        return $sop;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $sop = sop::create([
            'id_user' => $request->id_user,
            'id_barang' => $request->id_barang,
            'nama_user' => $request->nama_user,
            'nama_barang' => $request->nama_barang,
            'kondisi' => $request->kondisi,
            'waktusop' => $request->waktusop
        ]);
        if ($request->has('id_barang')){
            $inventory = inventory::find($request->input('id_barang'));
            $inventory->update(['kondisi' => $request->input('kondisi')]);
        }
        return $sop;
    }

    /**
     * Display the specified resource.
     */
    public function show(sop $id)
    {
        return sop::find($id);
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
            'kondisi' => 'required',
            'waktusop' => 'required'
        ]);

        $sop = sop::find($id);
        if (!$sop){
            return response()->json(['message'=> 'Data SOP tidak ditemukan'], 404);
        }

        $sop->id_user = $request->input('id_user');
        $sop->id_barang = $request->input('id_barang');
        $sop->nama_user = $request->input('nama_user');
        $sop->nama_barang = $request->input('nama_barang');
        $sop->kondisi = $request->input('kondisi');
        $sop->waktusop = $request->input('waktusop');
        $sop->save();

        if ($request->has('id_barang')) {
            $inventory = inventory::find($request->input('id_barang'));
            $inventory->update(['kondisi' => $request->input('kondisi')]);
        }

        return $sop;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $sop = sop::find($id);
        if (!$sop) {
            return response()->json(['message' => 'Alur Dihapus'], 404);
        }

        $sop->delete();

        return response()->json(['message' => 'Alur Dihapus']);
    }
}
