  
    
export interface profileInterface {
    profile_id: string;
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

export interface getProfileInterface {

    message:
    [{
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