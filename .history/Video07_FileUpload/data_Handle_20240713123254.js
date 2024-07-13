export const PostDataHtml = (status) => {
   const msg = status === "ok"? "Data Send" : "Not Send";
   return (`
      <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>${msg}</title>
      </head>
      <body>
         <h1>${msg}</h1>
         <a href="/">Home</a>
      </body>
      </html>`) 
}

export const GetDataHtml = () => {
   return (`
      <!DOCTYPE html>
         <html lang="en">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>File Upload</title>
         </head>
         <body>
            <form action="/" method="POST" enctype="multipart/form-data">
               <input type="text" name="username" placeholder="Enter your User Name">
               <input type="file" name="userfile">
               <button type="submit">Submit</button>
            </form>
         </body>
         </html>`) 
}