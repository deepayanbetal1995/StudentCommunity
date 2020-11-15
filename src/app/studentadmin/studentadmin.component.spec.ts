import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentadminComponent } from './studentadmin.component';

describe('StudentadminComponent', () => {
  let component: StudentadminComponent;
  let fixture: ComponentFixture<StudentadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
