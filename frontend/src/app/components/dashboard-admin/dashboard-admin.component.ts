import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Barang } from 'src/app/models/barang';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  // @ViewChild(ZXingScannerComponent) scanner!: ZXingScannerComponent;
  // qrResult!: string;
  videoOptions: MediaTrackConstraints = {
    width: { ideal: 640 },
    height: { ideal: 480 }
  };

  trigger: Subject<void> = new Subject<void>();
  capturedImage!: string;
  showScanner: boolean = true;

  public listBarang = [];
  searchText!: string;
  barang!: Barang;

  public users:any = [];
  public role!:string;

  public fullName:string = "";
  constructor(
    private authapi : ApiService, 
    private auth: AuthService,
    private userStore: UserStoreService,
    private api : BarangApiService
    ) { }


  ngOnInit() {
    this.authapi.getUsers()
    .subscribe(res=>{
      this.users = res;
    })
    this.userStore.getFullNameFromStore()
    .subscribe(val=> {
      const rolefromToken = this.auth.getRoleFromToken();
      this.role = val || rolefromToken
    })
    this.api.getAllInventory()
    .subscribe(res => {
      this.listBarang = res;
    });
    // this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
    //   // Select the first available device
    //   if (devices && devices.length > 0) {
    //     this.scanner.device = devices[0];
    //   }
    // });
  }

  handleImage(webcamImage: WebcamImage): void {
    this.capturedImage = webcamImage.imageAsDataUrl;
    console.log('Scanned QR code:', this.capturedImage);
  }

  triggerSnapshot(): void {
    this.trigger.next();
    this.showScanner = false;
  }

  // onScanSuccess(result: string): void {
  //   this.qrResult = result;
  //   console.log('Scanned QR code:', this.qrResult);
  // }

  logout() {
    this.auth.signOut();
  }
}
