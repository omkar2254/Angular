import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reusable3Component } from './reusable3.component';

describe('Reusable3Component', () => {
  let component: Reusable3Component;
  let fixture: ComponentFixture<Reusable3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reusable3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reusable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
