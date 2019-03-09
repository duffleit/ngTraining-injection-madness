import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerLoadedRoutingModule } from './eager-loaded-routing.module';
import { EagerComponent } from './eager.component';

@NgModule({
  declarations: [EagerComponent],
  imports: [
    CommonModule,
    EagerLoadedRoutingModule
  ],
  exports: [
    EagerComponent
  ]
})
export class EagerLoadedModule { }


