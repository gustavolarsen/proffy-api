import 'reflect-metadata';
import 'dotenv/config';
import './database/connection';

import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

export { app };
