import {fileRead} from "./libs/read_file.js";



export const server = (req,res) =>{
   if (req.url === "/" && req.method === "GET"){
      res.writeHead (200,"Contet-Type: text/html");
      res.end(fileRead("../public/index.html"));
   }
}