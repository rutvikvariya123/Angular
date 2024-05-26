import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChildComponent } from './use-child.component';

describe('UseChildComponent', () => {
  let component: UseChildComponent;
  let fixture: ComponentFixture<UseChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
