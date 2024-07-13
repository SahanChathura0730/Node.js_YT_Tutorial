import {log} from "node:console"
import {createServer} from "node:http"
import {IncomingForm} from "formidable"

createServer ((req,res) => {
   if (req.method === "POST"){

   }else if (req.method === "GET"){
      res.end(`
         <!DOCTYPE html>
         <html lang="en">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>File Upload</title>
         </head>
         <body>
            <form>
               <input type="text" name="username" placeholder="Enter your User Name">
               <input type="file" name="userfile">
               <button type="submit">Submit</button>
            </form>
            <p>sahan</p>
         </body>
         </html>`)
   }
}).listen(4000,() => log("server running"))