export class Barang{
    id_barang : number;
    nama_barang:string;
	fasilitas:string;
    tempat:string;
    jenis:string;
    tahun:number;
    dana:string;
    sifat:string;
    kondisi:string;
    jumlah:number;
    harga: number;
    user: string;
    waktumeminjam:"yyyy-MM-dd";
    waktukembali:"yyyy-MM-dd";
    aksesoris: string;

    constructor(){
        this.id_barang= 0;
        this.nama_barang="";
        this.fasilitas="";
        this.tempat="";
        this.jenis="";
        this.tahun=2023;
        this.dana="";
        this.sifat="";
        this.kondisi="";
        this.jumlah=0;
        this.harga=0;
        this.waktumeminjam="yyyy-MM-dd";
        this.waktukembali="yyyy-MM-dd";
        this.user="";
        this.aksesoris="";
    }
}