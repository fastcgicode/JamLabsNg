import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule } from './c-routing.module';
import { CComponent } from './c.component';

@NgModule({
  imports: [
    CommonModule,
    CRoutingModule
  ],
  declarations: [CComponent]
})
export class CModule { }
