const http = require("http");
const app = require("./API/app.js");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '\\.env' })

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.on('listening', function(){
    console.log(`listening on http://localhost:${port}`);
})

server.listen(port);