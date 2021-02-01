import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosTodoComponent } from './demos-todo.component';

describe('DemosTodoComponent', () => {
  let component: DemosTodoComponent;
  let fixture: ComponentFixture<DemosTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemosTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
