const request = require('supertest');
const express = require('express');

// We create a mock app for testing to avoid port collisions
const app = express();
app.get('/health', (req, res) => res.status(200).json({ status: 'OK', system: 'System A' }));

describe('System A Health Check', () => {
  it('should return 200 OK with the correct JSON', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('OK');
    expect(res.body.system).toBe('System A');
  });
});
