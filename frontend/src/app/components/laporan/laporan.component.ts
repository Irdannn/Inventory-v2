import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { Barang } from 'src/app/models/barang';
import { AlurbarangService } from 'src/app/services/alurbarang.service';
import { AlurBarang } from 'src/app/models/alurbarang';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.component.html',
  styleUrls: ['./laporan.component.css']
})
export class LaporanComponent implements OnInit {
  barang:Barang  = new Barang();
  alurbarang: AlurBarang = new AlurBarang();
  addAlurBarangForm!: FormGroup;

  constructor(
    private api: BarangApiService,
    private router : Router,
    private toast : NgToastService,
    private route: ActivatedRoute,
    private alurapi: AlurbarangService,
    private fb : FormBuilder
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
      user: ['', Validators.required],
      id_barang: [Validators.required],
      laporan: ['',Validators.required],
      nama_barang: ['', Validators.required],
      waktupinjam: [''],
      waktukembali: [''],
    })
  }

  onAddAlurbarang(){
    if(this.addAlurBarangForm.valid) {
      // send the obj to database
      this.alurapi.addAlurbarang(this.addAlurBarangForm.value)
      .subscribe({
        next:()=>{
          this.toast.success({detail: "BERHASIL!", summary:"Penyimpanan disimpan", duration: 5000});
          this.addAlurBarangForm.reset();
          this.router.navigate(['datapeminjaman'])
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
