const userRepository = require("../repositories/UserRepository");

const getAllUsers = async (_request, response) => {
  try {
    const users = await userRepository.findAll();
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const getUserById = async (request, response) => {
  try {
    const { id } = request.params;
    const user = await userRepository.findByID(id);

    if (user) return response.status(200).json(user);

    return response.status(404).json({ message: "user not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

const createUser = async (request, response) => {
  try {
    const { body } = request;
    const createUserResponse = await userRepository.create(body);
    return response.status(201).json(createUserResponse);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const updateUser = async (request, response) => {
  try {
    const {
      body,
      params: { id },
    } = request;

    const userUpdated = await userRepository.update(id, body);

    if (userUpdated[0]) return response.status(204).json();

    return response.status(404).json({ message: "user not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    const userDeleted = await userRepository.delete(id);

    if (userDeleted) return response.status(204).json(userDeleted);

    return response.status(404).json({ message: "user not found" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
