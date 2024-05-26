import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childrout2Component } from './childrout2.component';

describe('Childrout2Component', () => {
  let component: Childrout2Component;
  let fixture: ComponentFixture<Childrout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childrout2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childrout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
