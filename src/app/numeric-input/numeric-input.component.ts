import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss']
})
export class NumericInputComponent implements OnInit {
onReset() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }
  @Input() public value = 0;
  @Output() public resetClicked = new EventEmitter<void>(); 
  public onResetClicked() {  
    this.resetClicked.emit();
  }
}
