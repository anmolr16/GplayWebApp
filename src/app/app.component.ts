import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HeroService } from './hero.service';

export interface Hero { id: number; name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Andriod App Store';
  heroes: Hero[];
  form: FormGroup;

  constructor(
    private hs: HeroService,
    private fb: FormBuilder
  ) { }

  // deleteHero(id): void {
  //   this.hs.deleteHero(id).subscribe(data => this.getHeroes());
  // }

  // createHeroControl(hero?): FormGroup {
  //   return this.fb.group({
  //     id: [hero ? hero.id : ''],
  //     name: [hero ? hero.name : '', Validators.required],
  //     age: [hero ? hero.age : '', [Validators.required, Validators.pattern('^[0-9]{2,3}$')]]
  //   });
  // }

  // addHeroControl(hero?): void {
  //   this.heroList.controls.push(this.createHeroControl(hero));
  // }

  // get heroList(): FormArray {
  //   return this.form.controls.heroList as FormArray;
  // }

  // createForm(): void {
  //   this.form = this.fb.group({ heroList: this.fb.array([]) });
  //   this.heroes.forEach(hero => this.addHeroControl(hero));
  //   console.log(this.form);
  // }

  // getHeroes(): void {
  //   this.hs.getHeroes().subscribe(data =>  {
  //     this.heroes = data;
  //     this.createForm();
  //   });
  // }

  ngOnInit() {
    // this.getHeroes();
  }

}
