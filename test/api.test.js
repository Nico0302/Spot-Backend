const request = require('supertest');

const app = require('../src/app');

describe('POST /api/v1/provider/request', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/provider/request')
      .send({ provider: 'microsoft', school: 'Hill Valley High School' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Provider request send' }, done);
  });
});

describe('POST /api/v1/provider/request', () => {
  it('responds with an error message', (done) => {
    request(app)
      .post('/api/v1/provider/request')
      .send({ provider: 'microsoft' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});
