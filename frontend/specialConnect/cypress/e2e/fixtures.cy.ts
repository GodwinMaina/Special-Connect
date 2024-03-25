
//Register/signUp Client and after succes visit loginpage to login
describe('working with fixture data to register client', ()=>{

  it('signup through login1 data and tries to signup', ()=>{
    cy.visit('client-signup')
    cy.fixture('clientSignup.json').then((data)=>{

          cy.get('[data-cy="firstName"]').type(data.firstName)
          cy.get('[data-cy="lastName"]').type(data.lastName)
          cy.get('[data-cy="email"]').type(data.email)
          cy.get('[data-cy="password"]').type(data.password)
          cy.get('[data-cy="phone"]').type(data.phone)

          //after signup to login page and login
          cy.get('[data-cy="sign-btn"]').click().then(el=>{
          cy.visit('/auth/login')

          })

    })
})
})



//registering with fixed data correct details and wrong details
describe('working with fixture data to login', ()=>{

  it('iterates through login2 data and tries to login', ()=>{
      cy.visit('/auth/login')

      cy.fixture('login.json').then((dataarray)=>{
          dataarray.forEach((data:{email: string, password: string})=>{
              cy.get('[data-cy="email"]').type(data.email)
              cy.get('[data-cy="password"]').type(data.password)

              if(data.email == 'compgodwin@gmail.com' && data.password == '123456'){
                  cy.get('[data-cy="login-btn"]').click().then(el=>{
                  cy.location('pathname').should('equal', '/dashboard/specialist')
                  cy.get('[data-cy="logout"]').click()
                  cy.visit('/auth/login')
                  })
              }
              // else if(data.email == 'godwin@gmail.com' && data.password == '123456'){
              //   cy.get('[data-cy="login-btn"]').click().then(el=>{
              //     cy.location('pathname').should('equal', '/dashboard/admin')
              //     cy.get('[data-cy="logout"]').click()
              //     cy.visit('/auth/login')
              //   })

              // }


              // else if(data.email == 'gathogo@gmail.com' && data.password == '123456'){
              //   cy.get('[data-cy="login-btn"]').click().then(el=>{
              //     cy.location('pathname').should('equal', '/dashboard/client')
              //     cy.get('[data-cy="logout"]').click()
              //     cy.visit('/auth/login')
              //   })

              // }

              else if(data.email == 'compgodwin@gmail.com' && data.password !== '123456'){
                 cy.get('[data-cy="login-btn"]').click()
                cy.contains('Incorrect password').should('be.visible');
            }
          })
      })
  })

})


//admin post jobs

describe('working with fixture data to post job admin', () => {
  it('iterates through login2 data and tries to login', () => {
    cy.visit('/auth/login');

    cy.fixture('adminlog.json').then((data) => {
      data.forEach((data:any) => {
        cy.get('[data-cy="email"]').type(data.email);
        cy.get('[data-cy="password"]').type(data.password);

        if (data.email === 'godwin@gmail.com' && data.password === '123456') {
          cy.get('[data-cy="login-btn"]').click().then(() => {
            cy.location('pathname').should('equal', '/dashboard/admin');
            cy.get('[data-cy="postJob"]').click();

            cy.visit('/dashboard/admin/createJob');

            // Fill out the job creation form with data from fixture
            cy.get('[data-cy="jobName"]').type(data.jobName);
            cy.get('[data-cy="budget"]').type(data.budget);
            cy.get('[data-cy="category"]').select(data.category);
            cy.get('[data-cy="description"]').type(data.description);
            cy.get('[data-cy="duration"]').type(data.duration);
            cy.get('[data-cy="btnAdminPost"]').click();
            cy.visit('/dashboard/admin');
          });
        }
      });
    });
  });
});
