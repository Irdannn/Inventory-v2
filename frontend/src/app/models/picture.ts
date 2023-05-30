export class Picture{
    id : number;
    id_barang : number;
    id_user : number;
    nama_barang:string;
    nama_user: string;
    picture!: File;

    constructor(){
        this.id= 0;
        this.nama_barang="";
        this.id_barang=0;
        this.id_user=0;
        this.nama_user="";
    }
}