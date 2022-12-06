import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public customers = [
    { name: 'Customer One', id: 1},
    { name: 'Customer Two', id: 2},
    { name: 'Customer Three', id: 3},
  ];
}
