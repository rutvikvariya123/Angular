import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleMethodComponent } from './lifecycle-method.component';

describe('LifecycleMethodComponent', () => {
  let component: LifecycleMethodComponent;
  let fixture: ComponentFixture<LifecycleMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
