import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListKittenComponent } from './list-kitten.component';

describe('ListKittenComponent', () => {
  let component: AppListKittenComponent;
  let fixture: ComponentFixture<AppListKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListKittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppListKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
