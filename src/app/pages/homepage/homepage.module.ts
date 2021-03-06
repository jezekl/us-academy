import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewportModule } from 'ng-in-viewport';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SlideModule } from '../../layout/slide/slide.module';
import { MapComponent } from './components/map/map.component';
import { PinComponent } from './components/pin/pin.component';
import { featureName, reducer } from './reducers/homepage.reducer';
import { HomepageEffects } from './effects/homepage.effects';
import { CityComponent } from './components/city/city.component';
import { ContainerModule } from '../../layout/container/container.module';
import { ButtonModule } from '../../ui/button/button.module';
import { ContactComponent } from './components/contact/contact.component';
import { GreyboxModule } from '../../ui/greybox/greybox.module';
import { TooltipModule } from '../../ui/tooltip/tooltip.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GridModule } from '../../ui/grid/grid.module';
import { IconModule } from '../../ui/icon/icon.module';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { TrainingsListComponent } from './components/trainings-list/trainings-list.component';
import { CampsListComponent } from './components/camps-list/camps-list.component';
import { WorkshopsListComponent } from './components/workshops-list/workshops-list.component';
import { PipesModule } from '../../modules/pipes/pipes.module';

@NgModule({
  declarations: [
    HomepageComponent,
    MapComponent,
    PinComponent,
    CityComponent,
    ContactComponent,
    WelcomeComponent,
    AboutUsComponent,
    TrainingsComponent,
    TrainingsListComponent,
    CampsListComponent,
    WorkshopsListComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SlideModule,
    InViewportModule,
    RouterModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([
      HomepageEffects
    ]),
    ContainerModule,
    ButtonModule,
    GreyboxModule,
    TooltipModule,
    GridModule,
    ScrollToModule,
    IconModule,
    PipesModule
  ]
})
export class HomepageModule { }
