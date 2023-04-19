
const studentRouter = (method,res) => {
    switch(method) {
        case "POST" :
              
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
            res.whiteHead(405,{ "contect-type" : "application/json"})
            res.end(JSON.stringify({ msg : "Method not allowed"}));
        return;
    }
}

module.exports = studentRouter