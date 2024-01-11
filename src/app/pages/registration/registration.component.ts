import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  constructor(private jobService: JobService) {
    
  }

    employerObj: any ={
  "EmployerId": 0,
  "CompanyName": "",
  "EmailId": "",
  "MobileNo": "",
  "PhoneNo": "",
  "CompanyAddress": "",
  "City": "",
  "State": "",
  "PinCode": "",
  "LogoURL": "",
  "GstNo": ""
    }

register() {
  this.jobService.regiesterEmployer(this.employerObj).subscribe((res: any)=>{
    if(res.result){
      console.log("message", res.message)
      alert("save with success !!!"+ res.message);
    }else{
      alert("error")
    }
  })
}

public isJobSeeker: boolean = true;


jobSeekerObj : any = {
  "JobSeekerId": 0,
  "FullName": "",
  "EmailId": "",
  "MobileNo": "",
  "ExperienceStatus": "",
  "ResumeUrl": "",
}

addNewJobSeeker() {
  console.log('****', this.jobSeekerObj);
  this.jobService.addNewJobSeeker(this.jobSeekerObj).subscribe(
    (res:any)=>{
      console.log("respoonse", res)
      if(res.result){
        console.log("message", res.message)
        alert("save with success !!!"+ res.message);
      }else{
        alert("error" + res.message)
      }
    }
  )
}
}
