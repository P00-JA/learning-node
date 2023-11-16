const http=require('http');
const fs = require('fs');
const { CallTracker } = require('assert');
/* const { text } = require('express');
fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data);
})
//read a text file
const a=fs.readFileSync('file.txt');
console.log(a.toString()); */
//read a html file and write it 
const port=4040;
http.createServer((req,res)=>{
    fs.readFile('demo.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(port);
console.log(`server is listening to ${port}`)

/* fs.writeFile('express.txt',"start learning express by end of the day",()=>{
    console.log('written to the file');
})

console.log('finished reading'); */
//Create files
//fs,appendfile()-Html file

fs.appendFile("new.html",'<h2>Hello World</h2><br><p>hey everyone welcome to the world of Artificial intelligence.</p>',"utf-8",(err)=>{
    if(err)throw err;
    console.log('file saved!')
})
//fs.appendfile()-TextFile
const path="newTextFile.txt";
const dataToAppend="This file consist of some secret information and its written in a secret key language only who knows how the data stored in this file was encrypted can decrypt this to original form."
try{
    fs.appendFileSync(path,dataToAppend);
    console.log(`Data appended to ${path} successfully!`)
}catch(err){
    console.log(`Error in appending data to ${path}!Try later`)
}
