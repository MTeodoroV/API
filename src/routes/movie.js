import { Router } from 'express';
import { findAll,  getMovieById, addMovie, updateMovie, deleteMovie } from '../controller/movieController';

const Route = Router();

Route.get('/movies', findAll);
Route.get('/movie/:id', getMovieById);
Route.post('/addMovie', addMovie);
Route.put('/updateMovie/:id', updateMovie);
Route.delete('/deleteMovie/:id', deleteMovie);

export default Route;