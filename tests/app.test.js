const request = require('supertest');
const app = require('../lib/app');
const { readFile } = require('../lib/readFile');

describe('http routes', () => {
  it('has a index.html route', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Nolan'));
      });
  });

  it('reads file in public directory', done => {
    readFile('./public/index.html', (err, content) => {
      expect(err).toBeFalsy();
      expect(content).toEqual(expect.any(String));
      done();
    });
  });
});
