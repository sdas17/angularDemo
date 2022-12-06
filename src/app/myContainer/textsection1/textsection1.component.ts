import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textsection1',
  templateUrl: './textsection1.component.html',
  styleUrls: ['./textsection1.component.scss']
})
export class Textsection1Component implements OnInit {

  constructor() { 

  
  }

  ngOnInit(): void {
  }
  title = 'my-great-app';

  onClicked(){
    this.title += '!!';

  }
  myNumber=21;
}
