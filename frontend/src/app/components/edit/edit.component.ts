import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/models/barang';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  barang:Barang  = new Barang();
  updateForm!: FormGroup;

  constructor(
    private api: BarangApiService,
    private route : ActivatedRoute,
    private router : Router,
    private toast : NgToastService,
    private fb: FormBuilder
    ) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idBarang = params.get('idBarang');
        if (idBarang) {
          this.api.getInventory(idBarang)
          .subscribe({
            next: (response) => {
              this.barang = response;
            }
          })
        }
      }
    });
    this.updateForm = this.fb.group({
      nama_barang: ['', Validators.required],
      aksesoris:[''],
      fasilitas: ['', Validators.required],
      tempat: ['', Validators.required],
      tahun: [''],
      jenis: ['', Validators.required],
      jumlah: [Validators.required],
      dana: [''],
      sifat: ['', Validators.required],
      kondisi: ['', Validators.required],
      harga: [],
      unit: ['', Validators.required],
      picture: [File]
    });
  }

  updateInventory(){
    this.api.updateBarang(this.barang.id, this.barang)
      .subscribe({
        next:()=>{
          this.toast.success({detail: "BERHASIL!", summary:"Sukses menambah inventaris", duration: 5000});
          this.router.navigate(['allinventory'])
        },
        error:()=>{
          this.toast.error({detail: "ERROR", summary:"Oops, ada Api yang salah!", duration: 5000});
        }
      })
  }

  deleteInventory(id_barang: number) {
    this.api.deleteBarang(id_barang)
    .subscribe({
      next: () => {
        this.router.navigate(['allinventory']);
        this.toast.success({detail: "BERHASIL", summary:"Barang berhasil dihapus", duration: 5000});
      },
      error:()=> {
        this.toast.error({detail: "Error", summary:"Gagal menghapus", duration: 5000});
      }
    })
  }
}
