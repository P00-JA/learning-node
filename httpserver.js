const http = require ('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Learning node js </h1><p>client sends request to server and as server accept the request client will be able to load the response</p>');
})
server.listen(port,()=>{
    console.log(`server is listening ${port}`);
})