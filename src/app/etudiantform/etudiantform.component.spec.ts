import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantformComponent } from './etudiantform.component';

describe('EtudiantformComponent', () => {
  let component: EtudiantformComponent;
  let fixture: ComponentFixture<EtudiantformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
