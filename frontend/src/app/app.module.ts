import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule  } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { QrCodeModule } from 'ng-qrcode';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidebarComponents } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AddInventoryKaryawanComponent } from './components/add-inventory-karyawan/add-inventory-karyawan.component';
import { AllInventoryComponent } from './components/all-inventory/all-inventory.component';
import { AlurBarangComponent } from './components/alurbarang/alurbarang.component';
import { LaporanComponent } from './components/laporan/laporan.component';
import { PeminjamanComponent } from './components/peminjaman/peminjaman.component';
import { PrintAllCardComponent } from './components/print-all-card/print-all-card.component';
import { PrintcardComponent } from './components/printcard/printcard.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { DataLaporanComponent } from './components/data-laporan/data-laporan.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { PengembalianComponent } from './components/pengembalian/pengembalian.component';
import { SopTableComponent } from './components/soptabel/soptabel.component';
import { SopComponent } from './components/sop/sop.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { SopRuanganComponent } from './components/sop-ruangan/sop-ruangan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponents,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    DashboardAdminComponent,
    AddInventoryComponent,
    AddInventoryKaryawanComponent,
    AllInventoryComponent,
    AlurBarangComponent,
    LaporanComponent,
    PeminjamanComponent,
    PrintAllCardComponent,
    PrintcardComponent,
    ViewComponent,
    EditComponent,
    TutorialComponent,
    DataLaporanComponent,
    ScannerComponent,
    PengembalianComponent,
    SopTableComponent,
    SopComponent,
    SopRuanganComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    CommonModule,
    NgxPrintModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    QrCodeModule,
    MatIconModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
