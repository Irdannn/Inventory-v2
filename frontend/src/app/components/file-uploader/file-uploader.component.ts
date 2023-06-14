import { Component, OnInit } from '@angular/core';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlurBarang } from 'src/app/models/alurbarang';
import { Barang } from 'src/app/models/barang';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  barang:Barang  = new Barang();
  picture:Picture = new Picture();
  addFotoBarangForm!: FormGroup;
  
  selectedFile: File | null = null;

  constructor(
    private api: BarangApiService,
    private router : Router,
    private toast : NgToastService,
    private fb : FormBuilder,
    private userStore: UserStoreService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

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
    this.addFotoBarangForm = this.fb.group({
      id_user:[Validators.required],
      id_barang: [Validators.required],
      nama_user: ['', Validators.required],
      nama_barang: ['', Validators.required],
      image: [File]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      return;
    }
    
    const formData = new FormData();
    formData.append('id_barang', this.addFotoBarangForm.value.id_barang);
    formData.append('nama_barang', this.addFotoBarangForm.value.nama_barang);
    formData.append('image', this.selectedFile);
    this.api.fileUpload(formData)
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
