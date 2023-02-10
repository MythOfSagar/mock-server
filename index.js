const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(cors());
server.use(middlewares);


server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running", port);
});
