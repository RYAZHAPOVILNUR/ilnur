import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchPageComponent } from './search-page.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {CountrySearchPipe} from '../../shared/pipes/country-search.pipe'
import {CitySearchPipe} from '../../shared/pipes/city-search.pipe'
import {GenderSearchPipe} from '../../shared/pipes/gender-search.pipe'
import {MerriageSearchPipe} from '../../shared/pipes/merriage-search.pipe'
import {ChildrenSearchPipe} from '../../shared/pipes/children-search.pipe'

@NgModule({
  declarations: [
    SearchPageComponent,
    CountrySearchPipe,
    CitySearchPipe,
    GenderSearchPipe,
    MerriageSearchPipe,
    ChildrenSearchPipe
  ],
  imports: [
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: SearchPageComponent}])
  ]
})
export class SearchPageModule {}
