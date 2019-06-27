const request = require('supertest');
const app = require('../lib/app');

describe('http routes', () => {
  it('has a index.html route', () => {
    return request(app)
      .get('/Users/lacrivella/Projects/careertrack/week-one/http-file-server/public/index.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Nolan'));
      });
  });
});
