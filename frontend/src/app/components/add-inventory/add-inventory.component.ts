import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription, finalize } from 'rxjs';
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
  barang!: Barang;

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
    unit: ['', Validators.required]
  });
}

  onAddInventory(){
    if(this.addInventoryForm.valid) {
      // send the obj to database
      this.api.addProduct(this.addInventoryForm.value)
      .subscribe({
        next:()=>{
          this.toast.success({detail: "BERHASIL!", summary:"Sukses menambah inventaris", duration: 5000});
          this.addInventoryForm.reset();
          this.router.navigate(['allinventory'])
        },
        error:()=>{
          this.toast.error({detail: "ERROR", summary:"Oops, ada Api yang salah!", duration: 5000});
        }
      })
    } else {
      console.log("form is not valid")
      // check if the form is invalid
      ValidateForm.validateAllformsFields(this.addInventoryForm);
      this.toast.error({detail: "ERROR", summary:"Input Invalid, pastikan semua sudah diisi", duration: 5000});
    }
  }
}
