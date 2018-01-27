const http = require("http");

http
  .createServer((request, response) => {
    if (request.method === "GET" && request.url === "/") {
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ message: "test" }, null, 2));
    } else if (request.method === "POST" && request.url === "/") {
      let body = [];
      request
        .on("data", chunk => {
          body.push(chunk);
        })
        .on("end", () => {
          body = Buffer.concat(body).toString();
          response.end(body);
        });
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8080);
