import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchPipe } from '../../shared/search.pipe';
import { DemosTodoComponent } from './demos-todo.component';
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
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';



@NgModule({
  declarations: [
    DemosTodoComponent,
    CreateTodoComponent,
    EditTodoComponent,
    SearchPipe
  ],
  imports: [
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
      {path: '', component: DemosTodoComponent}
    ])
  ],
})
export class DemosTodoModule {}
