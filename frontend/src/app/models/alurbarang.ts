export class AlurBarang{
    alurID: number;
    keterangan_pinjam:string;   
    user:string;
    waktupinjam:"dd-MM-yyyy";
    waktukembali:"dd-MM-yyyy";
    id_barang : number;
    laporan: string;
    nama_barang: string;

    constructor(){
        this.alurID=0;
        this.keterangan_pinjam="";
        this.user="";
        this.waktupinjam="dd-MM-yyyy";
        this.waktukembali="dd-MM-yyyy";
        this.id_barang= 0;
        this.laporan="";
        this.nama_barang="";
    }
}