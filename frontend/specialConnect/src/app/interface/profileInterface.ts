

export interface profileInterface {
  // profile_id: string;
  specialist_id: string;
  photo:string;
  role: string;
  experience: string;
  location:string
  education: string;
  languages: string;
  skills: string;
  description: string;
  hourlyRate: string;
  isWelcomed: boolean;
  isDeleted: boolean;
}




export interface profInterface {
  // profile_id: string;
  // specialist_id: string;
  photo:string;
  role: string;
  experience: string;
  location:string
  education: string;
  languages: string;
  skills: string;
  description: string;
  hourlyRate: string;
  // isWelcomed: boolean;
  // isDeleted: boolean;
}

export interface getProfileInterface {

  message:
  [{

  firstName:string,
  lastname:string,
  email:string,
  profile_id: string,
  specialist_id: string,
  photo:string,
  role: string,
  experience: string,
  location:string,
  education: string,
  languages: string,
  skills: string,
  description: string,
  hourlyRate: string,
  isWelcomed: boolean,
  isDeleted: boolean

}]

errror:[{}]

}


export interface getOneProfileInterface {

  message: [{

  firstName:string,
  lastname:string,
  email:string,
  profile_id: string,
  specialist_id: string,
  photo:string,
  role: string,
  experience: string,
  location:string,
  education: string,
  languages: string,
  skills: string,
  description: string,
  hourlyRate: string,
  isWelcomed: boolean,
  isDeleted: boolean,
  isProfiled:boolean

}]

errror:[{}]

}
