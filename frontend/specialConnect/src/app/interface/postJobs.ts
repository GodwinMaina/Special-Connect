
export interface postJobInterface {
  // job_id: string;
  jobName: string;
  category: string;
  description: string;
  duration: string;
  budget: string;
  client_id: string;
  specialist_id: string;
}


export  interface alljobs {
jobName: any;
category: any;
duration: any;
description: any;
budget: any;
job_id: string;

  message: [{
    job_id: string
    jobName: string,
    category: string,
    description: string,
    duration: string,
    budget: string,
    client_id: string
   

  }],

 

    error: [{}]

}


export  interface onejob {

  message: [{
    job_id: string,
    jobName: string,
    category: string,
    description: string,
    duration: string,
    budget: string,
    client_id: string

  }],

    error: [{}]

}




export  interface jobCategory {

  message: [{
    job_id: string;
    jobName: string;
    category: string;
    description: string;
    duration: string;
    budget: string;
    client_id: string;
    specialist_id: string;

  }],

   token: [{}],

    error: [{}]

}
