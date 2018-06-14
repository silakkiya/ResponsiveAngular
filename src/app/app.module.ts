import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { TileComponent } from './tile/tile.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    TileComponent,
   
   
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
