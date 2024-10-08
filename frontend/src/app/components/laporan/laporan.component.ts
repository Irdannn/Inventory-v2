import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { Barang } from 'src/app/models/barang';
import { AlurBarang } from 'src/app/models/alurbarang';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { LaporanService } from 'src/app/services/laporan.service';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.component.html',
  styleUrls: ['./laporan.component.css']
})
export class LaporanComponent implements OnInit {
  barang:Barang  = new Barang();
  alurbarang: AlurBarang = new AlurBarang();
  addAlurBarangForm!: FormGroup;

  public fullName:string = "";
  public id:string = "";
  
  constructor(
    private api: BarangApiService,
    private router : Router,
    private toast : NgToastService,
    private route: ActivatedRoute,
    private laporanApi: LaporanService,
    private fb : FormBuilder,
    private userStore: UserStoreService,
    private auth: AuthService
  ){}

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
    this.addAlurBarangForm = this.fb.group({
      id_user: ['', Validators.required],
      id_barang: [Validators.required],
      nama_user: ['',Validators.required],
      nama_barang: ['', Validators.required],
      laporan: ['', Validators.required]
    });
    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken;
    });
    this.userStore.getIDFromStore()
    .subscribe(val=>{
      let idFromToken = this.auth.getIdFromToken()
      this.id=val || idFromToken;
    })
  }

  onAddAlurbarang(){
    if(this.addAlurBarangForm.valid) {
      // send the obj to database
      this.laporanApi.addLaporan(this.addAlurBarangForm.value)
      .subscribe({
        next:()=>{
          this.toast.success({detail: "BERHASIL!", summary:"Penyimpanan disimpan", duration: 5000});
          this.addAlurBarangForm.reset();
          this.router.navigate(['data-laporan'])
        },
        error:()=>{
          this.toast.error({detail: "ERROR", summary:"Oops, ada Api yang salah!", duration: 5000});
        }
      })
    } else {
      console.log("form is not valid")
      // check if the form is invalid
      ValidateForm.validateAllformsFields(this.addAlurBarangForm);
      this.toast.error({detail: "ERROR", summary:"Input Invalid, pastikan semua sudah diisi", duration: 5000});
    }
  }
}
