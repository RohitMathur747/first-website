const http = require('http');
const rootRouter = require('./Router/rootRouter');
const hostName = "127.0.0.8";
const PORT = 5050;

const app = http.createServer((req,res) => {
    rootRouter(req,res);
});

app.listen(PORT,hostName,() => {
    console.log(`server started with http://${hostName}:${PORT}`);
});