const titleRepository = require("../repositories/TitleRepository");

const getAllTitles = async (_request, response) => {
  try {
    const titles = await titleRepository.findAll();
    return response.status(200).json(titles);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const getTitleById = async (request, response) => {
  try {
    const { id } = request.params;
    const title = await titleRepository.findByID(id);

    if (title) return response.status(200).json(title);

    return response.status(404).json({ message: "title not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

const createTitle = async (request, response) => {
  try {
    const { body } = request;
    const createTitleResponse = await titleRepository.create(body);
    return response.status(201).json(createTitleResponse);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const updateTitle = async (request, response) => {
  try {
    const {
      body,
      params: { id },
    } = request;

    const titleUpdated = await titleRepository.update(id, body);

    if (titleUpdated[0]) return response.status(204).json();

    return response.status(404).json({ message: "title not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

const deleteTitle = async (request, response) => {
  try {
    const { id } = request.params;
    const titleDeleted = await titleRepository.delete(id);

    if (titleDeleted) return response.status(204).json(titleDeleted);

    return response.status(404).json({ message: "title not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

module.exports = {
  getAllTitles,
  getTitleById,
  createTitle,
  updateTitle,
  deleteTitle,
};
