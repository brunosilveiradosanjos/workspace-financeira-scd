import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponentLib } from './button.component';

describe('ButtonComponentLib', () => {
  let component: ButtonComponentLib;
  let fixture: ComponentFixture<ButtonComponentLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponentLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponentLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
