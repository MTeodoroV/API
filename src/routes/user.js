import { Router } from 'express';
import { findAll } from '../controller/userController';

const Route = Router();

Route.get('/users', findAll);

export default Route;