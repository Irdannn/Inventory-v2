import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { LaporanComponent } from './components/laporan/laporan.component';
import { AllInventoryComponent } from './components/all-inventory/all-inventory.component';
import { printAllCardComponent } from './components/printallcard/printAllCard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupsComponent } from './components/signups/signups.component';
import { ViewEditComponent } from './components/viewedit/viewedit.component';
import { PrintcardComponent } from './components/printcard/printcard.component';
import { AddinventorykaryawanComponent } from './components/addinventorykaryawan/addinventorykaryawan.component';
import { PeminjamanComponent } from './components/peminjaman/peminjaman.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewComponent } from './components/view/view.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signups', component: SignupsComponent, canActivate:[GuardGuard]},
  {path: 'laporan', component: LaporanComponent, canActivate: [GuardGuard]},
  {path: 'printAllCard', component: printAllCardComponent, canActivate: [GuardGuard]},
  {path: 'allinventory', component: AllInventoryComponent, canActivate: [GuardGuard]},
  {path: 'add', component: AddInventoryComponent, canActivate: [GuardGuard]},
  { path: 'addkaryawan', component: AddinventorykaryawanComponent, canActivate: [GuardGuard]},
  {path: 'allinventory/edit/:idBarang', component: ViewEditComponent, canActivate: [GuardGuard]},
  {path: 'allinventory/printcard/:idBarang', component: PrintcardComponent, canActivate: [GuardGuard]},
  {path: 'dashboard/peminjaman/:idBarang', component: PeminjamanComponent, canActivate: [GuardGuard]},
  {path: 'dashboard/laporan/:idBarang', component: LaporanComponent, canActivate: [GuardGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [GuardGuard]},
  {path: 'view/:idBarang', component: ViewComponent, canActivate: [GuardGuard]},
  {path: 'view/:idBarang/laporan', component: LaporanComponent, canActivate: [GuardGuard]},
  {path: 'view/:idBarang/peminjaman', component: PeminjamanComponent, canActivate: [GuardGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
