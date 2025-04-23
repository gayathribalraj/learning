import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExistingLeadsPage } from './existing-leads.page';

describe('ExistingLeadsPage', () => {
  let component: ExistingLeadsPage;
  let fixture: ComponentFixture<ExistingLeadsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingLeadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
