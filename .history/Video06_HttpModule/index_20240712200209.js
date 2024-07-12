import { log } from "node:console"
import {createServer} from "node:http"

createServer ((req,res) =>{
   res.write("sahan chathura");
   res.end();
}).listen(4000,() => log("Server running"));

/* When we change the code we have to re run the server and refresh the page. 
we have an option for it. we can install "nodemon" library by "install i nodemon"
command. then we don't want to re run manually.
--but this library is useful only for developing time.
--therefore we install it as dependencies. we can use "npm i -D nodemon"
--(if u want to uninstall library by using "npm uninstall nodemon" */