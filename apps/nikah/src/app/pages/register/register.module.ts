import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonInfoComponent } from './common-info/common-info.component';
import { LooksComponent } from './looks/looks.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WorkComponent } from './work/work.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [RegisterComponent, CommonInfoComponent, LooksComponent, LifestyleComponent, WorkComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class RegisterModule { }
