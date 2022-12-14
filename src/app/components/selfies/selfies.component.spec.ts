import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfiesComponent } from './selfies.component';

describe('SelfiesComponent', () => {
  let component: SelfiesComponent;
  let fixture: ComponentFixture<SelfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
