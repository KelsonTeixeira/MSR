const rateRepository = require("../repositories/RateRepository");

const getAllRates = async (_request, response) => {
  try {
    const rates = await rateRepository.findAll();
    return response.status(200).json(rates);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const getRateById = async (request, response) => {
  try {
    const { id } = request.params;
    const rate = await rateRepository.findByID(id);

    if (rate) return response.status(200).json(rate);

    return response.status(404).json({ message: "rate not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

const createRate = async (request, response) => {
  try {
    const { body } = request;
    const createRateResponse = await rateRepository.create(body);
    return response.status(201).json(createRateResponse);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const updateRate = async (request, response) => {
  try {
    const {
      body,
      params: { id },
    } = request;

    const rateUpdated = await rateRepository.update(id, body);

    if (rateUpdated[0]) return response.status(204).json();

    return response.status(404).json({ message: "rate not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

const deleteRate = async (request, response) => {
  try {
    const { id } = request.params;
    const rateDeleted = await rateRepository.delete(id);

    if (rateDeleted) return response.status(204).json(rateDeleted);

    return response.status(404).json({ message: "rate not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

module.exports = {
  getAllRates,
  getRateById,
  createRate,
  updateRate,
  deleteRate,
};
