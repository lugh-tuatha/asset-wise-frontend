import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareAssetDetailComponent } from './hardware-asset-detail.component';

describe('HardwareAssetDetailComponent', () => {
  let component: HardwareAssetDetailComponent;
  let fixture: ComponentFixture<HardwareAssetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardwareAssetDetailComponent]
    });
    fixture = TestBed.createComponent(HardwareAssetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
