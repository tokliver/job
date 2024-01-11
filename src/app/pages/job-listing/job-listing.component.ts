import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';
import { LocalService } from '../../service/local.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss',
})
export class JobListingComponent {
  userInfo: any;
  jobList: any[] = [];
  constructor(
    private jobService: JobService,
    private localStore: LocalService
  ) {
    const userData = localStore.getData('jobLoginUser');
    if (userData !== null) {
      this.userInfo = JSON.parse(userData);
      this.getJobBEmployee();
    }
  }
  getJobBEmployee() {
    this.jobService
      .getJobsEmployerById(this.userInfo.JobId)
      .subscribe((res: any) => {
        this.jobList = res.data;
      });
  }
}
