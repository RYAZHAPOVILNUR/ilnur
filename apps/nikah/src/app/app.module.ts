import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RegisterModule } from './pages/register/register.module';
import { ProfileModule } from './pages/profile/profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RegisterModule,
    RouterModule.forRoot([
      {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
      },{
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
