import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDetailesPage } from './show-detailes.page';

describe('ShowDetailesPage', () => {
  let component: ShowDetailesPage;
  let fixture: ComponentFixture<ShowDetailesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
