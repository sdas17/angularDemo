import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  Users:any;

  constructor( private UsersService:UsersService) {}

  ngOnInit(): void {
    this.Users=this.UsersService.getAllUsers()
    this.UsersService.getAllUsers().subscribe((data)=>{
      this.Users=data;
      console.log(this.Users);
      
    })
  }

}
