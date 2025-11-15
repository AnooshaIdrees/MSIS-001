const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// CRITICAL FIX: Only listen if file is main module
if (require.main === module) {
  server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
}

// Export server for tests
module.exports = server;
