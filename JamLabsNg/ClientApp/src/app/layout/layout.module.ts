import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ControlsComponent } from './controls/controls.component';
import { TitleComponent } from './title/title.component';
import { SourcesComponent } from './sources/sources.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule
  ],
  exports: [],
  declarations: [
    FrameComponent,
    FooterComponent,
    HeaderComponent,
    SourcesComponent,
    ControlsComponent,
    TitleComponent,
    DestinationsComponent
  ]
})
export class LayoutModule { }
