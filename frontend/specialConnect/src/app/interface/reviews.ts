export interface review{
  message: string;
  specialist_id: string;
  client_id: string;
  comment: string;
}

export interface reviewInfoResponse{
  message:[{
    review_id: string;
    specialist_id: string;
    client_id: string;
      comment: string;

  }], 
  error: string
}

export interface allReviewsResponse{
  message:[
      {
          review_id: string;
          specialist_id: string;
         client_id: string;
          comment: string;
          talentFirstName?: string; 
          talentLastName?: string;
          orgName?: string;
      }
  ],
  error: string
}