import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CvComponent } from './cv.component';

@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CvComponent}
    ])
  ],
})
export class CvModule {}
