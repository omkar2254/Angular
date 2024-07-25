import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeelistComponent } from './add-employeelist.component';

describe('AddEmployeelistComponent', () => {
  let component: AddEmployeelistComponent;
  let fixture: ComponentFixture<AddEmployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployeelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
