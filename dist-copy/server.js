"use strict";

var _express = _interopRequireDefault(require("express"));
var _react = _interopRequireDefault(require("react"));
var _server = _interopRequireDefault(require("react-dom/server"));
var _App = _interopRequireDefault(require("./App"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var getHtml = function getHtml(html) {
  return "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>tab title</title>\n  </head>\n  <body>\n    <div id=\"root\">".concat(html, "</div>\n    <script src=\"main.js\"></script>\n  </body>\n</html>");
};
app.get("/", function (req, res) {
  var jsx = /*#__PURE__*/_react["default"].createElement(_App["default"], null);
  var htmlFromReact = _server["default"].renderToString(jsx);
  var html = getHtml(htmlFromReact);
  res.header("content-type", "text/html");
  res.send(html);
});
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, "..", "dist/static")));
app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});