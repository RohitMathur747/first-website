const { readFile } = require('fs');
const { join } = require('path');

const courseRouter = (method,res) => {
    switch(method) {
        case "GET" :
            readFile(join(__dirname,"..","db","course.json"),'utf-8',(err,data) => {
                res.writeHead(200,{ "content-type" : "application/json",
                "Access-Control-Allow-Origin" : '*',
            })
                res.end(data)
            })
            return;
        default : 
            res.writeHead(405,{ "content-type" : "application/json"})
            res.end(JSON.stringify({ msg : "Method not allowed"}));
        return;
    }
}

module.exports = courseRouter