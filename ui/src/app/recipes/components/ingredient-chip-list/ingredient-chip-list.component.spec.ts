import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientChipListComponent } from './ingredient-chip-list.component';

describe('IngredientChipListComponent', () => {
  let component: IngredientChipListComponent;
  let fixture: ComponentFixture<IngredientChipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientChipListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
