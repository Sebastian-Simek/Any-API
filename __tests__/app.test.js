const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/birds should return a list of birds w/ id and name', async () => {
    const res = await request(app).get('/birds');
    expect(res.body.length).toEqual(5);
    expect(res.body[0]).toEqual({
      id: '1',
      name: 'American Robin'
    });
  });


  afterAll(() => {
    pool.end();
  });
});
