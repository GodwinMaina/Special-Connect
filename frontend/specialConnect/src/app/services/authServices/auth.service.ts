import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { allClients, clientRegInterface, oneClient } from '../../interface/clientRegister';
import { allSpecialists, oneSpecialist, specialistRegInterface } from '../../interface/specialistRegister';
import { loginInterface, passwordReset } from '../../interface/loginInterface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

   //......user AuthServiceService........

  //registerClient
  registerClient(userData:clientRegInterface){
    return this.http.post<{ message: string, error: string }>('http://localhost:4000/client/register', userData)
  };

  //registerSpecialist
  registerSpeciaList(userData:specialistRegInterface){
    return this.http.post<{ message: string, error: string }>('http://localhost:4000/specialist/register', userData)
  };

  //login client/specialist
  loginUser(email: string, password: string){
    const userLogs:loginInterface ={email:email, password:password};
    return this.http.post<{ message: string, error: string,userType:string,isAdmin:string,token:string}>('http://localhost:4000/auth/login', userLogs);
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
    return this.http.get<allClients>('http://localhost:4000/users')
  }

  //getOneClient
  getOneClient(client_id:string){
    return this.http.get<oneClient>(`http://localhost:4000/users/${client_id}`)
  }

   //getAllClients
   getAllSpecialists(){
    return this.http.get<allSpecialists>('http://localhost:4000/specialist')
  }

  //getOneClient
  getOneSpecialist(specialist_id:string){
    return this.http.get<oneSpecialist>(`http://localhost:4000/specialist/${specialist_id}`)
  }

}
