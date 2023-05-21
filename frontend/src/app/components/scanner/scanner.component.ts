import { AfterViewInit, Component, ViewChild } from '@angular/core';
// import { ZXingScannerComponent } from '@zxing/ngx-scanner';
// import { Subject } from 'rxjs';
// import { WebcamImage } from 'ngx-webcam';
// import { products } from 'src/app/models/products';
// import { BarcodeReader } from 'dynamsoft-javascript-barcode';
// import {
//   ScannerQRCodeConfig,
//   ScannerQRCodeResult,
//   NgxScannerQrcodeService,
//   NgxScannerQrcodeComponent,
//   ScannerQRCodeSelectedFiles,
// } from 'ngx-scanner-qrcode';
// import { delay } from 'rxjs';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    
  }
  // public config: ScannerQRCodeConfig = {
  //   // fps: 1000,
  //   vibrate: 400,
  //   // isBeep: false,
  //   // decode: 'macintosh',
  //   constraints: {
  //     video: {
  //       width: window.innerWidth // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  //     }
  //   },
  //   // canvasStyles: {
  //   //   font: '17px serif',
  //   //   lineWidth: 1,
  //   //   fillStyle: '#ff001854',
  //   //   strokeStyle: '#ff0018c7',
  //   // } as any // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  // };

  // public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  // public qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];

  // @ViewChild('action') action!: NgxScannerQrcodeComponent;

  // constructor(private qrcode: NgxScannerQrcodeService) { }

  // ngAfterViewInit(): void {
  //   this.action.isReady.pipe(delay(1000)).subscribe(() => {
  //     this.handle(this.action, 'start');
  //   });
  // }

  // public onEvent(e: ScannerQRCodeResult[]): void {
  //   console.log(e);
  // }

  // public handle(action: any, fn: string): void {
  //   // Fix issue #27, #29
  //   const playDeviceFacingBack = (devices: any[]) => {
  //     // front camera or back camera check here!
  //     const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
  //     action.playDevice(device ? device.deviceId : devices[0].deviceId);
  //   }

  //   if (fn === 'start') {
  //     action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
  //   } else {
  //     action[fn]().subscribe((r: any) => console.log(fn, r), alert);
  //   }
  // }

  // public onSelects(files: any): void {
  //   this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
  //     this.qrCodeResult = res;
  //   });
  // }

  // public onSelects2(files: any): void {
  //   this.qrcode.loadFilesToScan(files, this.config).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
  //     console.log(res);
  //     this.qrCodeResult2 = res;
  //   });
  // }
}