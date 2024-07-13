import {log} from "node:console"
import {createServer} from "node:http"
import {IncomingForm} from "formidable"

createServer ((req,res) => {
   if (req.method === "POST"){          //Used to submit data to be processed to a specified resource.

   }else if (req.method === "GET"){     //Requests data from a specified resource.
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
         </body>
         </html>`)
   }
}).listen(4001,() => log("server running")) //I couldn't use 4000 port. because i used it before

/* We want "formidable" library for this file upload. 
we can install it by "npm i formidable" */