import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaBordeRedondoComponent } from './pelicula-borde-redondo.component';

describe('PeliculaBordeRedondoComponent', () => {
  let component: PeliculaBordeRedondoComponent;
  let fixture: ComponentFixture<PeliculaBordeRedondoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaBordeRedondoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaBordeRedondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
