const http = require('http')

const data = {
  message: 'Hello World'
}

http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  })
  .listen(8080)
