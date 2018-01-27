const http = require('http')

http
  .createServer((req, res) => {
    res.statusCode(200)
    res.end()
  })
  .listen(8080)
