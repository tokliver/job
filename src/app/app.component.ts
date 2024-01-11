import { Component } from '@angular/core';
import { LocalService } from './service/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoggedIn: boolean = false;
  userInfo: any;
  jobApplicationObj: any = {
    "ApplicationId": 0,
    "JobId": 0,
    "JobSeekerId": 0,
    "AppliedDate": new Date(),
    "ApplcationStatus": "New"
  }

  constructor(private localStore: LocalService) {
    if (typeof window !== 'undefined') {
      const userData = localStore.getData('jobLoginUser');

      if (userData == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userInfo = JSON.parse(userData);
        this.jobApplicationObj.JobSeekerId = this.userInfo?.jobSeekerId;
      }
    }
  }
  logOff() {
    this.localStore.removeData('jobLoginUser');
    this.isLoggedIn = false;
  }
}
