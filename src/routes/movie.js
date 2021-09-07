import { Router } from 'express';
import { findAll } from '../controller/movieController';

const Route = Router();

Route.get('/movies', findAll);

export default Route;