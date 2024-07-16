import { log } from "node:console";
import {EventEmitter} from "node:events"

class AUKEmitter extends EventEmitter{}

const EmitterObj = new AUKEmitter();

// create a Emmit
EmitterObj.on("onclick",()=>{
   log("onclick")
});

//run the created event
EmitterObj.emit("onclik");

log('hi');

/*
--We have "on" method to creat an event
--We have "emmit" method to run/fire an created event
*/ 