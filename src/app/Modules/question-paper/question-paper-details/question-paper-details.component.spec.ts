import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperDetailsComponent } from './question-paper-details.component';

describe('QuestionPaperDetailsComponent', () => {
  let component: QuestionPaperDetailsComponent;
  let fixture: ComponentFixture<QuestionPaperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPaperDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPaperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
