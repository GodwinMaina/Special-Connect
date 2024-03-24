
export interface clientRegInterface {
  // client_id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: String;
  // isAdmin: boolean;
  // isWelcomed: boolean;
  // isDeleted: boolean;
}



export  interface allClients {

  message: [{
  client_id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: number;
  isAdmin: boolean;
  isWelcomed: boolean;
  isDeleted: boolean;

  }],

   token: [{}],

    error: [{}]

}


export interface oneClient {

  message: [{
  client_id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: number;
  isAdmin: boolean;
  isWelcomed: boolean;
  isDeleted: boolean;

  }],

  token: [{}],

  error: [{}]
}
