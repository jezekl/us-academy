import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdprComponent } from './components/gdpr/gdpr.component';
import { GdprRoutingModule } from './gdpr-routing.module';
import { ContainerModule } from '../../layout/container/container.module';

@NgModule({
  declarations: [
    GdprComponent
  ],
  imports: [
    CommonModule,
    GdprRoutingModule,
    ContainerModule
  ]
})
export class GdprModule { }
