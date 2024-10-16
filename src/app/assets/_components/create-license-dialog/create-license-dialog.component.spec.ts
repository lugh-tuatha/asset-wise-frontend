import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLicenseDialogComponent } from './create-license-dialog.component';

describe('CreateLicenseDialogComponent', () => {
  let component: CreateLicenseDialogComponent;
  let fixture: ComponentFixture<CreateLicenseDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLicenseDialogComponent]
    });
    fixture = TestBed.createComponent(CreateLicenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
