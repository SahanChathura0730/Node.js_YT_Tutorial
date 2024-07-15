import { createServer } from "node:http";
import { log } from "node:console";
import { server } from "./Server_control.js";

const PORT = process.env.PORT || 4003;  // Use port from environment variables or default to 4003

createServer((req, res) => {
  server(req, res);
}).listen(PORT, () => {
  log("Server is running with port", PORT);
});
