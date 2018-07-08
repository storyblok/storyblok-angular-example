import { Component, OnInit, Input } from '@angular/core';
import { Components } from '../components';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  components = Components;

  @Input() columns: any[];
  @Input() _editable: any;

  constructor() { }

  ngOnInit() {
  }

}
