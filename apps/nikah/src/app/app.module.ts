import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterModule } from './pages/register/register.module';
import { ProfileModule } from './pages/profile/profile.module';
import { SearchPageModule } from './pages/search-page/search-page.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    MatSelectModule,
    BrowserModule,
    RegisterModule,
    RouterModule.forRoot([
      {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
      },{
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },{
        path: 'search',
        loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule)
      },
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
