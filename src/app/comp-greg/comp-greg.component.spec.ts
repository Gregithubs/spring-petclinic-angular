import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGregComponent } from './comp-greg.component';

describe('CompGregComponent', () => {
  let component: CompGregComponent;
  let fixture: ComponentFixture<CompGregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompGregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompGregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
