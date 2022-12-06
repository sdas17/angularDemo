import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-ps-kw',
  templateUrl: './app-input-ps-kw.component.html',
  styleUrls: ['./app-input-ps-kw.component.scss']
})
export class AppInputPsKwComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value = 30;
  uom = "PS";
}
