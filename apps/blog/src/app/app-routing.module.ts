import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'demos', loadChildren: () => import('./pages/demos-todo/demos-todo.module').then(m => m.DemosTodoModule)
  },
  {
    path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'cv', loadChildren: () => import('./pages/cv/cv.module').then(m => m.CvModule)
  },
  {
    path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
