import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { Barang } from 'src/app/models/barang';
import { BarangApiService } from 'src/app/services/barang-api.service';

@Component({
  selector: 'app-add-inventory-karyawan',
  templateUrl: './add-inventory-karyawan.component.html',
  styleUrls: ['./add-inventory-karyawan.component.css']
})
export class AddInventoryKaryawanComponent implements OnInit {

  addInventoryForm!: FormGroup;
  barang:Barang  = new Barang();
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder, 
    private api: BarangApiService,
    private router : Router,
    private toast : NgToastService,
    //private userStore: UserStoreService,
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
    }
}
