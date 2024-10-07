import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  // standalone: true,
  // imports: [
  //   NgFor
  // ]
})
export class HeroesComponent {
  // heroes = HEROES;

  constructor(private heroService: HeroService) {

  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit() {
    this.getHeroes();
  }

  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
