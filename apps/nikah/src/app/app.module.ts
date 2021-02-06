import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RegisterModule } from './pages/register/register.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RegisterModule,
    RouterModule.forRoot([
      {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
      }
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
