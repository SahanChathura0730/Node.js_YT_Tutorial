import { fileRead } from "./libs/read_file.js";

export const server = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fileRead("public/index.html", res);
  } else if (req.url.endsWith(".css") && req.method === "GET") {
    fileRead(`public${req.url}`, res, "text/css");
  } else if (req.url.endsWith(".js") && req.method === "GET") {
    fileRead(`public${req.url}`, res, "application/javascript");
  } else if (req.url.endsWith(".png") && req.method === "GET") {
    fileRead(`public${req.url}`, res, "image/png");
  } else if (req.url.endsWith(".jpg") && req.method === "GET") {
    fileRead(`public${req.url}`, res, "image/jpeg");
  } else if (req.url.endsWith(".pdf") && req.method === "GET") {
    fileRead(`public${req.url}`, res, "application/pdf");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
};
