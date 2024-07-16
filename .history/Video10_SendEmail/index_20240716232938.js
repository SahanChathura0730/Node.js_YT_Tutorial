/*We use environment variable to assaign private/security value
such as eamil, password,username
--We install "dotenv" library for that and import it*/

/*We use "nodemailer" library for handling email
*/

import 'dotenv/config'
import {log} from 'node:console'
import {createTransport} from 'nodemailer'

/*log(process.env.GOOGLE_API_KEY);
log(process.env.FROM_EMAIL);
log(process.env.EMAIL_PASSWORD);
log(process.env.TO_EMAIL);*/

const mailServer = createTransport({   //create an refference  //add options
   service: 'gmail',
   /*If we try to mail outlook use following options
   service: "smtp.office365.com",
   port: 587,
   secure:false */
   auth:{
      user: process.env.FROM_EMAIL,
      pass: process.env.EMAIL_PASSWORD
   }
});

log("mail send start");

mailServer.sendMail({
   from: process.env.FROM_EMAIL,
   to: process.env.TO_EMAIL,
   subject: "this is a test",
   text: "hi hi hi"
   /*Also we can sent HTML and attachment
   html:"######"
   attachments: [
      {
         filename:"###"
         path: "####"
      }
   ]*/
},(err,infor)=>{     //this is worked like async function
   if (err){
      log("mail can't be sent",err)
   }else{
      log("mail was sent")
   }
});

log("mail send end");