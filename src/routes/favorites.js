import { Router } from 'express';
import { findAll,  getFavoritesById, addFavorites, updateFavorites, deleteFavorites } from '../controller/favoritesController';

const Route = Router();

Route.get('/favorites', findAll);
Route.get('/favorite/:id', getFavoritesById);
Route.post('/addFavorites', addFavorites);
Route.put('/updateFavorite/:id', updateFavorites);
Route.delete('/deleteFavorites/:id', deleteFavorites);

export default Route;