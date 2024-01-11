import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateNewJobComponent,
    HomeComponent,
    JobDetailsComponent,
    JobListingComponent,
    MyJobsComponent,
    RegistrationComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
