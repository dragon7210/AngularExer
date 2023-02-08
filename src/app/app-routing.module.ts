import { FirstPageComponent } from './components/first-page/first-page.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ModalComponent } from './components/modal/modal.component'
import { SecondPageComponent } from './components/second-page/second-page.component'

const routes: Routes = [
  {
    path: 'del/:id',
    component: ModalComponent,
  },
  {
    path: 'first',
    component: FirstPageComponent,
  },
  {
    path: 'second',
    component: SecondPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
