import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculalistadoComponent } from './peliculalistado.component';

describe('PeliculalistadoComponent', () => {
  let component: PeliculalistadoComponent;
  let fixture: ComponentFixture<PeliculalistadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculalistadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculalistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
