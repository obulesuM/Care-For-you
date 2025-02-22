import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPagesPage } from './admin-pages.page';

describe('AdminPagesPage', () => {
  let component: AdminPagesPage;
  let fixture: ComponentFixture<AdminPagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
