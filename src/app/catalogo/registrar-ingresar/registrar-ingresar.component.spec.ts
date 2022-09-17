import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIngresarComponent } from './registrar-ingresar.component';

describe('RegistrarIngresarComponent', () => {
  let component: RegistrarIngresarComponent;
  let fixture: ComponentFixture<RegistrarIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarIngresarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
