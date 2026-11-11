import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerOpportunity } from './volunteer-opportunity';

describe('VolunteerOpportunity', () => {
  let component: VolunteerOpportunity;
  let fixture: ComponentFixture<VolunteerOpportunity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerOpportunity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerOpportunity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
