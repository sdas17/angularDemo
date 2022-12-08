import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../shared/api-service.service';
import { EmployeeModals } from '../shared/export-dashbaord.modal';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  formValue !:FormGroup;
  employeeData!:any;
  EmployeeObj:EmployeeModals= new EmployeeModals();
  constructor( private formBuilder:FormBuilder,private Api:ApiServiceService) { }

  ngOnInit(): void {
    
    this.formValue= this.formBuilder.group({
    
      
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:[''],

    })
    this.getAllEmployee();
  }
//  postEmployeesDetails(){
//   this.EmployeeObj.firstName= this.formValue.value.firstName;
//   this.EmployeeObj.lastName= this.formValue.value.lastName;
//   this.EmployeeObj.email= this.formValue.value.email;
//   this.EmployeeObj.mobile= this.formValue.value.mobile;
//   this.EmployeeObj.salary= this.formValue.value.salary;

//   this.Api.postEmployee(this.EmployeeObj)
//   .subscribe(res=>{
//     console.log(res);
//     alert(`employee Added sucessfully`)
//    let ref = document.getElementById('cancel');
//    ref?.click();
//    this.formValue.reset();
//    this.getAllEmployee();
//   },err=>{
//     alert(`something went wrong`)
//   }
//   )

//  }
postEmployeesDetails(){
  this.EmployeeObj.firstName=this.formValue.value.firstName;
  this.EmployeeObj.lastName=this.formValue.value.lastName;
  this.EmployeeObj.email=this.formValue.value.email;
  this.Api.postEmployee(this.EmployeeObj).subscribe(res=>{
    console.log(res);
        alert(`employee Added sucessfully`)
       let ref = document.getElementById('cancel');
       ref?.click();
       this.formValue.reset();
       this.getAllEmployee();
  },err =>{
    alert('some went wrong')
      }
      )
}

 getAllEmployee(){
  this.Api.getEmployee().subscribe(res =>{
  this.employeeData=res;
    
  })
}

delteEmployee(row:any){
  this.Api.delteEmployee(row.id)
  .subscribe(res =>{
    alert(`Employee Deleteed`)
    this.getAllEmployee();
  })
}
onEdit(row:any){
  this.EmployeeObj.id = row.id;
  console.log(this.EmployeeObj.id);
  this.formValue.controls['firstName'].setValue(row.firstName)
  this.formValue.controls['lastName'].setValue(row.lastName)
  this.formValue.controls['email'].setValue(row.email)
  this.formValue.controls['mobile'].setValue(row.mobile)
  this.formValue.controls['salary'].setValue(row.salary)

}

updateEmployee(){
this.EmployeeObj.firstName=this.formValue.value.firstName;
this.EmployeeObj.lastName=this.formValue.value.lastName;
this.EmployeeObj.email=this.formValue.value.email;
this.EmployeeObj.mobile=this.formValue.value.mobile;
this.EmployeeObj.salary=this.formValue.value.salary;
console.log('update firstname',this.formValue.value.firstName);
console.log('update firstname',this.formValue.value.lastName);
console.log('update firstname',this.formValue.value.salary);
console.log('update firstname',this.formValue.value.mobile);
console.log('update firstname',this.formValue.value.salary);
console.log('update firstname',this.EmployeeObj.firstName);
console.log('update firstname',this.EmployeeObj.lastName);
console.log('update firstname',this.EmployeeObj.email);
console.log('update firstname',this.EmployeeObj.mobile);

this.Api.updateEmployee(this.EmployeeObj.id,this.EmployeeObj)
.subscribe(res =>{
  let ref = document.getElementById('cancel');
   ref?.click();
   this.formValue.reset();
  this.getAllEmployee();

})




}

}
  