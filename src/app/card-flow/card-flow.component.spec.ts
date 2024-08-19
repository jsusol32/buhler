import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFlowComponent } from './card-flow.component';

describe('CardFlowComponent', () => {
  let component: CardFlowComponent;
  let fixture: ComponentFixture<CardFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
