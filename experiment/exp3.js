const a = require('http');
const server = a.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'html'
    });
    res.end(`<h1>This is our Base Server.`);
});
server.listen(3000, () => {
    console.log("Server running at port 3000");
});
