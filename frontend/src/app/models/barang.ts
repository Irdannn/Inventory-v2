export class Barang{
    id : number;
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
    aksesoris: string;
    unit:string;
    status:string;
    picture!:string;

    constructor(){
        this.id= 0;
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
        this.aksesoris="";
        this.unit="";
        this.status="";
    }
}