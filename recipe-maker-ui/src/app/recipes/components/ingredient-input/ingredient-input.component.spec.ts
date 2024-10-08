import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInputComponent } from './ingredient-input.component';

describe('IngredientInputComponent', () => {
  let component: IngredientInputComponent;
  let fixture: ComponentFixture<IngredientInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
