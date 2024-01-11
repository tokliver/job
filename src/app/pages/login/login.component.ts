import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';
import { LocalService } from '../../service/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private serviceJob: JobService, private route: Router, private localStore: LocalService) {}
  loginObj: any = {
    "UserName": "",
    "Password": ""
  }


  onLogin() {
    debugger;
    return this.serviceJob.createLogin(this.loginObj).subscribe((res: any)=>{
      console.log('response ', res);
      if(res.result) {
        alert('login with success '+ res.message);
        this.localStore.saveData('jobLoginUser', JSON.stringify(res.data));
        this.route.navigateByUrl('/home')
      }else{
        alert('error '+ res.message)
      }
    })
  }
}
