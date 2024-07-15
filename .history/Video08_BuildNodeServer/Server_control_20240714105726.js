import {join, dirname} from "node:path";
import {fileURLToPath} from "node:url";


const __filename = fileURLToPath (import.meta.url);  //remember this lines
const __dirname = dirname (__filename);

export const server = (req,res) =>{
   if (req.url === "/" && req.method === "GET"){
      res.writeHead (200,"Contet-Type: text/html");
      res.end("<hi>Sahan</hi>")
   }
}