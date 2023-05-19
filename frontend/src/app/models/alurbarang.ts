export class AlurBarang{
    id: number;
    id_user: number;   
    nama_user:string;
    nama_barang: string;
    id_barang: number;
    keterangan_pinjam:string;
    waktupinjam:"dd-MM-yyyy";
    waktukembali:"dd-MM-yyyy";

    constructor(){
        this.id=0;
        this.id_user=0;
        this.nama_user="";
        this.id_barang= 0;
        this.nama_barang="";
        this.keterangan_pinjam="";
        this.waktupinjam="dd-MM-yyyy";
        this.waktukembali="dd-MM-yyyy";
    }
}