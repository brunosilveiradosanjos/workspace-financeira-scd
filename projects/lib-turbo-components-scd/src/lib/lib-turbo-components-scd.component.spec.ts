import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTurboComponentsScdComponent } from './lib-turbo-components-scd.component';

describe('LibTurboComponentsScdComponent', () => {
  let component: LibTurboComponentsScdComponent;
  let fixture: ComponentFixture<LibTurboComponentsScdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibTurboComponentsScdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibTurboComponentsScdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
