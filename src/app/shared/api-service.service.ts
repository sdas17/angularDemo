import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  postEmployee(data:any ){
return this.http.post<any>("http://localhost:3000/posts",data)
.pipe(map((res:any)=>{
  return res;

}))
  }



  getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    
    }))
      }
    
     
          delteEmployee(id:number ){
            return this.http.delete<any>("http://localhost:3000/posts/"+id)
            .pipe(map((res:any)=>{
              return res;
            }))
              }


              updateEmployee(id: number,data: any, ){
                return this.http.put<any>(`http://localhost:3000/posts/${id}` ,data)
                .pipe(map((res:any)=>{
                  return res;
                }))
                
        
                
                  }
                 
}