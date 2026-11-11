import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDevMode } from './profile-dev-mode';

describe('ProfileDevMode', () => {
  let component: ProfileDevMode;
  let fixture: ComponentFixture<ProfileDevMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDevMode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDevMode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
