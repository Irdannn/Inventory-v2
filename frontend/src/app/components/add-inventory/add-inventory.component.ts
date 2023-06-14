import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Barang } from 'src/app/models/barang';
//import { AuthapiService } from 'src/app/services/authapi.service';
import { BarangApiService } from 'src/app/services/barang-api.service';
//import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  addInventoryForm!: FormGroup;
  barang:Barang  = new Barang();

  selectedFile: File | null = null;

constructor(
  private fb: FormBuilder, 
  private api: BarangApiService, 
  private router : Router,
  private toast : NgToastService,
  private http : HttpClient
  ) {}

ngOnInit(): void {
  this.addInventoryForm = this.fb.group({
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
onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

  onAddInventory(){
    if (!this.selectedFile) {
      return;
    }

    if(this.addInventoryForm.valid) {

    const formData = new FormData();
    formData.append('nama_barang',this.addInventoryForm.value.nama_barang);
    formData.append('fasilitas', this.addInventoryForm.value.fasilitas);
    formData.append('tempat', this.addInventoryForm.value.tempat);
    formData.append('jenis', this.addInventoryForm.value.jenis);
    formData.append('tahun', this.addInventoryForm.value.tahun);
    formData.append('dana', this.addInventoryForm.value.dana);
    formData.append('sifat', this.addInventoryForm.value.sifat);
    formData.append('kondisi', this.addInventoryForm.value.kondisi);
    formData.append('jumlah', this.addInventoryForm.value.jumlah);
    formData.append('harga', this.addInventoryForm.value.harga);
    formData.append('aksesoris', this.addInventoryForm.value.aksesoris);
    formData.append('unit', this.addInventoryForm.value.unit);
    formData.append('picture', this.selectedFile);
    this.api.addProduct(formData)
      .subscribe({
        next:()=>{
          this.toast.success({detail: "BERHASIL!", summary:"Sukses menambah inventaris", duration: 5000});
          this.router.navigate(['allinventory'])
        },
        error:()=>{
          this.toast.error({detail: "ERROR", summary:"Oops, ada Api yang salah!", duration: 5000});
        }
      })
  //   if(this.addInventoryForm.valid) {
  //     // send the obj to database
  //     this.api.addProduct(this.addInventoryForm.value)
  //     .subscribe({
  //       next:()=>{
  //         this.toast.success({detail: "BERHASIL!", summary:"Sukses menambah inventaris", duration: 5000});
  //         this.addInventoryForm.reset();
  //         this.router.navigate(['allinventory'])
  //       },
  //       error:()=>{
  //         this.toast.error({detail: "ERROR", summary:"Oops, ada Api yang salah!", duration: 5000});
  //       }
  //     })
  //   } else {
  //     console.log("form is not valid")
  //     // check if the form is invalid
  //     ValidateForm.validateAllformsFields(this.addInventoryForm);
  //     this.toast.error({detail: "ERROR", summary:"Input Invalid, pastikan semua sudah diisi", duration: 5000});
    }else {
        console.log("form is not valid")
        // check if the form is invalid
        ValidateForm.validateAllformsFields(this.addInventoryForm);
        this.toast.error({detail: "ERROR", summary:"Input Invalid, pastikan semua sudah diisi", duration: 5000});   
}
  }
}
