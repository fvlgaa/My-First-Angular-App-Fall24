import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPhoneComponent } from './modify-phone.component';

describe('ModifyPhoneComponent', () => {
  let component: ModifyPhoneComponent;
  let fixture: ComponentFixture<ModifyPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
