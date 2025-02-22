import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareteamPage } from './careteam.page';

describe('CareteamPage', () => {
  let component: CareteamPage;
  let fixture: ComponentFixture<CareteamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CareteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
