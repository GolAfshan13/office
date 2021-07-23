import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePictureComponent } from './office-picture.component';

describe('OfficePictureComponent', () => {
  let component: OfficePictureComponent;
  let fixture: ComponentFixture<OfficePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
