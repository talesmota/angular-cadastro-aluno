import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDisciplinasComponent } from './cadastrar-disciplinas.component';

describe('CadastrarDisciplinasComponent', () => {
  let component: CadastrarDisciplinasComponent;
  let fixture: ComponentFixture<CadastrarDisciplinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarDisciplinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
