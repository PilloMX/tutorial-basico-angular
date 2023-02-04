import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {
  @Input() carlist:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
