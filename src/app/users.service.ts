import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }
  // getAllUsers(){
  //   return [
  //   //   {id:101,name:'johan',city:'Delhi',salary:200000,dob:new Date("06/1/1997")},
  //   // {id:102,name:'rohan',city:'mumbai',salary:200000,dob:new Date("09/1/1998")},
  //   // {id:103,name:'lohan',city:'assam',salary:2000,dob:new Date("11/1/1999")},
  //   // {id:104,name:'tohan',city:'kol',salary:2000,dob:new Date("8/1/2000")},
  //   // {id:105,name:'sohan',city:'sohan',salary:2000,dob:new Date("01/1/2021")},
  //   // {id:106,name:'yohan',city:'Delhi',salary:200,dob:new Date("01/1/2028")},
  //   // {id:107,name:'uohan',city:'Delhi',salary:7000,dob:new Date("01/1/2029")}
  //   ]
  // }
  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
