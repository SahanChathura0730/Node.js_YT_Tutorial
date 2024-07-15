//how to send image,pdf,html,css..etc fro server to client side
import {createServer} from "node:http";
import {log} from "node:console";
import { server } from "./Server_control.js";


const PORT = process.env.PORT || 4003;    //we use port an this method profesionally

createServer ((req,res)=>{
   server (req,res);
}).listen(PORT,()=>{log("server is running with port",PORT)})
