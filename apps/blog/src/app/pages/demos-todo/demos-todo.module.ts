import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
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

import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { DemosTodoComponent } from './components/demos-todo/demos-todo.component';
import { DemosPageComponent } from './components/demos-page/demos-page.component';
import { DemosLayoutComponent } from './components/demos-layout/demos-layout.component';
import { SearchPipe } from './shared/search.pipe';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetUserEffect } from './store/storeUser/effects/getUser.effect';
import { reducers } from './store/storeUser/reducers';
import { reducer } from './store/storeTodo/reducers';
import { UserService } from './shared/services/user.service';
import { GetTodoEffect } from './store/storeTodo/effects/getTodo.effect';

const routes = [
  {path: '', component: DemosLayoutComponent, children: [
    {path: '', component: DemosTodoComponent},
    {path: 'demos/:id', component: DemosPageComponent}
  ]}
]

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
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserEffect, GetTodoEffect]),
    StoreModule.forFeature('users', reducers),
    StoreModule.forFeature('todos', reducer)
  ],
  providers: [UserService]
})
export class DemosTodoModule {}
