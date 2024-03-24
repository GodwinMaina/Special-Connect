
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { expectedClients } from './testdata/client';
import { expectedSpecialists } from './testdata/specialist';
import { expectedProfile } from './testdata/profile';
import { expectedJobs } from './testdata/jobs';



describe('AuthService', () => {
  let service: AuthService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('registers a client', () => {
    let mockUser = {
      firstName: "godwin",
      lastName: "Myner",
      email: "gathogo@gmail.com",
      password: "client123456",
      phone: "07023456789",
    };
    service
      .registerClient(mockUser)
      .subscribe((res) => {
        expect(res.message).toEqual('Account created successfully');
      });

    const mockReq = testingController.expectOne('http://localhost:4000/client/register');
    expect(mockReq.request.method).toEqual('POST');
    expect(mockReq.request.body).toEqual(mockUser);
    mockReq.flush({ message: 'Account created successfully' });
  });



  it('logs in a user', ()=>{
    service.loginUser('gathogo@gmail.com', 'client123456').subscribe((res) => {
      expect(res.message).toEqual('Logged  in successfully');
    });

    let mockUser = {
      email: 'gathogo@gmail.com',
      password: 'client123456'
    };

    const mockReq = testingController.expectOne('http://localhost:4000/auth/login');
    expect(mockReq.request.method).toEqual('POST')
    expect(mockReq.request.body).toEqual(mockUser)
    mockReq.flush({message: "Logged  in successfully"})
  })



  it('deletes a client', ()=>{
    let client_id = '1bc55a48-b507-4475-809f-376395ba4445';

    service.deleteClient(client_id).subscribe((res:any)=>{
      expect(res).toBeTruthy();
      expect(res.message).toBe('Client deleted successfully')
    })

    const mockReq = testingController.expectOne(`http://localhost:4000/client/delete/${client_id}`)
    expect(mockReq.request.method).toBe('DELETE')
  })


   it('resetting password', ()=>{
    let mockUser = {
      email: 'gathogo@gmail.com',
      password: 'update123456',
    };

    service.passwordReset(mockUser).subscribe((res) => {
      expect(res.message).toEqual('Password changed successfully');
    });

    const mockReq = testingController.expectOne('http://localhost:4000/resetPassword');
    expect(mockReq.request.method).toEqual('PUT')
    expect(mockReq.request.body).toEqual(mockUser)
    mockReq.flush({ message: 'Password changed successfully' });
  })




  it('update client  details', ()=>{
    let client_id = '1bc55a48-b507-4475-809f-376395ba4445';

    let mockUser = {
      firstName: 'updateClient',
      lastName: 'updatedLastNmae',
      email: 'clientUpdate@gmail.com',
      password: 'update123456',
      phone: '07023456789'
    };

    service.updateClient(client_id,mockUser).subscribe((res) => {
      expect(res.message).toEqual('updated successfully');
    });

    const mockReq = testingController.expectOne(`http://localhost:4000/client/update/${client_id}`);
    expect(mockReq.request.method).toEqual('PUT')
    expect(mockReq.request.body).toEqual(mockUser)
    mockReq.flush({ message: 'updated successfully' });
  });





  it('gets all Clients', () => {
    service.getAllClients().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(3);
    });

    const mockReq = testingController.expectOne('http://localhost:4000/client');
    mockReq.flush(Object.values(expectedClients));
    expect(mockReq.request.method).toBe('GET');
  });



  it('gets client by client_id', ()=>{
    let client_id = '1bc55a48-b507-4475-809f-376395ba4445';

    service.getOneClient(client_id).subscribe((user:any)=>{
      expect(user).toBeTruthy();
      expect(user.email).toBe('gathogo@gmail.com');
    })

    const mockReq = testingController.expectOne(`http://localhost:4000/client/${client_id}`)
    mockReq.flush(expectedClients[0])
    expect(mockReq.request.method).toBe('GET')
  })



///specialist auth services Test

  it('register specialist', () => {
    let mockSpecialist = {
     
    firstName:"NICKSON",
    lastName: "MWANGI",
    email: "HXALLAN@gmail.com",
    password: "12345678",
    phone: "012345560"

    };
    service
  .registerSpeciaList(mockSpecialist)
      .subscribe((res) => {
        expect(res.message).toEqual('Account created successfully');
      });

    const mockReq = testingController.expectOne('http://localhost:4000/specialist/register');
    expect(mockReq.request.method).toEqual('POST');
    expect(mockReq.request.body).toEqual(mockSpecialist);
    mockReq.flush({ message: 'Account created successfully' });
  });


//get all specialists
  it('gets all specialist', () => {
    service.getAllSpecialists().subscribe((specialists: any) => {
      expect(specialists).toBeTruthy();
      expect(specialists.length).toBe(6);
    });

    const mockReq = testingController.expectOne('http://localhost:4000/specialist');
    mockReq.flush(Object.values(expectedSpecialists));
    expect(mockReq.request.method).toBe('GET');
  });



//get one specialist  by id
  it('gets specialist by id', ()=>{
    let specialist_id = '1bc55a48-b507-4475-809f-376395ba4445';

    service.getOneSpecialist(specialist_id).subscribe((user:any)=>{
      expect(user).toBeTruthy();
    expect(user.email).toBe('HXALLAN@gmail.com');
    })

    const mockReq = testingController.expectOne(`http://localhost:4000/specialist/${specialist_id}`)
    mockReq.flush(expectedSpecialists[0])
    expect(mockReq.request.method).toBe('GET')
  });


//updating a specialist
  it('changing specialist details', ()=>{
    let id = '1bc55a48-b507-4475-809f-376395ba4445';
    let mockSpecialist = {
        firstName: 'updateClient',
        lastName: 'updatedLastNmae',
        email: 'clientUpdate@gmail.com',
        password: 'update123456',
        phone: '07023456789'
    };

    service.updateSpecialist(id,mockSpecialist).subscribe((res) => {
      expect(res.message).toEqual('updated successfully');
    });
    const mockReq = testingController.expectOne(`http://localhost:4000/specialist/update/${id}`);
    expect(mockReq.request.method).toEqual('PUT')
    expect(mockReq.request.body).toEqual(mockSpecialist);
    mockReq.flush({ message: 'updated successfully' });
  })



//delete specialist
  it('deletes a Specialist', ()=>{
    let specialist_id = '1bc55a48-b507-4475-809f-376395ba4445';

    service.deleteSpecialist(specialist_id).subscribe((res:any)=>{
      expect(res).toBeTruthy();
      expect(res.message).toBe('Specialist deleted successfully')
    })

    const mockReq = testingController.expectOne(`http://localhost:4000/specialist/delete/${specialist_id}`)
    expect(mockReq.request.method).toBe('DELETE')
  })



  // profile testing

  //create new profile
  it('create new Profile', () => {
    let specialist_id = '1bc55a48-b507-4475-809f-376395ba4445';
    let mockProfile = {
    photo:"https://media.licdn.com/dms/image/C4E03AQEGCAh_N5RneA/profile-displayphoto-shrink_800_800/0/1535004932145?e=1716422400&v=beta&t=GRUsw2_dLSGUDrFx0avgAXf46-WGWFU12Bzy_Pl9zvk",
    role: "Machine learning ",
    experience: "10 years",
    location:"Singapore",
    education: "Degree Singapore college",
    languages: "English, French",
    skills: "Mchine learning engineer neural networks and deep learning",
    description: "deep learning",
    hourlyRate: "$50"
};
    service.createProfile( mockProfile, specialist_id)
      .subscribe((res) => {
        expect(res.message).toEqual('profile created successfully');
      });
    const mockReq = testingController.expectOne(`http://localhost:4000/profiles/create/${specialist_id}`);
    expect(mockReq.request.method).toEqual('POST');
    expect(mockReq.request.body).toEqual(mockProfile);
    mockReq.flush({ message: 'profile created successfully' });
  });


  //get all profiles
  it('get all specialist profiles', () => {
    service.getProfiles().subscribe((profiles: any) => {
      expect(profiles).toBeTruthy();
      expect(profiles.length).toBeTruthy();
    const mockReq = testingController.expectOne('http://localhost:4000/profiles');
    mockReq.flush(Object.values(expectedProfile));
    expect(mockReq.request.method).toBe('GET');
  });
})


//get one specialist profile
it('gets specialist profile by id', ()=>{
  let specialist_id = '1bc55a48-b507-4475-809f-376395ba4445';

  service.getOneSpecialistProfile(specialist_id).subscribe((user:any)=>{
    expect(user).toBeTruthy();
  expect(user.email).toBe('compgodwin@gmail.com');
  })

  const mockReq = testingController.expectOne(`http://localhost:4000/profiles/${specialist_id}`)
  mockReq.flush(expectedProfile[0])
  expect(mockReq.request.method).toBe('GET')
});



//updateProfile

it('updating profile details', ()=>{

  let profile_id = "46d7a2cb-e0ae-4644-a771-95f6bdf9ab64"

  let mockedProfile = {
    specialist_id: "735bdbbf-8fea-43b6-8fd0-fdf1ebf9b87b",
    photo: "https://lh3.googleusercontent.com/ySz0rfKBopjSe-KnNJZZeslC4OBgher3TI60nGaOTQl03aDF7Bh7iNjmrwEsOriWNUwpCWHYBuhJe-Y6RuBoKSHN6ztGpHalZX-dDA=s339",
    role: " updated Web developer",
    experience: "5 years ",
    education: "university level",
    location: "Mombasa, Kenya",
    languages: "French, Spanish",
    skills: "software developer",
    description: "I am a software developer conversant with react, angular and DEVOPS.",
    hourlyRate: "$ 10",
    firstName:"Godwin",
    email:"compgodwin@gmail.com",
    phone:"0700064400"

  };

  service.updateProfile(profile_id,mockedProfile).subscribe((res) => {
    expect(res.message).toEqual('updated successfully');
  });
  const mockReq = testingController.expectOne(`http://localhost:4000/profiles/update/${profile_id}`);
  expect(mockReq.request.method).toEqual('PUT')
  expect(mockReq.request.body).toEqual(mockedProfile);
  mockReq.flush({ message: 'updated successfully' });
})


//delete profile
it('deletes a profile', ()=>{
  let profile_id = "46d7a2cb-e0ae-4644-a771-95f6bdf9ab64"

  service.deleteProfile(profile_id).subscribe((res:any)=>{
    expect(res).toBeTruthy();
    expect(res.message).toBe('profile deleted successfully')
  })

  const mockReq = testingController.expectOne(`http://localhost:4000/profiles/delete/${profile_id}`)
  expect(mockReq.request.method).toBe('DELETE')
})



//Jobs testing
// create jobs
it('create/post Job', () => {
  let client_id = 'af511d51-346f-457f-9a64-465e888edd88'
  let mockJob = {
   
    jobName: "Software Developer",
    category: "careTaker",
    description: "Developing software applications",
    duration: "3 months",
    budget: "$5000",
    client_id:'af511d51-346f-457f-9a64-465e888edd88'

  };
  service.postJobs(client_id,mockJob)
    .subscribe((res) => {
      expect(res.message).toEqual('JOB created successfully');
    });

  const mockReq = testingController.expectOne(`http://localhost:4000/jobs/create/${client_id}`);
  expect(mockReq.request.method).toEqual('POST');
  expect(mockReq.request.body).toEqual(mockJob);
  mockReq.flush({ message: 'JOB created successfully' });
});


///get all jobs
it('get all JOBS', () => {
  service.getJobs().subscribe((jobs: any) => {
    expect(jobs).toBeTruthy();
    expect(jobs.length).toBe(4);
  });
  const mockReq = testingController.expectOne('http://localhost:4000/jobs/alljobs');
  mockReq.flush(Object.values(expectedJobs));
  expect(mockReq.request.method).toBe('GET');
});


//getJob by client
it('gets jobs by client id', ()=>{
  let client_id = 'af511d51-346f-457f-9a64-465e888edd88'

  service.getJobsByClient(client_id).subscribe((user:any)=>{
    expect(user).toBeTruthy();
  expect(user.job_id).toBe('91326ccd-2042-4a20-a904-c2228ac46988');
  })

  const mockReq = testingController.expectOne(`http://localhost:4000/jobs/client/${client_id}`)
  mockReq.flush(expectedJobs[1])
  expect(mockReq.request.method).toBe('GET')
});


//GET ONE JOB BY ID
it('gets jobs by job_id', ()=>{
  let job_id = "666c79a4-edcc-45b9-9f24-9d346483b020"

  service.getOneJob(job_id).subscribe((user:any)=>{
    expect(user).toBeTruthy();
  expect(user.client_id).toBe('af511d51-346f-457f-9a64-465e888edd88');
  })

  const mockReq = testingController.expectOne(`http://localhost:4000/jobs/job/${job_id}`)
  mockReq.flush(expectedJobs[0])
  expect(mockReq.request.method).toBe('GET')
});


//update Job

it('updating JOB details', ()=>{

  let job_id = "666c79a4-edcc-45b9-9f24-9d346483b020"

  let mockedJob = {
    job_id: "666c79a4-edcc-45b9-9f24-9d346483b020",
    jobName: "updated",
    category: "Data analysis",
    description: "design Ryhde to town app",
    duration: " 5 days",
    budget: "$5000",
    client_id: "af511d51-346f-457f-9a64-465e888edd88"
    
  };

  service.updateJob(job_id,mockedJob).subscribe((res) => {
    expect(res.message).toEqual('updated successfully');
  });
  const mockReq = testingController.expectOne(`http://localhost:4000/jobs/update/${job_id}`);
  expect(mockReq.request.method).toEqual('PUT')
  expect(mockReq.request.body).toEqual(mockedJob );
  mockReq.flush({ message: 'updated successfully' });
})

//delete job by job_id
it('deletes a Job', ()=>{
  let job_id = "666c79a4-edcc-45b9-9f24-9d346483b020"

  service.deleteJob(job_id).subscribe((res:any)=>{
    expect(res).toBeTruthy();
    expect(res.message).toBe('JOB deleted successfully')
  })

  const mockReq = testingController.expectOne(`http://localhost:4000/jobs/delete/${job_id}`)
  expect(mockReq.request.method).toBe('DELETE')
})



})
