import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentCheckComponent } from './talent.check.component';

describe('HomeComponent', () => {
  let component: TalentCheckComponent;
  let fixture: ComponentFixture<TalentCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalentCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
