import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherComponent } from './matcher.component';

describe('MatcherComponent', () => {
  let component: MatcherComponent;
  let fixture: ComponentFixture<MatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should check if the objects are the same ',()=>{
    const obj1 = {value: true};
    const obj2 = {value: true};

    expect(obj1).toBe(obj1);
  });

  it('should check if the values are the same',()=>{
    expect(component.Igual()).toEqual(2);
  });
});
