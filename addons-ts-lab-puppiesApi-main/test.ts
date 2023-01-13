import request from 'supertest';
import app from './app';

import PUPPIES from './app'

describe('Testing api endpoint', () => {
  test('sanity check for /puppies', async () => {
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      puppies: PUPPIES,
    });
  });
});

describe('Testing api endpoint', () => {
  test('sanity check for /puppies', async () => {
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

