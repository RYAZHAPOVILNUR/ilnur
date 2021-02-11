import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './profile.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';

@NgModule({
  declarations: [ProfileComponent, ProfilePhotoComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProfileComponent, children: [
        {path: 'photo', component: ProfilePhotoComponent}
      ]}])
  ]
})
export class ProfileModule {}
