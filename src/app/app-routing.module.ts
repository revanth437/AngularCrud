import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './employees/view/view.component';
import { CreateComponent } from './employees/create/create.component';

const routes: Routes = [
  {path: 'add', component: CreateComponent},
  {path: ':id/edit', component: CreateComponent},
  {
    path: '',
    component: ViewComponent,
    pathMatch: 'full'
  },
  {path: '**', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
