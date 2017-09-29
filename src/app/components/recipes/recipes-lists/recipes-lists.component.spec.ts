import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpiesListsComponent } from './recipes-lists.component';

describe('RecpiesListsComponent', () => {
  let component: RecpiesListsComponent;
  let fixture: ComponentFixture<RecpiesListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecpiesListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpiesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
