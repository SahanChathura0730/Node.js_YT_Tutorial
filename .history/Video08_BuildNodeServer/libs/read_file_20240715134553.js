import {fileURLToPath} from "node:url";
import {readFile} from "node:fs/promises"
import {join, dirname} from "node:path";
import { error, log } from "node:console";


const __filename = fileURLToPath (import.meta.url);  //remember this lines
const __dirname = dirname (__filename);

export const fileRead = async (path,res) => {
   try{
      const data = await readFile(join(__dirname,"../",path));  //go to backword a one file from defult file by "../"
      res.writeHead (200,{"Contet-Type": "text/html"});
      res.end(data)
   }catch{
      log(err);
      res.writeHead (500,"Contet-Type: text/html");
      res.end(`<h1>Server error</h1>`)
   }
}