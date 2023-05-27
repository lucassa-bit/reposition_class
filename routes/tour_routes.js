const Express = require("express");
const {
  getAllTours,
  createTour,
} = require(`${__dirname}/../controllers/route_controller`);

const route = Express.Router();

route.route("/").get(getAllTours).post(createTour);

module.exports = route;