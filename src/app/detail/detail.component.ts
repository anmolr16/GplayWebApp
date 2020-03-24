import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';

// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  appDetail: any;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private hs: HeroService
  ) {
    this.route.queryParams.subscribe(params => {
      this.getAppDetail(params.pkg);
    });
  }

  getAppDetail(appID) {
    this.hs.getAppDetail(appID).subscribe(response => {
      this.appDetail = response.body;
      console.log(this.appDetail);
      console.log(this.appDetail.screenshots);
    });
  }

  getBarWidth(key) {
    return ((this.appDetail.histogram[key] / this.appDetail.ratings) * 100) + '%';
  }

  getStars(rating) {
    const val = parseFloat(rating);
    const size = (val / 5) * 100;
    return size + '%';
  }

  ngOnInit() {
  }
}
