import {createServer} from "node:http";
import {join, dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {log} from "node:console";
const __filename = fileURLToPath (import.meta.url);  //remember this lines
const __dirname = dirname (__filename);

const PORT = process.env.PORT || 4003;

createServer ((req,res)=>{

}).listen(PORT,()=>{log("server is running with port",PORT)})
