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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaritalstatusComponent } from './maritalstatus/maritalstatus.component';
import { SpouseComponent } from './spouse/spouse.component';
import { ReligionComponent } from './religion/religion.component';
import { AdditionallyComponent } from './additionally/additionally.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegisterComponent,
    CommonInfoComponent,
    LooksComponent,
    LifestyleComponent,
    WorkComponent,
    MaritalstatusComponent,
    SpouseComponent,
    ReligionComponent,
    AdditionallyComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class RegisterModule { }
