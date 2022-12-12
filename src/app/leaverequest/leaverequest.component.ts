import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent {


  constructor(private http:HttpClient){}

  onEmp(requestLeave:{firstName:string,lastName:string,leaveStart:string,leaveEnd:string,leaveType:string,leaveReason:string,leaveDays:string})
  {
   
    console.log(requestLeave);
    this.http.post('http://localhost:5001/vpost/leaveinfo',requestLeave)
    .subscribe((res)=>{
      console.log(res);

    });
}
}
