import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponents } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AddInventoryKaryawanComponent } from './components/add-inventory-karyawan/add-inventory-karyawan.component';
import { AllInventoryComponent } from './components/all-inventory/all-inventory.component';
import { DatapeminjamanComponent } from './components/datapeminjaman/datapeminjaman.component';
import { EditComponent } from './components/edit/edit.component';
import { LaporanComponent } from './components/laporan/laporan.component';
import { PeminjamanComponent } from './components/peminjaman/peminjaman.component';
import { PrintcardComponent } from './components/printcard/printcard.component';
import { ViewComponent } from './components/view/view.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { DataLaporanComponent } from './components/data-laporan/data-laporan.component';
import { PrintAllCardComponent } from './components/print-all-card/print-all-card.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { PengembalianComponent } from './components/pengembalian/pengembalian.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardAdminComponent, canActivate:[AuthGuard]},
  {path: 'header', component: SidebarComponents, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'add', component: AddInventoryComponent, canActivate:[AuthGuard]},
  {path: 'addkaryawan', component: AddInventoryKaryawanComponent, canActivate:[AuthGuard]},
  {path: 'allinventory', component: AllInventoryComponent, canActivate:[AuthGuard]},
  {path: 'datapeminjaman', component: DatapeminjamanComponent, canActivate:[AuthGuard]},
  {path: 'allinventory/edit/:idBarang', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'allinventory/printcard/:idBarang', component: PrintcardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/peminjaman/:idBarang', component: PeminjamanComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/laporan/:idBarang', component: LaporanComponent, canActivate: [AuthGuard]},
  {path: 'laporan', component: LaporanComponent, canActivate:[AuthGuard]},
  {path: 'peminjaman', component: PeminjamanComponent, canActivate:[AuthGuard]},
  {path: 'printall', component: PrintAllCardComponent, canActivate:[AuthGuard]},
  {path: 'print', component: PrintcardComponent, canActivate:[AuthGuard]},
  {path: 'view', component: ViewComponent, canActivate:[AuthGuard]},
  {path: 'view/:idBarang', component: ViewComponent, canActivate: [AuthGuard]},
  {path: 'view/:idBarang/laporan', component: LaporanComponent, canActivate: [AuthGuard]},
  {path: 'view/:idBarang/peminjaman', component: PeminjamanComponent, canActivate: [AuthGuard]},
  {path: 'tutorial', component: TutorialComponent, canActivate: [AuthGuard]},
  {path: 'data-laporan', component: DataLaporanComponent, canActivate: [AuthGuard]},
  {path: 'scanner', component: ScannerComponent, canActivate: [AuthGuard]},
  {path: 'kembali/:idBarang', component: PengembalianComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
