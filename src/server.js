import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import path from "path";

const app = express();

const getHtml = (html) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tab title</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="main.js"></script>
  </body>
</html>`;

app.get("/", (req, res) => {
  const jsx = <App />;
  const htmlFromReact = ReactDOMServer.renderToString(jsx);
  const html = getHtml(htmlFromReact);
  res.header("content-type", "text/html");
  res.send(html);
});

app.use(express.static(path.resolve(__dirname, "..", "dist/static")));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
