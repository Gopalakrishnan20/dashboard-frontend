import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavbarComponent } from './left-navbar.component';

describe('LeftNavbarComponent', () => {
  let component: LeftNavbarComponent;
  let fixture: ComponentFixture<LeftNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
