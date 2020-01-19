import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimburComponent } from './reimbur.component';

describe('ReimburComponent', () => {
  let component: ReimburComponent;
  let fixture: ComponentFixture<ReimburComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimburComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimburComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
