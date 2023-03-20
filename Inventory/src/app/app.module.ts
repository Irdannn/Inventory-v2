import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule  } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { QrCodeModule } from 'ng-qrcode';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPrintModule } from 'ngx-print';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { ServiceBarangApi } from './services/barangApi.service';

import { LaporanComponent } from './components/laporan/laporan.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { printAllCardComponent } from './components/printallcard/printAllCard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupsComponent } from './components/signups/signups.component';
import { ViewEditComponent } from './components/viewedit/viewedit.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AllInventoryComponent } from './components/all-inventory/all-inventory.component';
import { PrintcardComponent } from './components/printcard/printcard.component';
import { AddinventorykaryawanComponent } from './components/addinventorykaryawan/addinventorykaryawan.component';
import { PeminjamanComponent } from './components/peminjaman/peminjaman.component';
import { ViewComponent } from './components/view/view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupsComponent,
    LaporanComponent,
    MainNavComponent,
    printAllCardComponent,
    ViewEditComponent,
    AddInventoryComponent,
    AllInventoryComponent,
    PrintcardComponent,
    AddinventorykaryawanComponent,
    PeminjamanComponent,
    ViewComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPrintModule,
    CommonModule,
    QrCodeModule
  ],
  providers: [ServiceBarangApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
