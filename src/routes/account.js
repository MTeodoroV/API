import { Router } from 'express';
import { findAll,  getAccountById, addAccount, updateAccount, deleteAccount } from '../controller/accountController';

const Route = Router();

Route.get('/accounts', findAll);
Route.get('/account/:id', getAccountById);
Route.post('/addAccount', addAccount);
Route.put('/updateAccount/:id', updateAccount);
Route.delete('/deleteAccount/:id', deleteAccount);

export default Route;