import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SecondPageComponent } from './commponents/second-page/second-page.component'
import { FirstPageComponent } from './commponents/first-page/first-page.component'

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
