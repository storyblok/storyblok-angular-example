import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent implements OnInit {
  @Input() headline: string;
  @Input() _editable: any;

  constructor() { }

  ngOnInit() {
  }

}
