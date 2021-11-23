const plantsService = require('../services/plantsService');

const error = { message: 'erro' };

const findAllPlants = async (_req, res) => {
  const response = await plantsService.findAllPlants();

  res.status(200).json({ response });
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await plantsService.findById(id);
    res.status(200).json({ response });
  } catch (err) {
    res.status(400).json({ error });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await plantsService.deleteById(id);
    res.status(200).json({ response });
  } catch (err) {
    res.status(400).json({ error });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { plant } = req.body;
    const response = await plantsService.updateById(id, plant);
    res.status(200).json({ response });
  } catch (err) {
    res.status(400).json({ error });
  }
};

const create = async (req, res) => {
  try {
    const { plant } = req.body;
    const response = await plantsService.create(plant);
    res.status(200).json({ response });
  } catch (err) {
    res.status(400).json({ error });
  }
};

const findNeedsSun = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await plantsService.findNeedsSun(id);
    res.status(200).json({ response });
  } catch (err) {
    res.status(400).json({ error });
  }
};

module.exports = {
  findAllPlants,
  findById,
  deleteById,
  updateById,
  create,
  findNeedsSun,
};
