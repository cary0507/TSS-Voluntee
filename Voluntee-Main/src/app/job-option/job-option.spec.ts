import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOption } from './job-option';

describe('JobOption', () => {
  let component: JobOption;
  let fixture: ComponentFixture<JobOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
