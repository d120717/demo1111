import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2detail',
  templateUrl: './page2detail.component.html',
  styleUrls: ['./page2detail.component.css'],
})
export class Page2detailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe(param => console.log(param.get('id')));
  }

  ngOnInit() {}
}
