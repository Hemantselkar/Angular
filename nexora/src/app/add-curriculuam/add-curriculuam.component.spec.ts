import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurriculuamComponent } from './add-curriculuam.component';

describe('AddCurriculuamComponent', () => {
  let component: AddCurriculuamComponent;
  let fixture: ComponentFixture<AddCurriculuamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCurriculuamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCurriculuamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
