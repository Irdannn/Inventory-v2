export class Laporan{
    id : number;
    id_user : number;
    id_barang : number;
    nama_user : string;
    nama_barang : string;
    laporan : string;

    constructor(){
        this.id= 0;
        this.id_user=0;
        this.id_barang=0;
        this.nama_barang="";
        this.nama_user="";
        this.laporan="";
    }
}