const http = require('http')
const fs = require('fs')
const Busboy = require('busboy')

http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
      fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) throw err
        res.end(data)
      })
    }
    if (req.method === 'POST' && req.url === '/') {
      const busboy = new Busboy({ headers: req.headers })
      busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        file.pipe(fs.createWriteStream(filename))
      })
      busboy.on('finish', () => {
        res.writeHead(200, { Connection: 'close' })
        res.end()
      })
      return req.pipe(busboy)
    }
  })
  .listen(8080)
