import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceWelcomeComponent } from './reference.welcome.component';

describe('HomeComponent', () => {
  let component: ReferenceWelcomeComponent;
  let fixture: ComponentFixture<ReferenceWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferenceWelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
