const url = require("url");

let server = () => {
  let G = {};
  G._get = {};
  G._post = {};

  let app = (req, res) => {
    let pathname = url.parse(req.url).pathname;

    let method = req.method.toLowCase();

    if (G["_" + method][pathname]) {
      if (method == "get") {
        G["_" + method][pathname](req, res);
      } else {
        let postData = "";
        req.on("data", (chunk) => {
          postData += chunk;
        });
        req.on("end", () => {
          console.log(postData);
          res.end(postData);

          req.body = postData;
          G["_" + method][pathname](req, res);
        });
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/html;charset='utf-8'" });
      res.end("0");
    }
  };

  app.get = (str, cb) => {
    G._get[str] = cb;
  };

  app.post = (str, cb) => {
    G._post[str] = cb;
  };

  return app;
};

module.exports = server();
