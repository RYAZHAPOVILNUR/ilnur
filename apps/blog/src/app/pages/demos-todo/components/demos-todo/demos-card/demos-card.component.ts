import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'demos-card',
  templateUrl: './demos-card.component.html',
  styleUrls: ['./demos-card.component.scss']
})
export class DemosCard {
  @Input('title') titleProps: string
  @Input('priority') priorityProps: string
  @Input('id') idProps: string
  @Output() removeEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<string>();


  public removeTodo(id) {
    this.removeEvent.emit(id);
  }
  public editTodo(id) {
    this.editEvent.emit(id);
  }
}
