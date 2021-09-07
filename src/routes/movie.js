import { Router } from 'express';
import { findAll, add, getMovieById } from '../controller/movieController';

const Route = Router();

Route.get('/movies', findAll);
Route.get('/movie/:id', getMovieById);
Route.post('/addMovie', add);

export default Route;