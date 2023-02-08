import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './components/header/header.component'
import { MatIconModule } from '@angular/material/icon'
import { FirstPageComponent } from './components/first-page/first-page.component'
import { SecondPageComponent } from './components/second-page/second-page.component'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { ToastService, AngularToastifyModule } from 'angular-toastify'
import { ModalComponent } from './components/modal/modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstPageComponent,
    SecondPageComponent,
    ModalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularToastifyModule,
  ],
  providers: [MatDatepickerModule, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
