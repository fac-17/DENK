const request=require('supertest');
const tape= require('tape');
const app=require('../src/app');
tape("404 Not found",t=>{
    request(app)
    .get('/jan')
    .expect(404)
    .end((err,res)=>{
        t.error(err);
        t.end();
    });
})
