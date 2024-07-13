import {log} from "node:console"
import {createServer} from "node:http"
import {IncomingForm} from "formidable"   //IncomingForm is a class
import { GetDataHtml, PostDataHtml } from "./data_Handle.js";

createServer ((req,res) => {
   if (req.method === "POST"){          //Used to submit data to be processed to a specified resource.
      const userData = new IncomingForm();
      userData.parse(req,(err,fields,files)=>{
         if (err){
            res.end(PostDataHtml("error"));
         }else{
            log("user data fields:",fields);
            log("user data files:",files.userfile[0].filepath);
            res.end(PostDataHtml("ok"));
         }
      });
   }else if (req.method === "GET"){     //Requests data from a specified resource.
      res.end(GetDataHtml());
   }
}).listen(4001,() => log("server running")) //I couldn't use 4000 port. because i used it before

/* We want "formidable" library for this file upload. 
we can install it by "npm i formidable" */