import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByeWordComponent } from './bye-word.component';

describe('ByeWordComponent', () => {
  let component: ByeWordComponent;
  let fixture: ComponentFixture<ByeWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByeWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByeWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
