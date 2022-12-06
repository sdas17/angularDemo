import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textsection2',
  // templateUrl: './textsection2.component.html',
  styleUrls: ['./textsection2.component.scss'],

  template:` 
  <app-welcome-component></app-welcome-component>
<app-customers></app-customers>
  <app-customers-detail></app-customers-detail>
  <router-outlet></router-outlet>
  <app-demo></app-demo>
  `
})
export class Textsection2Component implements OnInit {

  constructor() { }
  titled = 'router-demo';
  ngOnInit(): void {
  }
  title='subham kumar das';

  todos = [   
    'Shopping',
    'Homework',
    'Listen to music'
  ];
  addItem(){
    this.todos.push('something');
  }
  myFirstValue = 42; 

  onReset() {
    console.log('welcome');

    this.myFirstValue = 0;  
  }
  kaeferPower = 22;  
  kaeferUom = 'PS'; 
  @Input() value = 30;
  @Input() uom = "KW";}
