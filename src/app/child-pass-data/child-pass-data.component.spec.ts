import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPassDataComponent } from './child-pass-data.component';

describe('ChildPassDataComponent', () => {
  let component: ChildPassDataComponent;
  let fixture: ComponentFixture<ChildPassDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPassDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPassDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
