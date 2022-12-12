import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-leaveinfo',
  templateUrl: './leaveinfo.component.html',
  styleUrls: ['./leaveinfo.component.css']
})
export class LeaveinfoComponent {

  leaveList:any;
  constructor(private http:HttpClient){
    this.leaveList=[];
  }

  ngOnInit(): void{
    this.getLeaveList();
  }

  getLeaveList(){
    this.http.get('http://localhost:5001/vget/leaveinfo').subscribe((results:any)=>{
         this.leaveList = results;
    })
  }
}
