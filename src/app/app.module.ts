import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './commponents/header/header.component'
import { MatIconModule } from '@angular/material/icon'
import { FirstPageComponent } from './commponents/first-page/first-page.component';
import { SecondPageComponent } from './commponents/second-page/second-page.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FirstPageComponent, SecondPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
