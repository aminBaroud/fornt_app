import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCheckComponent } from './company.check.component';

describe('HomeComponent', () => {
  let component: CompanyCheckComponent;
  let fixture: ComponentFixture<CompanyCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
