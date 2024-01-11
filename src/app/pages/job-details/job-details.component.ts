import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { JobService } from '../../service/job.service';
import { LocalService } from '../../service/local.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent {
  activeJobId: number = 0;
  jobObj: any;
  isLoggedIn: boolean = false;
  userInfo: any;
  jobApplicationObj: any = {
    "ApplicationId": 0,
    "JobId": 0,
    "JobSeekerId": 0,
    "AppliedDate": new Date(),
    "ApplcationStatus": "New"
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private serviceJob: JobService,
    private localStore: LocalService
  ) {
      const userData = localStore.getData('jobLoginUser');

      if (userData == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userInfo = JSON.parse(userData);
        console.log("user infor", this.userInfo);
        this.jobApplicationObj.JobSeekerId = 32;// this.userInfo?.jobSeekerId;
      }
    this.activeRoute.params.subscribe((res: any) => {
      this.activeJobId = res.jobId;
      this.getJobById();
      this.jobApplicationObj.JobId = Number(this.activeJobId);
    });
  }

  getJobById() {
    this.serviceJob.getJobById(this.activeJobId).subscribe((res: any) => {
      this.jobObj = res.data;
    });
  }

  apply(){
    console.log("before ",this.jobApplicationObj);
    this.serviceJob.SendJobApplication(this.jobApplicationObj).subscribe((res:any)=>{
      console.log("res from server ", res);
      if(res.result){
        alert("You are successull to Job ");
      }else{
        alert("Eror to apply " + res.message);
      }
    })
  }
}
