describe('API Testing', () => {

    it('Post - Login', () => {
  
      cy.request({
        method: 'POST',
        url: '/game/login',
        qs: {
        username: 'test@gmail.com',
        },
        auth: {
          username: 'qa_candidate',
          password: 'DreamBoxMath$!9'
        }
      }).should((response) => {
        expect(response.body).to.have.property('session_id')
        
      })
    })
  })