import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirComponentComponent } from './structural-dir-component.component';

describe('StructuralDirComponentComponent', () => {
  let component: StructuralDirComponentComponent;
  let fixture: ComponentFixture<StructuralDirComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
