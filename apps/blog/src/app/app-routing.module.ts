import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { DemosTodoComponent } from './demos-todo/demos-todo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'demos', component: DemosTodoComponent},
  // {
  //   path: 'demos',
  //   loadChildren: () => import('./demos-todo/demos-todo.module.ts').then(m => m.DemosTodoModule.ts)
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
