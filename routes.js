const fs= require('fs')
const { isUtf8 } = require('buffer')
const handler= (req,res) => {
    const url=req.url
    const method=req.method

   if (url==="/"){
     fs.readFile('message.txt',{encoding: "Utf-8"},(err,data)=>{
          console.log(data)
     
     
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body>${data}</body>`)
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</form></body>`)
        res.write('</html>')
        return res.end()
     })
   }

   else if(url==="/message" && method==="POST"){
     const body=[]
     req.on('data',(chunk)=>{
          console.log(chunk)
          body.push(chunk)
     })
     req.on('end',()=>{
          const parsedbody=Buffer.concat(body).toString();
          const message=parsedbody.split('=')[1]
          fs.writeFileSync('message.txt',message)
     })
    res.statusCode=302
    res.setHeader('Location','/')
    return res.end()
   }
   else {
   res.setHeader('Content-Type','text/html');
   res.write('<html>')
   res.write('<head><title>My First Page</title></head>')
   res.write('<body><h1>Hello Welcome From my Node Server</h1></body>')
   res.write('</html>')
   res.end()
}

   }
module.exports=handler
