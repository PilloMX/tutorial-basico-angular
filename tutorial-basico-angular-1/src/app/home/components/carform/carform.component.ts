import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.scss']
})
export class CarformComponent implements OnInit {
  @Input() carlist:any = [];

  newCar:any = {tipo:"", descripcion:""};

  constructor() { }

  ngOnInit(): void {
  }

  onClickAgregar(){
    this.carlist.push(this.newCar);
    this.newCar = {tipo:"", descripcion:""};
  }
}
