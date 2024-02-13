import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesComponent } from './resources.component';

describe('HomeComponent', () => {
  let component: RessourcesComponent;
  let fixture: ComponentFixture<RessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RessourcesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
