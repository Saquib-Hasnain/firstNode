const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
   // process.exit()
   res.setHeader('Content-Type','text/html');
   res.write('<html>')
   res.write('<head><title>My first Page</title></head>')
   res.write('<body><h1>Welcome to my Node Js project</h1><a href="/home">Home</a><br><a href="/about">About</a><br><a href="/node">Node</a></body>')
   if (req.url === '/home') {
    res.write('<html><head><title>Welcome Home</title></head><body><h1>Welcome home</h1></body></html>');
} else if (req.url === '/about') {
    res.write('<html><head><title>About Us</title></head><body><h1>Welcome to About Us page</h1></body></html>');
} else if (req.url === '/node') {
    res.write('<html><head><title>Node Js Project</title></head><body><h1>Welcome to my Node Js project</h1></body></html>');
} else {
    // Default response for other paths
    res.write('<html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html>');
}
   res.write('</html>')
   res.end()
   
})
server.listen(3000)