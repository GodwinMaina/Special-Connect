export interface apply{


   job_id: string,
   specialist_id: string,
   client_id: string
}

export interface applicationInfoResponse{

  message:[{}]
  error: string
}

export interface allApplicationsResponse{

  message:[{
      apply_id: string,
     job_id: string,
     jobName:string,
     category: string,
     budget: string,
     duration: string,
     firstName: string,
    specialist_id: string,
    client_id: string
    status: string,

  // timestamp: Date
  }]


  error: string
}
