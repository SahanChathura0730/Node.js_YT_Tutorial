import {createConnection} from 'mysql2';
import { log } from "node:console";

const db = createConnection ({
   host:'localhost',
   port:'3306',   //default port
   user:'root',
   password:'Sahan@20010730',
   database:'node pr'
});

db.connect((err)=>{
   if(err){
      log(err);
   }else{
      log("data base connected");
      const slquery = "";   //Enter your query
      db.query(slquery,(err,result)=>{
         if (err){
            log(err);
         }else {
            log(result);
         }
      })
   }
});