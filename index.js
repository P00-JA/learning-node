const http = require ('http');
const fs = require('fs');
const port = process.env.PORT || 5000;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log("req",req.url);
    if(req.url == "/"){    
        res.statusCode=200;
        const data=fs.readFileSync('index.html',"utf-8");
        res.end(data.toString());
    }
    else if(req.url == '/about'){

        const aboutData=fs.readFileSync('about.html',"utf-8");
        res.end(aboutData.toString());
    }
    else{
        const errorData=fs.readFileSync('error.html',"utf-8");
        res.end(errorData.toString());
    }
})
server.listen(port,()=>{
    console.log(`server is listening ${port}`);
})