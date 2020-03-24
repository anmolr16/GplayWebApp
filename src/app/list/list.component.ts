import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: {};
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private hs: HeroService
  ) { }

  redirect(appId): void {
    this.router.navigate(['/detail/'], {queryParams: {pkg: appId}});
  }

  getStars(rating) {
    const val = parseFloat(rating);
    const size = (val / 5) * 100;
    return size + '%';
  }

  getAppList() {
    this.hs.getAppList().subscribe(response => {
      this.list = response.body;
    });
  }

  ngOnInit() {
    this.getAppList();
  }

}
