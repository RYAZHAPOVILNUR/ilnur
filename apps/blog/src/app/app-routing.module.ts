import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { DemosTodoComponent } from './pages/demos-todo/demos-todo.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'demos', loadChildren: () => import('./pages/demos-todo/demos-todo.module').then(m => m.DemosTodoModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
