const plantsModel = require('../models/plantsModel');

const error = { code: 400, message: 'error' };

const findAllPlants = async () => plantsModel.findAllPlants();

const findById = async (id) => plantsModel.findById(Number(id));

const deleteById = async (id) => {
  const plantExists = await plantsModel.findById(Number(id));

  if (!plantExists) return error;

  const response = await plantsModel.deleteById(Number(id));

  return response;
};

const updateById = async (id, plant) => {
  const plantInfomartions = [
    'breed',
    'needsSun',
    'origin',
    'size',
    'specialCare',
  ];
  const plantKeys = Object.keys(plant);

  if (!plantInfomartions.every((info) => plantKeys.includes(info))) {
    return error;
  }

  return plantsModel.updateById(Number(id), plant);
};

const create = async (plant) => {
  const allPlants = await plantsModel.findAllPlants();

  const response = await plantsModel.create({
    ...plant,
    id: allPlants.length + 1,
  });

  return response;
};

const findNeedsSun = async (id) => {
  const plant = await plantsModel.findById(Number(id));

  if (!plant) return error;

  if (!plant.needsSun) return error;

  return plant;
};

module.exports = {
  findAllPlants,
  findById,
  deleteById,
  updateById,
  create,
  findNeedsSun,
};