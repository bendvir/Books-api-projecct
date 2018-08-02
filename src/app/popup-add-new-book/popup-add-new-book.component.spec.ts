import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddNewBookComponent } from './popup-add-new-book.component';

describe('PopupAddNewBookComponent', () => {
  let component: PopupAddNewBookComponent;
  let fixture: ComponentFixture<PopupAddNewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAddNewBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
