import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reusable1Component } from './reusable1.component';

describe('Reusable1Component', () => {
  let component: Reusable1Component;
  let fixture: ComponentFixture<Reusable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reusable1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reusable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
