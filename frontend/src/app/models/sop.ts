export class Sop{
    id : number;
    id_user : number;
    id_barang : number;
    nama_user : string;
    nama_barang : string;
    kondisi : string;
    waktusop : string;
    jumlah : number;

    constructor(){
        this.id= 0;
        this.id_user=0;
        this.id_barang=0;
        this.nama_barang="";
        this.nama_user="";
        this.kondisi="";
        this.waktusop="";
        this.jumlah=0;
    }
}