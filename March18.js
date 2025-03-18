//Core Module

//File system
const fs=require('fs')
fs.writeFileSync('D:/All Class pdf notes/Semester 10/Adv Web Tech/Code Practices/ab.doc','Hello!!')

const a=fs.readFileSync('D:/All Class pdf notes/Semester 10/Adv Web Tech/Code Practices/ab.doc','utf8')
console.log(a);


//HTTP
const http=require('http')
const server=http.createServer((req,res)=>{
    res.write('Hello');
    res.end();
})
server.listen(2000,()=>{
    console.log("Port Running - 2000");
    
})