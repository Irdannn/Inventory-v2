import { Component, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  videoOptions: MediaTrackConstraints = {
    width: { ideal: 640 },
    height: { ideal: 480 }
  };

  trigger: Subject<void> = new Subject<void>();
  capturedImage!: string;
  showScanner: boolean = true;

  ngOnInit(): void {
    
  }
  handleImage(webcamImage: WebcamImage): void {
    this.capturedImage = webcamImage.imageAsDataUrl;
    console.log('Scanned QR code:', this.capturedImage);
  }

  triggerSnapshot(): void {
    this.trigger.next();
    this.showScanner = false;
  }
}
