const request = require('supertest');
const express = require('express');
const app = express();
app.get('/health', (req, res) => res.status(200).send('System A OK'));

describe('GET /health', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('System A OK');
  });
});
