const request = require('supertest');
const app = require('../src/app');

test('Deve listar 1 todos os usuários', ()=> {
    return request(app).get('/users')
        .then((res)=> {
            expect(res.status).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHavePropertyw('name','Edvaldo');

    });
       


});