import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MapComponent } from './components/map/map.component';

import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapLibreGLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
