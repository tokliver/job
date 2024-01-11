import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit{
  jobList: any;
  constructor(private jobService: JobService, private route: Router){}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(){
    this.jobService.getActiveJobs().subscribe((res:any)=>{
      console.log(res);
      this.jobList = res.data;
    });
  }
  openJob(jobIb: number){
    this.route.navigate(['job-details',jobIb]);
  }
}
