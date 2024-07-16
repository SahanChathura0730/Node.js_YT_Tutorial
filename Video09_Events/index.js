import { log } from "node:console";
import {EventEmitter} from "node:events"

class AUKEmitter extends EventEmitter{}

const EmitterObj = new AUKEmitter();

// create a Emmit
EmitterObj.on("onclick",()=>{    //first parameter is name and second one is the function
   log("onclick")                //This is an anonymous function
});

//run the created event
EmitterObj.emit("onclick");

//-------------------
EmitterObj.on("onclick2", (name)=>{
   log("name is ", name);
})
EmitterObj.emit("onclick2", "sahan");

//----lets try this by using class properties and method
class AUKEmitter2 extends EventEmitter {
   constructor(city, age) {
     super();       // Call the constructor of the parent class (EventEmitter)
     this.city = city;     // Initialize properties specific to AUKEmitter2
     this.age = age;
   }
 
   runOnClick() {          // Define a method that emits an 'onClick' event
     this.emit("onClick2", this.city, this.age);
   }
 }

 const emiterObj2 = new AUKEmitter2("tangalle", 26);

 emiterObj2.on("onClick2", (city, age) => {
   log("onClick event 2", `Your city is : ${city}`,`Your age is : ${age}`);
 });

 emiterObj2.runOnClick();



/*
--We have "on" method to creat an event
--We have "emmit" method to run/fire an created event
--If there are many event on same name. those are run by one "emit" command in the coding order (not only same name but also various names)
      --orders are registered according to the emplement order
--If you want to remove event after ont time running, you can use "once" key word on half of "on" when you creat the event
then we call again and again, it doesn't run and there is no error, remove from event pool 
--You can use "addListener" for create an event INTEAD OF "on"
--If you want to remove all event from pool, you can use "removeAllListener" like below
      -- emitterObj.removeAllListener();
--If you want to delete event after running few time
      -- emitterObj.removeListener("EventName",FunctionNameOfEvent)
         You can't use above commen for anonymous function event

            
*/ 