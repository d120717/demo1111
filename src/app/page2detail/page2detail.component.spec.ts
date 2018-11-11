import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2detailComponent } from './page2detail.component';

describe('Page2detailComponent', () => {
  let component: Page2detailComponent;
  let fixture: ComponentFixture<Page2detailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2detailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
