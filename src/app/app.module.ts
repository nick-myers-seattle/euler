import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalSuppliesComponent } from './medical-supplies/medical-supplies.component';
import { WheelchairsComponent } from './wheelchairs/wheelchairs.component';
import { WalkersComponent } from './walkers/walkers.component';
import { CanesComponent } from './canes/canes.component';
import { CrutchesComponent } from './crutches/crutches.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MedicalSuppliesComponent,
    WheelchairsComponent,
    WalkersComponent,
    CanesComponent,
    CrutchesComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
