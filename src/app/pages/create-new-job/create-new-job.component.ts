import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrl: './create-new-job.component.scss'
})
export class CreateNewJobComponent implements OnInit{

 
  constructor(private serviceJob: JobService) {}
  ngOnInit(): void {
    this.getJobCategory();
  }

  jobObj: any= {
  "JobId": 0,
  "JobName": "",
  "CreatedDate": new Date(),
  "EmployerId": 0,
  "CategoryId": 0,
  "Experience": "",
  "Package": "",
  "Location": "",
  "JobDescription": "",
  "IsActive": true
  }

  categoryList: any []=[];
  getJobCategory(){
    this.serviceJob.getAllCategory().subscribe((res: any)=>{
      this.categoryList = res.data;
    })
  }

  CreateJob() {
    console.log("before to call save", this.jobObj);
    this.serviceJob.publishNewJob(this.jobObj).subscribe(
      (res: any) => {
        if(res.result){
          alert(res.message);
        }else{
          alert("Error "+res.message);
        }
        console.log("job create with success", res);
      }
    )
    }
}
