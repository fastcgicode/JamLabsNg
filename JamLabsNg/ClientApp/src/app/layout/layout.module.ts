import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ControlsComponent } from './controls/controls.component';
import { TitleComponent } from './title/title.component';
import { SourcesComponent } from './sources/sources.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutRoutingModule } from './layout-routing.module';
import { SourcesButtonsComponent } from './sourcesButtons/sourcesButtons.component';
import { ButtonComponent } from "./button/button.component";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule
  ],
  exports: [],
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    SourcesComponent,
    SourcesButtonsComponent,
    ButtonComponent,
    ControlsComponent,
    TitleComponent,
    DestinationsComponent
  ]
})
export class LayoutModule { }
