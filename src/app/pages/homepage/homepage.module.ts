import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewportModule } from 'ng-in-viewport';
import { StoreModule } from '@ngrx/store';

import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SlideModule } from '../../layout/slide/slide.module';
import { MapComponent } from './components/map/map.component';
import { PinComponent } from './components/pin/pin.component';
import { featureName, reducer } from './reducers/homepage.reducer';

@NgModule({
  declarations: [
    HomepageComponent,
    MapComponent,
    PinComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SlideModule,
    InViewportModule,
    StoreModule.forFeature(featureName, reducer),
  ]
})
export class HomepageModule { }
