const { readFileSync, writeFile, writeFileSync } = require('fs');
const { join } = require('path');
const { stringify } = require('querystring');

const studentRouter = (request,res) => {
    switch(request.method) {
        case "POST" :
              request.on('data',(data) => {
                const student = JSON.parse(data.toString());
                const studentDB = JSON.parse(readFileSync(join(__dirname,'..','db','student.json'),'utf-8'));
                if(studentDB.some((elem) => elem.email === student.email || elem.phone.number === student.phone.number)){
                    res.writeHead(400,{ "content-type" : "application/json"})
                    res.end(JSON.stringify({ msg : "Already email or number is used"}))
                } else {
                    studentDB.push(student);
                    writeFileSync(join(__dirname,'..','db','student.json'),JSON.stringify(studentDB),'utf-8');
                    res.writeHead(200,{ "content-type" : "application/json"})
                    res.end(JSON.stringify({ msg : "successfully stored data in db"}))
                }
              })
            return;
        case "GET" :
            return;
        case "PUT" :
            return;
        case "PATCH":
            return;
        case "DELETE" :
            return
        default : 
            res.writeHead(405,{ "contect-type" : "application/json"})
            res.end(JSON.stringify({ msg : "Method not allowed"}));
        return;
    }
}

module.exports = studentRouter