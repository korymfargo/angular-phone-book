import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookComponent } from './phone-book.component';

describe('PhoneBookComponent', () => {
  let component: PhoneBookComponent;
  let fixture: ComponentFixture<PhoneBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneBookComponent]
    });
    fixture = TestBed.createComponent(PhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
