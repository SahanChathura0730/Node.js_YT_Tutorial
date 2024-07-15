//how to send image,pdf,html,css..etc fro server to client side
import {createServer} from "node:http";
import {log} from "node:console";


const PORT = process.env.PORT || 4003;    //we use port an this method profesionally

createServer ((req,res)=>{
   res.end("hi")
}).listen(PORT,()=>{log("server is running with port",PORT)})
