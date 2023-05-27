const model = require(`${__dirname}/../models/tour_model`);

const getAllTours = (req, res) => {};

const createTour = async (req, res) => {
  const entity = await model.create(req.body); // status: progress
  entity.save();

  res.status(201).send({
    status: "Create",
    request_time: req.requestTime,
    message: "Tour criado com sucesso"
  });
};

module.exports = { getAllTours, createTour };
