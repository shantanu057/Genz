import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuestionPaperComponent } from './delete-question-paper.component';

describe('DeleteQuestionPaperComponent', () => {
  let component: DeleteQuestionPaperComponent;
  let fixture: ComponentFixture<DeleteQuestionPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteQuestionPaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
