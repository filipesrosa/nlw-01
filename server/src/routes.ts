import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post(
  '/points', 
  upload.single('image'),
  celebrate({
    body: {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required()
    }
  },
  {
    abortEarly: false // para retornar todos os campos invalidos
  }),
  pointsController.create);

export default routes;

// Principais rotinas do Controller: index, show, update, delete

// Service Pattern
// Repository Pattern (Data Mapper)

/*
const users = [
  'Filipe',
  'Airton',
  'Flavio',
  'Durval',
];

routes.get('/users', (request, response) => {  
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => users.includes(search)) : users;

  return response.json(filteredUsers);
});

routes.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

routes.post('/users', (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email
  }

  return response.json(user);
});
*/