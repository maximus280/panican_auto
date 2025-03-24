import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProductEditComponent } from './e-product-edit.component';

describe('EProductEditComponent', () => {
  let component: EProductEditComponent;
  let fixture: ComponentFixture<EProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EProductEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
