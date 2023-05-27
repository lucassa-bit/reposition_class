const Express = require("express");
const tour_route = require("./routes/tour_routes");
const server = new Express();

server.use(Express.json());

server.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

if (process.env.NODE_ENV === "development") {
  server.use(require("morgan")("dev"));
}

server.use("/api/v1/tours", tour_route);

server.use(Express.static(`${__dirname}/public`));

module.exports = server;
