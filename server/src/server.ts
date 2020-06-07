import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

// CORS - permite especificar quais endereços externos podem ter acesso às rotinas da API.

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);
