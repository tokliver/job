import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl: string =
    'https://freeapi.miniprojectideas.com/api/JobPortal/';
  constructor(private http: HttpClient) {}

  regiesterEmployer(obj: any) {
    return this.http.post(this.apiUrl + 'AddNewEmployer', obj);
  }

  addNewJobSeeker(obj: any) {
    return this.http.post(this.apiUrl + 'AddNewJobSeeker', obj);
  }

  createLogin(obj: any) {
    return this.http.post(this.apiUrl + 'Login', obj);
  }

  getAllCategory() {
    return this.http.get(this.apiUrl + 'GetAllJobCategory');
  }

  publishNewJob(obj: any) {
    return this.http.post(this.apiUrl + 'CreateNewJobListing', obj);
  }

  getActiveJobs() {
    return this.http.get(this.apiUrl + 'GetActiveJobListing');
  }

  getJobById(jobId: number) {
    return this.http.get(this.apiUrl + 'GetJobListingById?jobId=' + jobId);
  }

  SendJobApplication(obj: any) {
    return this.http.post(this.apiUrl + 'SendJobApplication', obj);
  }
  //https://freeapi.miniprojectideas.com/api/JobPortal/GetJobsByEmployerId?employerId=7
  getJobsEmployerById(jobId: number) {
    return this.http.get(this.apiUrl + 'GetJobsByEmployerId?employerId=' + jobId);
  }
}
