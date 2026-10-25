
const { test } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const app = require('./app');

test('GET / returns the DevOps project message', async () => {
  const server = http.createServer(app);

  await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', resolve);
  });

  try {
    const port = server.address().port;

    const response = await fetch(`http://127.0.0.1:${port}/`);
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /Hello from my DevOps Project 1 App!/);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }
});
