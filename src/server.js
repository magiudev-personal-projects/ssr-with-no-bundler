import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import path from "path";
import fs from "fs";

const app = express();

app.get("/", (_, res) => {
  const htmlFromReact = ReactDOMServer.renderToString(<App />);
  const htmlShell = fs.readFileSync("src/index.html", "utf-8");
  const html = htmlShell.replace("<!-- html -->", htmlFromReact);
  res.header("content-type", "text/html");
  res.send(html);
});

app.use(express.static(path.resolve(__dirname, "static")));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
