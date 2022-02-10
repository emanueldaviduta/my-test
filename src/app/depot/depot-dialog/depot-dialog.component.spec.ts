import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotDialogComponent } from './depot-dialog.component';

describe('DepotDialogComponent', () => {
  let component: DepotDialogComponent;
  let fixture: ComponentFixture<DepotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
