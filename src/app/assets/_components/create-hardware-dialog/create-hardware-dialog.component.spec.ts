import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHardwareDialogComponent } from './create-hardware-dialog.component';

describe('CreateHardwareDialogComponent', () => {
  let component: CreateHardwareDialogComponent;
  let fixture: ComponentFixture<CreateHardwareDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHardwareDialogComponent]
    });
    fixture = TestBed.createComponent(CreateHardwareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
