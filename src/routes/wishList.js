import { Router } from 'express';
import { findAll,  getWishListById, addWishList, updateWishList, deleteWishList } from '../controller/wishListController';

const Route = Router();

Route.get('/wishList', findAll);
Route.get('/wishList/:id', getWishListById);
Route.post('/addWishList', addWishList);
Route.put('/updateWishList/:id', updateWishList);
Route.delete('/deleteWishList/:id', deleteWishList);

export default Route;