import { createServer } from "http";
import { readFileSync } from "fs";

const server = createServer((req, res) => {
    const html = readFileSync("./src/index.html");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
