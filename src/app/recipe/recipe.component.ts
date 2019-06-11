import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentItem: string = 'Explore Our Recipes';

  recipe: Recipe[] = [
    new Recipe('Cereal', ['Wheaties Cereal', 'Pea Milk'], ['Pour milk into the cereal box', 'Next pour in your Wheaties cereal in the bowl']),
    new Recipe('Ramen', ['Top Ramen', 'Flavor packet', 'Hot water'], ['Drink boiling water', 'Snort the provided flavor packet', 'Eat the dry ramen noodles']),
    new Recipe('Buttered Tortilla', ['Torilla', 'I Can\'t Believe It\'s Not Butter - Pump Bottle'], ['Remove the CPU cooling fan from your home machine and replace with tortilla', 'Start playing Counter Strike to get your machine warmed up', 'After about 10 hours flip tortilla and then wait another 10 hours or until crispy', 'Spray the butter on each side until soggy'])
  ]

}
