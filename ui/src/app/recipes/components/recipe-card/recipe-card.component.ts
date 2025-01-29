import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent implements AfterViewInit {
  @Input() recipe!: Recipe;
  @ViewChild('title') titleElement: ElementRef | undefined;
  showTooltip: boolean = false;

  ngAfterViewInit(): void {
    if (this.titleElement) {
      const element = this.titleElement.nativeElement;
      this.showTooltip = element.scrollWidth > element.clientWidth;
    }
  }
}
