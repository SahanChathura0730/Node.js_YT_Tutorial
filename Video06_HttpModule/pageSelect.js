import { AboutPage } from "./pages/About.js"
import { ContactPage } from "./pages/Contact.js"
import { HomePage } from "./pages/HomePage.js"
import { NotFound } from "./pages/NotFoound.js"

export const pageSelect = (url,res) =>{
   if (url === "/"){
      res.end(HomePage())
   }else if (url === "/about"){
      res.end(AboutPage())
   }else if (url === "/contact"){
      res.end(ContactPage())
   }else {
      res.end(NotFound())
   }
}