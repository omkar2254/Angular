import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reusable4Component } from './reusable4.component';

describe('Reusable4Component', () => {
  let component: Reusable4Component;
  let fixture: ComponentFixture<Reusable4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reusable4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reusable4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
