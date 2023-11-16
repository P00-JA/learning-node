const http = require ('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log("req",req.url);
    if(req.url == '//'){
        res.statusCode = 200;
        res.end('<h1>Learning node js </h1><p>client sends request to server and as server accept the request client will be able to load the response</p>');
    }
    else if(req.url == '//about'){
        res.statusCode=200
        res.end('<h1>Learning node js </h1><p>it runs asynchronously</p>');
        console.log(res.url == '/index'?true:false);

    }
    else if(req.url == "/index"){    
        res.statusCode=200;
        console.log(res.statusCode);
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode=404;
        res.end('<h1 style="color:red">Not found</h1><h3>This page is not found on server</h3>')
    }
})
server.listen(port,()=>{
    console.log(`server is listening ${port}`);
})