const connection = require('./connection');

const findAllPlants = () =>
  connection().then((db) => db.collection('plants').find().toArray());

const findById = (id) =>
  connection().then((db) => db.collection('plants').findOne({ id }));

const deleteById = (id) =>
  connection().then((db) => db.collection('plants').deleteOne({ id: id }));

const updateById = (id, plant) =>
  connection().then((db) =>
    db.collection('plants').updateOne({ id }, { $set: { ...plant } })
  );

const create = (plant) =>
  connection().then((db) => db.collection('plants').insertOne({ ...plant }));

module.exports = {
  findAllPlants,
  findById,
  deleteById,
  updateById,
  create,
};
