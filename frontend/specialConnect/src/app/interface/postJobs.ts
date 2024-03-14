
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

  message: [{
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



export  interface jobCategory {

  message: [{
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
