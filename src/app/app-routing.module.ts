import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheelchairsComponent } from './wheelchairs/wheelchairs.component';
import { WalkersComponent } from './walkers/walkers.component';
import { CanesComponent } from './canes/canes.component';
import { CrutchesComponent } from './crutches/crutches.component';
import { MedicalSuppliesComponent } from './medical-supplies/medical-supplies.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'medical-supplies', component: MedicalSuppliesComponent },
  { path: 'wheelchairs', component: WheelchairsComponent },
  { path: 'walkers', component: WalkersComponent },
  { path: 'canes', component: CanesComponent },
  { path: 'crutches', component: CrutchesComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: MedicalSuppliesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
