export class Picture{
    id : number;
    id_barang : number;
    nama_barang:string;
    picture!: File;

    constructor(){
        this.id= 0;
        this.nama_barang="";
        this.id_barang=0;
    }
}