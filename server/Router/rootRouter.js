const courseRouter = require('./course.router');
const studentRouter = require('./student.router');

const rootRouter = (req,res) => {
    const {url,method} = req;
    switch(url) {
        case "/student" :
            console.log("student")
            studentRouter(req,res);
            return;
        case "/course" :
            courseRouter(method,res);
            return;
        case "/triners" :
        case "/trackers" :
        case "/course/mern" :
            
        
        default :
            res.writeHead(404,{ "content-type" : "application/json"})
            res.end(JSON.stringify({ msg : "Not Found"}))

    }
}

module.exports = rootRouter;