import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
//import { AuthapiService } from 'src/app/services/authapi.service';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';
//import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})

export class AddInventoryComponent implements OnInit {

  //public role! :string;
  addInventoryForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private api: ServiceBarangApi, 
    private router : Router,
    private toast : NgToastService,
    //private userStore : UserStoreService,
    //private auth : AuthapiService
    ) {}

  ngOnInit(): void {
    this.addInventoryForm = this.fb.group({
      nama_barang: ['', Validators.required],
      aksesoris:[''],
      fasilitas: ['', Validators.required],
      tempat: ['', Validators.required],
      tahun: [''],
      jenis: ['', Validators.required],
      jumlah: [0, Validators.required],
      dana: [''],
      sifat: ['', Validators.required],
      kondisi: ['', Validators.required],
      harga: [0],
    });

    // this.userStore.getFullNameFromStore()
    // .subscribe(val=> {
    //   // const rolefromToken = this.auth.getRoleFromToken();
    //   // this.role = val || rolefromToken
    // })
  }

  onAddInventory(){
    if(this.addInventoryForm.valid) {
      // send the obj to database
      this.api.addProduct(this.addInventoryForm.value)
      .subscribe({
        next:()=>{
          this.toast.success({detail: "BERHASIL!", summary:"Sukses menambah Inventaris", duration: 5000});
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
