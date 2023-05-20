import { Component, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { products } from 'src/app/models/products';
import { BarcodeReader } from 'dynamsoft-javascript-barcode';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  // isLoaded = false;
  //  overlay: HTMLCanvasElement | undefined;
  //  context: CanvasRenderingContext2D | undefined;
  //  reader: BarcodeReader | undefined;

  products = products;
  // videoOptions: MediaTrackConstraints = {
  //   width: { ideal: 640 },
  //   height: { ideal: 480 }
  // };

  // trigger: Subject<void> = new Subject<void>();
  // capturedImage!: string;
  // showScanner: boolean = true;

  ngOnInit(): void {
    // this.initOverlay();
    //  (async () => {
    //    this.reader = await BarcodeReader.createInstance();
    //    this.isLoaded = true;
    //  })();
   }
  //  onChange(event: Event) {
  //   const element = event.currentTarget as HTMLInputElement;
  //   let fileList: FileList | null = element.files;
  //   if (fileList) {
  //     let file = fileList.item(0) as any;
  //     if (file) {
  //       let fr = new FileReader();
  //       fr.onload = (event: any) => {
  //         let image = document.getElementById('image') as HTMLImageElement;
  //         if (image) {
  //           image.src = event.target.result;
  //           const img = new Image();
   
  //           img.onload = (event: any) => {
  //             this.updateOverlay(img.width, img.height);
  //             if (this.reader) {
  //               this.reader.decode(file).then((results: any) => {
  //                 console.log(results);
  //                 let txts: any = [];
  //                 let elem = document.getElementById('result');
  //                 try {
  //                   let localization;
  //                   if (results.length > 0) {
  //                     for (var i = 0; i < results.length; ++i) {
  //                       txts.push(results[i].barcodeText);
  //                       localization = results[i].localizationResult;
  //                       this.drawOverlay(
  //                         localization,
  //                         results[i].barcodeText
  //                       );
  //                     }
   
  //                     if (elem) {
  //                       elem.innerHTML = txts.join(', ');
  //                     }
  //                   } else {
  //                     if (elem) {
  //                       elem.innerHTML = txts.join(', ');
  //                     }
  //                   }
  //                 } catch (e) {
  //                   alert(e);
  //                 }
  //               });
  //             }
  //           };
  //           img.src = event.target.result;
  //         }
  //       };
  //       fr.readAsDataURL(file);
  //     }
  //   }
  // }
  }
  // handleImage(webcamImage: WebcamImage): void {
  //   this.capturedImage = webcamImage.imageAsDataUrl;
  //   console.log('Scanned QR code:', this.capturedImage);
  // }

  // triggerSnapshot(): void {
  //   this.trigger.next();
  //   this.showScanner = false;
  // }
