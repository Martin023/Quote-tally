import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailsSubmitterComponent } from './quote-details-submitter.component';

describe('QuoteDetailsSubmitterComponent', () => {
  let component: QuoteDetailsSubmitterComponent;
  let fixture: ComponentFixture<QuoteDetailsSubmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDetailsSubmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailsSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
