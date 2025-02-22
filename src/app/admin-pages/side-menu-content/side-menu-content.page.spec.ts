import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideMenuContentPage } from './side-menu-content.page';

describe('SideMenuContentPage', () => {
  let component: SideMenuContentPage;
  let fixture: ComponentFixture<SideMenuContentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
