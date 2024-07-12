import { log } from "node:console"
import {createServer} from "node:http"

createServer ((req,res) =>{
   res.write("sahan chathura");
   res.end();
}).listen(4000,() => log("Server running"));