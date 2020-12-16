const supertest = require('supertest');
const request = supertest('http://localhost:3001');
test('Responder porta 3001', ()=>{
    // acessar url http://localhost 
   return request.get('/')
    .then(res => expect(res.status).toBe(200));    

});