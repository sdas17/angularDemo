import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-component',
  template: 
  `
  <h2>Welcome</h2>
    <ul>
      <li><a routerLink="/customers">Customer List</a></li>
      <li><a routerLink="/customers/123">Details about customer 123</a></li>
    </ul>
  `,
  styleUrls: ['./welcome-component.component.scss']
})
export class WelcomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
