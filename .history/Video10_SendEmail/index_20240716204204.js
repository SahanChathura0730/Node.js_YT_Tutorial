/*We use environment variable to assaign private/security value
such as eamil, password,username
--We install "dotenv" library for that and import it*/

import 'dotenv/config'
import {log} from 'node:console'

log(process.env.GOOGLE_API_KEY);
log(process.env.FROM_EMAIL);
log(process.env.EMAIL_PASSWORD);
log(process.env.TO_EMAIL);