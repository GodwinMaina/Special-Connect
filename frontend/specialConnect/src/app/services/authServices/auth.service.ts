import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { allClients, clientRegInterface, oneClient } from '../../interface/clientRegister';
import { allSpecialists, oneSpecialist, specialistRegInterface } from '../../interface/specialistRegister';
import { loginInterface, passwordReset } from '../../interface/loginInterface';
import { alljobs, jobCategory, onejob, postJobInterface } from '../../interface/postJobs';
import { getOneProfileInterface, getProfileInterface, profileInterface } from '../../interface/profileInterface';
import { allApplicationsResponse, applicationInfoResponse, apply } from '../../interface/applicationInterface';
import { allReviewsResponse, review, reviewInfoResponse } from '../../interface/reviews';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) {

  }

   //......user AuthServiceService........

  //registerClient
  registerClient(userData:clientRegInterface){
    return this.http.post<{ message: string, error: string, emailError:string, isAdmin:string }>('http://localhost:4000/client/register', userData)
  };

  //registerSpecialist
  registerSpeciaList(userData:specialistRegInterface){
    return this.http.post<{ message: string, error: string ,emailError:string,id:string}>('http://localhost:4000/specialist/register', userData)
  };

  //login client/specialist
  loginUser(email: string, password: string){
    const userLogs:loginInterface ={email:email, password:password};
    return this.http.post<{ message: string, error: string,UserType:string,isAdmin:string,token:string}>('http://localhost:4000/auth/login', userLogs);
  };


   //deleteClient
   deleteClient(client_id: string){
    return this.http.delete<{message:string, error:string}>(`http://localhost:4000/client/delete/${client_id}`)
  };

    //deleteClient
    deleteSpecialist(specialist_id: string){
      return this.http.delete<{message:string, error:string}>(`http://localhost:4000/specialist/delete/${specialist_id}`)
    };


  //passwordReset
  passwordReset(newPassword:loginInterface){
    return this.http.put<passwordReset>('http://localhost:4000/resetPassword' ,newPassword)
  };

  //update client === editing
  updateClient(client_id:string, userUpdate:clientRegInterface){
    return this.http.put<{message:string, error:string}>(`http://localhost:4000/users/update/${client_id}`, userUpdate)
  };


  //update specialist === editing
  updateSpecialist(specialist_id:string, userUpdate:specialistRegInterface){
    return this.http.put<{message:string, error:string}>(`http://localhost:4000/specialist/update/${specialist_id}`, userUpdate)
  };

  //getAllClients
  getAllClients(){
    return this.http.get<allClients>('http://localhost:4000/client')
  }

  //getOneClient
  getOneClient(client_id:string){
    return this.http.get<oneClient>(`http://localhost:4000/client/${client_id}`)
  }

   //getAllClients
   getAllSpecialists(){
    return this.http.get<getProfileInterface>('http://localhost:4000/specialist')
  }

  //getOneClient
  getOneSpecialist(specialist_id:string){
    return this.http.get<oneSpecialist>(`http://localhost:4000/specialist/${specialist_id}`)
  }



//Jobs authservice
postJobs(client_id:string, jobData:postJobInterface){
  return this.http.post<{ message: string, error: string }>(`http://localhost:4000/jobs/create/${client_id}`, jobData)
};

getJobs(){
  return this.http.get<alljobs>('http://localhost:4000/jobs/alljobs')
}

getJobCategory(category:string){
  return this.http.get<jobCategory>(`http://localhost:4000/jobs/${category}`)
}


updateJob(job_id:string, jobUpdate:postJobInterface){
  return this.http.put<{message:string, error:string}>(`http://localhost:4000/jobs/update/${job_id}`, jobUpdate)
}

deleteJob(job_id:string){
  return this.http.delete<{message:string, error:string}>(`http://localhost:4000/jobs/delete/${job_id}`)
}

getOneJob(job_id:string){
  return this.http.get<onejob>(`http://localhost:4000/jobs/job/${job_id}`)
}


getJobsByClient(client_id:string){
  return this.http.get<alljobs>(`http://localhost:4000/jobs/client/${client_id}`)
}


getJobsBySpecialist(specialist_id:string){
  return this.http.get<alljobs>(`http://localhost:4000/jobs/specialist/${specialist_id}`)
}


//profiles services
createProfile(profileData:profileInterface, specialist_id:string ){
  return this.http.post<{ message: string, error: string }>(`http://localhost:4000/profiles/create/${specialist_id}`, profileData)
}

getProfiles(){
  return this.http.get<getProfileInterface>('http://localhost:4000/profiles')
}

getOneSpecialistProfile(specialist_id:string){
  return this.http.get<getOneProfileInterface>(`http://localhost:4000/profiles/${specialist_id}`)

}

updateProfile(profile_id:string, profileUpdate:profileInterface){
  return this.http.put<{message:string, error:string}>(`http://localhost:4000/profiles/update/${profile_id}`, profileUpdate)
}

deleteProfile(profile_id:string){
  return this.http.delete<{message:string, error:string}>(`http://localhost:4000/profiles/delete/${profile_id}`)

}


// application services
createApplication(application: apply){
  return this.http.post<applicationInfoResponse>(`${this.apiUrl}/applications/apply`, application)
}

getJobApplications(job_id: string){
  return this.http.get<allApplicationsResponse>(`${this.apiUrl}/applications/job/${job_id}`)
}

getSpecialistApplications(specialist_id: string){
  return this.http.get<allApplicationsResponse>(`${this.apiUrl}/applications/specialist/${specialist_id}`)
}

updateApplication(apply_id: string, application: apply){
  return this.http.put<applicationInfoResponse>(`${this.apiUrl}/applications/${apply_id}`, application)

}


deleteApplication(apply_id: string){
  return this.http.delete<applicationInfoResponse>(`${this.apiUrl}/applications/${apply_id}`)

}

SetadminEmails(){

}


getadminEmails(){

  return localStorage.getItem('adminEmail');
}


 // reviews services
 sendReview(review: review){
  return this.http.post<reviewInfoResponse>(`${this.apiUrl}/review`, review)
}

specialistReviews(specialist_id: string){
  return this.http.get<allReviewsResponse>(`${this.apiUrl}/reviews/${specialist_id}`)
}



}
