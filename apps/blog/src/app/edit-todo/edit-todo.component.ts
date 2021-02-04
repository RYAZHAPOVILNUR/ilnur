import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../pages/demos-todo/demos-todo.component';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/users';

// //autocomplete
// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import { ElementRef, ViewChild} from '@angular/core';
// import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
// import {MatChipInputEvent} from '@angular/material/chips';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
// //autocomplete

@Component({
  selector: 'ilnur-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit, OnDestroy {
  public form: FormGroup
  public users: User[]
  public reporter: User
  public dateCommit: FormControl
  public Sub
  public toggle = false
  public pro: []

  // //autocomplete
  // public visible = true;
  // public selectable = true;
  // public removable = true;
  // public separatorKeysCodes: number[] = [ENTER, COMMA];
  // public userNamesCtrl = new FormControl();
  // public filteredUserNames: Observable<string[]>;
  // public userNames: string[] = [];
  // public allUserNames: string[] = [];
  //
  // @ViewChild('userNamesInput') userNamesInput: ElementRef<HTMLInputElement>;
  // @ViewChild('auto') matAutocomplete: MatAutocomplete;
  // //autocomplete

  constructor(
    private readonly dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Todo,
    public userService: UserService
  ) {}

  ngOnInit() {

    this.Sub = this.userService.getUsers.subscribe(users => {
      this.users = users
    })

    this.reporter = this.users.find(user => user.id == this.data.reporterId)

    // //autocomplete
    // this.userNames = [this.reporter.name]
    //
    // this.allUserNames = [...new Set(this.users.map(n => n.name))];
    //
    // this.filteredUserNames = this.userNamesCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((userName: string | null) => userName ? this._filter(userName) : this.allUserNames.slice()));
    // //autocomplete

    this.form = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required]),
      priority: new FormControl(this.data.priority),
      description: new FormControl(this.data.description),
      updated: new FormControl(new Date(new Date().getTime())),
      assigneesIds: new FormControl(this.data.assigneesIds),
      comments: new FormControl(this.data.comments),
      comment: new FormGroup({
        authorId: new FormControl(this.reporter.name),
        text: new FormControl('', [Validators.required])
      })
    })
  }


  public addComment() {
    if(this.form.value.comment.text) {
      this.form.patchValue({
        comments: [
          ...this.form.get('comments').value,
          {
            authorId: this.form.value.comment.authorId,
            text: this.form.value.comment.text,
            time: new Date(new Date().getTime())
          }
        ]
      })
      let formComment = this.form.get('comment.text') as FormGroup;
      formComment.reset();
    }
    this.toggle = false
  }

  public cancelComment() {
    let formComment = this.form.get('comment.text') as FormGroup;
    formComment.reset();
    this.toggle = false;
  }

  public editTodo(): void {
    this.dialogRef.close({
      ...this.form.value,
      id: this.data.id
    } as Todo)
  }

  // //autocomplete
  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;
  //
  //   if ((value || '').trim()) {
  //     this.userNames.push(value.trim());
  //   }
  //
  //   if (input) {
  //     input.value = '';
  //   }
  //
  //   this.userNamesCtrl.setValue(null);
  // }
  //
  // remove(userName: string): void {
  //   const index = this.userNames.indexOf(userName);
  //
  //   if (index >= 0) {
  //     this.userNames.splice(index, 1);
  //   }
  // }
  //
  // selected(event: MatAutocompleteSelectedEvent): void {
  //   console.log(event)
  //   this.userNames.push(event.option.viewValue);
  //   this.userNamesInput.nativeElement.value = '';
  //   this.userNamesCtrl.setValue(null);
  // }
  //
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.allUserNames.filter(userName => userName.toLowerCase().indexOf(filterValue) === 0);
  // }
  // //autocomplete

  ngOnDestroy() {
    if(this.Sub) {
      this.Sub.unsubscribe()
    }
  }

}


