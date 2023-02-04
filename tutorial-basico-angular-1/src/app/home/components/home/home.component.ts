import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentCarList:any = []
  constructor() { 
    this.currentCarList = [
      {tipo:"moto", descripcion: "Moto Chopper"},
      {tipo:"auto", descripcion: "Auto Ibiza"},
      {tipo:"camioneta", descripcion: "Camioneta Volvo"}
    ];
  }

  ngOnInit(): void {

  }

}
