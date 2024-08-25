import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeQueryComponent } from './recipe-query.component';

describe('RecipeQueryComponent', () => {
  let component: RecipeQueryComponent;
  let fixture: ComponentFixture<RecipeQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
