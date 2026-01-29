import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNdeComponent } from './why-nde.component';

describe('WhyNdeComponent', () => {
  let component: WhyNdeComponent;
  let fixture: ComponentFixture<WhyNdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyNdeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyNdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
