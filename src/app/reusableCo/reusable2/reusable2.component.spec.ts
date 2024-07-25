import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reusable2Component } from './reusable2.component';

describe('Reusable2Component', () => {
  let component: Reusable2Component;
  let fixture: ComponentFixture<Reusable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reusable2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reusable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
