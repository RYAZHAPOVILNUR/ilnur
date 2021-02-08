import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { QuillModule } from 'ngx-quill';

import { CreateTodoComponent } from './create-todo/create-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { DemosTodoComponent } from './demos-todo.component';
import { SearchPipe } from '../../shared/search.pipe';
import { DemosPageComponent } from './demos-page/demos-page.component';
import { DemosLayoutComponent } from './demos-layout/demos-layout.component';

@NgModule({
  declarations: [
    DemosTodoComponent,
    CreateTodoComponent,
    EditTodoComponent,
    SearchPipe,
    DemosPageComponent,
    DemosLayoutComponent
  ],
  imports: [
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DemosLayoutComponent, children: [
          {path: '', component: DemosTodoComponent},
          {path: 'demos/:id', component: DemosPageComponent}
        ]}
    ])
  ],
})
export class DemosTodoModule {}
