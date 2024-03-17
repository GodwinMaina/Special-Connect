

export interface specialistDetails{
  photo: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location:string;

}



export interface specialistRegInterface{

  // specialist_id: string;
  photo: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location:string;

  city: string;
  country: string;
  postal: string;
  phone: number;
  education:string;
  languages:string;
  skills:string;
  role:string;
  experience:string;
  hourlyRate:string;
  description:string;
  isAdmin: boolean;
  isWelcomed: boolean;
  isDeleted: boolean;
}




export  interface allSpecialists {

  message: [{

  specialist_id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  photo: string;
  location:string;
  city: string;
  country: string;
  postal: string;
  phone: number;
  education:string;
  languages:string;
  skills:string;
  role:string;
  experience:string;
  hourlyRate:string;
  description:string;
  isAdmin: boolean;
  isWelcomed: boolean;
  isDeleted: boolean;

  }],

   token: [{}],

    error: [{}]

}



export  interface oneSpecialist {

  message: [{

  specialist_id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  photo: string;
  location:string;
  city: string;
  country: string;
  postal: string;
  phone: number;
  education:string;
  languages:string;
  skills:string;
  role:string;
  experience:string;
  hourlyRate:string;
  description:string;
  isAdmin: boolean;
  isWelcomed: boolean;
  isDeleted: boolean;

  }],

   token: [{}],

    error: [{}]

}
