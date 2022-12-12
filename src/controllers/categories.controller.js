const categoriesService = require('../services/categories.service');

const createdNewCategorie = async (req, res) => {
  const { name } = req.body;
  const message = await categoriesService.insertNewCategorie(name);
if (message.messageError) return res.status(message.status).send({ message: message.messageError });
return res.status(201).send(message);
};

const getAllController = async (_req, res) => {
  const message = await categoriesService.getAllService();
if (message.messageError) return res.status(message.status).send({ message: message.messageError });
return res.status(200).send(message);
};

module.exports = { createdNewCategorie, getAllController };