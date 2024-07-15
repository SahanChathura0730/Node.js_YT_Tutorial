import {fileURLToPath} from "node:url";
import {} from "node:fs/promises"
import {join, dirname} from "node:path";
import { error, log } from "node:console";


const __filename = fileURLToPath (import.meta.url);  //remember this lines
const __dirname = dirname (__filename);

export const fileRead = async (path) => {
   try{
      const data = await readFile(join(__dirname,path));
      return data;
   }catch{
      log(error);
      return (`<h1>Server error</h1>`)
   }
}