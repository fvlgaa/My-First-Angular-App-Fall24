import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListItemComponent } from './phone-list-item.component';

describe('PhoneListItemComponent', () => {
  let component: PhoneListItemComponent;
  let fixture: ComponentFixture<PhoneListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
