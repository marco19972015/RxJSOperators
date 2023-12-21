import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { TapOperatorComponent } from './tap-operator/tap-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { TakeOperatorComponent } from './take-operator/take-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    MapOperatorComponent,
    TapOperatorComponent,
    FilterOperatorComponent,
    TakeOperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
