import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Barang } from 'src/app/models/barang';
import { BarangApiService } from 'src/app/services/barang-api.service';

@Component({
  selector: 'app-edit-gambar',
  templateUrl: './edit-gambar.component.html',
  styleUrls: ['./edit-gambar.component.css']
})
export class EditGambarComponent implements  OnInit {
  barang:Barang  = new Barang();
  public role! : string;

  editGambarForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private api: BarangApiService,
    private route : ActivatedRoute,
    private router : Router,
    private toast : NgToastService,
    private fb : FormBuilder
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
    this.editGambarForm = this.fb.group({
      nama_barang : "",
      picture: null
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  editGambar() {
    if (!this.selectedFile) {
      return;
    }
    
    const formData = new FormData();
    formData.append('nama_barang',this.editGambarForm.value.nama_barang);
    formData.append('picture', this.selectedFile);

    this.api.updateGambarBarang(this.barang.id, formData)
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
}